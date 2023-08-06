import Vue from 'vue'
import Vuex from 'vuex'
import pagination from './modules/pagination'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { pagination },
})

export default store
