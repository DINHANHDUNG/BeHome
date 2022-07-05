import {
  AccountResponseChangePassword,
  AccountResponseLogin,
  ChangePassword,
  LoginType,
} from "../../../types/account";
import { UpdateCompany } from "../../../types/company";
import axiosClientAdmin from "./axios-clientAdmin";

const companyAdminAPI = {
  getInfoCompany(): Promise<any> {
    const url = "company/getinfocompany";
    return axiosClientAdmin.get(url);
  },

  postUpdateCompanyAdmin(data: UpdateCompany): Promise<any> {
    const url = "company/updatecompany";
    return axiosClientAdmin.post(url, data);
  },
};
export default companyAdminAPI;
