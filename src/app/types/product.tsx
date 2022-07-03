import { Category } from "./category";
import { Promotion, promotiondetails } from "./promotion";

export interface Product {
  id: number;
  id_category: number;
  id_promotion: number;
  id_dmsps: number;
  product_dmsps: any;
  productcode: string;
  productname: string;
  price_origin: number;
  price_sale: number;
  configuration: string;
  describe: string;
  created_date: string;
  updated_date: string;
  category: Category;
  promotion: Promotion;
  promotiondetails: promotiondetails;
  productimages: Array<any>;
  productdetails: any;
}

export interface AddProduct {
  id_category: number;
  id_promotion: number;
  productcode: string;
  productname: string;
  price_origin: number;
  price_sale: number;
  configuration: string;
  describe: string;
}

export type EditProduct = AddProduct & { id: number };

export interface DeleteProduct {
  id: Array<Number>;
}
export interface CustomesProduct {
  listproduct: Array<Product>;
  total: number;
  loading: boolean;
  categoryname?: string;
  error: boolean;
}

// sort: 0 là mới nhất, 1 là tăng dần, 2 là giảm dần

export interface GetAllProductByCategory {
  id_category: number;
  sort: number;
  page: number;
  noitem: number;
}

export interface GetAllProductByDMSP {
  id_dmsp: number;
  page: number;
  sort: number;
  noitem: number;
}

export interface GetSearchProduct {
  productKey: string | null;
  minprice: number | null;
  maxprice: number | null;
  page: number;
  noitem: number;
}
