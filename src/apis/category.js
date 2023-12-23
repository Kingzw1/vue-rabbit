import httpInstance from "@/utils/http"

export const getCategoryAPI = (hid) => {
    return httpInstance({
        url: '/category',
        params: {
            id: hid
        }
    })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}