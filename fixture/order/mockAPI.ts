import { Delivery, Order } from '../interface';
import { deliveries, orders } from '../mockData';

const dummyPromise = <T>(dummyData: T): Promise<T> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(dummyData);
    }, 250);
  });

export const getOrders = () => dummyPromise<Order[]>(orders);

export const getDeliveryByOrderNos = (orderNos: number[]) => {
  const data = deliveries.filter(order => orderNos.includes(order.orderNo));

  return dummyPromise<Delivery[]>(data);
};
