let Vue = require('vue').default

module.exports = {
  state: () => ({
    channels: {},
    currentChannel: null,
    status: 0
  }),
  mutations: {
    /**
     * Update a channel within the dict
     * 
     * @param { Object } state - chats store state
     * @param { Object } channel 
     */
    UPDATE_CHANNEL(state, channel) {
      Vue.set(state.channels, channel.id, channel.data);
    },
    /**
     * 
     * @param { Object } state - chats store state 
     * @param { Object } channels - dict of channel object with thier id as a key
     */
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
      commit('UPDATE_CHANNEL', channel);
    },
    /**
     * On socket connection init channels
     * 
     * @param { Array } channels - Array of users channels 
     */
    socket_initChannels({ commit }, channels) {
      commit('INIT_CHANNELS', channels);
    }
  }
};
