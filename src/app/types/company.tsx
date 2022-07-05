export interface Company {
  id: number;
  phonenumber: string;
  address: string;
  email: string;
  images: Array<image>;
}

export interface image {
  id: number;
  imagename: string;
  type: string;
}

export interface UpdateCompany {
  phonenumber: string;
  address: string;
  email: string;
  images: Array<image>;
}

export interface CustomesCompany {
  Company: Company;
  loading: boolean;
  error: boolean;
}
