import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/login/Login.vue'

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
      component: () => import('@/views/Index.vue')
    },
    //用户管理
    {
      path: 'user/list',
      title: '用户列表',
      name: 'userList',
      component: () => import('@/views/user/UserList.vue')
    },
    {
      path: 'user/info',
      title: '用户信息',
      name: 'userInfo',
      component: () => import('@/views/user/UserInfo.vue')
    },
    //example
    {
      path: 'example/table',
      title: 'TABLE',
      name: 'exampleTable',
      component: () => import('@/views/example/table.vue')
    },
    {
      path: 'example/form',
      title: 'FORM',
      name: 'exampleForm',
      component: () => import('@/views/example/form.vue')
    }

  ]
};

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [loginRouter, appRouter]
})