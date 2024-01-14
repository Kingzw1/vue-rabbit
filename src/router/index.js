// createRouter:创建router实例对象
// createWebHistory:创建history模式路由
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: "/",
      // name: 'home',
      component: () => import("../views/Layout/index.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/Home/index.vue"),
        },
        {
          path: "category/:id",
          name: "category",
          component: () => import("../views/Category/index.vue"),
        },
        {
          path: "category/sub/:id",
          name: "subcategory",
          component: () => import("../views/SubCategory/index.vue"),
        },
        {
          path: "detail/:id",
          name: "detail",
          component: () => import("../views/Detail/index.vue"),
        },
        {
          path: "cartList",
          name: "cartList",
          component: () => import("../views/CartList/index.vue"),
        },
        {
          path: "checkout",
          name: "checkout",
          component: () => import("../views/Checkout/index.vue"),
        },
        {
          path: "pay",
          name: "pay",
          component: () => import("../views/Pay/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/index.vue"),
    },
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
