import { createAsyncThunk } from '@reduxjs/toolkit';
import orderAPIAdmin from '../../../app/commom/api/admin/api-order-admin';
import { AddOrder, GetOrder } from '../../../app/types/order';

export const getAllOrderWaitForPayAdmin = createAsyncThunk(
  '/Orderadmin/getallOrderWaitForPay',
  async (data: GetOrder) => {
    const response = await orderAPIAdmin.getAllOrderWaitForPayAdmin(data);

    return response;
  }
);

export const getSearchOrderAdmin = createAsyncThunk(
  '/Orderadmin/getSearchOrderAdmin',
  async (data: { orderkey: string; type: string }) => {
    const response = await orderAPIAdmin.getSearchOrderAdmin(data);

    return response;
  }
);

export const getAllOrderCompletedAdmin = createAsyncThunk(
  '/Orderadmin/getallOrderCompleted',
  async (data: GetOrder) => {
    const response = await orderAPIAdmin.getAllOrderCompletedAdmin(data);

    return response;
  }
);

export const getAllOrderCancelAdmin = createAsyncThunk(
  '/Orderadmin/getallOrderCancel',
  async (data: GetOrder) => {
    const response = await orderAPIAdmin.getAllOrderCancelAdmin(data);

    return response;
  }
);

export const getOrderByIdAdmin = createAsyncThunk(
  '/Orderadmin/getbyidOrder',
  async (data: { id: number }) => {
    const response = await orderAPIAdmin.getorderByIdADmin(data);

    return response;
  }
);

export const OrderCanceledADmin = createAsyncThunk(
  '/Orderadmin/OrderCanceledADmin',
  async (data: { id: number }) => {
    const response = await orderAPIAdmin.OrderCanceledADmin(data);

    return response;
  }
);
export const OrderWaitdADmin = createAsyncThunk(
  '/Orderadmin/OrderWaitdADmin',
  async (data: { id: number }) => {
    const response = await orderAPIAdmin.OrderWaitADmin(data);

    return response;
  }
);

export const OrderCompletedADmin = createAsyncThunk(
  '/Orderadmin/OrderCompletedADmin',
  async (data: { id: number }) => {
    const response = await orderAPIAdmin.OrderCompletedADmin(data);

    return response;
  }
);

export const postAddOrderByIdAdmin = createAsyncThunk(
  '/Order/addOrder',
  async (data: AddOrder) => {
    const response = await orderAPIAdmin.postAddorderADmin(data);

    return response;
  }
);

export const postDeleteOrderAdmin = createAsyncThunk(
  '/Orderadmin/deleteOrder',
  async (data: { id: [number] }) => {
    const response = await orderAPIAdmin.postDeleteorderADmin(data);

    return response;
  }
);
