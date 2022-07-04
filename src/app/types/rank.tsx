export interface Rank {
  rank: {
    id: number;
    name: string;
  };
  count: number;
}

export interface AddRank {
  name: string;
}

export type EditRank = AddRank & { id: number };

export interface DeleteRank {
  id: Array<Number>;
}
export interface CustomesRank {
  listRank: Array<Rank>;
  total: number;
  loading: boolean;
  error: boolean;
}
