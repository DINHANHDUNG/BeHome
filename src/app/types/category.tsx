export interface Category {
  id: number;
  id_parent: number;
  categoryname: string;
  name_parent: string;
  show: boolean;
  children: Array<Category>;
}

export interface AddCategory {
  id_parent?: number | null;
  categoryname: string;
}

export type EditCategory = AddCategory & { id: number };

export interface DeleteCategory {
  id: Array<Number>;
}

export interface CustomesCategory {
  listcategory: Array<Category>;
  loading: boolean;
  error: boolean;
}
