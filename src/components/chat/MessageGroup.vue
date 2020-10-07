<template>
  <div
    :class="currentUser ? 'msg-container__stack' : 'msg-container__stack-other'"
  >
    <div v-if="currentUser()" class="msg-container__stack-other--profile">
      <ProfilePic class="small" imagelink="https://images.unsplash.com/photo-1588337598656-f2b0693deb48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> </ProfilePic>
    </div>
    <Message
      v-for="(message, $index) in messageGroup"
      :key="$index"
      :content="message.content"
      :contentType="message.contentType"
      :currentUser="message.author == currentUser()"
    />
  </div>
</template>

<script>
import Message from "./Message.vue";
import { mapState } from "vuex";
import ProfilePic from "../profile/ProfilePic.vue";

export default {
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
    ProfilePic
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
  &__stack {
    margin-left: 10%;
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
      width: 10%;
      display: flex;
      align-items: flex-end;
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
}
</style>
