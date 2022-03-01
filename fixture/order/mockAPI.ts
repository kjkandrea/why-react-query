import { Delivery, Order, OrderedProduct } from '../interface';
import { deliveries, orderedProducts, orders } from '../mockData';

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

export const getOrderedProductByOrderNo = (ordersNos: number[]) => {
  const data = orderedProducts.filter(orderedProduct => ordersNos.includes(orderedProduct.orderNo));

  return dummyPromise<OrderedProduct[]>(data);
};
