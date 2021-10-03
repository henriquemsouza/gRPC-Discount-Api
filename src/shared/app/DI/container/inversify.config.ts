import { Container } from 'inversify';
import 'reflect-metadata';

import { TypeCalculateDiscount, TypeDiscountFinder } from '@shared/app/DI/types/types';

import CalculateDiscountImpl from '@services/discount/job/implementations/CalculateDiscountImpl';
import CalculateDiscount from '@services/discount/job/calculateDiscount';
import DiscountFinder from '@src/clients/DiscountFinder';
import { DiscountFinderImpl } from '@src/clients/implementations/DiscountFinderImpl';

const container = new Container();

container.bind<CalculateDiscount>(TypeCalculateDiscount).to(CalculateDiscountImpl);
container.bind<DiscountFinder>(TypeDiscountFinder).to(DiscountFinderImpl);

export default container;
