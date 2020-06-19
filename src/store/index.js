import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const defaults = {
  layout: 'LayoutDefault'
}

export default new Vuex.Store({
  state: Object.assign({}, defaults),
  mutations,
  actions
})
