const moment = require("moment");

/**
 * Take a message and format it correctly,
 * grouping messages by time createdAt
 *
 * @param { Function } commit
 * @param { Object } state
 * @param { Object } msg - message object
 */
function groupMsg(commit, state, msg) {
  // If there are currently no messages
  if (state.messages.length === 0) {
    // Add message into a new group
    commit("ADD_MSG", { msg: msg, newMsg: true, lastMsg: null });
  } else {
    const latestMsg = state.messages.slice(-1)[0];

    // If the author of the new message is the same as the last,
    // And the created at time is within 60s of the last message
    // Group them together
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

/**
 * Take an array of messages, format and
 * then group by time CreatedAt
 *
 * @param { Function } commit
 * @param { Object } state
 * @param { Array } msgs - Array of historical messages
 */
function groupPastMsgs(commit, state, msgs) {
  msgs.forEach((msg) => {
    // If the messages is empty
    if (state.messages.length === 0) {
      // Add the message to a new group
      commit("ADD_OLDMSG", { msg: msg, newMsg: true, lastMsg: null });
    } else {
      const OldestMsg = state.messages[0];

      // If the author of the new message is the same as the last,
      // And the created at time is within 60s of the last message
      // Group them together
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
    status: 0,
  }),
  mutations: {
    /**
     * Update the current channel object
     *
     * @param { Object } state - chat store state
     * @param { Object } channel
     */
    UPDATE_CURRENT_CHANNEL(state, channel) {
      state.currentChannel = channel;
    },
    /**
     * Reset the current state to its initial state
     *
     * @param { Object } state - chat store state
     */
    RESET_CHAT(state) {
      state.currentChannel = null;
      state.currentLength = 0;
      state.messages = [];
      state.status = 0;
    },
    /**
     * Add a new message to the front of chat
     *
     * @param { Object } state - chat store state
     * @param { Object } request - Object including a msg object and a boolean
     * @typedef { newMsg: Boolean, msg: Object }
     */
    ADD_MSG(state, request) {
      if (request.newMsg) {
        state.messages.push([request.msg]);
      } else {
        state.messages[request.lastMsg].push(request.msg);
      }

      state.status = 1;
    },
    /**
     * Add an historical msg to the back of the chat
     *
     * @param { Object } state - chat store state
     * @param { Object } request - Object contaning a msg object and a boolean
     * @typedef { newMsg: Boolean, msg: Object }
     */
    ADD_OLDMSG(state, request) {
      if (request.newMsg) {
        state.messages.unshift([request.msg]);
      } else {
        state.messages[request.lastMsg].unshift(request.msg);
      }

      state.status = 1;
    },
    /**
     * Update the length of the chat
     * 
     * @param { Object } state - chat store state
     * @param { Number } len - Total length of chat
     */
    UPDATE_CHAT_LENGTH(state, len) {
      state.chatLength = len;
    },
  },
  actions: {
    /**
     * Recive a new message from the backend
     * 
     * @param { Object, Function } - chat state & commit function 
     * @param { Object } request - msg and total chat length
     * @typedef { msg: Object, length: Number }
     */
    socket_receiveMsg({ state, commit }, request) {
      groupMsg(commit, state, request.msg);
      commit("UPDATE_CHAT_LENGTH", request.length);
    },
    /**
     * Recive 20 historical messages from the backend
     * 
     * @param { Object, Function } - chat state & commit function 
     * @param { Object } request - array of msgs & total chat length
     * @typedef { msgs: Array, length: Number }
     */
    socket_reciveMsgs({ state, commit }, request) {
      groupPastMsgs(commit, state, request.msgs);
      commit("UPDATE_CHAT_LENGTH", request.length);
    },
    /**
     * Recive an update to the channel object
     * 
     * @param { Function } - commit function 
     * @param { Object } channel - channel object
     */
    socket_updateChannel({ commit }, channel) {
      commit("UPDATE_CURRENT_CHANNEL", channel);
    },
    /**
     * Join a regular channel
     *
     * @param { String } channel - Channel._id
     */
    joinChannel({ commit }, channel) {
      commit("RESET_CHAT");
      this._vm.$socket.client.emit("joinChannel", channel);
    },
    /**
     * Join a direct message channel
     *
     * @param { String } user - User._id
     */
    joinDirect({ commit }, user) {
      commit("RESET_CHAT");
      this._vm.$socket.client.emit("joinDirect", user);
    },
    /**
     * Leave a channel
     *
     * @param { String } channel - Channel._id
     */
    leaveChannel({ commit }, channel) {
      commit("RESET_CHAT");
      this._vm.$socket.client.emit("leaveChannel", channel);
    },
  },
};
