// 管理用户数据相关
import {defineStore} from 'pinia'
import { loginAPI } from "@/apis/user";
import { ref } from "vue";
export const useUserStore= defineStore('user', ()=>{
    // 1.定义用户数据相关状态
    const userInfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password })=>{
        const res = await loginAPI({ account, password })
        userInfo.value = res.data.result
    }
    // 3.以对象的格式把state和action return
    return { userInfo, getUserInfo }
},
 {
    persist: true,
  },)