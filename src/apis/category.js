import httpInstance from "@/utils/http"

export const getCategoryAPI = (hid) => {
    return httpInstance({
        url: '/category',
        params: {
            id: hid
        }
    })
}