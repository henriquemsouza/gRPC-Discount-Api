// package: discount
// file: discount.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as discount_pb from "./discount_pb";

interface IDiscountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDiscount: IDiscountServiceService_IGetDiscount;
    getDiscountStreamRequest: IDiscountServiceService_IGetDiscountStreamRequest;
    getDiscountStreamResponse: IDiscountServiceService_IGetDiscountStreamResponse;
    getDiscountStream: IDiscountServiceService_IGetDiscountStream;
}

interface IDiscountServiceService_IGetDiscount extends grpc.MethodDefinition<discount_pb.DiscountRequest, discount_pb.Discount> {
    path: "/discount.DiscountService/GetDiscount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<discount_pb.DiscountRequest>;
    requestDeserialize: grpc.deserialize<discount_pb.DiscountRequest>;
    responseSerialize: grpc.serialize<discount_pb.Discount>;
    responseDeserialize: grpc.deserialize<discount_pb.Discount>;
}
interface IDiscountServiceService_IGetDiscountStreamRequest extends grpc.MethodDefinition<discount_pb.DiscountRequest, discount_pb.Discount> {
    path: "/discount.DiscountService/GetDiscountStreamRequest";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<discount_pb.DiscountRequest>;
    requestDeserialize: grpc.deserialize<discount_pb.DiscountRequest>;
    responseSerialize: grpc.serialize<discount_pb.Discount>;
    responseDeserialize: grpc.deserialize<discount_pb.Discount>;
}
interface IDiscountServiceService_IGetDiscountStreamResponse extends grpc.MethodDefinition<discount_pb.DiscountRequest, discount_pb.Discount> {
    path: "/discount.DiscountService/GetDiscountStreamResponse";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<discount_pb.DiscountRequest>;
    requestDeserialize: grpc.deserialize<discount_pb.DiscountRequest>;
    responseSerialize: grpc.serialize<discount_pb.Discount>;
    responseDeserialize: grpc.deserialize<discount_pb.Discount>;
}
interface IDiscountServiceService_IGetDiscountStream extends grpc.MethodDefinition<discount_pb.DiscountRequest, discount_pb.Discount> {
    path: "/discount.DiscountService/GetDiscountStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<discount_pb.DiscountRequest>;
    requestDeserialize: grpc.deserialize<discount_pb.DiscountRequest>;
    responseSerialize: grpc.serialize<discount_pb.Discount>;
    responseDeserialize: grpc.deserialize<discount_pb.Discount>;
}

export const DiscountServiceService: IDiscountServiceService;

export interface IDiscountServiceServer extends grpc.UntypedServiceImplementation {
    getDiscount: grpc.handleUnaryCall<discount_pb.DiscountRequest, discount_pb.Discount>;
    getDiscountStreamRequest: grpc.handleClientStreamingCall<discount_pb.DiscountRequest, discount_pb.Discount>;
    getDiscountStreamResponse: grpc.handleServerStreamingCall<discount_pb.DiscountRequest, discount_pb.Discount>;
    getDiscountStream: grpc.handleBidiStreamingCall<discount_pb.DiscountRequest, discount_pb.Discount>;
}

export interface IDiscountServiceClient {
    getDiscount(request: discount_pb.DiscountRequest, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientUnaryCall;
    getDiscount(request: discount_pb.DiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientUnaryCall;
    getDiscount(request: discount_pb.DiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientUnaryCall;
    getDiscountStreamRequest(callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    getDiscountStreamRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    getDiscountStreamRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    getDiscountStreamRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    getDiscountStreamResponse(request: discount_pb.DiscountRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<discount_pb.Discount>;
    getDiscountStreamResponse(request: discount_pb.DiscountRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<discount_pb.Discount>;
    getDiscountStream(): grpc.ClientDuplexStream<discount_pb.DiscountRequest, discount_pb.Discount>;
    getDiscountStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_pb.DiscountRequest, discount_pb.Discount>;
    getDiscountStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_pb.DiscountRequest, discount_pb.Discount>;
}

export class DiscountServiceClient extends grpc.Client implements IDiscountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getDiscount(request: discount_pb.DiscountRequest, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientUnaryCall;
    public getDiscount(request: discount_pb.DiscountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientUnaryCall;
    public getDiscount(request: discount_pb.DiscountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientUnaryCall;
    public getDiscountStreamRequest(callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    public getDiscountStreamRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    public getDiscountStreamRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    public getDiscountStreamRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discount_pb.Discount) => void): grpc.ClientWritableStream<discount_pb.DiscountRequest>;
    public getDiscountStreamResponse(request: discount_pb.DiscountRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<discount_pb.Discount>;
    public getDiscountStreamResponse(request: discount_pb.DiscountRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<discount_pb.Discount>;
    public getDiscountStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_pb.DiscountRequest, discount_pb.Discount>;
    public getDiscountStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<discount_pb.DiscountRequest, discount_pb.Discount>;
}
