import 'reflect-metadata';

import { expect, use } from 'chai';
import { createStubInstance, restore, stub } from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import { addDays } from 'date-fns';

import CalculateDiscountImpl from '@services/discount/job/implementations/CalculateDiscountImpl';
import { DiscountFinderImpl } from '@src/clients/implementations/DiscountFinderImpl';
import env from '@utils/infra/env';
import { ProductRequestMock } from 'test/mocks/ProductRequestMock';

use(sinonChai);
use(chaiAsPromised);

describe('CalculateDiscountImpl ', ():void => {
  describe('#Black Friday', () => {
    let now: Date;
    beforeEach(() => {
      now = new Date();
      stub(env, 'blackFridayDate').value(now.toISOString());
    });

    afterEach(() => {
      restore();
    });

    it('Should return a discount based on id', async () => {
      const discountFinder = createStubInstance(DiscountFinderImpl);
      discountFinder.getDiscount.resolves(10);

      const productRequest = ProductRequestMock;

      const subject = new CalculateDiscountImpl(discountFinder);
      const result = await subject.calculate([productRequest]);

      const productsList = result.getProductsList();

      expect(productsList[0].getId()).to.equal(1);
      expect(productsList[1].getId()).not.equal(1);
      expect(productsList.length).to.equal(2);
    });
  });

  describe('#Normal Days', () => {
    beforeEach(() => {
      const blackFriday = addDays(new Date(), 5);
      stub(process.env, 'BLACK_FRIDAY_DATE').value(blackFriday.toISOString());
    });

    afterEach(() => {
      restore();
    });

    it('Should return a discount based on id', async () => {
      const discountFinder = createStubInstance(DiscountFinderImpl);
      discountFinder.getDiscount.resolves(10);

      const productRequest = ProductRequestMock;

      const subject = new CalculateDiscountImpl(discountFinder);
      const result = await subject.calculate([productRequest]);

      const productsList = result.getProductsList();

      expect(productsList[0].getId()).to.equal(1);
      expect(productsList.length).to.equal(1);
    });
  });
});
