<template>
  <div :class="currentUser ? 'msg-container__stack--clear' : 'msg-container__stack-other--clear'">
    <div
      class="msg-box"
      :class="currentUser ? 'bk-purple-500 col-white-100' : 'bk-white-300'"
    >
      <span class="text-sm">{{ content }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["chats", "chat", "user"]),
  },
  props: {
    content: {
      type: String,
      default: "Error",
    },
    contentType: String,
    currentUser: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.msg-box {
  padding: 8px 14px 9px;
  margin-top: 2px;
  display: inline;

  & .text-sm {
    font-size: 14px;
    line-height: 1.34;
    white-space: pre-wrap;
    text-align: left;
    direction: ltr;
  }
}

.small {
  width: 7vw;
  height: 7vw;
  border: none;
}
</style>
