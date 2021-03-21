import { createStore } from "vuex";

const store = createStore({
  strict: process.env.NODE_ENV !== 'production', //严格模式
  state: {
    token: null,
  },
  getters: {
    token: (state) => state.token,
  },
  mutations: {
    SET_TOKEN(state, e) {
      state.token = e;
    },
  },
  actions: {},
});

export default store;
