import { createSlice } from '@reduxjs/toolkit';
import { openNotification } from '../../../app/hooks';
import { Company, CustomesCompany } from '../../../app/types/company';
import { getCompany, updateCompany } from './patchCompany';

const initialState = {
  Company: {} as Company,
  loading: false,
  error: false,
} as CustomesCompany;

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    // get company
    builder.addCase(getCompany.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCompany.fulfilled, (state, action) => {
      const { result } = action.payload;
      state.Company = result;
      state.loading = false;
    });
    builder.addCase(getCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    // update company
    builder.addCase(updateCompany.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateCompany.fulfilled, (state, action) => {
      const { result } = action.payload;
      openNotification({
        message: 'Sửa thành công',
        type: 'success',
      });
      state.Company = result;
      state.loading = false;
    });
    builder.addCase(updateCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

const { reducer } = companySlice;
export default reducer;
