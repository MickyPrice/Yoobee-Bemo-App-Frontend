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
      class="msg-box"
      :class="currentUser ? 'bk-purple-500 col-white-100' : 'bk-white-300'"
      v-if="contentType == 'PAYMENT' && payments.status == 1"
      :disabled="currentUser || payment.status !== 'PENDING'"
      @click="fufillPayment"
    >
      <span class="text-sm">PAYMENT::: {{ payment }}</span>
    </button>
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
        console.log(this.payments);
        return this.payments.data[this.content];
      }
      return null;
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
// Dull disabled payment buttons
.msg-box[disabled] {
  opacity: 0.8;
}
</style>
