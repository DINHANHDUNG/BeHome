import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { openNotification } from "../../../app/hooks";
import { CustomesOrderAdmin } from "../../../app/types/order";
import {
  getAllOrderCancelAdmin,
  getAllOrderCompletedAdmin,
  getAllOrderWaitForPayAdmin,
  getOrderByIdAdmin,
  OrderCanceledADmin,
  OrderCompletedADmin,
  postAddOrderByIdAdmin,
  postDeleteOrderAdmin,
} from "./patchOrder-api";
const initialStateorderAdmin: CustomesOrderAdmin = {
  listOrder: [],
  total: 0,
  loading: false,
  error: false,
};

const orderSliceAdmin = createSlice({
  name: "orderAdmin",
  initialState: initialStateorderAdmin,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesOrderAdmin>) => {
    // getAllOrderWaitForPayAdmin
    builder
      .addCase(getAllOrderWaitForPayAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrderWaitForPayAdmin.fulfilled, (state, action) => {
        const { result, total } = action.payload;

        state.listOrder = result;
        state.total = total;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllOrderWaitForPayAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getAllOrderCancelAdmin
    builder
      .addCase(getAllOrderCancelAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrderCancelAdmin.fulfilled, (state, action) => {
        const { result, total } = action.payload;

        state.listOrder = result;
        state.total = total;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllOrderCancelAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getAllOrderCompletedAdmin
    builder
      .addCase(getAllOrderCompletedAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOrderCompletedAdmin.fulfilled, (state, action) => {
        const { result, total } = action.payload;

        state.listOrder = result;
        state.total = total;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllOrderCompletedAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getOrderByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderByIdAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;
        state.listOrder = [result];
      })
      .addCase(getOrderByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add orderAdmin
    builder
      .addCase(postAddOrderByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddOrderByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
        const { result } = action.payload;
        // state.listOrder = [...state.listorderAdmin, result];
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddOrderByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thêm không thành công",
          type: "error",
        });
      });

    // Xóa orderAdmin
    builder
      .addCase(postDeleteOrderAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteOrderAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listorderAdmin = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Xóa thành công",
          type: "success",
        });
        // console.log("Get all orderAdmin thành công");
      })
      .addCase(postDeleteOrderAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Xóa thất bại",
          type: "error",
        });
        // console.log("Get orderAdmin không thành công");
      });

    // Hủy orderAdmin
    builder
      .addCase(OrderCanceledADmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(OrderCanceledADmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listorderAdmin = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Hủy thành công",
          type: "success",
        });
        // console.log("Get all orderAdmin thành công");
      })
      .addCase(OrderCanceledADmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Hủy thất bại",
          type: "error",
        });
        // console.log("Get orderAdmin không thành công");
      });

    // Hoàn thành orderAdmin
    builder
      .addCase(OrderCompletedADmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(OrderCompletedADmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listorderAdmin = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Đơn đã hoàn thành",
          type: "success",
        });
        // console.log("Get all orderAdmin thành công");
      })
      .addCase(OrderCompletedADmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Hoàn thành đơn thất bại",
          type: "error",
        });
        // console.log("Get orderAdmin không thành công");
      });
  },
});

const { reducer } = orderSliceAdmin;
export default reducer;
