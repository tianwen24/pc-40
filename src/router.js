import Vue from 'vue'
// 导入第三包 vue-router
import Router from 'vue-router'
// 导入 useElement
import UseElement from './views/useElement'

Vue.use(Router)

export default new Router({
  // 设置路由选项
  routes: [
    {
      path: '/useElement',
      name: 'useElement',
      component: UseElement
    }
  ]
})
