import { createRouter, createWebHistory } from 'vue-router'
import Home from "../view/Home.vue"
import About from "../view/About.vue"
export default createRouter({
  // 指定路由模式
  history: createWebHistory(),
  // 路由地址
  routes: [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }

  ]
})
