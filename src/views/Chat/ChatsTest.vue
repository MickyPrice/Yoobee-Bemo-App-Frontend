<template>
  <div>
    <button @click="joinButton">Join Chat</button>
    <form @submit.prevent="sendMsg">
      <input v-model="msg" />
      <input type="submit" />
    </form>
    <ul>
      <li v-for="(chat, index) in chats" :key="index">{{ chat.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      channel: null,
      chats: [],
      msg: "",
    };
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    channel(channel) {
      this.channel = channel.id;
      console.log(channel)
      this.chats = channel.msgHistory
    },
    message(data) {
      this.chats.push(data);
    },
    error(error) {
      console.log(error);
    },
  },
  methods: {
    joinButton() {
      this.$socket.client.emit("join", "5f67d592fe74ed0c235ab8cf");
    },
    sendMsg() {
      this.$socket.client.emit("chatMessage", { channel: this.channel, body: { content: this.msg }});
    },
  },
  created() {},
};
</script>

<style></style>
