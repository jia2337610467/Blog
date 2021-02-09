import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 30000,
});

// post 默认请求头
service.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

service.interceptors.request.use(
  (config) => {
    // config.headers['token'] = store.getters.getToken || null;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.code ===200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default service;