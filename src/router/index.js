import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  // 指定路由模式
  history: createWebHistory(),
  // 路由地址
  routes: [
    {
      path: '/home',
      component: () => import('/@/view/Home.vue')

    },
    {
      path: '/about',
      component: () => import('/@/view/About.vue')
    }

  ]
})
