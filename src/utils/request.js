import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '', // api 的 base_url
  timeout: 60000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    (config) => {
      config.isRequestEnd = false;// 标记这次请求是否结束
      return config
    },
    (error) => {
      // Do something with request error
      Promise.reject(error)
    }
);

// response 拦截器
service.interceptors.response.use(
    (response) => {
      /**
       * code为非000是抛错
       */
      const res = response.data;
      return Promise.reject(res)
    },
    (error) => {
      return Promise.reject(error)
    }
);

export default service

