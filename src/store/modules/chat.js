
module.exports = {
    state: () => ({
        loadedChats: {},
        currentChannel: null
    }),
    mutations: {
        INIT_CHAT(state, request) {
            state.loadedChats[request.channel] = request.messages
        },
        NEW_MESSAGE(state, message) {
            state.loadedChats[state.currentChannel].append(message)
        },
        UPDATE_CURRENT_CHANNEL(state, channel) {
            state.currentChannel = channel;
        }
    },
    actions: {
        /**
         * Action emmitted when joining a channel
         * 
         * @param { String } channel - channel id
         */
        joinChannel({ commit }, channelId) {
            commit('UPDATE_CURRENT_CHANNEL', channelId);
            this._vm.$socket.client.emit('joinChannel', channelId);
        },
        /**
         * Action emmitted when leaving a channel
         * 
         * @param { String } channel - channel id
         */
        leaveChannel({ commit }, channel) {
            commit('UPDATE_CURRENT_CHANNEL', null);
            this._vm.$socket.client.emit('leaveChannel', channel);
        },
        socket_initChat({ commit }, request) {
            console.log(request)
            commit('INIT_CHAT', request);
        },
        socket_newMessage({ commit }, message) {
            commit('NEW_MESSAGE', message);
        }
    }
};
