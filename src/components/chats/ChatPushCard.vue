<template>
  <div class="chat-push-card">
    <div class="chat-push-card__message-box">
      <Messages :newMessage="newMessage" />
    </div>
    <ChatBox v-on:newPost="postNewMessage($event)" />
  </div>
</template>

<script>
import ChatBox from "./ChatBox.vue";
import Messages from "./Messages.vue";

export default {
  data() {
    return {
      newMessage: "",
    };
  },
  components: {
    ChatBox,
    Messages,
  },
  methods: {
    postNewMessage: function (event) {
      console.log("Just got a new post saying....." + event);
      this.newMessage = event;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/scss/_variables";
.chat-push-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: $white-100;
  border-radius: $corners-top;
  display: flex;
  flex-direction: column;
  background-color: pink;

  &__message-box {
    height: 100%;
  overflow-y: scroll;

  }
}
</style>