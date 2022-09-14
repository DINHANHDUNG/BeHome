import { Combo } from "./combo";
import { Product } from "./product";

export interface AddOrder {
  namecustomer: string;
  addresscustomer: string;
  phonenumbercustomer: string;
  emailcustomer: string;
  totalmoney: number;
  orderdetails: Array<OrderDetail>;
}

export interface OrderDetail {
  id: number;
  id_order: number;
  id_product: number;
  id_combo: number;
  amount: number;
  order: Order;
  product: Product;
  combo: Combo;
  id_productproperties: number;
  productproperties: ProductpropertiesType;
}

export interface ProductpropertiesType {
  id: number;
  id_product: number;
  nameproperties: string;
  price: number;
  propduct: Product
}

export interface CustomerCart {
  namecustomer: string;
  addresscustomer: string;
  phonenumbercustomer: string;
  emailcustomer: string;
  totalmoney: number;
  orderdetails: Array<any>;
}

export interface CartDetail {
  id_product: number;
  id_combo: number;
  amount: number;
  product: Product;
  combo: Combo;
}

export interface GetOrder {
  page: number;
  noitem: number;
}

export interface Order {
  id: number;
  code: string;
  namecustomer: string;
  addresscustomer: string;
  phonenumbercustomer: string;
  emailcustomer: string;
  status: string;
  created_date: string;
  updated_date: string;
  totalmoney: number;
  orderdetails: Array<OrderDetail>;
}

export interface CustomesOrderAdmin {
  listOrder: Array<Order>;
  loading: boolean;
  error: boolean;
  total: number;
}
