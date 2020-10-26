<template>
  <div
    v-if="payment && user.status == 1"
    :class="
      currentUser
        ? 'msg-container__stack--clear'
        : 'msg-container__stack-other--clear'
    "
  >
    <div
      class="msg-box msg-box--payment"
      v-if="contentType == 'PAYMENT' && payments.status == 1"
    >
      <div class="msg-box--payment-amount">
        <span v-if="payment.source == user.data._id">- </span>
        <span class="msg-box__text--payment">${{ payment.amount / 100 }}</span>
      </div>
      <p class="msg-box__text--payment-info">
        <span
          v-if="payment.status == 'PENDING' && payment.source == user.data._id"
        >
          Requested payment from you
        </span>
        <span v-if="payment.source != user.data._id && payment.status == 'PENDING'">
          Awaiting payment
        </span>
      </p>
    </div>

    <button
      class="msg-box__payment-btn"
      v-if="payment.status == 'PENDING' && payment.source == user.data._id"
      @click="fufillPayment"
    >
      Send ${{ payment.amount / 100 }}
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
      if (this.contentType == "PAYMENT") {
        if (this.contentType == "PAYMENT") {
          return this.payments.data[this.content];
        }
      }
      return false;
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

  &__payment-btn {
    margin-top: 5px;
    padding: 7px 40px;
    background: #00D6A3;
    color: white;
    border-radius: 15px;
    border: unset;
    outline: none;
  }

  &--payment {
    background-color: #303030;
    border: unset;
    outline: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 32px 41px 32px;
    font-size: 43px;
    color: #ffffff;
    font-weight: 600;

    &-amount {
      text-align: center;
    }
  }

  &__text {
    &--payment-info {
      color: #ffffff;
      font-weight: 400;
      font-size: 15px;
      flex-basis: 100%;
      width: 100%;
    }
  }
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
