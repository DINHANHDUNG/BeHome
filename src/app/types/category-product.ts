export interface CategoryProduct {
  id: number;
  dmsp_name: string;
  created_date: string;
  updated_date: string;
}

export interface AddCategoryProduct {
  dmsp_name: string;
}

export type EditCategoryProduct = AddCategoryProduct & { id: number };

export interface DeleteCategoryProduct {
  id: Array<Number>;
}

export interface CustomesCategoryProduct {
  listcategoryproduct: Array<CategoryProduct>;
  total: number;
  loading: boolean;
  error: boolean;
}
