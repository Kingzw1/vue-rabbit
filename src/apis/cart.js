// 封装购物车相关接口
import httpInstance from "@/utils/http";

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: "/member/cart",
    method: "post",
    data: {
      skuId,
      count,
    },
  });
};

// 过去最新的购物车列表
export const findCartListAPI = () => {
  return httpInstance({
    url: "/member/cart",
    method: "get",
  });
};

// 删除购物车
export const delCartAPI = (ids) => {
  return httpInstance({
    url: "/member/cart",
    method: "delete",
    data: {
      ids,
    },
  });
};
