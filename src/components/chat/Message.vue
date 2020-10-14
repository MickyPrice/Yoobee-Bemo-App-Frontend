<template>
  <div
    v-if="payment"
    :class="
      currentUser
        ? 'msg-container__stack--clear'
        : 'msg-container__stack-other--clear'
    "
  >
    <!-- Sent Payment -->
    <button
      class="msg-box msg-box--payment"
      v-if="contentType == 'PAYMENT' && payments.status == 1"
      :disabled="currentUser || payment.status !== 'PENDING'"
      @click="fufillPayment"
    >
      <span v-if="payment.source == user.data._id">- </span>
      <span class="msg-box__text--payment">${{ payment.amount / 100 }}</span>
    </button>
  </div>
  <div
    v-else-if="gif"
    :class="
      currentUser
        ? 'msg-container__stack--clear'
        : 'msg-container__stack-other--clear'
    "
  >
    <div
      class="msg-box msg-box--media"
      :class="currentUser ? 'bk-purple-500 col-white-100' : 'bk-white-300'"
    >
      <img class="msg-box__img" :src="content" />
    </div>
  </div>
  <div
    v-else
    :class="
      currentUser
        ? 'msg-container__stack--clear'
        : 'msg-container__stack-other--clear'
    "
  >
    <!-- Message (Default) -->
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
    ...mapState(["chats", "chat", "user", "payments"]),
    payment() {
      if (this.payments.status == 1) {
        return this.payments.data[this.content];
      }
      return null;
    },
    gif() {
      if (this.contentType == "GIF") {
        return true;
      }
      return false;
    },
    contents() {
      if (this.content) {
        return this.content;
      }
      return "";
    },
  },
  props: {
    content: {
      type: String,
      default: "Error",
    },
    contentType: String,
    currentUser: Boolean,
  },
  methods: {
    fufillPayment() {
      if (!this.currentUser && this.payment.status === "PENDING") {
        // Payment can be fufilled.
        if (
          confirm("Are you sure you want to send $" + this.payment.amount / 100)
        ) {
          this.$socket.client.emit("fufillRequest", this.payment._id);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.msg-box {
  padding: 8px 14px 9px;
  margin-top: 2px;
  display: inline;

  &--media {
    padding: unset;
    overflow: hidden;
    max-width: 300px;
  }

  &__img {
    vertical-align: top;
    width: 100%;
    min-height: 165px;
    object-fit: cover;
  }

  &--payment {
    background-color: #303030;
    border: unset;
    outline: none;
    padding: 32px 41px 32px;
    font-size: 43px;
    color: #ffffff;
    font-weight: 600;
    // &[disabled]{

    // }
  }

  // &__text {
  //   &--payment{
  //     font-size: 43px;
  //     color: #ffffff;
  //     font-weight: 600;
  //   }
  // }
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
