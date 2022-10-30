import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  getAllProductAdmin,
  getProductByIdAdmin,
  postAddProductByIdAdmin,
  postDeleteProductAdmin,
  postEditProductByIdAdmin,
} from '.';
import { openNotification } from '../../../app/hooks';
import { CustomesProduct, Product } from '../../../app/types/product';
import {
  getAllProductNeedUpdate,
  getProductSearch2Admin,
  getProductSearchAdmin,
  hiddenProductByIdAdmin,
  showProductByIdAdmin,
} from './patchProduct-api';
const initialState: CustomesProduct = {
  listproduct: [] as Array<Product>,
  total: 0,
  loading: false,
  categoryname: '',
  error: false,
};

const productSliceAdmin = createSlice({
  name: 'productadmin',
  initialState: initialState,
  reducers: {
    // SortAscendingState(state, action: PayloadAction<any>) {
    //   // state.value += action.payload
    //   console.log("Tăng", action.payload);
    //   state.listproduct = action.payload.listproduct
    //     ?.slice()
    //     .sort(function (a: any, b: any) {
    //       console.log(a);
    //       console.log(b);
    //       return a.refund - b.refund;
    //     });
    // },
    // SortDecreaseState(state, action: PayloadAction<any>) {
    //   // state.value += action.payload
    //   console.log("Giảm", action);
    //   state.listproduct = action.payload.listproduct
    //     ?.slice()
    //     .sort(function (a: any, b: any) {
    //       console.log(a);
    //       console.log(b);
    //       return b.refund - a.refund;
    //     });
    // },
  },
  extraReducers: (builder: ActionReducerMapBuilder<CustomesProduct>) => {
    // getAllbycategpry
    builder
      .addCase(getAllProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductAdmin.fulfilled, (state, action) => {
        const { result, total, categoryname } = action.payload;
        state.listproduct = result;
        state.total = total;
        state.categoryname = categoryname;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllProductAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // getAllneedupdate
    builder
      .addCase(getAllProductNeedUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductNeedUpdate.fulfilled, (state, action) => {
        const { result, total } = action.payload;
        state.listproduct = result;
        state.total = total;
        state.loading = false;
        state.error = false;
      })
      .addCase(getAllProductNeedUpdate.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // Show
    builder
      .addCase(showProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(showProductByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: 'Thao tác thành công',
          type: 'success',
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(showProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Thao tác không thành công',
          type: 'error',
        });
      });

    // hidden
    builder
      .addCase(hiddenProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(hiddenProductByIdAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        openNotification({
          message: 'Thao tác thành công',
          type: 'success',
        });
      })
      .addCase(hiddenProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Thao tác không thành công',
          type: 'error',
        });
      });

    // search
    builder
      .addCase(getProductSearchAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductSearchAdmin.fulfilled, (state, action) => {
        const { result, total, categoryname } = action.payload;
        state.listproduct = result;
        state.total = total;
        state.loading = false;
        state.error = false;
        state.categoryname = categoryname;
      })
      .addCase(getProductSearchAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // search 2
    builder
      .addCase(getProductSearch2Admin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductSearch2Admin.fulfilled, (state, action) => {
        const { result, total, categoryname } = action.payload;
        state.listproduct = result;
        state.total = total;
        state.loading = false;
        state.error = false;
        state.categoryname = categoryname;
      })
      .addCase(getProductSearch2Admin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // getbyid
    builder
      .addCase(getProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductByIdAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;
        state.listproduct = [result];
        state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // Add product
    builder
      .addCase(postAddProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddProductByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: 'Thêm thành công',
          type: 'success',
        });
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Thêm không thành công',
          type: 'error',
        });
      });

    // Sửa product
    builder
      .addCase(postEditProductByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditProductByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: 'Sửa thành công',
          type: 'success',
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditProductByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Sửa không thành công',
          type: 'error',
        });
      });

    // Xóa product
    builder
      .addCase(postDeleteProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteProductAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listcategory = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: 'Xóa thành công',
          type: 'success',
        });
        // console.log("Get all category thành công");
      })
      .addCase(postDeleteProductAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Xóa thất bại',
          type: 'error',
        });
        // console.log("Get category không thành công");
      });
  },
});

const { reducer } = productSliceAdmin;
// export const { SortAscendingState, SortDecreaseState } =
//   productSliceAdmin.actions;
export default reducer;
