// 导入了 vue
import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 路由
import router from './router'
// 导入vuex
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import '@/styles/index.less'

Vue.use(ElementUI)

// 设置为 开发模式
Vue.config.productionTip = false

// 创建vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
