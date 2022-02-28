import React from 'react';
import { getDeliveryByOrderNo, getOrders } from '../../fixture/order/mockAPI';
import { useQuery } from 'react-query';
import { Delivery } from '../../fixture/interface';

const DeliveryList = () => {
  const orders = useQuery('order', getOrders, {
    async onSuccess(orders) {
      const orderNos = orders.map(order => order.orderNo);
      const rawDeliveries = await Promise.all(orderNos.map(orderNo => getDeliveryByOrderNo(orderNo)));

      // TODO: Type
      const deliveryGroup = rawDeliveries.filter(Boolean).reduce((acc, cur) => {
        const delivery = cur as Delivery;
        if (acc[delivery.deliveryNo]) {
          acc[delivery.deliveryNo].push(delivery);
        } else {
          Object.assign(acc, { [delivery.deliveryNo]: [delivery] });
        }
        return acc;
      }, {} as any);
      console.log(deliveryGroup);
    },
  });

  console.log(orders.data);

  // useEffect(() => {
  //   getOrders().then(console.log);
  //   getDeliveries().then(console.log);
  //   getDeliveryByOrderNo(1).then(console.log);
  // }, []);

  return <h1>응애 나 딜리버리 리스트</h1>;
};

export default DeliveryList;
