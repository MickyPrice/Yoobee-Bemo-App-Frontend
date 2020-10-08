module.exports = {
  state: () => ({
    channels: {},
    currentChannel: null,
    status: 0
  }),
  mutations: {
    UPDATE_CHANNEL(state, channel) {
      state.channels[channel.id] = channel.data
      state.status = 1
    },
    INIT_CHANNELS(state, channels) {
      state.channels = channels
      state.status = 1
    }
  },
  actions: {
    /**
     * Update local channel copy from socket
     *
     * @param { Object } channel - Update channel in local dict
     */
    socket_updateChannel({ commit }, channel) {
      commit("UPDATE_CHANNEL", channel);
    },
    /**
     * On socket connection init channels
     *
     * @param { Array } channels - Array of users channels
     */
    socket_initChannels({ commit }, channels) {
      commit("INIT_CHANNELS", channels);
    },
  },
};
