import { Combo } from "./combo";
import { Product } from "./product";

export interface Build {
  id: number;
  name: string;
  builddesigns: Array<BuildDesigns>;
}

export interface BuildDesigns {
  id: number;
  id_category: number;
  id_builddesign: number;
  category: {
    id: number;
    id_parent: number;
    name: string;
    type: string;
    show: false;
    products: Array<Product>;
    combos: Array<Combo>;
  };
  builddesign: {
    id: number;
    name: string;
    builddesigns: BuildDesigns;
  };
}

export interface CustomesBuil {
  listBuild: Array<Build>;
  loading: boolean;
  error: boolean;
}

export interface AddBuild {
  name: string;
  builddesigns: [
    {
      id_category: number;
    }
  ];
}

export type EditBuild = AddBuild & { id: number };
