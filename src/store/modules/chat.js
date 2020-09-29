module.exports = {
    state: () => ({
      messages: []
    }),
    mutations: {
      ADD_MESSAGE(state, msg) {
        state.messages.push(msg);
      },
      INIT_CHAT_MSGS(state, msgs) {
          state.messages = msgs;
      }
    },
    actions: {
      socket_receiveMsg({ commit }, msg) {
        commit("ADD_MESSAGE", msg);
      },
      socket_initChat({ commit }, msgs) {
        commit("INIT_CHAT_MSGS", msgs);
      },
    },
  };
  