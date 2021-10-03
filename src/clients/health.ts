import { credentials, ServiceError } from '@grpc/grpc-js';

import { HealthClient } from '../../models/health_grpc_pb';
import { HealthCheckRequest, HealthCheckResponse } from '../../models/health_pb';
import { logger } from '../utils';
import { LocalhostUrl } from '../utils/infra/utils';

const health = new HealthClient(LocalhostUrl, credentials.createInsecure());
logger.info('gRPC:HealthClient', new Date().toLocaleString());

let argv = 'server:Health';
if (process.argv.length >= 3) {
  [,,argv] = process.argv;
}

const param = new HealthCheckRequest();
param.setService(argv);

health.check(param, (err: ServiceError | null, res: HealthCheckResponse) => {
  if (err) {
    return logger.error('healthCheck:', err);
  }

  const status = res.getStatus();
  if (status !== HealthCheckResponse.ServingStatus.SERVING) {
    return logger.error('healthCheck:', status);
  }

  logger.info('healthCheck:', status);
});
