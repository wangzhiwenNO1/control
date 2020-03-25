import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasLogin: false,
    userInfo:{},
  },
  mutations: {
    changeLogin(state, provider){
      state.hasLogin = true;
      state.userInfo = provider;

    },
  },
  actions: {
  },
  modules: {
  }
})
