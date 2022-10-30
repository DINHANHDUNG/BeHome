export interface Promotion {
  id: 0;
  name: string;
  show: boolean;
  created_date: string;
  updated_date: string;
  promotiondetails: Array<promotiondetails>;
}

export interface promotiondetails {
  id: number;
  id_promotion: number;
  name: string;
}

export interface AddPromotion {
  name: string;
  promotiondetails: Array<promotiondetails>;
}

export type EditPromotion = AddPromotion & { id: number };

export interface DeletePromotion {
  id: Array<number>;
}
export interface CustomesPromotion {
  listpromotion: Array<Promotion>;
  total: number;
  loading: boolean;
  error: boolean;
}
