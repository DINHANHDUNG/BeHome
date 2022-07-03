import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import queryString from "query-string";
import { REACT_APP_API_URL } from "./apiKey";

/*Get token  */
// export const retriveData = async () => {
//   let value: string = (await localStorage.getItem('token')) || '';
//   console.log('value token', value);

//   return value;
//   // return JSON.parse(value);
// };

export var token: any = localStorage.getItem("tokenadmin");
// export var token: any = retriveData();

/*Axios */

const axiosClientAdmin = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  responseType: "json",
  paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClientAdmin.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  async (config: any) => {
    let value: any = (await localStorage.getItem("tokenadmin")) || "";

    const accessToken: any = value;
    // console.log('accessTokenadmin', accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function error() {
    return Promise.reject(error);
  }
);

axiosClientAdmin.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: string) => {
    throw error;
  }
);

export default axiosClientAdmin;
