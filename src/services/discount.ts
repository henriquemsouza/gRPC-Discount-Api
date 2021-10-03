import {
  sendUnaryData,
  ServerUnaryCall,
  UntypedHandleCall,
} from '@grpc/grpc-js';
import { DiscountService, IDiscountServer } from '@models/discount_grpc_pb';
import { GetDiscountRequest, GetDiscountResponse } from '@models/discount_pb';

class Discount implements IDiscountServer {
  [method: string]: UntypedHandleCall;

  public getDiscount(call: ServerUnaryCall<GetDiscountRequest, GetDiscountResponse>, callback: sendUnaryData<GetDiscountResponse>): void {
    const id = call.request.getProductid();
    const randomValue = Math.floor(Math.random() * 30);
    const percentage = id + randomValue;

    const response: GetDiscountResponse = new GetDiscountResponse();
    response.setPercentage(percentage);

    callback(null, response);
  }
}

export {
  Discount,
  DiscountService,
};
