import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryAPIAdmin from "../../../app/commom/api/admin/api-category-admin";
import { AddCategory, EditCategory } from "../../../app/types/category";

export const postAddCategoryByIdAdmin = createAsyncThunk(
  "/category/addcategory",
  async (data: AddCategory) => {
    console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.postAddCategoryADmin(data);
    console.log("response Thêm", response);

    return response;
  }
);

export const postEditCategoryByIdAdmin = createAsyncThunk(
  "/categoryadmin/addcategory",
  async (data: EditCategory) => {
    console.log("data truyền vào", data);
    const response = await categoryAPIAdmin.postEditCategoryADmin(data);
    console.log("response sửa", response);

    return response;
  }
);

export const getAllCategoryComboAdmin = createAsyncThunk(
  "/categoryadmin/getallcombo",
  async () => {
    const response = await categoryAPIAdmin.getAllCategoryComboAdmin();
    console.log("getAllCategory", response);

    return response;
  }
);

export const getAllCategoryProductAdmin = createAsyncThunk(
  "/categoryadmin/getallproduct",
  async () => {
    const response = await categoryAPIAdmin.getAllCategoryProductAdmin();
    console.log("getAllCategory", response);

    return response;
  }
);

export const getAllCategoryTrees = createAsyncThunk(
  "/categoryadmin/getallcategorytrees",
  async () => {
    const response = await categoryAPIAdmin.getAllCategoryTree();
    console.log("getallcategorytrees", response);

    return response;
  }
);

export const getCategoryByIdAdmin = createAsyncThunk(
  "/categoryadmin/getbyid",
  async (data: { id: number }) => {
    // console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.getCategoryByIdADmin(data);
    // console.log("getbyid", response);

    return response;
  }
);

export const showCategoryByIdAdmin = createAsyncThunk(
  "/categoryadmin/showbyid",
  async (data: { id: number }) => {
    // console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.showCategoryByIdADmin(data);
    // console.log("getbyid", response);

    return response;
  }
);

export const hiddenCategoryByIdAdmin = createAsyncThunk(
  "/categoryadmin/hiddenbyid",
  async (data: { id: number }) => {
    // console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.hiddenCategoryByIdADmin(data);
    // console.log("getbyid", response);

    return response;
  }
);

export const postDeleteCategoryAdmin = createAsyncThunk(
  "/categoryadmin/deletecategory",
  async (data: { id: [number] }) => {
    console.log("data truyền vào", data);

    const response = await categoryAPIAdmin.postDeleteCategoryADmin(data);
    console.log("deletecategory", response);

    return response;
  }
);


export const patchUpdateSttCategoryAdmin = createAsyncThunk(
  "/categoryadmin/updatesttcategory",
  async (data: { id: number, stt: number }) => {
    

    const response = await categoryAPIAdmin.patchUpdateSttCategory(data);
    console.log("updatesttcategory", response);

    return response;
  }
);
