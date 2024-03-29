import {
  ActionReducerMapBuilder,
  createSlice,
  current,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CustomerCart, OrderDetail } from '../../app/types/order';

const info = localStorage.getItem('InfoOrderCustomer')
  ? JSON.parse(localStorage.getItem('InfoOrderCustomer') || '')
  : ({} as any);
console.log('info', info);

const initialStateCart: CustomerCart = {
  namecustomer: info?.namecustomer,
  addresscustomer: info?.addresscustomer,
  phonenumbercustomer: info?.phonenumbercustomer,
  emailcustomer: info?.emailcustomer,
  totalmoney: info?.totalmoney,
  orderdetails: info?.orderdetails ? info?.orderdetails : [],
};

const cartSliceAdmin = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addCart: (state, action: PayloadAction<any>) => {
      //   state.value += 1;
      console.log('action add', action.payload);

      let product = {} as any;
      if (action.payload?.category?.type === 'PRODUCT') {
        const indexValue = state.orderdetails?.findIndex(
          (val, idx) => val.id_product === action.payload.id,
        );
        // console.log(indexValue);

        if (indexValue >= 0) {
          if (
            state.orderdetails[indexValue].id_productproperties !==
            action.payload.id_productproperties
          ) {
            product = {
              ...action.payload,
              id: null,
              id_product: action.payload.id,
              id_productproperties: action.payload.id_productproperties,
              id_combo: null,
              amount: 1,
            };
            state.orderdetails = [...state.orderdetails, product];
            return;
          }
          state.orderdetails[indexValue].amount =
            state.orderdetails[indexValue].amount + 1;
        } else {
          product = {
            ...action.payload,
            id: null,
            id_product: action.payload.id,
            id_productproperties: action.payload.id_productproperties,
            id_combo: null,
            amount: 1,
          };
          state.orderdetails = [...state.orderdetails, product];
        }
      } else {
        const indexValue = state.orderdetails?.findIndex(
          (val, idx) => val.id_combo === action.payload.id,
        );

        console.log(indexValue);

        if (indexValue >= 0) {
          state.orderdetails[indexValue].amount =
            state.orderdetails[indexValue].amount + 1;
        } else {
          product = {
            ...action.payload,
            id_product: null,
            id: null,
            id_combo: action.payload.id,
            amount: 1,
          };
          state.orderdetails = [...state.orderdetails, product];
        }
      }

      // console.log(current(state.orderdetails));
    },

    CalculateTotalMomney: (state, action: PayloadAction<number>) => {
      state.totalmoney = action.payload;
    },

    toggleAmountProduct: (
      state,
      action: PayloadAction<{
        amount: number;
        product: any;
        idx: number;
      }>,
    ) => {
      state.orderdetails[action.payload.idx].amount = action.payload.amount;
      // if (action.payload.product?.category?.type === 'PRODUCT') {
      //   const indexValue = state.orderdetails?.findIndex(
      //     (val, idx) => val.id_product === action.payload.product.id_product
      //   );

      //   console.log(indexValue);

      //   if (indexValue >= 0) {
      //     state.orderdetails[indexValue].amount = action.payload.amount;
      //   }
      // } else {
      //   const indexValue = state.orderdetails?.findIndex(
      //     (val, idx) => val.id_combo === action.payload.product.id_combo
      //   );

      //   console.log(indexValue);

      //   if (indexValue >= 0) {
      //     state.orderdetails[indexValue].amount = action.payload.amount;
      //   }
      // }
    },

    toggleSelectProertiesProduct: (state, action: PayloadAction<any>) => {
      console.log(action.payload, current(state.orderdetails));
      if (action.payload.value?.category?.type === 'PRODUCT') {
        const indexByProperties = state.orderdetails?.findIndex(
          (val, idx) =>
            val.id_product === action.payload.value.id_product &&
            val.id_productproperties === action.payload.id_productproperties &&
            idx !== action.payload.idx,
        );
        if (indexByProperties > 0) {
          //Cong vao product trong state voi indexByProperties
          state.orderdetails[indexByProperties].amount =
            state.orderdetails[indexByProperties].amount +
            action.payload.value.amount;
          //Xoa theo idx
          const newArr = state.orderdetails?.filter(
            (val, idx) => idx !== action.payload.idx,
          );
          state.orderdetails = newArr;
          return;
        }
        //Sua theo id thay idproperties
        state.orderdetails[action.payload.idx].id_productproperties =
          action.payload.id_productproperties;
      }
    },

    deleteCart: (state, action: PayloadAction<any>) => {
      const newArr = state.orderdetails?.filter(
        (val, idx) => idx !== action.payload.idx,
      );
      state.orderdetails = newArr;
      // if (action.payload.category.type === 'PRODUCT') {
      //   const newArr = state.orderdetails?.filter(
      //     (val, idx) => idx !== action.payload.idx,
      //   );

      //   state.orderdetails = newArr;
      // } else {
      //   const newArr = state.orderdetails?.filter(
      //     (val, idx) => val.id_combo !== action.payload.id_combo,
      //   );
      //   state.orderdetails = newArr;
      // }
    },
    orderSuccsess: (state) => {
      state.orderdetails = [];
      state.totalmoney = 0;
    },

    addCartBuild: (state, action: PayloadAction<any>) => {
      //   state.value += 1;
      console.log('action add Build', action.payload);

      let product = {} as any;

      const indexValue = state.orderdetails?.findIndex(
        (val, idx) => val.id_product === action.payload.id,
      );

      console.log(indexValue);

      if (indexValue >= 0) {
        state.orderdetails[indexValue].amount =
          state.orderdetails[indexValue].amount + action.payload.amount;
      } else {
        product = {
          ...action.payload,
          id: null,
          id_product: action.payload.id,
          id_combo: null,
          amount: action.payload.amount,
          id_productproperties: action.payload.id_productproperties,
        };
        state.orderdetails = [...state.orderdetails, product];
      }
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {},
});
export const {
  addCart,
  deleteCart,
  CalculateTotalMomney,
  toggleAmountProduct,
  orderSuccsess,
  addCartBuild,
  toggleSelectProertiesProduct,
} = cartSliceAdmin.actions;
const { reducer } = cartSliceAdmin;
export default reducer;
