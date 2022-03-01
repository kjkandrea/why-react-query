import React, { useMemo } from 'react';
import { getDeliveryByOrderNos, getOrderedProductByOrderNo, getOrders } from '../../fixture/order/mockAPI';
import { useQuery } from 'react-query';
import { Delivery, Order, OrderedProduct } from '../../fixture/interface';

interface OrderByDeliveryNo extends Delivery {
  orderNo: Order['orderNo'];
  orderProducts: OrderedProduct[];
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

  const { data: orderedProducts } = useQuery(
    ['orderedProducts', orderNos],
    () => orderNos && getOrderedProductByOrderNo(orderNos),
    {
      enabled: Array.isArray(orderNos) && orderNos.length > 0,
    },
  );

  const orderedProductByDeliveryNoGroupSquareArray = useMemo(() => {
    if (deliveriesByOrderNo === undefined) return;
    if (orderedProducts === undefined) return;
    const orderByDeliveryNoHashTable = deliveriesByOrderNo.reduce<{
      [key: string]: OrderByDeliveryNo[];
    }>((deliveryHashTable, delivery) => {
      const matchedOrder = orders?.find(order => order.orderNo === delivery.orderNo);
      if (matchedOrder === undefined) return deliveryHashTable;
      const orderByDeliveryNo = Object.assign(matchedOrder, delivery, {
        orderProducts: orderedProducts.filter(orderedProduct => orderedProduct.orderNo === delivery.orderNo),
      });

      deliveryHashTable[orderByDeliveryNo.deliveryNo]
        ? deliveryHashTable[orderByDeliveryNo.deliveryNo].push(orderByDeliveryNo)
        : Object.assign(deliveryHashTable, { [orderByDeliveryNo.deliveryNo]: [orderByDeliveryNo] });
      return deliveryHashTable;
    }, {});
    return Object.values(orderByDeliveryNoHashTable);
  }, [deliveriesByOrderNo, orderedProducts]);

  console.log(orderedProductByDeliveryNoGroupSquareArray);

  return orderedProductByDeliveryNoGroupSquareArray === undefined ? (
    <p className={'data__empty'}>데이터가 없습니다.</p>
  ) : (
    <ul>
      {orderedProductByDeliveryNoGroupSquareArray.map(square => {
        const representOrder = square[0];
        return (
          <li key={representOrder.deliveryNo}>
            <h2>배송번호 : {representOrder.deliveryNo}</h2>
            <p>배송지 : {representOrder.deliveryAddress}</p>
            <ul>
              {square.map(order => (
                <li key={order.orderNo}>
                  <h3>주문 번호{order.orderNo}</h3>
                  <ul>
                    {order.orderProducts.map(product => (
                      <li key={product.productNo}>
                        <h4>{product.productName}</h4>
                        <p>판매가 : {product.salePrice.toLocaleString('en-us')}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default DeliveryList;
