import {
  Metadata,
  status,
  ServiceError as grpcServiceError,
} from '@grpc/grpc-js';

export class ServiceError extends Error implements Partial<grpcServiceError> {
  public override name: string = 'ServiceError';

  constructor(
    public code: status,
    public override message: string,
    public details?: string,
    public metadata?: Metadata,
  ) {
    super(message);
  }
}
