// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var discount_pb = require('./discount_pb.js');

function serialize_discount_Discount(arg) {
  if (!(arg instanceof discount_pb.Discount)) {
    throw new Error('Expected argument of type discount.Discount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discount_Discount(buffer_arg) {
  return discount_pb.Discount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discount_DiscountRequest(arg) {
  if (!(arg instanceof discount_pb.DiscountRequest)) {
    throw new Error('Expected argument of type discount.DiscountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discount_DiscountRequest(buffer_arg) {
  return discount_pb.DiscountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that return mocked discount percentage.
var DiscountServiceService = exports.DiscountServiceService = {
  getDiscount: {
    path: '/discount.DiscountService/GetDiscount',
    requestStream: false,
    responseStream: false,
    requestType: discount_pb.DiscountRequest,
    responseType: discount_pb.Discount,
    requestSerialize: serialize_discount_DiscountRequest,
    requestDeserialize: deserialize_discount_DiscountRequest,
    responseSerialize: serialize_discount_Discount,
    responseDeserialize: deserialize_discount_Discount,
  },
  getDiscountStreamRequest: {
    path: '/discount.DiscountService/GetDiscountStreamRequest',
    requestStream: true,
    responseStream: false,
    requestType: discount_pb.DiscountRequest,
    responseType: discount_pb.Discount,
    requestSerialize: serialize_discount_DiscountRequest,
    requestDeserialize: deserialize_discount_DiscountRequest,
    responseSerialize: serialize_discount_Discount,
    responseDeserialize: deserialize_discount_Discount,
  },
  getDiscountStreamResponse: {
    path: '/discount.DiscountService/GetDiscountStreamResponse',
    requestStream: false,
    responseStream: true,
    requestType: discount_pb.DiscountRequest,
    responseType: discount_pb.Discount,
    requestSerialize: serialize_discount_DiscountRequest,
    requestDeserialize: deserialize_discount_DiscountRequest,
    responseSerialize: serialize_discount_Discount,
    responseDeserialize: deserialize_discount_Discount,
  },
  getDiscountStream: {
    path: '/discount.DiscountService/GetDiscountStream',
    requestStream: true,
    responseStream: true,
    requestType: discount_pb.DiscountRequest,
    responseType: discount_pb.Discount,
    requestSerialize: serialize_discount_DiscountRequest,
    requestDeserialize: deserialize_discount_DiscountRequest,
    responseSerialize: serialize_discount_Discount,
    responseDeserialize: deserialize_discount_Discount,
  },
};

exports.DiscountServiceClient = grpc.makeGenericClientConstructor(DiscountServiceService);
