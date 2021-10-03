// package: discount_checkout
// file: discount_checkout.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DiscountRequest extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<ProductRequest>;
    setProductsList(value: Array<ProductRequest>): DiscountRequest;
    addProducts(value?: ProductRequest, index?: number): ProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiscountRequest): DiscountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscountRequest;
    static deserializeBinaryFromReader(message: DiscountRequest, reader: jspb.BinaryReader): DiscountRequest;
}

export namespace DiscountRequest {
    export type AsObject = {
        productsList: Array<ProductRequest.AsObject>,
    }
}

export class ProductRequest extends jspb.Message { 
    getProductid(): number;
    setProductid(value: number): ProductRequest;
    getQuantity(): number;
    setQuantity(value: number): ProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductRequest;
    static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
    export type AsObject = {
        productid: number,
        quantity: number,
    }
}

export class Product extends jspb.Message { 
    getId(): number;
    setId(value: number): Product;
    getQuantity(): number;
    setQuantity(value: number): Product;
    getUnitAmount(): number;
    setUnitAmount(value: number): Product;
    getTotalAmount(): number;
    setTotalAmount(value: number): Product;
    getDiscount(): number;
    setDiscount(value: number): Product;
    getIsGift(): boolean;
    setIsGift(value: boolean): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: number,
        quantity: number,
        unitAmount: number,
        totalAmount: number,
        discount: number,
        isGift: boolean,
    }
}

export class Discount extends jspb.Message { 
    getTotalAmount(): number;
    setTotalAmount(value: number): Discount;
    getTotalAmountWithDiscount(): number;
    setTotalAmountWithDiscount(value: number): Discount;
    getTotalDiscount(): number;
    setTotalDiscount(value: number): Discount;
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): Discount;
    addProducts(value?: Product, index?: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Discount.AsObject;
    static toObject(includeInstance: boolean, msg: Discount): Discount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Discount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Discount;
    static deserializeBinaryFromReader(message: Discount, reader: jspb.BinaryReader): Discount;
}

export namespace Discount {
    export type AsObject = {
        totalAmount: number,
        totalAmountWithDiscount: number,
        totalDiscount: number,
        productsList: Array<Product.AsObject>,
    }
}
