import { AddManufacturer, EditManufacturer } from "../../../types/manufacturer";
import axiosClientAdmin from "./axios-clientAdmin";

const ManufacturerAPIAdmin = {
  getAllManufacturerAdmin(data: {
    id_category: number;
    page: number;
    noitem: number;
  }): Promise<any> {
    const url = "/manufacturer/getallmanufacturerbycategory";
    return axiosClientAdmin.post(url, data);
  },

  getManufacturerByIdADmin(data: { id: number }): Promise<any> {
    const url = "manufacturer/getmanufacturerbyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddManufacturerADmin(data: AddManufacturer): Promise<any> {
    const url = "manufacturer/createmanufacturer";
    return axiosClientAdmin.post(url, data);
  },

  postEditManufacturerADmin(data: EditManufacturer): Promise<any> {
    const url = "manufacturer/editmanufacturer";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteManufacturerADmin(data: { id: [number] }): Promise<any> {
    const url = "manufacturer/deletemanufacturer";
    return axiosClientAdmin.post(url, data);
  },
};
export default ManufacturerAPIAdmin;
