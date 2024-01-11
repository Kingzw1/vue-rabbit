// 导入axios
import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // 导入样式
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 1.从pinia获取token数据
    const userStore=useUserStore();

    // 2.按照后端要求拼接token数据
    const token=userStore.userInfo.token;
    if(token){
        config.headers.Authorization='Bearer '+token;
    }
    NProgress.start();
    return config;
}, function (error) {
    
    return Promise.reject(error);
});

// 响应拦截器
httpInstance.interceptors.response.use(function (response) {
    // 在请求结束时调用 NProgress.done()
  NProgress.done();
    return response;
}, function (error) {
    // 统一错误提示
    ElMessage({type:'warning',message:error.response.data.message})
    return Promise.reject(error);
});
export default httpInstance