import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { openNotification } from '../../app/hooks';
import { Combo } from '../../app/types/combo';
import {
  CustomesProductHomePage,
  ProductHomePage,
} from '../../app/types/product-home-page';
import { getProductHomePage } from './patchAdmin-api';
const initialStateAccount: CustomesProductHomePage = {
  listproducthomepage: [] as Array<ProductHomePage>,
  listcombohomepage: [] as Array<Combo>,
  loading: false,
  error: false,
};

const ProductHomePageSlice = createSlice({
  name: 'homepage',
  initialState: initialStateAccount,
  reducers: {
    //action login Storage
  },
  extraReducers: (
    builder: ActionReducerMapBuilder<CustomesProductHomePage>
  ) => {
    // get product
    builder
      .addCase(getProductHomePage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductHomePage.fulfilled, (state, action) => {
        const { result ,combo} = action.payload;
        console.log('result', result);
        state.listcombohomepage = combo;
        state.listproducthomepage = result;
        state.loading = false;
        state.error = false;
      })
      .addCase(getProductHomePage.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: 'Lấy dữ liệu thất bại',
          type: 'error',
        });
      });
  },
});

const { reducer } = ProductHomePageSlice;
export default reducer;
