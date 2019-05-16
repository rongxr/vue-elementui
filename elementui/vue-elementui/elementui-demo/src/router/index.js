import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Login from '@/components/user/Login.vue'

Vue.use(Router)

// 登录页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: Login
}

export const appRouter = {
  path: '/',
  name: 'home',
  redirect: '/login',
  component: Home,
  children: [
    {
      path: '/home',
      title: '首页',
      name: 'dashboard',
      component: () => import('@/components/Index.vue')
    },
    //用户管理
    {
      path: 'users',
      title: '用户列表',
      name: 'userList',
      component: () => import('@/components/user/Users.vue')
    },
    {
      path: 'user/info',
      title: '用户信息',
      name: 'userProfile',
      component: () => import('@/components/user/UserInfo.vue')
    },
    //example
    {
      path: 'example/table',
      title: 'TABLE',
      name: 'exampleTable',
      component: () => import('@/views/example/table/index.vue')
    },
    {
      path: 'example/form',
      title: 'FORM',
      name: 'exampleForm',
      component: () => import('@/views/example/form/index.vue')
    }

  ]
};

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [loginRouter, appRouter]
})