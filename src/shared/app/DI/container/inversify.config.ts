import { Container } from 'inversify';
import 'reflect-metadata';

import { TypeCalculateDiscount } from '@shared/app/DI/types/types';

import CalculateDiscountImpl from '@services/discount/job/implementations/CalculateDiscountImpl';
import CalculateDiscount from '@services/discount/job/calculateDiscount';

const container = new Container();

container.bind<CalculateDiscount>(TypeCalculateDiscount).to(CalculateDiscountImpl);

export default container;
