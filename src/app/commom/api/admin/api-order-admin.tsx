import { AddOrder } from "../../../types/order";
import axiosClientAdmin from "./axios-clientAdmin";

// Chờ thanh toán
const orderAPIAdmin = {
  getAllOrderWaitForPayAdmin(data: {
    page: number;
    noitem: number;
  }): Promise<any> {
    const url = "order/getallorderwaitforpay";
    return axiosClientAdmin.post(url, data);
  },
  // Đơn đã hoàn thành
  getAllOrderCompletedAdmin(data: {
    page: number;
    noitem: number;
  }): Promise<any> {
    const url = "order/getallordercompleted";
    return axiosClientAdmin.post(url, data);
  },
  // Đơn đã hủy
  getAllOrderCancelAdmin(data: { page: number; noitem: number }): Promise<any> {
    const url = "order/getallordercanceled";
    return axiosClientAdmin.post(url, data);
  },

  // Hủy đơn
  OrderCanceledADmin(data: { id: number }): Promise<any> {
    const url = "order/ordercanceled";
    return axiosClientAdmin.post(url, data);
  },

  // Hoàn thành đơn
  OrderCompletedADmin(data: { id: number }): Promise<any> {
    const url = "order/ordercompleted";
    return axiosClientAdmin.post(url, data);
  },

  //  Get by id
  getorderByIdADmin(data: { id: number }): Promise<any> {
    const url = "order/getorderbyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddorderADmin(data: AddOrder): Promise<any> {
    const url = "order/createorder";
    return axiosClientAdmin.post(url, data);
  },

  // postEditorderADmin(data: Editorder): Promise<any> {
  //   const url = "order/editorder";
  //   return axiosClientAdmin.post(url, data);
  // },

  postDeleteorderADmin(data: { id: [number] }): Promise<any> {
    const url = "order/deleteorder";
    return axiosClientAdmin.post(url, data);
  },

  getSearchOrderAdmin(data: { orderkey: string }): Promise<any> {
    const url = "order/searchorder";
    return axiosClientAdmin.post(url, data);
  },
};
export default orderAPIAdmin;
