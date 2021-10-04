import { inject, injectable } from 'inversify';
import { subtract, sum } from 'lodash';

import { DbProduct } from '@infra/interfaces/dbProduct';

import { Discount, Product, ProductRequest } from '@models/discount_checkout_pb';
import { TypeDiscountFinder } from '@shared/app/DI/types/types';
import DiscountFinder from '@src/clients/DiscountFinder';
import { logger } from '@utils/logger';
import { isBlackFriday } from '@utils/infra/utils';
import CalculateDiscount from '../calculateDiscount';

@injectable()
export default class CalculateDiscountImpl extends CalculateDiscount {
  constructor(
    @inject(TypeDiscountFinder)
    private discountFinder: DiscountFinder,

  ) {
    super();
  }

  public async calculate(productsRequest: ProductRequest[]): Promise<Discount> {
    const discount = new Discount();
    try {
      const products = await this.buildProducts(productsRequest);
      discount.setProductsList(products);

      this.buildTotalAmount(products, discount);

      this.buildTotalValues(products, discount);
      logger.info('success', discount);
      return discount;
    } catch (error) {
      logger.error('CalculateDiscountImpl:', error);
      return discount;
    }
  }

  private buildTotalValues(products: Product[], discount: Discount) {
    const unitsDiscount = products.map((x) => x.getDiscount());
    const totalDiscount = sum(unitsDiscount);
    discount.setTotalDiscount(totalDiscount);

    const amountValue = discount.getTotalAmount();

    // amountValue - totalDiscount;
    const totalAmountWithDiscount = subtract(totalDiscount, amountValue);

    discount.setTotalAmountWithDiscount(totalAmountWithDiscount);
  }

  private buildTotalAmount(products: Product[], discount: Discount) {
    const unitsAmount = products.map((x) => x.getUnitAmount());
    const totalAmount = sum(unitsAmount);
    discount.setTotalAmount(totalAmount);
  }

  private async buildProducts(productsRequest: ProductRequest[]): Promise<Product[]> {
    const products: Product[] = [];
    for (const item of productsRequest) {
      const productId = item.getProductid();
      const quantity = item.getQuantity();
      const product = this.findProduct(productId);
      const newProduct = new Product();

      if (product) {
        // eslint-disable-next-line no-await-in-loop
        const discountBaseValue = await this.discountFinder.getDiscount(productId);
        const { is_gift: isGift } = product;

        newProduct.setId(product.id);
        newProduct.setQuantity(quantity);
        newProduct.setUnitAmount(!isGift ? product.amount : 0); // ??
        newProduct.setTotalAmount(!isGift ? product.amount * quantity : 0); // ?? -
        newProduct.setDiscount(this.calculateDiscount(product, quantity, discountBaseValue));
        newProduct.setIsGift(isGift);
        products.push(newProduct);
      }
    }

    if (isBlackFriday()) {
      this.buildGift(products);
    }

    return products;
  }

  private buildGift(products: Product[]) {
    const product = this.findGiftProduct();
    const newProduct = new Product();
    const { is_gift: isGift } = product;

    newProduct.setId(product.id);
    newProduct.setQuantity(1);
    newProduct.setUnitAmount(0);
    newProduct.setTotalAmount(0);
    newProduct.setDiscount(0);
    newProduct.setIsGift(isGift);
    products.push(newProduct);
  }

  private calculateDiscount(product: DbProduct, quantity: number, discountBaseValue: number): number {
    return Math.round(product.amount * quantity * discountBaseValue);
  }
}
