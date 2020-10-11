const { getUser } = require("../../services/api/user");

module.exports = {
  state: () => ({
    data: null,
    status: 0 // 0 = unloaded, 1 = loaded, 2 = error
  }),
  mutations: {
    /**
     * Update the user object
     * 
     * @param { Object } state - user store state 
     * @param { Object } user 
     */
    UPDATE_USER(state, user) {
      state.data = user;
      state.data.profilePic = `http://localhost:3000/user/profile/${user._id}`;
      state.status = 1;
    },
  },
  actions: {
    /**
     * Init the user upon login / auth
     * 
     * @param { Function } commit 
     */
    socket_initUser({ commit }) {
      getUser().then((user) => {
        commit("UPDATE_USER", user.data);
      });
    },
  }
};
