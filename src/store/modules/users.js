module.exports = {
  state: () => ({
    active: {}
  }),
  mutations: {
    /**
     * Update the active user list
     * 
     * @param { Object } state - active users store state
     * @param { Object } users - dict of users
     */
    UPDATE_ACTIVE_USERS(state, users) {
      state.active = users;
    },
  },
  actions: {
    /**
     * Recive the active users from socket
     * 
     * @param { Function } commit 
     * @param { Object } users - dict of users
     */

    socket_activeUsers({ commit }, users) {
      commit("UPDATE_ACTIVE_USERS", users);
    },
  },
};
