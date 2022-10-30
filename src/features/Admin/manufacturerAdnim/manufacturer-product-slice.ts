import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { openNotification } from '../../../app/hooks';
import {
  CustomesManufacturer,
  Manufacturer,
} from '../../../app/types/manufacturer';
import {
  getAllManufacturerAdmin,
  getManufacturerByIdAdmin,
  postAddManufacturerByIdAdmin,
  postDeleteManufacturerAdmin,
  postEditManufacturerByIdAdmin,
} from './patchManufacturer-api';
const initialStateManufacturer: CustomesManufacturer = {
  listManufacturer: [] as Array<Manufacturer>,
  total: 0,
  loading: false,
  error: false,
};

const manufacturerSliceAdmin = createSlice({
  name: 'manufactureradmin',
  initialState: initialStateManufacturer,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesManufacturer>) => {
    // getAll
    builder
      .addCase(getAllManufacturerAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllManufacturerAdmin.fulfilled, (state, action) => {
        const { result, count } = action.payload;

        state.listManufacturer = result;
        state.total = count;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllManufacturerAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // getbyid
    builder
      .addCase(getManufacturerByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getManufacturerByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listManufacturer = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getManufacturerByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });

    // Add manufacturer
    builder
      .addCase(postAddManufacturerByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddManufacturerByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: 'Thêm thành công',
          type: 'success',
        });
        const { result } = action.payload;
        state.listManufacturer = [...state.listManufacturer, result];
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddManufacturerByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Thêm không thành công',
          type: 'error',
        });
      });

    // Sửa manufacturer
    builder
      .addCase(postEditManufacturerByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditManufacturerByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: 'Sửa thành công',
          type: 'success',
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditManufacturerByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Sửa không thành công',
          type: 'error',
        });
      });

    // Xóa manufacturer
    builder
      .addCase(postDeleteManufacturerAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteManufacturerAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listManufacturer = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: 'Xóa thành công',
          type: 'success',
        });
        // console.log("Get all manufacturer thành công");
      })
      .addCase(postDeleteManufacturerAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Xóa thất bại',
          type: 'error',
        });
        // console.log("Get manufacturer không thành công");
      });
  },
});

const { reducer } = manufacturerSliceAdmin;
export default reducer;
