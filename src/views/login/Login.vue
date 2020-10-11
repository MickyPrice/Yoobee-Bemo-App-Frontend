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

      <div class="head">
        <h1 class="head__titile heading__lg--balance">Bemo</h1>
        <p class="head__sub-title heading__sm">Be More</p>
      </div>
    </div>
    <PushCard>
      <slot slot="PushCardTitle">Welcome Back</slot>
      <slot slot="PushCardSubTitle">Enter your phone number to login</slot>
      <template slot="SlotComponents">
        <form @submit.prevent="loginUser">
          <PhoneNumberBoxForm v-model="form.phone">
            <slot slot="top-text">Only In New Zealand</slot>
          </PhoneNumberBoxForm>
          <SubmitButton />
        </form>
      </template>
      <slot slot="PushCardBottomText">New? Get Started</slot>
    </PushCard>
  </div>
</template>

<script>
import PushCard from "../../components/layout/PushCard.vue";
import PhoneNumberBoxForm from "../../components/form/PhoneNumberBoxForm.vue";
import SubmitButton from "../../components/form/SubmitButton.vue";
import Bibutton from "../../components/buttons/BiButton.vue";

import { login } from "@/services/api/auth.js";

export default {
  data: function () {
    return {
      form: {
        phone: "",
      },
    };
  },
  components: {
    PushCard,
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
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
svg {
  height: 24px;
  width: 24px;
  color: $purple-500;
}
.login {
  &__top {
    padding: $margin-40;
  }
}
.head {
  padding-top: 5%;
  &__titile {
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