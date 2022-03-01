import React, { useMemo } from 'react';
import { getDeliveryByOrderNos, getOrders } from '../../fixture/order/mockAPI';
import { useQuery } from 'react-query';
import { Delivery, Order } from '../../fixture/interface';

interface OrderByDeliveryNo extends Delivery {
  orderNo: Order['orderNo'];
}

// TODO: 이 복잡한걸 어떻게 은닉한다??
const DeliveryList = () => {
  const { data: orders } = useQuery(['order'], getOrders);

  const orderNos = useMemo(() => orders && orders.map(order => order.orderNo), [orders]);

  const { data: deliveriesByOrderNo } = useQuery(
    ['deliveriesByOrderNo', orderNos],
    () => orderNos && getDeliveryByOrderNos(orderNos),
    {
      enabled: Array.isArray(orderNos) && orderNos.length > 0,
    },
  );

  const orderByDeliveryNoGroupSquareArray = useMemo(() => {
    if (deliveriesByOrderNo === undefined) return;
    const orderByDeliveryNoHashTable = deliveriesByOrderNo.reduce<{
      [key: string]: OrderByDeliveryNo[];
    }>((deliveryHashTable, delivery) => {
      const matchedOrder = orders?.find(order => order.orderNo === delivery.orderNo);
      if (matchedOrder === undefined) return deliveryHashTable;
      const orderByDeliveryNo = Object.assign(matchedOrder, delivery);

      deliveryHashTable[orderByDeliveryNo.deliveryNo]
        ? deliveryHashTable[orderByDeliveryNo.deliveryNo].push(orderByDeliveryNo)
        : Object.assign(deliveryHashTable, { [orderByDeliveryNo.deliveryNo]: [orderByDeliveryNo] });
      return deliveryHashTable;
    }, {});
    return Object.values(orderByDeliveryNoHashTable);
  }, [deliveriesByOrderNo]);

  console.log(orderByDeliveryNoGroupSquareArray);

  return <h1>응애 나 딜리버리 리스트</h1>;
};

export default DeliveryList;
