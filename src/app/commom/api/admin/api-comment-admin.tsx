import { AddComment, AddReply, getAllComment } from "../../../types/comment";
import axiosClientAdmin from "./axios-clientAdmin";

const commentAPIAdmin = {
  getAllComemntAdmin(data: getAllComment): Promise<any> {
    const url = "comment/getallcomment";
    return axiosClientAdmin.post(url, data);
  },

  getComemntByIdADmin(data: { id: number }): Promise<any> {
    const url = "comment/getcommentbyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddComemntADmin(data: AddComment): Promise<any> {
    const url = "comment/createcomment";
    return axiosClientAdmin.post(url, data);
  },

  // postEditComemntADmin(data: EditComment): Promise<any> {
  //   const url = "comment/editcombo";
  //   return axiosClientAdmin.post(url, data);
  // },

  postDeleteComemntADmin(data: { id: [number] }): Promise<any> {
    const url = "comment/deletecomment";
    return axiosClientAdmin.post(url, data);
  },

  postAddReplyADmin(data: AddReply): Promise<any> {
    const url = "reply/createreply";
    return axiosClientAdmin.post(url, data);
  },

  postDeleteReplyADmin(data: { id: [number] }): Promise<any> {
    const url = "reply/deleteReply";
    return axiosClientAdmin.post(url, data);
  },
};
export default commentAPIAdmin;
