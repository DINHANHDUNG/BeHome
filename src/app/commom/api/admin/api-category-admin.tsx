import { AddCategory, EditCategory } from "../../../types/category";
import axiosClientAdmin from "./axios-clientAdmin";

const categoryAPIAdmin = {
  getAllCategoryAdmin(): Promise<any> {
    const url = "category/getallcategory";
    return axiosClientAdmin.get(url);
  },

  getAllCategoryTree(): Promise<any> {
    const url = "category/getallcategorytree";
    return axiosClientAdmin.get(url);
  },

  getCategoryByIdADmin(data: { id: number }): Promise<any> {
    const url = "category/getcategorybyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddCategoryADmin(data: AddCategory): Promise<any> {
    const url = "category/createcategory";
    return axiosClientAdmin.post(url, data);
  },

  postEditCategoryADmin(data: EditCategory): Promise<any> {
    const url = "category/editcategory";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteCategoryADmin(data: { id: [number] }): Promise<any> {
    const url = "category/deletecategory";
    return axiosClientAdmin.post(url, data);
  },
};
export default categoryAPIAdmin;
