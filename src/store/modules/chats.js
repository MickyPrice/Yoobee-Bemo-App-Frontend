
module.exports = {
  state: () => ({
    channels: {},
  }),
  mutations: {
    UPDATE_CHANNEL(state, channel) {
      state.channels[channel.id] = channel.data
    },
    INIT_CHANNELS(state, channels) {
      state.channels = channels
    },
  },
  actions: {
    socket_updateChannel ({ commit }, channel) {
      commit('UPDATE_CHANNEL', channel);
    },
    socket_initChannels ({commit}, channels) {
      commit('INIT_CHANNELS', channels)
    } 
  }
};
