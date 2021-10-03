import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const LocalhostUrl = `localhost:${process.env['PORT']}`;

export const blackFridayDate = new Date(process.env['BLACK_FRIDAY_DATE'] as string);
