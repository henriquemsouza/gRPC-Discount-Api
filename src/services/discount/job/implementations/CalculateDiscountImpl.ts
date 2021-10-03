import { MockDbProducts } from '@infra/db/mockDbProducts';
import { DbProduct } from '@infra/interfaces/dbProduct';
import { injectable } from 'inversify';
import { find } from 'lodash';
import { Discount } from '@models/discount_pb';
import CalculateDiscount from '../calculateDiscount';

@injectable()
export default class CalculateDiscountImpl extends CalculateDiscount {
  public calculate(productId: number): void {
    const product = this.findProduct(productId);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const discount = new Discount();
    discount.setTotalAmount(200);
    console.log(product, discount);
  }

  private findProduct(productId: number): DbProduct {
    const products = MockDbProducts;
    return find(products, ['id', productId]) as DbProduct;
  }
}
