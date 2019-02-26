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
          path: 'product/:id',
          name: 'product',
          component: () => import('@/pages/Product')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('@/pages/Cart')
        },
        {
          path: 'orderCheck',
          name: 'orderCheck',
          component: () => import('@/pages/OrderCheck')
        },
        {
          path: 'productCate/:id',
          name: 'productCate',
          component: () => import('@/pages/ProductCate')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
