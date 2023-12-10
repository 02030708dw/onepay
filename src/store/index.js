import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInput: "",
  },
  getters: {
  },
  mutations: {
    SET_USER_INPUT(state, value) {
      state.userInput = value;
    },
  },
  actions: {
    setUserInput({ commit }, value) {
      commit('SET_USER_INPUT', value);
    },
  },
  modules: {
  }
})
