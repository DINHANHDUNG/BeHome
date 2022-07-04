import { createAsyncThunk } from "@reduxjs/toolkit";
import accountAdminAPI from "../../../app/commom/api/admin/api-account-admin";
import { ChangePassword, LoginType } from "../../../app/types/account";

export const postLoginAdmin = createAsyncThunk(
  "/accountadmin/loginadmin",
  async (data: LoginType) => {
    const response = await accountAdminAPI.postLoginADmin(data);

    console.log("loginadmin", response);
    

    return response;
  }
);

export const postLogoutAdmin = createAsyncThunk("/accountadmin/logout", () => {
  return;
});

export const checkTokenAdmin = createAsyncThunk(
  "/accountadmin/checktokenAdmin",
  async () => {
    const response = await accountAdminAPI.postCheckTokenAdmin();
    console.log("checktoken", response);
    // if (response.user.permission === "1") {
    //   socket.emit("join_room", `Admin`);
    // } else {
    //   socket.emit("join_room", `Shop_${response.user.username}`);
    // }
    // console.log("socket", socket);

    return response;
  }
);

export const ChangePassAdmin = createAsyncThunk(
  "/account/changepasswordadmin",
  async (data: ChangePassword) => {
    console.log("data chuyền vào", data);

    const response = await accountAdminAPI.postChangePassWordAdmin(data);
    console.log("ChangePassword", response);

    return response;
  }
);
