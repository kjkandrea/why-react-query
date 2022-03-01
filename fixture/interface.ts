export interface Order {
  orderNo: number;
  ordererName: string;
}

export interface Delivery {
  orderNo: number;
  deliveryNo: number;
  deliveryAddress: string;
}

export interface OrderedProduct {
  orderNo: number;
  productNo: number;
  productName: string;
  salePrice: number;
}
