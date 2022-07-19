import { createAsyncThunk } from "@reduxjs/toolkit";
import comboAPIAdmin from "../../../app/commom/api/admin/api-combo-admin";
import { AddCombo, EditCombo, GetAllCombo, SearchCombo } from "../../../app/types/combo";
import { GetAllProductUpdate } from "../../../app/types/product";

export const postAddComboByIdAdmin = createAsyncThunk(
  "/Comboadmin/addCombo",
  async (data: AddCombo) => {

    const response = await comboAPIAdmin.postAddComboADmin(data);

    return response;
  }
);

export const postEditComboByIdAdmin = createAsyncThunk(
  "/Comboadmin/editCombo",
  async (data: EditCombo) => {
    const response = await comboAPIAdmin.postEditComboADmin(data);

    return response;
  }
);

export const getAllComboAdmin = createAsyncThunk(
  "/Comboadmin/getallbycategory",
  async (data: GetAllCombo) => {
    const response = await comboAPIAdmin.getAllComboByCategoryAdmin(data);

    return response;
  }
);


export const getAllComboNeedUpdateAdmin = createAsyncThunk(
  "/Comboadmin/getAllComboNeedUpdateAdmin",
  async (data: GetAllProductUpdate) => {
    const response = await comboAPIAdmin.getAllComboNeedUpdateAdmin(data);

    return response;
  }
);

export const getComboSearchAdmin = createAsyncThunk(
  "/Comboadmin/getCombosearch",
  async (data: SearchCombo) => {
    const response = await comboAPIAdmin.getComboSearchAdmin(data);

    return response;
  }
);

export const getComboByIdAdmin = createAsyncThunk(
  "/Comboadmin/getbyid",
  async (data: { id: number }) => {
    const response = await comboAPIAdmin.getComboByIdADmin(data);

    return response;
  }
);

export const postDeleteComboAdmin = createAsyncThunk(
  "/Comboadmin/deleteCombo",
  async (data: { id: [number] }) => {
    // console.log("data truyền vào", data);

    const response = await comboAPIAdmin.postDeleteComboADmin(data);
    // console.log("deleteproduct", response);

    return response;
  }
);
