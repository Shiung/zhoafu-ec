// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
// loading
import Loading from 'vue-loading-overlay'
// vue image loading
import VueLazyload from 'vue-lazyload'
// vue-slick
import Slick from 'vue-slick'
// vue-carousel
import VueCarousel from 'vue-carousel'
// vue-swal
import VueSwal from 'vue-swal'
// vue-material
import { MdField, MdRipple, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import App from './App'
import router from './router'

// vuex
import store from './store'
// filters
import currencyFilter from './filters/currency'

// 置頂function
import initTop from './assets/js/initTop.js' // 初始置頂

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)
// vue image loading
Vue.use(VueLazyload, {
  lazyComponent: true,
  attempt: 1
})
// vue-carousel
Vue.use(VueCarousel)
// sweetAlert
Vue.use(VueSwal)
// vue material
Vue.use(MdField)
Vue.use(MdRipple)
Vue.use(MdButton)

// loading
Vue.component('loading', Loading) // 全域使用
// vue-slick
Vue.component('Slick', Slick) // 全域使用
// filters
Vue.filter('currency', currencyFilter) // 全域使用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 導航守衛 ==> 要在router 變動下才會觸發
router.beforeEach((to, from, next) => {
  next()
  // 置頂function
  initTop()
})
