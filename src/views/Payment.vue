<template>
  <div class="payments" v-if="user.status == 1">
    <Layout>
      <BackButton @clicked="$router.go(-1)">
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
      <h1 class="payments__title heading__sm">
        {{ lang[mode].paymentDisplay }} Payment
      </h1>
    </Layout>
    <PushCard class="payments__push-card">
      <div class="payments__actors">
        <Profile :clickable="false" :source="user.data.profilePic" />
        <Direction
          class="payments__direction"
          :class="{ 'payments__direction--flipped': mode != 'SEND' }"
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
        <div @click="display = 'ONLINE'">
          <Profile v-if="otherUser" :source="imgUrlStart + destination._id" />
          <Profile v-else />
        </div>
      </div>

      <!-- CODE -->
      <PayRequest
        v-if="display == 'PAYREQUEST'"
        :mode="mode"
        :lang="lang"
        :otherUser="destination"
        v-on:updatemode="mode = $event"
        v-on:submit="paymentSubmit"
        v-on:update:cash="amount = $event"
      />
      <OnlineUsers
        @select-user="
          otherUser = $event;
          display = 'PAYREQUEST';
        "
        v-if="display == 'ONLINE'"
      />
    </PushCard>

    <QRCode
      v-if="qrcodeOpened"
      @close-qr="qrcodeOpened = false"
      :amount="cashAmount"
    />
  </div>
</template>

<script>
import BackButton from "@/components/buttons/BiButton";
import Layout from "@/components/layout/Layout";
import PushCard from "@/components/layout/BasicPushCard";
import Profile from "@/components/profile/Photo";
import Direction from "@/components/profile/Direction";
import PayRequest from "@/components/payment/PayRequest";
import OnlineUsers from "@/components/payment/OnlineUsers";
import QRCode from "@/components/payment/QRCode";
import { mapState } from "vuex";

export default {
  components: {
    BackButton,
    Layout,
    PushCard,
    Profile,
    Direction,
    PayRequest,
    OnlineUsers,
    QRCode,
  },
  data: function () {
    return {
      env: process.env,
      mode: "SEND",
      lang: {
        SEND: {
          paymentDisplay: "Send",
          tofrom: "to",
        },
        REQUEST: {
          paymentDisplay: "Request",
          tofrom: "from",
        },
      },
      qrcodeOpened: false,
      amount: 0,
      display: "PAYREQUEST", // PAYREQUEST, ONLINE
      otherUser: null,
      imgUrlStart: `${process.env.VUE_APP_API_URL}/user/profile/`,
    };
  },
  computed: {
    ...mapState(["user"]),
    destination() {
      if (this.otherUser != {}) {
        return this.otherUser;
      }
      return undefined;
    },
    cashAmount() {
      if (!isNaN(this.amount)) {
        return this.amount;
      } else {
        return 0;
      }
    },
  },
  methods: {
    setPaymentType(type) {
      this.mode = type.toUpperCase();
    },
    sendPayment() {
      // Send money to someone
      try {
        if (!this.cashAmount > 0) {
          throw "You must send more than $1.00";
        }
        if (!this.destination) {
          throw "You're missing a destination user";
        }
        this.$socket.client.emit("instantPayment", {
          mode: "SEND",
          actor: this.destination._id,
          amount: this.cashAmount,
        });
      } catch (e) {
        alert(e);
      }
    },
    sendPaymentRequest() {
      // Request money from someone
      this.$socket.client.emit("payment", {
        mode: "REQUEST",
        actor: this.destination._id,
        amount: this.cashAmount,
      });
    },
    paymentSubmit(e) {
      // When the SEND PAYMENT, REQUEST or QR CODE button is pressed
      if (!e.ignored) {
        if (e.event == "GENERATEQR") {
          this.qrcodeOpened = true;
        }
        if (e.event == "SEND") {
          this.sendPayment();
        }
        if (e.event == "REQUEST") {
          this.sendPaymentRequest();
        }
      }
    },
  },
  sockets: {
    paymentResponse(data) {
      console.log(data);
      // TODO: Something...
    },
    redirectToChat(data) {
      this.$router.push(`/chat/${data.channel}`);
    },
  },
};
</script>




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
}
</style>
