import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPIAdmin from "../../../app/commom/api/admin/api-product-admin";
import {
  AddProduct,
  EditProduct,
  GetAllProductByCategory,
  GetAllProductByDMSP,
  GetAllProductUpdate,
  GetSearchProduct,
  GetSearchProduct2,
} from "../../../app/types/product";

export const postAddProductByIdAdmin = createAsyncThunk(
  "/productadmin/addproduct",
  async (data: AddProduct) => {
    const response = await productAPIAdmin.postAddProductADmin(data);

    return response;
  }
);

export const postEditProductByIdAdmin = createAsyncThunk(
  "/productadmin/editproduct",
  async (data: EditProduct) => {
    const response = await productAPIAdmin.postEditProductADmin(data);

    return response;
  }
);

export const getAllProductAdmin = createAsyncThunk(
  "/productadmin/getallbycategory",
  async (data: GetAllProductByCategory) => {
    const response = await productAPIAdmin.getAllProductByCategoryAdmin(data);

    return response;
  }
);

export const getAllProductNeedUpdate = createAsyncThunk(
  "/productadmin/getallneedupdate",
  async (data: GetAllProductUpdate) => {
    const response = await productAPIAdmin.getAllProductNeedUpdateAdmin(data);

    return response;
  }
);
export const getProductSearchAdmin = createAsyncThunk(
  "/productadmin/getproductsearch",
  async (data: GetSearchProduct) => {
    const response = await productAPIAdmin.getProductSearchAdmin(data);

    return response;
  }
);

export const getProductSearch2Admin = createAsyncThunk(
  "/productadmin/getproductsearch2",
  async (data: GetSearchProduct2) => {
    const response = await productAPIAdmin.getProductSearch2Admin(data);

    return response;
  }
);

export const getProductByIdAdmin = createAsyncThunk(
  "/productadmin/getbyid",
  async (data: { id: number }) => {
    const response = await productAPIAdmin.getProductByIdADmin(data);

    return response;
  }
);

export const showProductByIdAdmin = createAsyncThunk(
  "/productadmin/showbyid",
  async (data: { id: number }) => {
    const response = await productAPIAdmin.showProductByIdADmin(data);

    return response;
  }
);

export const hiddenProductByIdAdmin = createAsyncThunk(
  "/productadmin/hiddenbyid",
  async (data: { id: number }) => {
    const response = await productAPIAdmin.hiddenProductByIdADmin(data);

    return response;
  }
);

export const postDeleteProductAdmin = createAsyncThunk(
  "/productadmin/deleteproduct",
  async (data: { id: [number] }) => {
    // console.log("data truyền vào", data);

    const response = await productAPIAdmin.postDeleteProductADmin(data);
    // console.log("deleteproduct", response);

    return response;
  }
);
