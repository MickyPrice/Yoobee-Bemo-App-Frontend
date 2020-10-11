<template>
  <div class="qrcode">
    <Layout>
      <div @click="$emit('close-qr', true)">
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
      </div>
      <h1 class="qrcode__title heading__base">Your Code</h1>
      <div class="qrcode__main" v-if="user.status == 1">
        <h2 class="qrcode__amount heading__base">
          ${{ cashAmount.toFixed(2) }}
        </h2>
        <VueQrcode
          class="qrcode__img"
          :value="qrcodeString"
          :color="{ dark: '#4A4A4A', light: '#ffffff00' }"
          :width="400"
          :margin="0"
          :version="4"
          errorCorrectionLevel="L"
        />
        <h3 class="qrcode__fullname">{{ user.data.fullname }}</h3>
        <p class="qrcode__username">{{ user.data.username }}</p>
      </div>
    </Layout>
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/buttons/BiButton";
import { mapState } from "vuex";

export default {
  components: {
    VueQrcode,
    Layout,
    BackButton,
  },
  props: {
    amount: Number,
  },
  computed: {
    cashAmount() {
      if (this.amount) {
        return this.amount / 100;
      }
      return 0;
    },
    qrcodeString() {
      try {
        let code = {};
        code.destination = this.user.data._id;
        code.amount = this.cashAmount * 100;
        return btoa(JSON.stringify(code));
      } catch (e) {
        alert(e);
        return e;
      }
    },
    ...mapState(["user"]),
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.qrcode {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $purple-500;
  text-align: center;
  &__img {
    width: 100%;
    background-color: #fafafb;
    border-radius: $corners-20;
    padding: $padding-20;
  }
  &__title {
    color: $white-100;
    text-align: center;
    margin: 20px 0 30px 0;
  }
  &__main {
    background-color: #fff;
    padding: $padding-40;
    border-radius: $corners-40;
  }
  &__amount {
    text-align: center;
    margin-bottom: $margin-40;
  }
  &__fullname {
    color: $purple-500;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  &__username {
    color: desaturate($purple-500, 70%);
    &:before {
      content: "@";
    }
  }
}
</style>