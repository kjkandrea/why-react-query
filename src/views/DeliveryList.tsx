import React, { useEffect } from 'react';
import { getDeliveries, getOrders } from '../../fixture/order/mockAPI';

const DeliveryList = () => {
  useEffect(() => {
    getOrders().then(console.log);
    getDeliveries().then(console.log);
  }, []);

  return <h1>응애 나 딜리버리 리스트</h1>;
};

export default DeliveryList;
