import {
  ActionReducerMapBuilder,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CustomerCart, OrderDetail } from "../../app/types/order";

var info = JSON.parse(localStorage.getItem("InfoOrderCustomer") || "") as any;
console.log(info);

const initialStateCart: CustomerCart = {
  namecustomer: info?.namecustomer,
  addresscustomer: info?.addresscustomer,
  phonenumbercustomer: info?.phonenumbercustomer,
  emailcustomer: info?.emailcustomer,
  totalmoney: info?.totalmoney,
  orderdetails: info?.orderdetails ? info?.orderdetails : [],
};

const cartSliceAdmin = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addCart: (state, action: PayloadAction<any>) => {
      //   state.value += 1;
      console.log("action add", action.payload);

      var product = {} as any;
      if (action.payload.category.type === "PRODUCT") {
        const indexValue = state.orderdetails?.findIndex(
          (val, idx) => val.id_product === action.payload.id
        );

        console.log(indexValue);

        if (indexValue >= 0) {
          state.orderdetails[indexValue].amount =
            state.orderdetails[indexValue].amount + 1;
        } else {
          product = {
            id_product: action.payload.id,
            id_combo: null,
            amount: 1,
            ...action.payload,
          };
          state.orderdetails = [...state.orderdetails, product];
        }
      } else {
        const indexValue = state.orderdetails?.findIndex(
          (val, idx) => val.id_combo === action.payload.id
        );

        console.log(indexValue);

        if (indexValue >= 0) {
          state.orderdetails[indexValue].amount =
            state.orderdetails[indexValue].amount + 1;
        } else {
          product = {
            id_product: null,
            id_combo: action.payload.id,
            amount: 1,
            ...action.payload,
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
      }>
    ) => {
      if (action.payload.product.category.type === "PRODUCT") {
        const indexValue = state.orderdetails?.findIndex(
          (val, idx) => val.id_product === action.payload.product.id_product
        );

        console.log(indexValue);

        if (indexValue >= 0) {
          state.orderdetails[indexValue].amount = action.payload.amount;
        }
      } else {
        const indexValue = state.orderdetails?.findIndex(
          (val, idx) => val.id_combo === action.payload.product.id_combo
        );

        console.log(indexValue);

        if (indexValue >= 0) {
          state.orderdetails[indexValue].amount = action.payload.amount;
        }
      }
    },

    deleteCart: (state, action: PayloadAction<any>) => {
      if (action.payload.category.type === "PRODUCT") {
        const newArr = state.orderdetails?.filter(
          (val, idx) => val.id_product != action.payload.id_product
        );

        state.orderdetails = newArr;
      } else {
        const newArr = state.orderdetails?.filter(
          (val, idx) => val.id_combo != action.payload.id_combo
        );
        state.orderdetails = newArr;
      }
    },
    orderSuccsess: (state) => {
      state.orderdetails = [];
      state.totalmoney = 0;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {},
});
export const {
  addCart,
  deleteCart,
  CalculateTotalMomney,
  toggleAmountProduct,
  orderSuccsess,
} = cartSliceAdmin.actions;
const { reducer } = cartSliceAdmin;
export default reducer;
