import { injectable } from 'inversify';
import { credentials } from '@grpc/grpc-js';

import { DiscountClient } from '@models/discount_grpc_pb';
import { GetDiscountRequest, GetDiscountResponse } from '@models/discount_pb';
import { logger } from '@utils/logger';
import DiscountFinder from '../DiscountFinder';

@injectable()
export class DiscountFinderImpl implements DiscountFinder {
  async getDiscount(productId: number): Promise<number> {
    const client = this.initClient();

    return this.findDiscount(client, productId);
  }

  private initClient() {
    return new DiscountClient(`localhost:${process.env['PORT']}`, credentials.createInsecure(),
      {
        'grpc.keepalive_time_ms': 120000,
        'grpc.http2.min_time_between_pings_ms': 120000,
        'grpc.keepalive_timeout_ms': 20000,
        'grpc.http2.max_pings_without_data': 0,
        'grpc.keepalive_permit_without_calls': 1,
      });
  }

  private async findDiscount(client: DiscountClient, productId: number): Promise<number> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, _reject) => client.getDiscount(
      new GetDiscountRequest().setProductid(productId), (error, value) => {
        if (error) {
          logger.error('DiscountFinderImpl:', error);
          resolve(0);
        } else {
          resolve(this.calculateDiscount(value));
        }
      },
    ));
  }

  private calculateDiscount(value: GetDiscountResponse): number {
    return Math.round((value.getPercentage() as number) * 100) / 100;
  }
}
