import { Category } from "./category";
import { Comment } from "./comment";
import { Product } from "./product";
import { Promotion } from "./promotion";

export interface AddCombo {
  id_category: number;
  id_promotion: number;
  name: string;
  describe: string;
  price: number;
  linkvideo: string;
  combo_products: [
    {
      id_product: number;
      amountproduct: number;
    }
  ];
  images: [
    {
      imagename: string;
      type: string;
    }
  ];
}

export type EditCombo = AddCombo & { id: number };

export interface Combo {
  id: number;
  id_category: number;
  id_promotion: number;
  name: string;
  describe: string;
  price: number;
  linkvideo: string;
  show: boolean;
  created_date: string;
  updated_date: string;
  category: Category;
  promotion: Promotion;
  combo_products: Array<{
    id: number;
    id_product: number;
    id_combo: number;
    amountproduct: number;
    product: Product;
    combo: Combo;
  }>;
  type: string;
  images: Array<any>;
  comments: Array<Comment>;
}

export interface CustomesCombo {
  listCombo: Array<Combo>;
  categoryname: string;
  loading: boolean;
  total: number;
  error: boolean;
}

export interface SearchCombo {
  id_category: number;
  comboKey: string;
  minprice: number | null;
  maxprice: number | null;
  page: number;
  noitem: number;
}

export interface GetAllCombo {
  id_category: number;
  page: number;
  noitem: number;
  sort: number;
}
