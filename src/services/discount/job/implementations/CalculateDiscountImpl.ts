import { inject, injectable } from 'inversify';
import { find } from 'lodash';

import { MockDbProducts } from '@infra/db/mockDbProducts';
import { DbProduct } from '@infra/interfaces/dbProduct';

import { Discount, Product } from '@models/discount_checkout_pb';
import { TypeDiscountFinder } from '@shared/app/DI/types/types';
import DiscountFinder from '@src/clients/DiscountFinder';
import CalculateDiscount from '../calculateDiscount';

@injectable()
export default class CalculateDiscountImpl extends CalculateDiscount {
  constructor(
    @inject(TypeDiscountFinder)
    private discountFinder: DiscountFinder,

  ) {
    super();
  }

  public async calculate(productId: number, quantity: number): Promise<void> {
    const pr = await this.discountFinder.getDiscount(productId);
    // container.resolve(DiscountFinderImpl).getDiscount(productId);
    console.log('***************************************');
    console.log('pr', pr);
    console.log('***************************************');

    const product = this.findProduct(productId);
    const { is_gift: isGift } = product;

    // console.log('blackFridayDate', blackFridayDate);

    const discount = new Discount();
    discount.setTotalAmount(200);

    const newProduct = new Product();
    newProduct.setId(product.id);
    newProduct.setQuantity(quantity);
    newProduct.setUnitAmount(!isGift ? product.amount : 0); // ??
    newProduct.setTotalAmount(!isGift ? product.amount * quantity : 0); // ?? -
    // newProduct.setDiscount(Math.round(product.amount * quantity * discount));
    newProduct.setIsGift(isGift);
    // checkout;
    // quantity: number,
    // unitAmount: number,
    // totalAmount: number,
    // discount: number,
    // isGift: boolean,

    // console.log(product, discount);
  }

  private findProduct(productId: number): DbProduct {
    const products = MockDbProducts;
    return find(products, ['id', productId]) as DbProduct;
  }
}
