import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPIAdmin from "../../../app/commom/api/admin/api-product-admin";
import {
  AddProduct,
  EditProduct,
  GetAllProductByCategory,
  GetAllProductByDMSP,
  GetSearchProduct,
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
  async (data: GetAllProductByDMSP) => {
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

export const getProductByIdAdmin = createAsyncThunk(
  "/productadmin/getbyid",
  async (data: { id: number }) => {
    const response = await productAPIAdmin.getProductByIdADmin(data);

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
