import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap, asyncRouterMap } from "./router.config.js"

export default createRouter({
  // 指定路由模式
  history: createWebHistory(),
  // 路由地址
  routes:  [...constantRouterMap,...asyncRouterMap]
})
