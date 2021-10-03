import { injectable } from 'inversify';

@injectable()
export default abstract class CalculateDiscount {
  abstract calculate(productId: number, quantity: number): void;
}
