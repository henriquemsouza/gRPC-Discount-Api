// package: discount_checkout
// file: discount_checkout.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as discount_checkout_pb from "./discount_checkout_pb";

interface IDiscountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDiscountCheckout: IDiscountServiceService_IGetDiscountCheckout;
    getDiscountCheckoutStream: IDiscountServiceService_IGetDiscountCheckoutStream;
}

interface IDiscountServiceService_IGetDiscountCheckout extends grpc.MethodDefinition<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount> {
    path: "/discount_checkout.DiscountService/GetDiscountCheckout";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<discount_checkout_pb.DiscountRequest>;
    requestDeserialize: grpc.deserialize<discount_checkout_pb.DiscountRequest>;
    responseSerialize: grpc.serialize<discount_checkout_pb.Discount>;
    responseDeserialize: grpc.deserialize<discount_checkout_pb.Discount>;
}
interface IDiscountServiceService_IGetDiscountCheckoutStream extends grpc.MethodDefinition<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount> {
    path: "/discount_checkout.DiscountService/GetDiscountCheckoutStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<discount_checkout_pb.DiscountRequest>;
    requestDeserialize: grpc.deserialize<discount_checkout_pb.DiscountRequest>;
    responseSerialize: grpc.serialize<discount_checkout_pb.Discount>;
    responseDeserialize: grpc.deserialize<discount_checkout_pb.Discount>;
}

export const DiscountServiceService: IDiscountServiceService;

export interface IDiscountServiceServer extends grpc.UntypedServiceImplementation {
    getDiscountCheckout: grpc.handleUnaryCall<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount>;
    getDiscountCheckoutStream: grpc.handleBidiStreamingCall<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount>;
}

export interface IDiscountServiceClient {
    getDiscountCheckout(request: discount_checkout_pb.DiscountRequest, callback: (error: grpc.ServiceError | null, response: discount_checkout_pb.Discount) => void): grpc.ClientUnaryCall;
    getDiscountCheckout(request: discount_checkout_pb.DiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discount_checkout_pb.Discount) => void): grpc.ClientUnaryCall;
    getDiscountCheckout(request: discount_checkout_pb.DiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_checkout_pb.Discount) => void): grpc.ClientUnaryCall;
    getDiscountCheckoutStream(): grpc.ClientDuplexStream<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount>;
    getDiscountCheckoutStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount>;
    getDiscountCheckoutStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount>;
}

export class DiscountServiceClient extends grpc.Client implements IDiscountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getDiscountCheckout(request: discount_checkout_pb.DiscountRequest, callback: (error: grpc.ServiceError | null, response: discount_checkout_pb.Discount) => void): grpc.ClientUnaryCall;
    public getDiscountCheckout(request: discount_checkout_pb.DiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discount_checkout_pb.Discount) => void): grpc.ClientUnaryCall;
    public getDiscountCheckout(request: discount_checkout_pb.DiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_checkout_pb.Discount) => void): grpc.ClientUnaryCall;
    public getDiscountCheckoutStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount>;
    public getDiscountCheckoutStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_checkout_pb.DiscountRequest, discount_checkout_pb.Discount>;
}
