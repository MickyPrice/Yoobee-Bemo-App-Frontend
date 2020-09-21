
module.exports = {
  state: () => ({
    channels: {},
  }),
  mutations: {
    UPDATE_CHANNEL(state, channel) {
      state.channels = state.channels[channel.id] = channel.data
    },
  },
  actions: {
    socket_updateChannel ({ commit }, channel) {
      commit('UPDATE_CHANNEL', channel);
    }
  }
};
