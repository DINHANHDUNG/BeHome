export interface WareHouse {
  id: number;
  productcode: string;
  productname: string;
  numberinput: number;
  numberoutput: number;
}

export interface AddWareHouse {
  productcode: string;
  productname: string;
  numberinput: number;
  numberoutput: number;
}

export type EditWareHouse = AddWareHouse & { id: number };

export interface DeleteWareHouse {
  id: Array<Number>;
}

export interface CustomesWareHouse {
  listWareHouse: Array<WareHouse>;
  total: number;
  loading: boolean;
  error: boolean;
}
