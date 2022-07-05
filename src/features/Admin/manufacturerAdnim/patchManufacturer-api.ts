import { createAsyncThunk } from "@reduxjs/toolkit";
import ManufacturerAPIAdmin from "../../../app/commom/api/admin/api-manufacturer";
import {
  AddManufacturer,
  EditManufacturer,
} from "../../../app/types/manufacturer";

export const postAddManufacturerByIdAdmin = createAsyncThunk(
  "/Manufacturer/addManufacturer",
  async (data: AddManufacturer) => {
    const response = await ManufacturerAPIAdmin.postAddManufacturerADmin(data);

    return response;
  }
);


export const postEditManufacturerByIdAdmin = createAsyncThunk(
  "/Manufactureradmin/editManufacturer",
  async (data: EditManufacturer) => {
    const response = await ManufacturerAPIAdmin.postEditManufacturerADmin(data);

    return response;
  }
);

export const getAllManufacturerAdmin = createAsyncThunk(
  "/Manufactureradmin/getallManufacturer",
  async (data: { id_category: number; page: number; noitem: number }) => {
    const response = await ManufacturerAPIAdmin.getAllManufacturerAdmin(data);

    return response;
  }
);

export const getManufacturerByIdAdmin = createAsyncThunk(
  "/Manufactureradmin/getbyidManufacturer",
  async (data: { id: number }) => {

    const response = await ManufacturerAPIAdmin.getManufacturerByIdADmin(data);

    return response;
  }
);

export const postDeleteManufacturerAdmin = createAsyncThunk(
  "/Manufactureradmin/deleteManufacturer",
  async (data: { id: [number] }) => {

    const response = await ManufacturerAPIAdmin.postDeleteManufacturerADmin(
      data
    );

    return response;
  }
);
