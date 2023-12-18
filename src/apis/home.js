import httpInstance from "@/utils/http"

// 获取banner
export const getBannerAPI = () => {
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 人气推荐
 * @param {*}
 * @return {*}
 */
export const HotNewAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}