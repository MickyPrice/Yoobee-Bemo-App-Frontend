<template>
  <div class="signup">
    <div class="signup__top">
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
      <slot slot="PushCardTitle">Get Started</slot>
      <slot slot="PushCardSubTitle">Welcome, lets get you setup</slot>
      <template slot="SlotComponents">
        <form @submit.prevent="checkSignup">
          <TextBoxForm v-model="signupObject.username" />
          <EmailBoxForm v-model="signupObject.email" />
          <PhoneNumberBoxForm v-model="signupObject.phone">
            <slot slot="top-text">Only In New Zealand</slot>
          </PhoneNumberBoxForm>
          <SubmitButton />
        </form>
      </template>
      <slot slot="PushCardBottomText">Already with Us? Login</slot>
    </PushCard>
  </div>
</template>

<script>
import PushCard from "@/components/layout/PushCard.vue";
import TextBoxForm from "@/components/form/TextBoxForm.vue";
import EmailBoxForm from "@/components/form/EmailBoxForm.vue";
import PhoneNumberBoxForm from "@/components/form/PhoneNumberBoxForm.vue";
import SubmitButton from "@/components/form/SubmitButton.vue";
import Bibutton from "@/components/buttons/BiButton.vue";

// import { signup } from "@/services/api/auth.js"

export default {
  components: {
    PushCard,
    TextBoxForm,
    EmailBoxForm,
    PhoneNumberBoxForm,
    SubmitButton,
    Bibutton,
  },
  data: function () {
    return {
      signupObject: {
        username: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    checkSignup() {
      try {
        // if(){
        //   throw new error("Phone number missing");
        // }
        signup(signupObject).then((res) => {
          console.log(res);
        });
      } catch {
        (error) => {
          console.log(error);
        };
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.signup {
  &__top {
    padding: $pad-bor;
  }
  .head {
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
  form {
    margin-top: $margin-30;
  }
}
</style>