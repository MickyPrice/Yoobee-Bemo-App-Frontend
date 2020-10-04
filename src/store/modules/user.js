const { getUser } = require("../../services/api/user");

module.exports = {
  state: () => ({
    data: null
  }),
  mutations: {
    UPDATE_USER(state, user) {
      state.data = user;
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
