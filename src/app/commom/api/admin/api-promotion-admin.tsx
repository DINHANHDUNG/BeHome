import { AddPromotion, EditPromotion } from "../../../types/promotion";
import axiosClientAdmin from "./axios-clientAdmin";

const promotionAPIAdmin = {
  getAllPromotionAdmin(data: { page: number; noitem: number }): Promise<any> {
    const url = "promotion/getallpromotion";
    return axiosClientAdmin.post(url, data);
  },

  getPromotionByIdADmin(data: { id: number }): Promise<any> {
    const url = "promotion/getpromotionbyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddPromotionADmin(data: AddPromotion): Promise<any> {
    const url = "promotion/createpromotion";
    return axiosClientAdmin.post(url, data);
  },

  postEditPromotionADmin(data: EditPromotion): Promise<any> {
    const url = "promotion/editpromotion";
    return axiosClientAdmin.post(url, data);
  },

  postDeletePromotionADmin(data: { id: [number] }): Promise<any> {
    const url = "promotion/deletepromotion";
    return axiosClientAdmin.post(url, data);
  },
};
export default promotionAPIAdmin;
