import axios from "axios";

interface IHttp {
  url?: string;
  method?:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | undefined;
  headers?: { [key: string]: any };
  params?: { [key: string]: any };
  data?: { [key: string]: any };
}

export default ({
  url = "",
  method = "get",
  headers = {},
  params = {},
  data = {}
}: IHttp = {}) => {
  // config defaults for instance
  const instance = axios.create({
    validateStatus: status => status >= 200 && status < 600
  });

  // interceptors
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // return instance
  return instance({ method, url, params, data });
};
