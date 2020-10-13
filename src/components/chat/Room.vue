<template>
  <ChatLayout>
    <div class="messages">
      <div class="messages__padding">
        <div
          class="msg-container"
          infinite-wrapper
          v-chat-scroll="{ always: false, smooth: true }"
        >
          <infinite-loading
            force-use-infinite-wrapper
            direction="top"
            @infinite="loadChat"
            spinner="waveDots"
          >
            <div slot="no-more">
              <!-- {{ chats.channels[channel] }} -->
            </div>
          </infinite-loading>
          <MessageGroup
            v-for="(group, $index) in chat.messages"
            :key="$index"
            :messageGroup="group"
          />
        </div>
      </div>
    </div>
  </ChatLayout>
</template>

<script>
import Vue from "vue";
import MessageGroup from "./MessageGroup.vue";
import InfiniteLoading from "vue-infinite-loading";
import ChatLayout from "./ChatLayout.vue";
import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);
import { mapState } from "vuex";

export default {
  components: {
    MessageGroup,
    InfiniteLoading,
    ChatLayout,
  },
  data() {
    return {
      channel: this.$route.params.channelId,
    };
  },
  computed: {
    ...mapState(["chats", "chat", "user", "messages"]),
  },
  methods: {
    currentUser() {
      if (this.user.data) {
        if (this.user.data._id) {
          return this.user.data._id;
        }
      }
    },
    loadChat($state) {
      const length = this.getSum();

      if (this.chat.chatLength <= this.getSum() && this.chat.chatLength != 0) {
        $state.complete();
      } else if (this.chat.chatLength > this.chat.messages.length) {
        this.getMsgs($state, length);
      } else if (this.chat.chatLength == 0) {
        this.getMsgs($state, length);
      } else {
        $state.loaded();
      }
    },
    getSum() {
      let sum = 0;
      this.chat.messages.forEach((group) => {
        sum += group.length;
      });
      return sum;
    },
    getMsgs($state, length) {
      this.$socket.client.emit("getMsgs", {
        channelId: this.$route.params.channelId,
        num: length,
      });

      let timeoutLoad = setTimeout(() => {
        clearInterval(checkLoad);
        if (this.chat.chatLength == this.getSum()) {
          $state.complete();
        }
      }, 5000);

      let checkLoad = setInterval(() => {
        if (this.getSum() > length) {
          $state.loaded();
          clearTimeout(timeoutLoad);
          clearInterval(checkLoad);
        }
      }, 5);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.messages {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  z-index: 0;

  &__padding {
    height: 100%;
    width: 100%;
    padding-right: 5%;
    padding-left: 5%;
    display: flex;
    align-items: flex-end;

    .msg-container {
      width: 100%;
      max-height: 100%;
      padding-top: 10px;
      overflow-y: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
      }
      &__stack {
        margin-left: 10%;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
