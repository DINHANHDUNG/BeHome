import { Category } from "./category";
import { Combo } from "./combo";
import { Product } from "./product";

export interface ProductHomePage {
  id: 0;
  id_parent: 0;
  name: string;
  type: string;
  show: true;
  products: Array<Product>;
  combos: Array<Combo>;
  combo_products: Array<Combo>;
}


export interface CustomesProductHomePage {
  listproducthomepage: Array<ProductHomePage>;
  listcombohomepage: Array<Combo>;
  loading: boolean;
  error: boolean;
}
