import { Combo } from './combo';
import { Product } from './product';

export interface AddComment {
  id_product: number | null;
  id_combo: number | null;
  contents: string;
  namecustomer: string;
  addresscustomer: string;
  phonenumbercustomer: string;
}

export interface CustomesComment {
  listComment: Array<Comment>;
  loading: boolean;
  total: number;
  error: boolean;
}

export type EditComment = AddComment & { id: number };

export interface Comment {
  id: number;
  id_product: number;
  id_combo: number | null;
  contents: string;
  namecustomer: string;
  addresscustomer: string;
  phonenumbercustomer: string;
  created_date: string;
  updated_date: string;
  product: Product;
  combo: Combo;
  children: Array<Reply>;
  replys: Array<Reply>;
}
export interface Reply {
  id: number;
  id_product: number;
  id_comment: number;
  id_combo: number | null;
  contents: string;
  namecustomer: string;
  addresscustomer: string;
  phonenumbercustomer: string;
  created_date: string;
  updated_date: string;
  product: Product;
  combo: Combo;
  children: Array<Reply>;
}

export interface getAllComment {
  page: number;
  noitem: number;
}

export interface AddReply {
  id_comment: number;
  contents: string;
  namecustomer?: string;
  addresscustomer?: string;
  phonenumbercustomer?: string;
}
