import { EditCategoryProduct } from '../../../types/category-product';
import {
  AddProduct,
  EditProduct,
  GetAllProductByCategory,
  GetAllProductByDMSP,
  GetAllProductNeedUpdate,
  GetAllProductUpdate,
  GetSearchProduct,
  GetSearchProduct2,
} from '../../../types/product';
import axiosClientAdmin from './axios-clientAdmin';

const productAPIAdmin = {
  getAllProductByCategoryAdmin(data: GetAllProductByCategory): Promise<any> {
    const url = 'product/getallproductbycategory';
    return axiosClientAdmin.post(url, data);
  },

  getAllProductNeedUpdateAdmin(data: GetAllProductUpdate): Promise<any> {
    const url = 'product/getallproductneedupdate';
    return axiosClientAdmin.post(url, data);
  },

  getProductByIdADmin(data: { id: number }): Promise<any> {
    const url = 'product/getproductbyid';
    return axiosClientAdmin.post(url, data);
  },

  showProductByIdADmin(data: { id: number }): Promise<any> {
    const url = 'product/productshowhomepage';
    return axiosClientAdmin.post(url, data);
  },

  hiddenProductByIdADmin(data: { id: number }): Promise<any> {
    const url = 'product/producthiddenhomepage';
    return axiosClientAdmin.post(url, data);
  },

  getProductSearchAdmin(data: GetSearchProduct): Promise<any> {
    const url = 'product/searchproduct';
    return axiosClientAdmin.post(url, data);
  },
  
  getProductSearch2Admin(data: GetSearchProduct2): Promise<any> {
    const url = 'product/searchproduct';
    return axiosClientAdmin.post(url, data);
  },

  getProductbyHomePage(): Promise<any> {
    const url = 'homepage/getproducthomepage';
    return axiosClientAdmin.get(url);
  },

  postAddProductADmin(data: AddProduct): Promise<any> {
    const url = 'product/createproduct';
    return axiosClientAdmin.post(url, data);
  },

  postEditProductADmin(data: EditProduct): Promise<any> {
    const url = 'product/editproduct';
    return axiosClientAdmin.post(url, data);
  },

  postDeleteProductADmin(data: { id: [number] }): Promise<any> {
    const url = 'product/deleteproduct';
    return axiosClientAdmin.post(url, data);
  },
};
export default productAPIAdmin;
