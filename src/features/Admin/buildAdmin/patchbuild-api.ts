import { createAsyncThunk } from '@reduxjs/toolkit';
import buildAPIAdmin from '../../../app/commom/api/admin/api-build-admin';
import { AddBuild, EditBuild } from '../../../app/types/build';

export const postAddBuildByIdAdmin = createAsyncThunk(
  '/Build/addBuild',
  async (data: AddBuild) => {
    const response = await buildAPIAdmin.postAddbuildADmin(data);

    return response;
  }
);

export const postEditBuildByIdAdmin = createAsyncThunk(
  '/Buildadmin/addBuild',
  async (data: EditBuild) => {
    const response = await buildAPIAdmin.postEditbuildADmin(data);

    return response;
  }
);

export const getAllBuildAdmin = createAsyncThunk(
  '/Buildadmin/getall',
  async () => {
    const response = await buildAPIAdmin.getAllbuildAdmin();

    return response;
  }
);

export const getBuildByIdAdmin = createAsyncThunk(
  '/Buildadmin/getbyid',
  async (data: { id: number }) => {
    const response = await buildAPIAdmin.getbuildByIdADmin(data);

    return response;
  }
);

export const postDeleteBuildAdmin = createAsyncThunk(
  '/Buildadmin/deleteBuild',
  async (data: { id: [number] }) => {
    const response = await buildAPIAdmin.postDeletebuildADmin(data);

    return response;
  }
);
