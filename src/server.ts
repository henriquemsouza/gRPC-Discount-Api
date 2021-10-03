import { Server, ServerCredentials } from '@grpc/grpc-js';
import { DiscountService } from '@models/discount_grpc_pb';
import { Discount } from '@services/discount';

import { LocalhostUrl } from '@utils/infra/utils';
import { logger } from '@utils/logger';
import { Discounter, DiscountServiceService } from './services/discount/Discounter';

import { Health, HealthService, healthStatus, ServingStatus } from './services/Health';

const server = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
});

server.addService(HealthService, new Health());
server.addService(DiscountServiceService, new Discounter());
server.addService(DiscountService, new Discount());

server.bindAsync(
  LocalhostUrl,
  ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      throw err;
    }

    logger.info(`running on PORT:${port}`, new Date().toISOString());
    server.start();
  },
);

healthStatus.set('Health Status', ServingStatus.NOT_SERVING);
