import { Server, ServerCredentials } from '@grpc/grpc-js';
import { DiscountService } from '@models/discount_grpc_pb';
import { Discount } from '@services/discount';

import { LocalhostUrl } from '@utils/infra/utils';
import { logger } from '@utils/logger';
import {
  DiscountCheckout,
  DiscountServiceService as DiscountCheckoutService,
} from '@services/discount/DiscountCheckout';

const server = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
});

server.addService(DiscountCheckoutService, new DiscountCheckout());
server.addService(DiscountService, new Discount());

server.bindAsync(
  LocalhostUrl,
  ServerCredentials.createInsecure(),
  (error: Error | null, port: number) => {
    if (error) {
      logger.error('error:', error);
      throw error;
    }

    logger.info(`running on PORT:${port}`, new Date().toISOString());
    server.start();
  },
);
