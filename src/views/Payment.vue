<template>
  <div class="payments" v-if="user.status == 1">
    <Layout>
      <BackButton>
        <slot slot="icon">
          <svg
            width="21"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.125 16.625L7 10.5l6.125-6.125"
              stroke="#8B55FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </slot>
      </BackButton>
      <h1 class="payments__title heading__sm">{{ paymentDisplay }} Payment</h1>
    </Layout>
    <PushCard class="payments__push-card">
      <div class="payments__actors">
        <Profile :source="user.data.profilePic" />
        <Direction
          class="payments__direction"
          :class="{ 'payments__direction--flipped': display != 'SEND' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="30"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Direction>
        <Profile />
      </div>

      <!-- PAY/REQUEST BUTTONS -->
      <div class="payments__buttons">
        <button
          class="payments__btn"
          :class="{ 'payments__btn--active': display == 'SEND' }"
          @click="setPaymentType('SEND')"
        >
          Send
        </button>
        <button
          class="payments__btn"
          :class="{ 'payments__btn--active': display != 'SEND' }"
          @click="setPaymentType('REQUEST')"
        >
          Request
        </button>
      </div>

      <p class="payments__transferStatue">
        Transfer ${{ amount }} {{ tofrom }} <strong>Jimmy Bo Jankins</strong>
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
        <template slot="btn-title"> {{ paymentDisplay }} Payment </template>
      </BtnFull>
      <BtnFull  v-else class="payments__send payments__send--disabled">
        <template slot="btn-title"> {{ paymentDisplay }} Payment </template>
      </BtnFull>
    </PushCard>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables";

.payments {
  height: 100vh;
  background-color: $purple-500;

  &__title {
    color: $white-100;
    text-align: center;
    margin-top: $margin-20;
  }

  &__push-card {
    height: 500px;
    padding: $padding-40;
  }
  &__actors {
    display: flex;
    justify-content: center;
    height: 120px;
    margin-top: -$padding-40;
    transform: translateY(-50%);
    align-items: center;
  }
  &__direction {
    flex-shrink: 0;
    height: 30px;
    width: 30px;
    margin: 0 15px;
    position: relative;
    color: $red-300;
    transition: color 0.4s linear,
    transform 0.4s cubic-bezier(0, 1.8, 0.99, 0.89);
    &--flipped {
      transform: rotate(540deg);
      color: $green-300;
    }
  }

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


<script>
import BackButton from "@/components/buttons/BiButton";
import Layout from "@/components/layout/Layout";
import PushCard from "@/components/layout/BasicPushCard";
import Profile from "@/components/profile/Photo";
import Direction from "@/components/profile/Direction";
import FormInput from "@/components/form/FormInput";
import BtnFull from "@/components/buttons/BtnFull";
import { mapState } from "vuex";

export default {
  components: {
    BackButton,
    Layout,
    PushCard,
    Profile,
    Direction,
    FormInput,
    BtnFull,
  },
  data: function () {
    return {
      paymentDisplay: "Send", // The text to display
      display: "send", // How to display the page
      tofrom: "to", // Where are funds going
      env: process.env,
      amount: 0,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    paymentInput(e) {
        if(!isNaN(e.target.innerText)) {
            this.amount = (e.target.innerText) ? parseInt(e.target.innerText).toFixed(2) : (0).toFixed(2);
        } else {
            e.target.innerText = "";
            this.amount = (0).toFixed(2);
        }
    },
    setPaymentType(type) {
      switch (type.toUpperCase()) {
        case "SEND":
          this.paymentDisplay = "Send";
          this.display = "SEND";
          this.tofrom = "to";
          break;
        default:
          this.paymentDisplay = "Request";
          this.display = "REQUEST";
          this.tofrom = "from";
          break;
      }
    },
    sendFufill() {
      this.$socket.client.emit("fufillRequest", {
        payment: "5f7bdcafb771a4c6ff515550",
      });
    },
    sendPayment() {
      this.$socket.client.emit("payment", {
        mode: "SEND",
        actor: "5f67e7fcf5731e102a0379ac",
        amount: 51,
      });
    },
  },
  sockets: {
    paymentResponse(data) {
      console.log(data);
    },
  },
};
</script>

