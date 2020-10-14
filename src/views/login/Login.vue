<template>
  <div class="login">
    <div class="login__top">
      <router-link :to="{ name: 'landing' }">
        <Bibutton>
          <slot slot="icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </slot>
        </Bibutton>
      </router-link>

      <div class="login__heading">
        <h1 class="login__main-title heading__lg">Bemo</h1>
        <p class="login__sub-title heading__sm">Be More</p>
      </div>
    </div>
    <div class="login__hands">
      <img src="@/assets/images/bemo_hands.png" alt="">
    </div>
    <Card class="login__main">
      <h2 class="login__title">Welcome Back</h2>
      <p class="login__subtitle">Enter your phone number to login</p>
      <form @submit.prevent="loginUser">
        <PhoneNumberBoxForm v-model="form.phone">
          <p class="login__formtooltip">Only In New Zealand</p>
        </PhoneNumberBoxForm>
        <SubmitButton class="login__submit" />
      </form>
      <p class="login__bottomText">
        New? <router-link to="/signup">Get Started</router-link>
      </p>
    </Card>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/_variables";
svg {
  height: 24px;
  width: 24px;
  color: $purple-500;
}
.login {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  width: 100vw;
  &__title {
    font-size: 32px;
  }
  &__subtitle {
    font-size: 14px;
    color: desaturate($purple-500, 60%);
    padding-bottom: 40px;
  }
  &__top {
    padding: $margin-40;
    max-height: 400px;
  }
  &__main {
    padding-top: 40px;
    padding-bottom: 40px;
    flex-grow: 1;
    height: auto;
    position: relative;
  }
  &__submit {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  &__formtooltip {
    margin-top: 20px;
  }
  &__bottomText {
    color: desaturate($purple-500, 60%);
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 0;right:0;
    text-align: center;
    a {
      text-decoration: none;
      color: $purple-500;
    }
  }
  &__hands {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: -30px;
    img {
      height: 100%;
    }
  }
  &__heading {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
  &__main-title {
    color: $white-300;
    text-align: center;
  }
  &__sub-title {
    color: $white-300;
    opacity: 70%;
    text-align: center;
    margin-top: -10px;
  }
}
</style>

<script>
import Card from "../../components/layout/ResponsiveCard.vue";
import PhoneNumberBoxForm from "../../components/form/PhoneNumberBoxForm.vue";
import SubmitButton from "../../components/form/SubmitButton.vue";
import Bibutton from "../../components/buttons/BiButton.vue";

import { login, googleLogin } from "@/services/api/auth.js";

export default {
  data: function() {
    return {
      form: {
        phone: "",
      },
    };
  },
  components: {
    Card,
    PhoneNumberBoxForm,
    SubmitButton,
    Bibutton,
  },
  methods: {
    loginUser() {
      login(this.form).then(() => {
        this.$router.push({
          name: "verify",
          params: { phone: this.form.phone },
        });
      });
    },
    googleAuth() {
      googleLogin().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
