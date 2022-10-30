import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import {
  ChangePassAdmin,
  checkTokenAdmin,
  postLoginAdmin,
  postLogoutAdmin,
} from '.';
import { openNotificationWithIcon } from '../../../app/hooks';
import { Account, CustomesAccount } from '../../../app/types/account';
const initialStateAccount: CustomesAccount = {
  listuser: {} as Account,
  loading: false,
  token: localStorage.getItem('tokenadmin') ?? '',
  error: false,
};

const accountAdminSlice = createSlice({
  name: 'accountadmin',
  initialState: initialStateAccount,
  reducers: {
    //action login Storage
  },
  extraReducers: (builder: ActionReducerMapBuilder<CustomesAccount>) => {
    // login admin
    builder
      .addCase(postLoginAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postLoginAdmin.fulfilled, (state, action) => {
        const { listuser, token } = action.payload;
        // console.log("listuser", listuser);

        state.listuser = listuser;
        state.token = token;
        state.loading = false;
        state.error = false;
        localStorage.setItem('tokenadmin', token);
        // if (listuser.permission === "1") {
        //   socket.emit("join_room", `Admin`);
        // } else {
        //   socket.emit("join_room", `Shop_${listuser.username}`);
        // }
        // dispatch(isLoadingGL(true))
        // localStorage.setItem("user", queryString.stringify(listuser));
      })
      .addCase(postLoginAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotificationWithIcon(
          'error',
          'Tài khoản hoặc mật khẩu không chính xác'
        );
      });
    //  log out the user
    builder.addCase(postLogoutAdmin.fulfilled, (state) => {
      state.listuser = {} as any;
      state.token = '';
      localStorage.removeItem('tokenadmin');
      // localStorage.removeItem("user");
      openNotificationWithIcon(
        'success',
        'Đã đăng xuất'
      );
      
    });

    //Check token admin
    builder
      .addCase(checkTokenAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkTokenAdmin.fulfilled, (state, action) => {
        const { user, customer } = action.payload;

        // console.log("user", user);

        state.listuser = user;
        state.token = localStorage.getItem('tokenadmin') ?? '';
        state.loading = false;
        state.error = false;
        // if (user.permission === "1") {
        //   console.log("permission", "admin");

        //   socket.emit("join_room", `Admin`);
        // } else {
        //   console.log("permission", "Shop_");
        //   socket.emit("join_room", `Shop_${user.username}`);
        // }
      })
      .addCase(checkTokenAdmin.rejected, (state) => {
        state.loading = false;
        localStorage.removeItem('tokenadmin');
        state.token = '';
      });

    //ChangePass

    builder
      .addCase(ChangePassAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(ChangePassAdmin.fulfilled, (state, action) => {
        console.log('action payload', action.payload);

        // state.listuser = action.payload;
        state.loading = false;
        state.error = false;
        

        openNotificationWithIcon(
          'success',
          'Đổi mật khẩu thành công'
        );
        console.log('Đổi mật khẩu thành công');
      })
      .addCase(ChangePassAdmin.rejected, (state) => {
        state.loading = false;
        console.log('Đổi mật khẩu thất bại');

        openNotificationWithIcon(
          'error',
          'Mật khẩu cũ không chính xác'
        );
      });
  },
});

const { reducer } = accountAdminSlice;
export default reducer;
