import 'reflect-metadata';

import { expect, use } from 'chai';
import { restore, spy } from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

import { DiscountFinderImpl } from '@src/clients/implementations/DiscountFinderImpl';

import { DiscountClient } from '@models/discount_grpc_pb';

use(sinonChai);
use(chaiAsPromised);

describe('DiscountFinderImpl ', ():void => {
  beforeEach(() => {

  });

  afterEach(() => {
    restore();
  });

  it('Should call get discount', async () => {
    const client = spy(DiscountClient.prototype, 'getDiscount');

    const subject = new DiscountFinderImpl();
    await subject.getDiscount(1);

    expect(client.callCount).to.equal(1);
  });
});
