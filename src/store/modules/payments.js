let Vue = require('vue').default;

module.exports = {
  state: () => ({
    status: 0, // 0 = unloaded, 1 = loaded, 2 = error
    data: {}
  }),
  mutations: {
    UPDATE_PAYMENT(state, payment) {
      Vue.set(state.data, payment._id, payment);
      state.status = 1;
    },
    INIT_PAYMENTS(state, payments) {
      state.data = payments;
      state.status = 1;
    }
  },
  actions: {
    socket_updatePayment({ commit }, payment) {
      commit("UPDATE_PAYMENT", payment);
    },
    socket_initPayments({ commit }, payments) {
      commit("INIT_PAYMENTS", payments);
    }
  }
};
