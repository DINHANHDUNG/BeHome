import { AddRank, EditRank } from "../../../types/rank";
import axiosClientAdmin from "./axios-clientAdmin";

const RankAPIAdmin = {
  getAllRankAdmin(data: { id_category: number }): Promise<any> {
    const url = "rank/getallrank";
    return axiosClientAdmin.post(url, data);
  },

  getRankByIdADmin(data: { id: number }): Promise<any> {
    const url = "rank/getrankbyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddRankADmin(data: AddRank): Promise<any> {
    const url = "rank/createrank";
    return axiosClientAdmin.post(url, data);
  },

  postEditRankADmin(data: EditRank): Promise<any> {
    const url = "rank/editrank";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteRankADmin(data: { id: [number] }): Promise<any> {
    const url = "rank/deleterank";
    return axiosClientAdmin.post(url, data);
  },
};
export default RankAPIAdmin;
