import axios from "axios";
import queryString from "query-string";

const uploadIMGAdminAPI = {
  postUploadIMG(data: any): Promise<any> {
    const url = "api/uploadimage";
    return axiosClientupload.post(url, data);
  },

  postDeleteIMG(data: {imageName: string}): Promise<any> {
    const url = "api/deleteimage";
    return axiosClientupload.post(url, data);
  },
};
export default uploadIMGAdminAPI;

const axiosClientupload = axios.create({
  baseURL: "http://103.173.155.138:5000/",
  headers: {
    "content-type": "application/json",
  },
  responseType: "json",
  paramsSerializer: (params: any) => queryString.stringify(params),
});
