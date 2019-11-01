import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'

Vue.use(VueRouter)

// {
//   // 系统系统即加载路由
//   path: '/',
//   name: 'home',
//   component: Home
// },
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   // 切换到about后，才加载路由
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    cinemaRouter,
    mineRouter,
    movieRouter,
    // 路由都不匹配时，重定向到movie
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
