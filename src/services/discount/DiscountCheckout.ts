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

import { DiscountServiceService, IDiscountServiceServer } from '@models/discount_checkout_grpc_pb';
import { Discount, DiscountRequest } from '@models/discount_checkout_pb';
import CalculateDiscountImpl from './job/implementations/CalculateDiscountImpl';

class DiscountCheckout implements IDiscountServiceServer {
  [method: string]: UntypedHandleCall;

  public async getDiscountCheckout(call: ServerUnaryCall<DiscountRequest, Discount>, callback: sendUnaryData<Discount>): Promise<void> {
    const productId = call.request.getProductid();
    const quantity = call.request.getQuantity();

    const pr = await container.resolve(CalculateDiscountImpl).calculate(productId, quantity);

    console.log(`${new Date().toISOString()}    DiscountCheckout:getDiscountCheckout:`, pr);
    const res = new Discount();
    res.setPercentage(1);
    callback(null, res);
  }

  public getDiscountCheckoutStreamRequest(call: ServerReadableStream<DiscountRequest, Discount>, callback: sendUnaryData<Discount>): void {
    logger.info('DiscountCheckout:getDiscountCheckoutStreamRequest', call.getPeer());

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

  public getDiscountCheckoutStreamResponse(call: ServerWritableStream<DiscountRequest, Discount>): void {
    logger.info('DiscountCheckout:getDiscountCheckoutStreamResponse', call.request.toObject());

    const name = call.request.getProductid();

    for (const text of Array(10).fill('').map(() => randomBytes(5).toString('hex'))) {
      const res = new Discount();
      res.setPercentage(`${name} - ${text}`.length);
      call.write(res);
    }
    call.end();
  }

  public getDiscountCheckoutStream(call: ServerDuplexStream<DiscountRequest, Discount>): void {
    logger.info('DiscountCheckout:getDiscountCheckoutStream:', call.getPeer());

    call.on('data', (req: DiscountRequest) => {
      const res = new Discount();
      res.setPercentage(`${req.getProductid()} - ${randomBytes(5).toString('hex')}`.length);
      call.write(res);
    }).on('end', () => {
      call.end();
    }).on('error', (err: Error) => {
      logger.error('getDiscountCheckoutStream:', err);
    });
  }
}

export {
  DiscountCheckout,
  DiscountServiceService,
};