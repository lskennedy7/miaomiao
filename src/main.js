import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
// 引入axios
Vue.prototype.axios = axios

//  全局过滤器设置图片的长宽,arg为传进来的参数
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})

Vue.config.productionTip = false
// 用于chrome调试时，显示vue标签栏
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
