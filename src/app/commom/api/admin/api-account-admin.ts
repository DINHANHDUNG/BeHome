import { AccountResponseChangePassword, AccountResponseLogin, ChangePassword, LoginType } from "../../../types/account";
import axiosClientAdmin from "./axios-clientAdmin";

const accountAdminAPI = {
  postLoginADmin(data: LoginType): Promise<any> {
    const url = "auth/loginadmin";
    return axiosClientAdmin.post(url, data);
  },

  postCheckTokenAdmin(): Promise<any> {
    const url = "checktoken";
    return axiosClientAdmin.get(url);
  },

  postChangePassWordAdmin(
    data: ChangePassword
  ): Promise<AccountResponseChangePassword> {
    const url = "auth/changepassword";
    return axiosClientAdmin.post(url, data);
  },
};
export default accountAdminAPI;
