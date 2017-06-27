import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import regsiter from '@/components/regsiter/regsiter'
import UserInfo from '@/components/UserInfo/UserInfo'
import home from '@/components/home/home'
import original from '@/components/original/original'
import navLoad from '@/components/nav_loading/nav_loading'
import myInfo from '@/components/myInfo/myInfo'
import search from '@/components/search/search'

Vue.use(Router)
export default new Router({
  routes: [
    {
      // 登陆
      path: '/',
      name: 'login',
      component: login
    },
    {
      // 注册
      path: '/regsiter',
      name: 'regsiter',
      component: regsiter
    },
    {
      // 登陆成功的路由
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
      {
      // 视频首页
      path: '/home',
      name: 'home',
      component: home
    },
      {
      // 原创首页，第三个一级页面
      path: '/original',
      name: 'original',
      component: original
    },
    {
      path: '/navLoad',
      name: 'navLoad',
      component: navLoad
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    },
     {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
