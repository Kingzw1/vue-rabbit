// 封装购物车相关接口
import httpInstance from "@/utils/http"

// 加入购物车
export const insertCartAPI =({skuId,count})=>{
    return httpInstance({
        url:'/member/cart',
        method:'post',
        data:{
            skuId,
            count
        }
    })
}

export const findCartListAPI = ()=>{
    return httpInstance({
        url:'/member/cart',
        method:'get'
    })
}
