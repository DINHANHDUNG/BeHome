import { createAsyncThunk } from "@reduxjs/toolkit";
import commentAPIAdmin from "../../../app/commom/api/admin/api-comment-admin";
import { AddComment, AddReply, getAllComment } from "../../../app/types/comment";

export const postAddCommentByIdAdmin = createAsyncThunk(
  "/Commentadmin/addComment",
  async (data: AddComment) => {
    const response = await commentAPIAdmin.postAddComemntADmin(data);

    return response;
  }
);

// export const postEditCommentByIdAdmin = createAsyncThunk(
//   "/Commentadmin/editComment",
//   async (data: EditComment) => {
//     const response = await commentAPIAdmin.postEditCommentADmin(data);

//     return response;
//   }
// );

export const getAllCommentAdmin = createAsyncThunk(
  "/Commentadmin/getallbycategory",
  async (data: getAllComment) => {
    const response = await commentAPIAdmin.getAllComemntAdmin(data);

    return response;
  }
);

export const getCommentByIdAdmin = createAsyncThunk(
  "/Commentadmin/getbyid",
  async (data: { id: number }) => {
    const response = await commentAPIAdmin.getComemntByIdADmin(data);

    return response;
  }
);

export const postDeleteCommentAdmin = createAsyncThunk(
  "/Commentadmin/deleteComment",
  async (data: { id: [number] }) => {
    // console.log("data truyền vào", data);

    const response = await commentAPIAdmin.postDeleteComemntADmin(data);
    // console.log("deleteproduct", response);

    return response;
  }
);

export const postDeleteReplyAdmin = createAsyncThunk(
  "/Commentadmin/deleteReply",
  async (data: { id: [number] }) => {
    // console.log("data truyền vào", data);

    const response = await commentAPIAdmin.postDeleteReplyADmin(data);
    // console.log("deleteproduct", response);

    return response;
  }
);

export const postAddReplyAdmin = createAsyncThunk(
  "/Commentadmin/addReply",
  async (data: AddReply) => {
    const response = await commentAPIAdmin.postAddReplyADmin(data);

    return response;
  }
);
