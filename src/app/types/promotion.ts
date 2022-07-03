export interface Promotion {
  id: 0;
  Promotion_name: string;
  show: boolean;
  created_date: string;
  updated_date: string;
  promotiondetails: Array<promotiondetails>;
}

export interface promotiondetails {
  id: number;
  id_promotion: number;
  promotiondetail_name: string;
  promotion: string;
}

export interface AddPromotion {
  Promotion_name: string;
  promotiondetails: Array<promotiondetails>;
}

export type EditPromotion = AddPromotion & { id: number };

export interface DeletePromotion {
  id: Array<Number>;
}
export interface CustomesPromotion {
  listpromotion: Array<Promotion>;
  total: number;
  loading: boolean;
  error: boolean;
}
