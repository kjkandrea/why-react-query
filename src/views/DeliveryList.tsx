import React, { useMemo } from 'react';
import { getDeliveryByOrderNos, getOrders } from '../../fixture/order/mockAPI';
import { useQuery } from 'react-query';
import { Delivery, Order } from '../../fixture/interface';

interface OrderByDeliveryNo extends Delivery {
  orderNo: Order['orderNo'];
}

const DeliveryList = () => {
  const { data: orders } = useQuery(['order'], getOrders, {
    async onSuccess(orders) {
      const orderNos = orders.map(order => order.orderNo);
      const rawDeliveries = await getDeliveryByOrderNos(orderNos);
      const orderByDeliveryNoHashTable = rawDeliveries.reduce<{
        [key: string]: OrderByDeliveryNo[];
      }>((deliveryHashTable, delivery) => {
        const matchedOrder = orders.find(order => order.orderNo === delivery.orderNo);
        if (matchedOrder === undefined) return deliveryHashTable;
        const orderByDeliveryNo = Object.assign(matchedOrder, delivery);

        deliveryHashTable[orderByDeliveryNo.deliveryNo]
          ? deliveryHashTable[orderByDeliveryNo.deliveryNo].push(orderByDeliveryNo)
          : Object.assign(deliveryHashTable, { [orderByDeliveryNo.deliveryNo]: [orderByDeliveryNo] });
        return deliveryHashTable;
      }, {});
      console.log(orderByDeliveryNoHashTable);
    },
  });

  const orderNos = useMemo(() => orders && orders.map(order => order.orderNo), [orders]);

  const { data: deliveriesByOrderNo } = useQuery(
    ['deliveriesByOrderNo', orderNos],
    () => orderNos && getDeliveryByOrderNos(orderNos),
    {
      enabled: Array.isArray(orderNos) && orderNos.length > 0,
    },
  );

  console.log(deliveriesByOrderNo);

  return <h1>응애 나 딜리버리 리스트</h1>;
};

export default DeliveryList;
