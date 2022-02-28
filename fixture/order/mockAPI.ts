import { Order } from './interface';

const orders: Order[] = [
  {
    orderNo: 1,
    ordererName: 'JK',
  },
];

export const getOrders = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(orders);
    }, 250);
  });
