<template>
  <div class="login">
    <div class="login__top">
      <router-link :to="{ name: 'landing' }">
        <Bibutton>
          <slot slot="icon" class>
            <i class="fas fa-angle-left col-purple-500"></i>
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

import { login, googleLogin } from "@/services/api/auth.js";

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
    googleAuth() {
      googleLogin().then((res) => {
        console.log(res)
      })
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.login {
  &__top {
    padding: $pad-bor;
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