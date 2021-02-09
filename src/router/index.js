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
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/down',
      component: () => import('@/page/pdf/download'),
      name: 'downpdf',
      meta: { title: 'pdf', icon: 'el-icon-s-home' }
    },
    {
      path: '/index',
      name: 'index',
      component: Layout,
      redirect: '/index/index',
      meta: {
        title: '首页',
        icon: 'icondashboard'
      },
      noDropdown: true,
      children: [
        {
          path: 'index',
          meta: {
            title: '首页',
            icon: 'icondashboard',
            routerType: 'leftmenu'
          },
          component: () => import('@/page/index/index')
        }
      ]
    },
    {
      path: '/userList',
      name: 'userList',
      // redirect: '/userList/userList',
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
            title: 'D3视图',
            icon: 'iconuser',
            routerType: 'leftmenu'
          },
          component: () => import('@/page/userList/userList')
        }
      ]
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: Layout,
      meta: {
        title: '预览PDF',
        icon: 'iconuser'
      },
      children: [
        {
          path: 'pdf',
          meta: {
            title: '预览PDF',
            icon: 'iconuser',
            routerType: 'leftmenu'
          },
          component: () => import('@/page/pdf/pdf')
        }
      ]
    },
    {
      path: '/tree',
      name: 'tree',
      component: Layout,
      meta: {
        title: 'tree3D',
        icon: 'iconuser'
      },
      children: [
        {
          path: 'tree',
          meta: {
            title: 'tree3D',
            icon: 'iconuser',
            routerType: 'leftmenu'
          },
          component: () => import('@/page/treeScreen/treeScreen')
        }
      ]
    }
  ]
})
