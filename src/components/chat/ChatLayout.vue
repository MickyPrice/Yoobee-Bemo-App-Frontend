<template>
  <div class="chat-push-card">
    <div id="msgScroll" class="chat-push-card__message-box">
      <slot />
      <ChatBox v-on:newPost="sendMsg" />
    </div>
  </div>
</template>

<script>
import ChatBox from "./ChatBox.vue";

export default {
  components: {
    ChatBox,
  },
  methods: {
    sendMsg(msg) {
      this.$socket.client.emit("sendMsg", {
        channel: this.$route.params.channelId,
        message: { content: msg, contentType: "TEXT/PLAIN" },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.chat-push-card {
  width: 100%;
  height: 100px;
  flex-grow: 1;
  background-color: $white-100;
  border-radius: $corners-top;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: $white-100;

  &__message-box {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    // flex-wrap: wrap;
  }
}
</style>
