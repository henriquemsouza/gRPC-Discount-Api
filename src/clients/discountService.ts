import { credentials, Metadata } from '@grpc/grpc-js';
import { DiscountServiceClient } from 'models/discount_grpc_pb';
import { Discount, DiscountRequest } from 'models/discount_pb';
import { promisify } from 'util';

class DiscountService {
  private readonly client: DiscountServiceClient = new DiscountServiceClient(`localhost:${process.env['PORT']}`, credentials.createInsecure());

  public async getDiscount(param: DiscountRequest, metadata: Metadata = new Metadata()): Promise<Discount> {
    return promisify<DiscountRequest, Metadata, Discount>(this.client.getDiscount.bind(this.client))(param, metadata);
  }
}

export const discountService: DiscountService = new DiscountService();
