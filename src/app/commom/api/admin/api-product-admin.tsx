import { EditCategoryProduct } from "../../../types/category-product";
import {
  AddProduct,
  EditProduct,
  GetAllProductByCategory,
  GetAllProductByDMSP,
  GetSearchProduct,
} from "../../../types/product";
import axiosClientAdmin from "./axios-clientAdmin";

const productAPIAdmin = {
  getAllProductAdmin(data: GetAllProductByCategory): Promise<any> {
    const url = "product/getallproductbycategory";
    return axiosClientAdmin.post(url, data);
  },

  getAllProductbyDMSPAdmin(data: GetAllProductByDMSP): Promise<any> {
    const url = "product/getallproductbydmsp";
    return axiosClientAdmin.post(url, data);
  },

  getProductSearchAdmin(data: GetSearchProduct): Promise<any> {
    const url = "product/searchproduct";
    return axiosClientAdmin.post(url, data);
  },

  getProductbyHomePage(): Promise<any> {
    const url = "product/getproducthomepage";
    return axiosClientAdmin.get(url);
  },

  getProductByIdADmin(data: { id: number }): Promise<any> {
    const url = "product/getproductbyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddProductADmin(data: AddProduct): Promise<any> {
    const url = "product/createproduct";
    return axiosClientAdmin.post(url, data);
  },

  postEditProductADmin(data: EditProduct): Promise<any> {
    const url = "product/editproduct";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteProductADmin(data: { id: [number] }): Promise<any> {
    const url = "product/deleteproduct";
    return axiosClientAdmin.post(url, data);
  },
};
export default productAPIAdmin;
