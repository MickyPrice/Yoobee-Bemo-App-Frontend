<template>
  <div class="payment">
    <!-- PAY/REQUEST BUTTONS -->
    <div class="payments__buttons">
      <button
        class="payments__btn"
        :class="{ 'payments__btn--active': mode == 'SEND' }"
        @click="$emit('updatemode', 'SEND')"
      >
        Send
      </button>
      <button
        class="payments__btn"
        :class="{ 'payments__btn--active': mode != 'SEND' }"
        @click="$emit('updatemode', 'REQUEST')"
      >
        Request
      </button>
    </div>

    <p class="payments__transferStatus" v-if="otherUser">
      Transfer {{ lang[mode].tofrom }}
      <strong>{{ otherUser.fullname }}</strong>
    </p>
    <div
      class="payments__amount"
      autocorrect="off"
      spellcheck="false"
      contenteditable
      role="textbox"
      aria-multiline="false"
      tabindex="0"
      @keyup="paymentInput"
    ></div>
    <FormInput type="text" name="message" placeholder="💬 Message..." />

    <BtnFull
      v-if="mode == 'SEND'"
      class="payments__send"
      :class="{ 'payments__send--disabled': !checkCash || !otherUser }"
      @click="$emit('submit', {event: 'SEND', ignored: !checkCash || !otherUser})"
    >
      <template slot="btn-title">Send Payment</template>
    </BtnFull>
    <div class="payments__buttons" v-if="mode == 'REQUEST'">
      <button
        class="payments__btn payments__btn--purple"
        :class="{ 'payments__btn--purple_disabled': !checkCash || !otherUser }"
        @click="$emit('submit', {event: 'REQUEST', ignored: !checkCash || !otherUser})"
      >
        Request
      </button>
      <button
        class="payments__btn payments__btn--purple"
        :class="{ 'payments__btn--purple_disabled': !checkCash }"
        @click="$emit('submit', {event: 'GENERATEQR', ignored: !checkCash})"
      >
        QR Code
      </button>
    </div>
  </div>
</template>

<script>
import BtnFull from "@/components/buttons/BtnFull";
import FormInput from "@/components/form/FormInput";

export default {
  components: {
    BtnFull,
    FormInput,
  },
  data: function () {
    return { amount: 0.0 };
  },
  props: {
    mode: String,
    lang: Object,
    otherUser: Object,
  },
  methods: {
    paymentInput(e) {
      if (!isNaN(e.target.innerText)) {
        this.amount = e.target.innerText
          ? parseInt(e.target.innerText * 100)
          : 0;
      } else {
        e.target.innerText = "";
        this.amount = 0;
      }
      this.$emit('update:cash', this.amount)
    },
  },
  computed: {
    cashAmount() {
      if (this.amount) {
        return this.amount;
      } else {
        return 0;
      }
    },
    checkCash() {
      return this.amount > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.payments {
  &__buttons {
    display: flex;
    border-radius: $corners-10;
    overflow: hidden;
    margin-top: $margin-20;
    height: 50px;
    align-content: center;
    .payments__btn:first-child {
      border-right: 1px solid #fff;
    }
    .payments__btn:last-child {
      border-left: 1px solid #fff;
    }
  }
  &__btn {
    width: 50%;
    display: block;
    background: #d8d8d8;
    color: $white-100;
    font-size: 18px;
    font-family: $font-noto;
    padding: 10px 5px;
    border: none;
    outline: none;
    &--active {
      background-color: $green-300;
    }
    &--purple {
      background-color: $purple-500;
      &_disabled {
        background-color: lighten($purple-500, 20%);
      }
    }
  }

  &__transferStatus {
    text-align: center;
    margin-top: $margin-20;
    font-family: $font-aileron;
  }
  &__amount {
    font-size: 64px;
    font-family: $font-aileron;
    text-align: center;
    margin-top: $margin-20;
    font-weight: 600;
    width: auto;
    box-sizing: content-box;
    line-clamp: 1;
    outline: none;
    overflow: hidden;
    white-space: nowrap;
    -webkit-user-modify: read-write-plaintext-only;
    &::before {
      content: "$";
    }
    &:empty:before {
      content: "$0.00";
      opacity: 0.5;
    }
  }
  &__send {
    background-color: $purple-500;
    font-size: 18px;
    font-weight: 400;
    &--disabled {
      background-color: lighten($purple-500, 20%);
    }
  }
}
</style>