import {
  ClientReadableStream,
  ClientWritableStream,
  credentials,
  Metadata,
  ServiceError,
} from '@grpc/grpc-js';

import { DiscountServiceClient } from '@models/discount_grpc_pb';
import { Discount, DiscountRequest } from '@models/discount_pb';

import { logger } from '@utils/logger';

import { discountService } from './discountService';

const client = new DiscountServiceClient(`localhost:${process.env['PORT']}`, credentials.createInsecure(), {
  'grpc.keepalive_time_ms': 120000,
  'grpc.http2.min_time_between_pings_ms': 120000,
  'grpc.keepalive_timeout_ms': 20000,
  'grpc.http2.max_pings_without_data': 0,
  'grpc.keepalive_permit_without_calls': 1,
});
logger.info('gRPC:GreeterClient', new Date().toLocaleString());

let argv = 'world';
if (process.argv.length >= 3) {
  [,,argv] = process.argv;
}

const param = new DiscountRequest();
console.log(argv);
param.setProductid(1);
// param.setName(argv);
// param.setParamStruct(Struct.fromJavaScript({ foo: 'bar', bar: 'foo' }));
// param.setParamListValue(ListValue.fromJavaScript([{ foo: 'bar' }, { bar: 'foo' }]));
// param.setParamValue(Value.fromJavaScript('Any Value'));

const metadata = new Metadata();
metadata.add('foo', 'bar1');
metadata.add('foo', 'bar2');

const example = async (): Promise<void> => {
  client.getDiscount(param, (err: ServiceError | null, res: Discount) => {
    if (err) {
      return logger.error('getDiscount[Error]:', err.message);
    }

    logger.info('getDiscount:', res.getPercentage());
  });

  const getDisco = await discountService.getDiscount(param);
  logger.info('getDiscount:', getDisco.getPercentage());

  const sayHelloMetadata = await discountService.getDiscount(param, metadata);
  logger.info('sayHelloMetadata:', sayHelloMetadata.getTotalAmount());
};

function exampleStream(): void {
  const streamRequest: ClientWritableStream<DiscountRequest> = client.getDiscountStreamRequest((err: ServiceError | null, res: Discount) => {
    if (err) {
      logger.error('getDiscountStreamRequest:discountClient', err);
    }

    logger.info('getDiscountStreamRequest:', `${res.getPercentage()}`);
  });

  for (let i = 1; i <= 10; i += 1) {
    const req = new DiscountRequest();
    console.log('****', `${argv}.${i}`);
    req.setProductid(1);
    streamRequest.write(req);
  }
  streamRequest.end();

  const streamResponse: ClientReadableStream<Discount> = client.getDiscountStreamResponse(param);

  const data: string[] = [];
  streamResponse.on('data', (res: Discount) => {
    data.push(res.toString());
  }).on('end', () => {
    logger.info('getDiscountStreamResponse:', data.join('\n'));
  }).on('error', (err: Error) => {
    logger.error('getDiscountStreamResponse:', err);
  });

  // const stream: ClientDuplexStream<HelloRequest, HelloResponse> = client.sayHelloStream();
  // stream
  //   .on('data', (res: HelloResponse) => logger.info('sayHelloStream:', res.getMessage()))
  //   .on('end', () => logger.info('sayHelloStream: End'))
  //   .on('error', (err: Error) => logger.error('sayHelloStream:', err));

  // for (let i = 1; i <= 10; i += 1) {
  //   const req = new HelloRequest();
  //   req.setName(`${argv}.${i}`);
  //   stream.write(req);
  // }
  // stream.end();
}

(async (): Promise<void> => {
  try {
    if (argv === 'stream') {
      exampleStream();
      return;
    }

    await example();
  } catch (err) {
    logger.error(err);
  }
})();
