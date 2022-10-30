import { createAsyncThunk } from '@reduxjs/toolkit';
import ManufacturerAPIAdmin from '../../../app/commom/api/admin/api-manufacturer';
import RankAPIAdmin from '../../../app/commom/api/admin/api-rank';
import { AddRank, EditRank } from '../../../app/types/rank';

export const postAddRankByIdAdmin = createAsyncThunk(
  '/Rank/addRank',
  async (data: AddRank) => {
    const response = await RankAPIAdmin.postAddRankADmin(data);

    return response;
  }
);

export const postEditRankByIdAdmin = createAsyncThunk(
  '/Rankadmin/editRank',
  async (data: EditRank) => {
    const response = await RankAPIAdmin.postEditRankADmin(data);

    return response;
  }
);

export const getAllRankAdmin = createAsyncThunk(
  '/Rankadmin/getallRank',
  async (data: { id_category: number; id_manufacturer?: number }) => {
    const response = await RankAPIAdmin.getAllRankAdmin(data);

    return response;
  }
);

export const getRankByIdAdmin = createAsyncThunk(
  '/Rankadmin/getbyidRank',
  async (data: { id: number }) => {

    const response = await RankAPIAdmin.getRankByIdADmin(data);

    return response;
  }
);

export const postDeleteRankAdmin = createAsyncThunk(
  '/Rankadmin/deleteRank',
  async (data: { id: [number] }) => {

    const response = await RankAPIAdmin.postDeleteRankADmin(
      data
    );

    return response;
  }
);
