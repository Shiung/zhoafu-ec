import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home'),
      redirect: '/',
      children: [
        {
          path: '',
          name: 'IndexPage',
          component: () => import('@/pages/IndexPage')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/pages/Product')
        }
      ]
    }
  ]
})
