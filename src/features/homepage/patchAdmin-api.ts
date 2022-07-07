import { createAsyncThunk } from "@reduxjs/toolkit";
import productAPIAdmin from "../../app/commom/api/admin/api-product-admin";

export const getProductHomePage = createAsyncThunk(
  "/homepage/getproduct",
  async () => {
    const response = await productAPIAdmin.getProductbyHomePage();

    return response;
  }
);
