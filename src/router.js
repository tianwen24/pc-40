import Vue from 'vue'
// 导入第三包 vue-router
import Router from 'vue-router'
// 导入一个组件 Home
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // 设置路由选项
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
