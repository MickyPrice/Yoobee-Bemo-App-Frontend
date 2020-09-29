module.exports = {
  state: () => ({
    active: {}
  }),
  mutations: {
    UPDATE_ACTIVE_USERS(state, users) {
      state.active = users;
    },
  },
  actions: {
    socket_activeUsers({ commit }, users) {
      commit("UPDATE_ACTIVE_USERS", users);
    },
  },
};
