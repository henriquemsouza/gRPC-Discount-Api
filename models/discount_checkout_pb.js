// source: discount_checkout.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.discount_checkout.Discount', null, global);
goog.exportSymbol('proto.discount_checkout.DiscountRequest', null, global);
goog.exportSymbol('proto.discount_checkout.Product', null, global);
goog.exportSymbol('proto.discount_checkout.ProductRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.discount_checkout.DiscountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.discount_checkout.DiscountRequest.repeatedFields_, null);
};
goog.inherits(proto.discount_checkout.DiscountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.discount_checkout.DiscountRequest.displayName = 'proto.discount_checkout.DiscountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.discount_checkout.ProductRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.discount_checkout.ProductRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.discount_checkout.ProductRequest.displayName = 'proto.discount_checkout.ProductRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.discount_checkout.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.discount_checkout.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.discount_checkout.Product.displayName = 'proto.discount_checkout.Product';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.discount_checkout.Discount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.discount_checkout.Discount.repeatedFields_, null);
};
goog.inherits(proto.discount_checkout.Discount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.discount_checkout.Discount.displayName = 'proto.discount_checkout.Discount';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.discount_checkout.DiscountRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.discount_checkout.DiscountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.discount_checkout.DiscountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.discount_checkout.DiscountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.DiscountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.discount_checkout.ProductRequest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.discount_checkout.DiscountRequest}
 */
proto.discount_checkout.DiscountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.discount_checkout.DiscountRequest;
  return proto.discount_checkout.DiscountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.discount_checkout.DiscountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.discount_checkout.DiscountRequest}
 */
proto.discount_checkout.DiscountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.discount_checkout.ProductRequest;
      reader.readMessage(value,proto.discount_checkout.ProductRequest.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.discount_checkout.DiscountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.discount_checkout.DiscountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.discount_checkout.DiscountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.DiscountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.discount_checkout.ProductRequest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProductRequest products = 4;
 * @return {!Array<!proto.discount_checkout.ProductRequest>}
 */
proto.discount_checkout.DiscountRequest.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.discount_checkout.ProductRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.discount_checkout.ProductRequest, 4));
};


/**
 * @param {!Array<!proto.discount_checkout.ProductRequest>} value
 * @return {!proto.discount_checkout.DiscountRequest} returns this
*/
proto.discount_checkout.DiscountRequest.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.discount_checkout.ProductRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.discount_checkout.ProductRequest}
 */
proto.discount_checkout.DiscountRequest.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.discount_checkout.ProductRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.discount_checkout.DiscountRequest} returns this
 */
proto.discount_checkout.DiscountRequest.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.discount_checkout.ProductRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.discount_checkout.ProductRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.discount_checkout.ProductRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.ProductRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    productid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.discount_checkout.ProductRequest}
 */
proto.discount_checkout.ProductRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.discount_checkout.ProductRequest;
  return proto.discount_checkout.ProductRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.discount_checkout.ProductRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.discount_checkout.ProductRequest}
 */
proto.discount_checkout.ProductRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProductid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.discount_checkout.ProductRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.discount_checkout.ProductRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.discount_checkout.ProductRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.ProductRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 productID = 1;
 * @return {number}
 */
proto.discount_checkout.ProductRequest.prototype.getProductid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.ProductRequest} returns this
 */
proto.discount_checkout.ProductRequest.prototype.setProductid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 quantity = 2;
 * @return {number}
 */
proto.discount_checkout.ProductRequest.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.ProductRequest} returns this
 */
proto.discount_checkout.ProductRequest.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.discount_checkout.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.discount_checkout.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.discount_checkout.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unitAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalAmount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    discount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isGift: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.discount_checkout.Product}
 */
proto.discount_checkout.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.discount_checkout.Product;
  return proto.discount_checkout.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.discount_checkout.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.discount_checkout.Product}
 */
proto.discount_checkout.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnitAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiscount(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGift(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.discount_checkout.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.discount_checkout.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.discount_checkout.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUnitAmount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTotalAmount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getDiscount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsGift();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.discount_checkout.Product.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Product} returns this
 */
proto.discount_checkout.Product.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 quantity = 2;
 * @return {number}
 */
proto.discount_checkout.Product.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Product} returns this
 */
proto.discount_checkout.Product.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 unit_amount = 3;
 * @return {number}
 */
proto.discount_checkout.Product.prototype.getUnitAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Product} returns this
 */
proto.discount_checkout.Product.prototype.setUnitAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 total_amount = 4;
 * @return {number}
 */
proto.discount_checkout.Product.prototype.getTotalAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Product} returns this
 */
proto.discount_checkout.Product.prototype.setTotalAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 discount = 5;
 * @return {number}
 */
proto.discount_checkout.Product.prototype.getDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Product} returns this
 */
proto.discount_checkout.Product.prototype.setDiscount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool is_gift = 6;
 * @return {boolean}
 */
proto.discount_checkout.Product.prototype.getIsGift = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.discount_checkout.Product} returns this
 */
proto.discount_checkout.Product.prototype.setIsGift = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.discount_checkout.Discount.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.discount_checkout.Discount.prototype.toObject = function(opt_includeInstance) {
  return proto.discount_checkout.Discount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.discount_checkout.Discount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.Discount.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalAmount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalAmountWithDiscount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalDiscount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.discount_checkout.Product.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.discount_checkout.Discount}
 */
proto.discount_checkout.Discount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.discount_checkout.Discount;
  return proto.discount_checkout.Discount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.discount_checkout.Discount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.discount_checkout.Discount}
 */
proto.discount_checkout.Discount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalAmountWithDiscount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalDiscount(value);
      break;
    case 4:
      var value = new proto.discount_checkout.Product;
      reader.readMessage(value,proto.discount_checkout.Product.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.discount_checkout.Discount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.discount_checkout.Discount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.discount_checkout.Discount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.discount_checkout.Discount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalAmount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTotalAmountWithDiscount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTotalDiscount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.discount_checkout.Product.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 total_amount = 1;
 * @return {number}
 */
proto.discount_checkout.Discount.prototype.getTotalAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Discount} returns this
 */
proto.discount_checkout.Discount.prototype.setTotalAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 total_amount_with_discount = 2;
 * @return {number}
 */
proto.discount_checkout.Discount.prototype.getTotalAmountWithDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Discount} returns this
 */
proto.discount_checkout.Discount.prototype.setTotalAmountWithDiscount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 total_discount = 3;
 * @return {number}
 */
proto.discount_checkout.Discount.prototype.getTotalDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.discount_checkout.Discount} returns this
 */
proto.discount_checkout.Discount.prototype.setTotalDiscount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Product products = 4;
 * @return {!Array<!proto.discount_checkout.Product>}
 */
proto.discount_checkout.Discount.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.discount_checkout.Product>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.discount_checkout.Product, 4));
};


/**
 * @param {!Array<!proto.discount_checkout.Product>} value
 * @return {!proto.discount_checkout.Discount} returns this
*/
proto.discount_checkout.Discount.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.discount_checkout.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.discount_checkout.Product}
 */
proto.discount_checkout.Discount.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.discount_checkout.Product, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.discount_checkout.Discount} returns this
 */
proto.discount_checkout.Discount.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};


goog.object.extend(exports, proto.discount_checkout);
