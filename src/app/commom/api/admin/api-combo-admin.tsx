import {
  AddCombo,
  EditCombo,
  GetAllCombo,
  SearchCombo,
} from "../../../types/combo";
import { GetAllProductUpdate } from "../../../types/product";
import axiosClientAdmin from "./axios-clientAdmin";

const comboAPIAdmin = {
  getAllComboByCategoryAdmin(data: GetAllCombo): Promise<any> {
    const url = "combo/getallcombobycategory";
    return axiosClientAdmin.post(url, data);
  },

  getAllComboNeedUpdateAdmin(data: GetAllProductUpdate): Promise<any> {
    const url = "combo/getallcomboneedupdate";
    return axiosClientAdmin.post(url, data);
  },

  getComboByIdADmin(data: { id: number }): Promise<any> {
    const url = "combo/getcombobyid";
    return axiosClientAdmin.post(url, data);
  },

  showComboByIdADmin(data: { id: number }): Promise<any> {
    const url = "combo/comboshowhomepage";
    return axiosClientAdmin.post(url, data);
  },

  hiddenComboByIdADmin(data: { id: number }): Promise<any> {
    const url = "combo/combohiddenhomepage";
    return axiosClientAdmin.post(url, data);
  },

  getComboSearchAdmin(data: SearchCombo): Promise<any> {
    const url = "combo/searchcombo";
    return axiosClientAdmin.post(url, data);
  },

  postAddComboADmin(data: AddCombo): Promise<any> {
    const url = "combo/createcombo";
    return axiosClientAdmin.post(url, data);
  },

  postEditComboADmin(data: EditCombo): Promise<any> {
    const url = "combo/editcombo";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteComboADmin(data: { id: [number] }): Promise<any> {
    const url = "combo/deletecombo";
    return axiosClientAdmin.post(url, data);
  },
};
export default comboAPIAdmin;
