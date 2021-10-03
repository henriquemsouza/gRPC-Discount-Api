import { MockDbProducts } from '@infra/db/mockDbProducts';
import { DbProduct } from '@infra/interfaces/dbProduct';
import { Discount, ProductRequest } from '@models/discount_checkout_pb';
import { injectable } from 'inversify';
import { find } from 'lodash';

@injectable()
export default abstract class CalculateDiscount {
  abstract calculate(productsRequest: ProductRequest[]): Promise<Discount>;

  protected findProduct(productId: number): DbProduct {
    const products = MockDbProducts;
    return find(products, ['id', productId]) as DbProduct;
  }

  protected findGiftProduct(): DbProduct {
    const products = MockDbProducts;
    return find(products, ['is_gift', true]) as DbProduct;
  }
}
