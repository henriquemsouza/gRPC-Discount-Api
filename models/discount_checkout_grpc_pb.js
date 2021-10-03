// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var discount_checkout_pb = require('./discount_checkout_pb.js');

function serialize_discount_checkout_Discount(arg) {
  if (!(arg instanceof discount_checkout_pb.Discount)) {
    throw new Error('Expected argument of type discount_checkout.Discount');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discount_checkout_Discount(buffer_arg) {
  return discount_checkout_pb.Discount.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discount_checkout_DiscountRequest(arg) {
  if (!(arg instanceof discount_checkout_pb.DiscountRequest)) {
    throw new Error('Expected argument of type discount_checkout.DiscountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discount_checkout_DiscountRequest(buffer_arg) {
  return discount_checkout_pb.DiscountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiscountServiceService = exports.DiscountServiceService = {
  getDiscountCheckout: {
    path: '/discount_checkout.DiscountService/GetDiscountCheckout',
    requestStream: false,
    responseStream: false,
    requestType: discount_checkout_pb.DiscountRequest,
    responseType: discount_checkout_pb.Discount,
    requestSerialize: serialize_discount_checkout_DiscountRequest,
    requestDeserialize: deserialize_discount_checkout_DiscountRequest,
    responseSerialize: serialize_discount_checkout_Discount,
    responseDeserialize: deserialize_discount_checkout_Discount,
  },
  getDiscountCheckoutStream: {
    path: '/discount_checkout.DiscountService/GetDiscountCheckoutStream',
    requestStream: true,
    responseStream: true,
    requestType: discount_checkout_pb.DiscountRequest,
    responseType: discount_checkout_pb.Discount,
    requestSerialize: serialize_discount_checkout_DiscountRequest,
    requestDeserialize: deserialize_discount_checkout_DiscountRequest,
    responseSerialize: serialize_discount_checkout_Discount,
    responseDeserialize: deserialize_discount_checkout_Discount,
  },
};

exports.DiscountServiceClient = grpc.makeGenericClientConstructor(DiscountServiceService);
