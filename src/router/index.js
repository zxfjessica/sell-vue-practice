import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Goods from '@/components/Goods/Goods'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'acitve',
  routes: [
    {
      path: '/',
      redirect: '/goodspage'
    },
    {
      path: '/goodspage',
      component: Goods
    },
    {
      path: '/ratingspage',
      component: Hello
    }
  ]
})
