export interface Category {
  id: number;
  id_parent: number;
  name: string;
  name_parent: string;
  show: boolean;
  action: boolean;
  children: Array<Category>;
  products: Array<any>;
  combos: Array<any>;
  type: string;
  homepage: boolean,
  stt: number
}

export interface AddCategory {
  id_parent?: number | null;
  name: string;
  type: 'PRODUCT' | 'COMBO';
}

export type EditCategory = AddCategory & { id: number };

export interface DeleteCategory {
  id: Array<number>;
}

export interface CustomesCategory {
  listcategoryCombo: Array<Category>;
  listcategoryProduct: Array<Category>;
  loading: boolean;
  error: boolean;
}

export interface Category3 {
  combo: [
    {
      id: 3;
      id_parent: null;
      name_parent: '';
      name: 'Test combo';
      categorytrees: null;
      homepage: boolean
    }
  ];
  product: [
    {
      id: 1;
      id_parent: null;
      name_parent: '';
      name: 'test';
      homepage: boolean
      categorytrees: [
        {
          id: 4;
          id_parent: 1;
          name_parent: 'test';
          name: 'Test poduct con';
          categorytrees: null;
          homepage: boolean
        }
      ];
    }
  ];
}
