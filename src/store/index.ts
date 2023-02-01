import { createStore } from 'vuex'

export default createStore({
  state: {
    showNav: false
  },
  getters: {
  },
  mutations: {
    toggleNav(state) {
      if ( state.showNav === false) return state.showNav = true;
      return state.showNav = false;
    }
  },
  actions: {
  },
  modules: {
  }
})