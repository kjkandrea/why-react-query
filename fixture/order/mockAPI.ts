import { Delivery, Order } from '../interface';
import { deliveries, orders } from '../mockData';

const dummyPromise = <T>(dummyData: T): Promise<T> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(dummyData);
    }, 250);
  });

export const getOrders = () => dummyPromise<Order[]>(orders);

export const getDeliveries = () => dummyPromise<Delivery[]>(deliveries);

export const getDeliveryByOrderNo = (orderNo: number) => {
  const data = deliveries.find(order => orderNo === order.orderNo);

  return dummyPromise<Delivery | undefined>(data);
};
