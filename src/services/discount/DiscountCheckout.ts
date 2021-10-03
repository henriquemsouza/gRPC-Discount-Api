/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  sendUnaryData, ServerDuplexStream,
  ServerUnaryCall,
  UntypedHandleCall,
} from '@grpc/grpc-js';

import { logger } from '@utils/logger';
import container from '@shared/app/DI/container/inversify.config';

import { DiscountServiceService, IDiscountServiceServer } from '@models/discount_checkout_grpc_pb';
import { Discount, DiscountRequest } from '@models/discount_checkout_pb';
import CalculateDiscountImpl from './job/implementations/CalculateDiscountImpl';

class DiscountCheckout implements IDiscountServiceServer {
  [method: string]: UntypedHandleCall;

  public async getDiscountCheckout(call: ServerUnaryCall<DiscountRequest, Discount>, callback: sendUnaryData<Discount>): Promise<void> {
    const productsRequest = call.request.getProductsList();

    const discount = await container.resolve(CalculateDiscountImpl).calculate(productsRequest);

    callback(null, discount);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async getDiscountCheckoutStream(call: ServerDuplexStream<DiscountRequest, Discount>): Promise<void> {
    logger.info('DiscountCheckout:getDiscountCheckoutStream:', call.getPeer());

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    call.on('data', async (req: DiscountRequest) => {
      const productsRequest = req.getProductsList();

      const discount = await container.resolve(CalculateDiscountImpl).calculate(productsRequest);
      call.write(discount);
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
