// interface Product {
// 	productNo: number,
// 	productName: string,
// 	price: number
// }

export interface Order {
  orderNo: number;
  ordererName: string;
  // orderProducts: Product[]
}

export interface Delivery {
  orderNo: number;
  deliveryNo: number;
  deliveryAddress: string;
}
