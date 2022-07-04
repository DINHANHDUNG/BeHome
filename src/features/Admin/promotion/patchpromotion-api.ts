import { createAsyncThunk } from "@reduxjs/toolkit";
import promotionAPIAdmin from "../../../app/commom/api/admin/api-promotion-admin";
import { AddPromotion, EditPromotion } from "../../../app/types/promotion";

export const postAddPromotionByIdAdmin = createAsyncThunk(
  "/promotion/addpromotion",
  async (data: AddPromotion) => {
    console.log("data truyền vào", data);

    const response = await promotionAPIAdmin.postAddPromotionADmin(data);
    console.log("response Thêm", response);

    return response;
  }
);

export const postEditPromotionByIdAdmin = createAsyncThunk(
  "/promotionadmin/addpromotion",
  async (data: EditPromotion) => {
    console.log("data truyền vào", data);
    const response = await promotionAPIAdmin.postEditPromotionADmin(data);
    console.log("response sửa", response);

    return response;
  }
);

export const getAllPromotionAdmin = createAsyncThunk(
  "/promotionadmin/getall",
  async (data: { page: number; noitem: number }) => {
    const response = await promotionAPIAdmin.getAllPromotionAdmin(data);
    console.log("getAllpromotion", response);

    return response;
  }
);

export const getPromotionByIdAdmin = createAsyncThunk(
  "/promotionadmin/getbyid",
  async (data: { id: number }) => {
    // console.log("data truyền vào", data);F

    const response = await promotionAPIAdmin.getPromotionByIdADmin(data);
    // console.log("getbyid", response);

    return response;
  }
);

export const postDeletePromotionAdmin = createAsyncThunk(
  "/promotionadmin/deletepromotion",
  async (data: { id: [number] }) => {
    console.log("data truyền vào", data);

    const response = await promotionAPIAdmin.postDeletePromotionADmin(data);
    console.log("deletepromotion", response);

    return response;
  }
);
