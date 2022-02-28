import { Delivery, Order } from './interface';

export const orders: Order[] = [
  {
    orderNo: 1,
    ordererName: 'JK',
  },
  {
    orderNo: 2,
    ordererName: 'SJ',
  },
  {
    orderNo: 3,
    ordererName: 'MM',
  },
  {
    orderNo: 4,
    ordererName: 'CR',
  },
];

export const deliveries: Delivery[] = [
  {
    orderNo: 1,
    deliveryNo: 100,
    deliveryAddress: '서울시 행복구 멍멍이동 35-15 501호',
  },
  {
    orderNo: 2,
    deliveryNo: 100,
    deliveryAddress: '서울시 행복구 멍멍이동 35-15 501호',
  },
  {
    orderNo: 3,
    deliveryNo: 200,
    deliveryAddress: '서울시 행복구 멍멍이동 35-15 501호',
  },
];
