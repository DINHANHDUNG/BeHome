export interface Company {
  id: number;
  phonenumber: string;
  address: string;
  email: string;
  csdt: string;
  csbh: string;
  qdtt: string;
  csvc: string;
  csbm: string;
  hdmh: string;
  linkYoutube: string;
  linkFacebook: string;
  linkMessenger: string;
  linkTiktok: string;
  images: Array<image>;
}

export interface image {
  id: number;
  imagename: string;
  type: string;
  id_category: number;
}

export interface UpdateCompany {
  phonenumber: string;
  address: string;
  email: string;
  csdt: string;
  csbh: string;
  images: Array<image>;
}

export interface CustomesCompany {
  Company: Company;
  loading: boolean;
  error: boolean;
}
