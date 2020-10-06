<template>
  <div class="payments" v-if="user.status == 1">
    <Layout>
      <BackButton>
        <slot slot="icon">
          <svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <h1 class="payments__title heading__sm">{{ lang[mode].paymentDisplay }} Payment</h1>
    </Layout>
    <PushCard class="payments__push-card">
      <div class="payments__actors">
        <Profile :source="user.data.profilePic" />
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
        <Profile />
      </div>

      <!-- CODE -->
      <PayRequest :mode="mode" :lang="lang" v-on:updateMode="mode=$event" />
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
}
</style>


<script>
import BackButton from "@/components/buttons/BiButton";
import Layout from "@/components/layout/Layout";
import PushCard from "@/components/layout/BasicPushCard";
import Profile from "@/components/profile/Photo";
import Direction from "@/components/profile/Direction";
import PayRequest from "@/components/payment/PayRequest";
import { mapState } from "vuex";

export default {
  components: {
    BackButton,
    Layout,
    PushCard,
    Profile,
    Direction,
    PayRequest
  },
  data: function() {
    return {
      env: process.env,
      mode: "SEND",
      lang: {
        SEND: {
          paymentDisplay: "Send",
          tofrom: "to"
        },
        REQUEST: {
          paymentDisplay: "Request",
          tofrom: "from"
        }
      },
      amount: 0
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    setPaymentType(type) {
      this.mode = type.toUpperCase();
    },
    sendFufill() {
      this.$socket.client.emit("fufillRequest", {
        payment: "5f7bdcafb771a4c6ff515550"
      });
    },
    sendPayment() {
      this.$socket.client.emit("payment", {
        mode: "SEND",
        actor: "5f67e7fcf5731e102a0379ac",
        amount: 51
      });
    }
  },
  sockets: {
    paymentResponse(data) {
      console.log(data);
    }
  }
};
</script>

