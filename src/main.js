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

import App from './App'
import router from './router'

// vuex
import store from './store'
// filters
import currencyFilter from './filters/currency'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAxios, axios)
// vue image loading
Vue.use(VueLazyload, {
  lazyComponent: true,
  attempt: 1
})
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
