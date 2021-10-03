import * as dotenv from 'dotenv';

dotenv.config();

export default {
  blackFridayDate: process.env['BLACK_FRIDAY_DATE'],
  port: process.env['PORT'],
};
