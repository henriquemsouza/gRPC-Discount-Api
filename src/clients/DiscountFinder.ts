import { injectable } from 'inversify';

@injectable()
export default abstract class DiscountFinder {
  abstract getDiscount(productId: number): Promise<number>;
}
