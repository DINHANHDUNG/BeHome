import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import accountAdminReducer from "../features/Admin/accountAdmin/accountAdmin-slice";
import promotionAdminReducer from "../features/Admin/promotion/promotion-slice";
import rankAdminReducer from "../features/Admin/rankAdnim/rank-slice";
import manufacturerAdminReducer from "../features/Admin/manufacturerAdnim/manufacturer-product-slice";
import categoryAdminReducer from "../features/Admin/categoryAdnim/category-slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,

     /*--------------------------------Admin------------------------------ */
     accountAdmin: accountAdminReducer,
     promotionAdmin: promotionAdminReducer,
     rankAdmin: rankAdminReducer,
     manufacturerAdmin: manufacturerAdminReducer,
     categoryAdmin: categoryAdminReducer,
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
