module.exports = {
  state: () => ({
    data: null,
  }),
  mutations: {
    UPDATE_USER(state, user) {
      state.data = user;
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
