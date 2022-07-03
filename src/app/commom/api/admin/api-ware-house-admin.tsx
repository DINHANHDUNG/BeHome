import { AddWareHouse, EditWareHouse } from "../../../types/ware-house";
import axiosClientAdmin from "./axios-clientAdmin";

const WareHouseAPIAdmin = {
  getAllProductWareHouseAdmin(data: {
    page: number;
    noitem: number;
  }): Promise<any> {
    const url = "kho/getallproductkho";
    return axiosClientAdmin.post(url, data);
  },

  getProductSearchWareHouseAdmin(data: {
    productkey: string;
    page: number;
    noitem: number;
  }): Promise<any> {
    const url = "kho/searchproductkho";
    return axiosClientAdmin.post(url, data);
  },

  getProductWareHouseByIdADmin(data: { id: number }): Promise<any> {
    const url = "kho/getproductkhobyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddWareHouseADmin(data: AddWareHouse): Promise<any> {
    const url = "kho/createproductkho";
    return axiosClientAdmin.post(url, data);
  },

  postEditWareHouseADmin(data: EditWareHouse): Promise<any> {
    const url = "kho/editproductkho";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteWareHouseADmin(data: { id: [number] }): Promise<any> {
    const url = "kho/deleteproductkho";
    return axiosClientAdmin.post(url, data);
  },
};
export default WareHouseAPIAdmin;
