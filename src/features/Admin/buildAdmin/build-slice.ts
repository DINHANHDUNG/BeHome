import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { openNotification, openNotificationWithIcon } from "../../../app/hooks";
import { Build, CustomesBuil } from "../../../app/types/build";
import { CustomesPromotion, Promotion } from "../../../app/types/promotion";
import {
  getAllBuildAdmin,
  getBuildByIdAdmin,
  postAddBuildByIdAdmin,
  postDeleteBuildAdmin,
  postEditBuildByIdAdmin,
} from "./patchbuild-api";
const initialStateCategory: CustomesBuil = {
  listBuild: [] as Array<Build>,
  loading: false,
  error: false,
};

const buildliceAdmin = createSlice({
  name: "Build",
  initialState: initialStateCategory,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesBuil>) => {
    // getAll
    builder
      .addCase(getAllBuildAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBuildAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listBuild = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllBuildAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotificationWithIcon("error", "Lấy dữ liệu thất bại");
      });

    // getbyid
    builder
      .addCase(getBuildByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBuildByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listpromotion = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getBuildByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotificationWithIcon("error", "Lấy dữ liệu thất bại");
      });

    // Add category
    builder
      .addCase(postAddBuildByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddBuildByIdAdmin.fulfilled, (state, action) => {
        openNotificationWithIcon("success", "Thêm thành công");
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddBuildByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotificationWithIcon("error", "Thêm không thành công");
      });

    // Sửa category
    builder
      .addCase(postEditBuildByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditBuildByIdAdmin.fulfilled, (state, action) => {
        openNotificationWithIcon("success", "Sửa thành công");
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditBuildByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotificationWithIcon("error", "Sửa không thành công");
      });

    // Xóa category
    builder
      .addCase(postDeleteBuildAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteBuildAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listpromotion = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Xóa thành công",
          type: "success",
        });
        // console.log("Get all category thành công");
      })
      .addCase(postDeleteBuildAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Xóa thất bại",
          type: "error",
        });
        // console.log("Get category không thành công");
      });
  },
});

const { reducer } = buildliceAdmin;
export default reducer;
