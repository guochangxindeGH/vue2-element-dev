import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
// import Home from '@/page/home/Home'
import { Layout } from '../layout' // 页面整体布局

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/home/Home',
      hidden: true
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Layout,
      meta: {
        title: '首页',
        icon: 'icondashboard'
      },
      noDropdown: true,
      children: [
        {
          path: 'home',
          meta: {
            title: '首页',
            icon: 'icondashboard',
            routerType: 'leftmenu'
          },
          component: () => import('@/page/home/Home')
        }
      ]
    },
    {
      path: '/userManager',
      name: 'userManage',
      component: Layout,
      meta: {
        title: '用户管理',
        icon: 'iconuser'
      },
      noDropdown: true,
      children: [
        {
          path: 'userList',
          meta: {
            title: '用户管理',
            icon: 'iconuser',
            routerType: 'leftmenu'
          },
          component: () => import('@/page/userList/userList')
        }
      ]
    }
  ]
})
