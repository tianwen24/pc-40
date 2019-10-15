import Vue from 'vue'
// 导入第三包 vue-router
import Router from 'vue-router'
// 导入 useElement
import UseElement from './views/useElement'
// 导入 login页面
import Login from '@/views/login'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  // 设置路由选项
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }
  ]
})
