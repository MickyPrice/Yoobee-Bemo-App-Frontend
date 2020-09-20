const { getUser } = require("../../services/api/user");

module.exports = {
  state: () => ({
    user: {},
  }),
  mutations: {
    UPDATE_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    updateUser({ commit }) {
      getUser().then((user) => {
        commit("UPDATE_USER", user.data);
      });
    },
  },
};
