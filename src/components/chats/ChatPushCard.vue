<template>
  <div class="chat-push-card">
    <div class="chat-push-card__message-box">
      <ul class="messages">
        <li class="me">hell hell hell</li>
        <li class="me">hell hell hell</li>
        <li class="him">hell hell hell</li>
        <li class="him">hell hell hell</li>
        <li class="him">hell hell hell</li>
        <li class="him">hell hell hell</li>

        <li class="him">hell hell hell</li>

        <li
          class="me"
        >hell hell hel hell hell hellhell hell hellhell hell hellhell hell hellhell hell hellhell hell hellhell hell hellhell hell hellhell hell helll</li>

        <li class="me">hell hell hell</li>
      </ul>
    </div>
    <ChatBox v-on:newPost="postNewMessage($event)" />
  </div>
</template>

<script>
import ChatBox from "./ChatBox";

export default {
  components: {
    ChatBox,
  },
  methods: {
    postNewMessage: function (event) {
      console.log("Just got a new post saying....." + event);
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

  &__message-box {
    height: 100%;
    margin: 0 5%;
    overflow: scroll;
    overflow-anchor: none;

    .messages {
      overflow-anchor: auto;

      li {
        display: inline-block;
        clear: both;
        padding: 20px;
        border-radius: 30px;
        margin-bottom: 2px;
        font-family: Helvetica, Arial, sans-serif;
      }
      .me {
        float: right;
        background: #0084ff;
        color: #fff;
      }

      .him {
        background: #eee;
        float: left;
      }

      .him + .me {
        border-bottom-right-radius: 5px;
      }

      .me + .me {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      .me:last-of-type {
        border-bottom-right-radius: 30px;
      }
    }
  }
}
</style>