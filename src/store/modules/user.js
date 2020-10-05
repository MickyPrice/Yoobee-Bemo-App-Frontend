const { getUser } = require("../../services/api/user");

module.exports = {
  state: () => ({
    data: null,
    status: 0
  }),
  mutations: {
    UPDATE_USER(state, user) {
      state.data = user;
      state.status = 1
    },
  },
  actions: {
    socket_initUser({ commit }) {
      getUser().then((user) => {
        commit("UPDATE_USER", user.data);
      });
    },
  },
};
