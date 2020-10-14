<template>
  <div class="msg-container__group">
    <div v-if="messageGroup[0].author != currentUser()" class="msg-container__stack-other--profile">
      <ProfilePic
        class="small"
        :imagelink="api.VUE_APP_API_URL + '/user/profile/' + messageGroup[0].author"
      >
      </ProfilePic>
    </div>
    <div
      :class="
        currentUser ? 'msg-container__stack' : 'msg-container__stack-other'
      "
    >
      <Message
        v-for="(message, $index) in messageGroup"
        :key="$index"
        :content="message.content"
        :contentType="message.contentType"
        :currentUser="message.author == currentUser()"
      />
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";
import { mapState } from "vuex";
import ProfilePic from "../profile/ProfilePic.vue";

export default {
  data: function() {
    return {
      api: process.env,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  props: {
    messageGroup: {
      type: Array,
    },
  },
  components: {
    Message,
    ProfilePic,
  },
  methods: {
    currentUser() {
      if (this.user.data) {
        if (this.user.data._id) {
          return this.user.data._id;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables";

.msg-container {
  width: 100%;
  &__group {
    position: relative;
  }
  &__stack {
    margin-left: 35px;
    margin-bottom: 10px;

    min-width: calc(100% - 20%);

    h5 {
      text-align: center;
    }
    &--clear {
      padding-left: 20%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .msg-box {
        border-radius: 20px 10px 10px 20px;
      }
      .msg-box:first-child {
        border-radius: 20px 20px 10px 20px;
      }
      .msg-box:last-child {
        border-radius: 20px 10px 20px 20px;
      }
      .msg-box:only-child {
        border-radius: 20px;
      }
    }
  }

  &__stack-other {
    margin-top: 15px;
    display: flex;

    &--profile {
      max-width: 32px;
      max-height: 32px;
      position: absolute;
      bottom: 0;
    }
    &--clear {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .msg-box {
        border-radius: 5px;
      }
      .msg-box:first-child {
        border-radius: 15px 5px 5px 5px;
      }
      .msg-box:last-child {
        border-radius: 5px 5px 5px 15px;
      }
      .msg-box:only-child {
        border-radius: 20px;
      }
    }
  }
  .small {
    width: 24px;
    height: 24px;
    border: none;
  }
}
</style>
