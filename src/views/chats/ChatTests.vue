<template>
  <div>
    <h1>{{chats.channels[$route.params.channelId]}}</h1>
    <button @click="sendMsg">press me</button>
    {{chat}}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: function() {
    return {
      channel: this.$route.params.channelId,
    };
  },
  computed: {
    ...mapState(["chats", "chat"]),
  },
  methods: {
    ...mapActions(["joinChannel", "leaveChannel"]),
    sendMsg() {
      this.$socket.client.emit("sendMsg", {
        channel: this.channel,
        message: { content: "sheeo", contentType: "TEXT/PLAIN"},
      });
    },
  },
  created() {
    this.joinChannel(this.channel);
  },
  destroyed() {
    this.leaveChannel(this.channel);
  },
};
</script>
