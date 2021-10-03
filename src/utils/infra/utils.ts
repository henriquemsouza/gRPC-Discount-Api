import { format } from 'date-fns';
import * as dotenv from 'dotenv';
import env from '@utils/infra/env';

dotenv.config({ path: '.env' });

export const LocalhostUrl = `localhost:${env.port}`;

export const isBlackFriday = ():boolean => {
  const currentDate = format(new Date(), 'yyyy/MM/dd');
  const blackFridayDateFormatted = format(new Date(env.blackFridayDate as string), 'yyyy/MM/dd');

  return currentDate === blackFridayDateFormatted;
};
