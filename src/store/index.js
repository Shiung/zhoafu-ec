import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 嚴格模式 建議在開發時檢查是否依照正常vuex 流程使用(耗效能)
  state: {
    menuSwitch: false
  },
  actions: {
    menu_status (context, params) {
      context.commit('MENUSWITCH', params)
    }
  },
  mutations: {
    MENUSWITCH (state, payload) {
      state.menuSwitch = payload
    }
  },
  getters: {
    menuStatus: state => state.menuSwitch
  },
  modules: {
  }
})
