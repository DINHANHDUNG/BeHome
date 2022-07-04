import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import accountAdminReducer from "../features/Admin/accountAdmin/accountAdmin-slice";
import promotionAdminReducer from "../features/Admin/promotion/promotion-slice";
import rankAdminReducer from "../features/Admin/rankAdnim/rank-slice";
import manufacturerAdminReducer from "../features/Admin/manufacturerAdnim/manufacturer-product-slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,

     /*--------------------------------Admin------------------------------ */
     accountAdmin: accountAdminReducer,
     promotionAdmin: promotionAdminReducer,
     rankAdmin: rankAdminReducer,
     manufacturerAdmin: manufacturerAdminReducer,
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
