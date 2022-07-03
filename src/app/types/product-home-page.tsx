import { Category } from "./category";
import { Product } from "./product";

export type ProductHomePage = Category & {
  products: Array<Product>;
};

export interface CustomesProductHomePage {
  listproducthomepage: Array<ProductHomePage>;
  loading: boolean;
  error: boolean;
}
