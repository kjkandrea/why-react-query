import { Delivery, Order, OrderedProduct } from './interface';

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
    deliveryAddress: '경기도 넘버구 스트링동 35-15 501호',
  },
];

export const orderedProducts: OrderedProduct[] = [
  {
    orderNo: 1,
    productNo: 300,
    productName: '엄청나 상품',
    salePrice: 2000,
  },
  {
    orderNo: 1,
    productNo: 301,
    productName: '대박이야 상품',
    salePrice: 2500,
  },
  {
    orderNo: 2,
    productNo: 302,
    productName: '박리다매 상품',
    salePrice: 1000,
  },
  {
    orderNo: 3,
    productNo: 303,
    productName: '비싸비싸 상품',
    salePrice: 4000,
  },
  {
    orderNo: 3,
    productNo: 304,
    productName: '짱비싸 상품',
    salePrice: 2000000,
  },
  {
    orderNo: 4,
    productNo: 305,
    productName: '왜샀어 상품',
    salePrice: 2000,
  },
];
