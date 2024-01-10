// 导入axios
import axios from "axios";
import { ElMessage } from "element-plus";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 响应拦截器
httpInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 请求拦截器
httpInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // 统一错误提示
    ElMessage({type:'warning',message:error.response.data.message})
    return Promise.reject(error);
});
export default httpInstance