import { Category } from "./category";
import { Combo } from "./combo";
import { Promotion, promotiondetails } from "./promotion";

export interface Product {
  id: number;
  id_category: number;
  id_promotion: number;
  id_rank: number;
  id_manufacturer: number;
  name: string;
  type: string;
  price: number;
  linkvideo: string;
  show: boolean;
  describe: string;
  rank: {
    id: number;
    name: string;
  };
  manufacturer: {
    id: number;
    name: string;
  };
  category: Category;
  promotion: Promotion;
  created_date: string;
  updated_date: string;
  promotiondetails: promotiondetails;
  images: Array<any>;
  productdetails: any;
  comments: any;
  products: Array<Product>;
  combos: Array<Combo>;
}

// export interface AddProduct {
//   id_category: number;
//   id_promotion: number;
//   productcode: string;
//   productname: string;
//   price_origin: number;
//   price_sale: number;
//   configuration: string;
//   describe: string;
// }

export interface AddProduct {
  id_category: number;
  id_rank: number;
  id_manufacturer: number;
  id_promotion: number;
  name: string;
  describe: string;
  price: number;
  linkvideo: string;
  productdetails: [
    {
      title: string;
      specifications: string;
    }
  ];
  images: [
    {
      imagename: string;
      type: string /* "1" |  "2"  1 la anh dau tien, 2 la anh sau*/;
    }
  ];
}

export interface AddProductCombo {
  id_category: Number;
  id_promotion: Number;
  name: string;
  describe: string;
  price: Number;
  linkvideo: string;
  combo_products: [
    {
      id_product: Number;
      amountproduct: string;
    }
  ];
  images: [
    {
      imagename: string;
      type: string;
    }
  ];
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

export interface GetAllProductNeedUpdate {
  sort: number;
  page: number;
  noitem: number;
}

export type GetAllProductByCategory = GetAllProductNeedUpdate & {
  id_category: number;
};

export interface GetAllProductByDMSP {
  id_dmsp: number;
  page: number;
  sort: number;
  noitem: number;
}

export interface GetAllProductUpdate {
  page: number;
  sort: number;
  noitem: number;
}

export interface GetSearchProduct {
  id_category: number | null;
  id_rank: number | null;
  id_manufacturer: number | null;
  productKey: string | null;
  minprice: number | null;
  maxprice: number | null;
  page: number ;
  noitem: number;
  sort?: number;
}
