const moment = require("moment");

function groupMsg(commit, state, msg) {
  if (state.messages.length === 0) {
    commit("ADD_MSG", { msg: msg, newMsg: true, lastMsg: null });
  } else {
    const latestMsg = state.messages.slice(-1)[0];

    if (msg.author == latestMsg[0].author && msg.createdAt) {
      const latestMsgTime = moment(latestMsg.slice(-1)[0].createdAt);
      const currentMsgTime = moment(msg.createdAt);
      const timeDiff = currentMsgTime.diff(latestMsgTime, "seconds");

      if (timeDiff < 60 && timeDiff !== 0) {
        const index = state.messages.indexOf(latestMsg);
        commit("ADD_MSG", { msg: msg, newMsg: false, lastMsg: index });
      } else {
        commit("ADD_MSG", { msg: msg, newMsg: true, lastMsg: null });
      }
    } else {
      commit("ADD_MSG", { msg: msg, newMsg: true, lastMsg: null });
    }
  }
}

function groupPastMsgs(commit, state, msgs) {
  msgs.forEach((msg) => {
    if (state.messages.length === 0) {
      commit("ADD_OLDMSG", { msg: msg, newMsg: true, lastMsg: null });
    } else {
      const OldestMsg = state.messages[0]

      if (msg.author == OldestMsg[0].author && msg.createdAt) {
        const OldestMsgTime = moment(OldestMsg[0].createdAt);
        const currentMsgTime = moment(msg.createdAt);
        const timeDiff = OldestMsgTime.diff(currentMsgTime, "seconds");

        if (timeDiff < 60 && timeDiff !== 0) {
          const index = state.messages.indexOf(OldestMsg);
          commit("ADD_OLDMSG", { msg: msg, newMsg: false, lastMsg: index });
        } else {
          commit("ADD_OLDMSG", { msg: msg, newMsg: true, lastMsg: null });
        }
      } else {
        commit("ADD_OLDMSG", { msg: msg, newMsg: true, lastMsg: null });
      }
    }
  });
}

module.exports = {
  state: () => ({
    messages: [],
    chatLength: 0,
    currentChannel: {},
    status: 0
  }),
  mutations: {
    UPDATE_CURRENT_CHANNEL(state, channel) {
      state.currentChannel = channel;
    },
    RESET_CHAT(state) {
      state.currentChannel = null;
      state.currentLength = 0;
      state.messages = [];
      state.status = 0;
    },
    ADD_MSG(state, request) {
      if (request.newMsg) {
        state.messages.push([request.msg]);
      } else {
        state.messages[request.lastMsg].push(request.msg);
      }

      state.status = 1
    },
    ADD_OLDMSG(state, request) {
      if (request.newMsg) {
        state.messages.unshift([request.msg]);
      } else {
        state.messages[request.lastMsg].unshift(request.msg);
      }

      state.status = 1
    },
    UPDATE_CHAT_LENGTH(state, len) {
      state.chatLength = len;
    }
  },
  actions: {
    socket_receiveMsg({ state, commit }, request) {
      groupMsg(commit, state, request.msg);
      commit("UPDATE_CHAT_LENGTH", request.length);
    },
    socket_reciveMsgs({ state, commit }, request) {
      groupPastMsgs(commit, state, request.msgs);
      commit("UPDATE_CHAT_LENGTH", request.length);
    },
    socket_updateChannel({ commit }, channel) {
      commit("UPDATE_CURRENT_CHANNEL", channel);
    },
    joinChannel({ commit }, channel) {
      commit("RESET_CHAT");
      this._vm.$socket.client.emit("joinChannel", channel);
    },
    joinDirect({ commit }, channel) {
      commit("RESET_CHAT");
      this._vm.$socket.client.emit("joinDirect", channel);
    },
    leaveChannel({ commit }, channel) {
      commit("RESET_CHAT");
      this._vm.$socket.client.emit("leaveChannel", channel);
    },
  },
};
