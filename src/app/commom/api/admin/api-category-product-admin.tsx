import {
  AddCategoryProduct,
  EditCategoryProduct,
} from "../../../types/category-product";
import axiosClientAdmin from "./axios-clientAdmin";

const categoryProductAPIAdmin = {
  getAllCategoryProductAdmin(data: {
    page: number;
    noitem: number;
  }): Promise<any> {
    const url = "dmsp/getalldanhmucsanpham";
    return axiosClientAdmin.post(url, data);
  },

  getCategoryProductByIdADmin(data: { id: number }): Promise<any> {
    const url = "dmsp/getdanhmucsanphambyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddCategoryProductADmin(data: AddCategoryProduct): Promise<any> {
    const url = "dmsp/createdanhmucsanpham";
    return axiosClientAdmin.post(url, data);
  },

  postEditCategoryProductADmin(data: EditCategoryProduct): Promise<any> {
    const url = "dmsp/editdanhmucsanpham";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteCategoryProductADmin(data: { id: [number] }): Promise<any> {
    const url = "dmsp/deletedanhmucsanpham";
    return axiosClientAdmin.post(url, data);
  },
};
export default categoryProductAPIAdmin;
