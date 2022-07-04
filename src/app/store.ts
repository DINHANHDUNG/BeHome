import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import accountAdminReducer from "../features/Admin/accountAdmin/accountAdmin-slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,

     /*--------------------------------Admin------------------------------ */
     accountAdmin: accountAdminReducer,
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
