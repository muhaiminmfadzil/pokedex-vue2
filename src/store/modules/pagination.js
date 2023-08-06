export default {
  namespaced: true,
  state: {
    currentPage: 1,
  },
  mutations: {
    setCurrentPage(state, data) {
      state.currentPage = data
    },
  },
  getters: {
    getCurrentPage(state) {
      return state.currentPage
    },
  },
}