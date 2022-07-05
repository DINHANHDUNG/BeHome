import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  getAllPromotionAdmin, getPromotionByIdAdmin, postAddPromotionByIdAdmin, postDeletePromotionAdmin, postEditPromotionByIdAdmin
} from ".";
import { openNotification, openNotificationWithIcon } from "../../../app/hooks";
import { CustomesPromotion, Promotion } from "../../../app/types/promotion";
const initialStateCategory: CustomesPromotion = {
  listpromotion: [] as Array<Promotion>,
  total: 0,
  loading: false,
  error: false,
};

const promotionSliceAdmin = createSlice({
  name: "categoryadmin",
  initialState: initialStateCategory,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesPromotion>) => {
    // getAll
    builder
      .addCase(getAllPromotionAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPromotionAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listpromotion = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllPromotionAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotificationWithIcon("error", "Lấy dữ liệu thất bại");
      });

    // getbyid
    builder
      .addCase(getPromotionByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPromotionByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listpromotion = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getPromotionByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotificationWithIcon("error", "Lấy dữ liệu thất bại");
      });

    // Add category
    builder
      .addCase(postAddPromotionByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddPromotionByIdAdmin.fulfilled, (state, action) => {
        openNotificationWithIcon("success", "Thêm thành công");
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddPromotionByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotificationWithIcon("error", "Thêm không thành công");
      });

    // Sửa category
    builder
      .addCase(postEditPromotionByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditPromotionByIdAdmin.fulfilled, (state, action) => {
        openNotificationWithIcon("success", "Sửa thành công");
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditPromotionByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotificationWithIcon("error", "Sửa không thành công");
      });

    // Xóa category
    builder
      .addCase(postDeletePromotionAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeletePromotionAdmin.fulfilled, (state, action) => {
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
      .addCase(postDeletePromotionAdmin.rejected, (state) => {
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

const { reducer } = promotionSliceAdmin;
export default reducer;
