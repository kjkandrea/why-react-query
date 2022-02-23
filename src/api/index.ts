import { create } from '@shopby/shop-sdk';

export const api = create(process.env.API_URL as string, {
  clientId: 'ebbIhzCAKLJHYg+Ks9V45g==',
  'Content-type': 'application/json',
});
