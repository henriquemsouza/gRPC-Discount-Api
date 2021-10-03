import { ProductRequest } from '@models/discount_checkout_pb';

const ProductRequestMock = new ProductRequest();
ProductRequestMock.setProductid(1);
ProductRequestMock.setQuantity(2);

export {
  ProductRequestMock,
};
