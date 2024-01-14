import httpInstance from "@/utils/http";

export const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
    method: "get",
  });
};

// 创建订单
export const createOrderAPI = (data) => {
  return httpInstance({
    url: "/member/order",
    method: "post",
    data,
  });
};
