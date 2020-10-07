const { getUser } = require("../../services/api/user");

module.exports = {
  state: () => ({
    data: null,

    status: 0 // 0 = unloaded, 1 = loaded, 2 = error

  }),
  mutations: {
    UPDATE_USER(state, user) {
      state.data = user;
      state.data.profilePic = `http://localhost:3000/user/profile/${user._id}`;
      state.status = 1;
    },
  },
  actions: {
    socket_initUser({ commit }) {
      getUser().then((user) => {
        commit("UPDATE_USER", user.data);
      });
    },
  }
};
