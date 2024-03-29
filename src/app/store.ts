import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import accountAdminReducer from '../features/Admin/accountAdmin/accountAdmin-slice';
import promotionAdminReducer from '../features/Admin/promotion/promotion-slice';
import rankAdminReducer from '../features/Admin/rankAdnim/rank-slice';
import manufacturerAdminReducer from '../features/Admin/manufacturerAdnim/manufacturer-product-slice';
import categoryAdminReducer from '../features/Admin/categoryAdnim/category-slice';
import productAdminReducer from '../features/Admin/productAdnim/product-slice';
import companyAdminReducer from '../features/Admin/company/compali-slice';
import comboAdminReducer from '../features/Admin/comboAdnim/combo-slice';
import commentAdminReducer from '../features/Admin/commentAdnim/comment-slice';
import buildAdminReducer from '../features/Admin/buildAdmin/build-slice';
import orderAdminReducer from '../features/Admin/orderAdnim/order-admin-slice';
import ProductHomePageReducer from '../features/homepage/product-home-page-slice';
import CartReducer from '../features/cart/cart-slice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,

    /*--------------------------------Admin------------------------------ */
    accountAdmin: accountAdminReducer,
    promotionAdmin: promotionAdminReducer,
    rankAdmin: rankAdminReducer,
    manufacturerAdmin: manufacturerAdminReducer,
    categoryAdmin: categoryAdminReducer,
    productAdmin: productAdminReducer,
    companyAdmin: companyAdminReducer,
    comboAdmin: comboAdminReducer,
    commentAdmin: commentAdminReducer,
    buildAdmin: buildAdminReducer,
    orderAdmin: orderAdminReducer,

    /*--------------------------------Customer------------------------------ */
    ProductHomePage: ProductHomePageReducer,
    CartCustomer: CartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
