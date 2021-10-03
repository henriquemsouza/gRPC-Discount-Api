// package: discount_checkout
// file: discount_checkout.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DiscountRequest extends jspb.Message { 
    getProductid(): number;
    setProductid(value: number): DiscountRequest;
    getQuantity(): number;
    setQuantity(value: number): DiscountRequest;

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
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): Discount;
    addProducts(value?: Product, index?: number): Product;
    getPercentage(): number;
    setPercentage(value: number): Discount;
    getTotalAmount(): number;
    setTotalAmount(value: number): Discount;
    getTotalAmountWithDiscount(): number;
    setTotalAmountWithDiscount(value: number): Discount;
    getTotalDiscount(): number;
    setTotalDiscount(value: number): Discount;

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
        productsList: Array<Product.AsObject>,
        percentage: number,
        totalAmount: number,
        totalAmountWithDiscount: number,
        totalDiscount: number,
    }
}
