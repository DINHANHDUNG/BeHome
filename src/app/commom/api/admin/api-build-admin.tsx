import { AddBuild, EditBuild } from "../../../types/build";
import axiosClientAdmin from "./axios-clientAdmin";

const buildAPIAdmin = {
  getAllbuildAdmin(): Promise<any> {
    const url = "builddesign/getallbuilddesign";
    return axiosClientAdmin.get(url);
  },

  getbuildByIdADmin(data: { id: number }): Promise<any> {
    const url = "builddesign/getbuilddesignbyid";
    return axiosClientAdmin.post(url, data);
  },

  postAddbuildADmin(data: AddBuild): Promise<any> {
    const url = "builddesign/createbuilddesign";
    return axiosClientAdmin.post(url, data);
  },

  postEditbuildADmin(data: EditBuild): Promise<any> {
    const url = "builddesign/editbuilddesign";
    return axiosClientAdmin.post(url, data);
  },

  postDeletebuildADmin(data: { id: [number] }): Promise<any> {
    const url = "builddesign/deletebuilddesign";
    return axiosClientAdmin.post(url, data);
  },
};
export default buildAPIAdmin;
