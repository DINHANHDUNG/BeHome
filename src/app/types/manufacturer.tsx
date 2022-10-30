export interface Manufacturer {
  manufacturer: {
    id: number;
    name: string;
  };
  count: number;
}

export interface AddManufacturer {
  name: string;
}

export type EditManufacturer = AddManufacturer & { id: number };

export interface DeleteManufacturer {
  id: Array<number>;
}
export interface CustomesManufacturer {
  listManufacturer: Array<Manufacturer>;
  total: number;
  loading: boolean;
  error: boolean;
}
