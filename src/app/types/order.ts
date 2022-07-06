export interface AddOrder {
  namecustomer: string;
  addresscustomer: string;
  phonenumbercustomer: string;
  emailcustomer: string;
  orderdetails: Array<OrderDetail>;
}

export interface OrderDetail {
  id_product: number;
  id_combo: number;
  amount: number;
}

export interface GetOrder {
  page: number;
  noitem: number;
}
