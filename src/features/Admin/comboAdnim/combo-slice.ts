import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { openNotification } from "../../../app/hooks";
import { CustomesCombo } from "../../../app/types/combo";
import {
  getAllComboAdmin,
  getAllComboNeedUpdateAdmin,
  getComboByIdAdmin,
  getComboSearchAdmin,
  postAddComboByIdAdmin,
  postDeleteComboAdmin,
  postEditComboByIdAdmin,
} from "./patchCombo-api";
const initialState: CustomesCombo = {
  listCombo: [],
  loading: false,
  total: 0,
  categoryname: "",
  error: false,
};

const comboSliceAdmin = createSlice({
  name: "Comboadmin",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesCombo>) => {
    // getAllbycategpry
    builder
      .addCase(getAllComboAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllComboAdmin.fulfilled, (state, action) => {
        const { result, categoryname, total } = action.payload;
        state.listCombo = result;
        state.categoryname = categoryname;
        state.total = total;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllComboAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // need update
    builder
      .addCase(getAllComboNeedUpdateAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllComboNeedUpdateAdmin.fulfilled, (state, action) => {
        const { result, categoryname, total } = action.payload;
        state.listCombo = result;
        state.categoryname = categoryname;
        state.total = total;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllComboNeedUpdateAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });
    // search
    builder
      .addCase(getComboSearchAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComboSearchAdmin.fulfilled, (state, action) => {
        const { result, total } = action.payload;
        state.listCombo = result;
        state.total = total;
        state.loading = false;
        state.error = false;
      })
      .addCase(getComboSearchAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getComboByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getComboByIdAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;
        state.listCombo = [result];
        state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getComboByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add combo
    builder
      .addCase(postAddComboByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddComboByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddComboByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thêm không thành công",
          type: "error",
        });
      });

    // Sửa combo
    builder
      .addCase(postEditComboByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditComboByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Sửa thành công",
          type: "success",
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditComboByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Sửa không thành công",
          type: "error",
        });
      });

    // Xóa combo
    builder
      .addCase(postDeleteComboAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteComboAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listcategory = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Xóa thành công",
          type: "success",
        });
        // console.log("Get all category thành công");
      })
      .addCase(postDeleteComboAdmin.rejected, (state) => {
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

const { reducer } = comboSliceAdmin;
// export const { SortAscendingState, SortDecreaseState } =
//   comboSliceAdmin.actions;
export default reducer;
