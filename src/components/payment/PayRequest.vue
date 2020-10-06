<template>
  <div class="payment">
    <!-- PAY/REQUEST BUTTONS -->
    <div class="payments__buttons">
      <button
        class="payments__btn"
        :class="{ 'payments__btn--active': mode == 'SEND' }"
        @click="$emit('updateMode', 'SEND')"
      >Send</button>
      <button
        class="payments__btn"
        :class="{ 'payments__btn--active': mode != 'SEND' }"
        @click="$emit('updateMode', 'REQUEST')"
      >Request</button>
    </div>

    <p class="payments__transferStatue">
      Transfer ${{ amount }} {{ lang[mode].tofrom }}
      <strong>Jimmy Bo Jankins</strong>
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
    <FormInput type="text" name="message" placeholder="Message..." />
    <BtnFull v-if="amount > 0" class="payments__send">
      <template slot="btn-title">{{ lang[mode].paymentDisplay }} Payment</template>
    </BtnFull>
    <BtnFull v-else class="payments__send payments__send--disabled">
      <template slot="btn-title">{{ lang[mode].paymentDisplay }} Payment</template>
    </BtnFull>
  </div>
</template>

<script>
import BtnFull from "@/components/buttons/BtnFull";
import FormInput from "@/components/form/FormInput";

export default {
  components: {
    BtnFull,
    FormInput
  },
  props: {
    mode: String,
    lang: Object,
    amount: Number
  },
  methods: {
    paymentInput(e) {
      if (!isNaN(e.target.innerText)) {
        this.amount = e.target.innerText
          ? parseInt(e.target.innerText).toFixed(2)
          : (0).toFixed(2);
      } else {
        e.target.innerText = "";
        this.amount = (0).toFixed(2);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.payments {
  &__buttons {
    display: flex;
    border-radius: $corners-10;
    overflow: hidden;
    height: 50px;
  }
  &__btn {
    width: 50%;
    display: block;
    background: #d8d8d8;
    color: $white-100;
    font-size: 20px;
    font-family: $font-noto;
    padding: 10px 5px;
    border: none;
    outline: none;
    &--active {
      background-color: $green-300;
    }
  }

  &__transferStatue {
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
    &--disabled {
      background-color: lighten($purple-500, 20%);
    }
  }
}
</style>