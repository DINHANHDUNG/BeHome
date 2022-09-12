import { AddCategory, EditCategory } from "../../../types/category";
import axiosClientAdmin from "./axios-clientAdmin";

const categoryAPIAdmin = {
  getAllCategoryProductAdmin(): Promise<any> {
    const url = "category/getallcategoryproduct";
    return axiosClientAdmin.get(url);
  },
  getAllCategoryComboAdmin(): Promise<any> {
    const url = "category/getallcategorycombo";
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

  // show
  showCategoryByIdADmin(data: { id: number }): Promise<any> {
    const url = "category/categoryshowhomepage";
    return axiosClientAdmin.post(url, data);
  },

  // hidden
  hiddenCategoryByIdADmin(data: { id: number }): Promise<any> {
    const url = "category/categoryhiddenhomepage";
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

  patchUpdateSttCategory(data:{id: number, stt: number }): Promise<any> {
    const url = "category/" + data.id + "/stt/" + data.stt;
    return axiosClientAdmin.patch(url);
  }
};
export default categoryAPIAdmin;
