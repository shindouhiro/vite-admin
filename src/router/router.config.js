import { PageView, AdminView } from "/@/layouts"



export const asyncRouterMap = [
{
  path: '/',
  name: 'home',
  component: AdminView,
  redirect: '/dashboard/workplace',
  children: [
  { 
    path: '/dashboard/workplace',
    name: 'dashboard',
    component: () => import('/@/views/Home.vue')
  }
  ]
}
]
/*
 *基础路由
 *
 */
export const constantRouterMap = [
{
  path: '/user',
  component: PageView,
  redirect: '/user/login',
  children: [
  {
    path: 'login',
    name: 'login',
    component: () => import('/@/views/user/Login.vue')
  }
  ]
},
{
  path: '/404',
  component: () => import('/@/views/common/404.vue')
}
] 

