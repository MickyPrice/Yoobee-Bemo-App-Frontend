
module.exports = {
  state: () => ({
    channels: {},
    currentChannel: null
  }),
  mutations: {
    UPDATE_CHANNEL(state, channel) {
      state.channels[channel.id] = channel.data
    },
    INIT_CHANNELS(state, channels) {
      state.channels = channels
    },
    UPDATE_CURRENT_CHANNEL(state, channel) {
      state.currentChannel = channel
    },
  },
  actions: {
    socket_updateChannel ({ commit }, channel) {
      commit('UPDATE_CHANNEL', channel);
    },
    socket_initChannels ({commit}, channels) {
      commit('INIT_CHANNELS', channels);
    },
    joinChannel({commit},channel) {
      commit('UPDATE_CURRENT_CHANNEL', channel);
      this._vm.$socket.client.emit('joinChannel', channel);
    },
    leaveChannel({commit}, channel) {
      commit('UPDATE_CURRENT_CHANNEL', null);
      this._vm.$socket.client.emit('leaveChannel', channel);
    }
  }
};
