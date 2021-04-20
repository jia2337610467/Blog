import axios from "axios";
import store from "@/store";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 15000,
});

service.interceptors.request.use(
  (config) => {
    // if (store.getter.token) {
    //   config.headers["Token"] = store.getter.token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.request.use(
  //通过判断状态码统一处理响应
  (response) => {
    console.log(response);
    const res = response.data;
    if (res.code !== 200) {
      // 50008: 非法令牌; 50012: 其他客户端已登入; 50014: 令牌过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //重新登录
        Msgbox.confirm("您已登出，请重新登录", "确认", {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

const get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(import.meta.env.VITE_BASE_API + url, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { service, get };
