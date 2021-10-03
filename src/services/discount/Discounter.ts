import {
  sendUnaryData, ServerDuplexStream,
  ServerReadableStream, ServerUnaryCall,
  ServerWritableStream, status,
  UntypedHandleCall,
} from '@grpc/grpc-js';

import { randomBytes } from 'crypto';

import { logger } from '@utils/logger';
import { ServiceError } from '@utils/error';
import container from '@shared/app/DI/container/inversify.config';
import { Discount, DiscountRequest } from '../../../models/discount_pb';

import { DiscountServiceService, IDiscountServiceServer } from '../../../models/discount_grpc_pb';
import CalculateDiscountImpl from './job/implementations/CalculateDiscountImpl';

class Discounter implements IDiscountServiceServer {
  [method: string]: UntypedHandleCall;

  public getDiscount(_call: ServerUnaryCall<DiscountRequest, Discount>, callback: sendUnaryData<Discount>): void {
    const pr = container.resolve(CalculateDiscountImpl).calculate(1);

    console.log(`${new Date().toISOString()}    Discounter:getDiscount:`, pr);
    const res = new Discount();
    res.setPercentage(1);
    callback(null, res);
  }

  public getDiscountStreamRequest(call: ServerReadableStream<DiscountRequest, Discount>, callback: sendUnaryData<Discount>): void {
    logger.info('Discounter:getDiscountStreamRequest', call.getPeer());

    // const data: string[] = [];
    call.on('data', (req: DiscountRequest) => {
      console.log('id', req.getProductid());
      // data.push(`${req.getProductid()} - ${randomBytes(5).toString('hex')}`);
    }).on('end', () => {
      const res = new Discount();
      res.setPercentage(1);

      callback(null, res);
    }).on('error', (err: Error) => {
      callback(new ServiceError(status.INTERNAL, err.message), null);
    });
  }

  public getDiscountStreamResponse(call: ServerWritableStream<DiscountRequest, Discount>): void {
    logger.info('Discounter:getDiscountStreamResponse', call.request.toObject());

    const name = call.request.getProductid();

    for (const text of Array(10).fill('').map(() => randomBytes(5).toString('hex'))) {
      const res = new Discount();
      res.setPercentage(`${name} - ${text}`.length);
      call.write(res);
    }
    call.end();
  }

  public getDiscountStream(call: ServerDuplexStream<DiscountRequest, Discount>): void {
    logger.info('Discounter:getDiscountStream:', call.getPeer());

    call.on('data', (req: DiscountRequest) => {
      const res = new Discount();
      res.setPercentage(`${req.getProductid()} - ${randomBytes(5).toString('hex')}`.length);
      call.write(res);
    }).on('end', () => {
      call.end();
    }).on('error', (err: Error) => {
      logger.error('getDiscountStream:', err);
    });
  }
}

export {
  Discounter,
  DiscountServiceService,
};
