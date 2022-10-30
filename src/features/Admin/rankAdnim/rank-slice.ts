import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { openNotification } from '../../../app/hooks';
import { CustomesRank, Rank } from '../../../app/types/rank';
import {
  getAllRankAdmin,
  getRankByIdAdmin,
  postAddRankByIdAdmin,
  postDeleteRankAdmin,
  postEditRankByIdAdmin
} from './patchRank-api';

const initialStateRank: CustomesRank = {
  listRank: [] as Array<Rank>,
  total: 0,
  loading: false,
  error: false,
};

const rankSliceAdmin = createSlice({
  name: 'rankadmin',
  initialState: initialStateRank,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesRank>) => {
    // getAll
    builder
      .addCase(getAllRankAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRankAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listRank = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllRankAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // getbyid
    builder
      .addCase(getRankByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRankByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listRank = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getRankByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // Add Rank
    builder
      .addCase(postAddRankByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddRankByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: 'Thêm thành công',
          type: 'success',
        });
        const { result } = action.payload;
        state.listRank = [...state.listRank, result];
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddRankByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Thêm không thành công',
          type: 'error',
        });
      });

    // Sửa Rank
    builder
      .addCase(postEditRankByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditRankByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: 'Sửa thành công',
          type: 'success',
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditRankByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Sửa không thành công',
          type: 'error',
        });
      });

    // Xóa Rank
    builder
      .addCase(postDeleteRankAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteRankAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listRank = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: 'Xóa thành công',
          type: 'success',
        });
        // console.log("Get all Rank thành công");
      })
      .addCase(postDeleteRankAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Xóa thất bại',
          type: 'error',
        });
        // console.log("Get Rank không thành công");
      });
  },
});

const { reducer } = rankSliceAdmin;
export default reducer;
