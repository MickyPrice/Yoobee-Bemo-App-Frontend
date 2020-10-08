<template>
  <div class="signup">
    <div class="signup__top">
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
      <slot slot="PushCardTitle">Get Started</slot>
      <slot slot="PushCardSubTitle">Welcome, lets get you setup</slot>
      <template slot="SlotComponents" class="template">
        <p class="errorHandler text__sm">{{ error }}</p>
        <form @submit.prevent="checkSignup" >
          <TextBoxForm
            placeholder="Full Name"
            v-model="signupObject.fullname"
          />
          <TextBoxForm
            placeholder="User Name"
            v-model="signupObject.username"
          />
          <EmailBoxForm 
            v-model="signupObject.email"
          > 
          </EmailBoxForm>
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

import { signup } from "@/services/api/auth.js";

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
      error: "",

      signupObject: {
        fullname: "",
        username: "",
        email: "",
        phone: "",
      },
    };
  },

  methods: {
    checkSignup() {
      this.error = "";
      try {
        //Full Name
        if (this.signupObject.fullname === "") {
          throw "Missing Full Name";
        }
        // User Name
        else if (this.signupObject.username === "") {
          throw "Missing Username";
        } else if (/[A-Z]/.test(this.signupObject.username)) {
          throw "Username error, No Uppercase in Username";
        } else if (/\W/g.test(this.signupObject.username)) {
          throw "Username error, Only A-Z 0-9";
        }
        //Email
        else if(this.signupObject.email === ""){
          throw "Missing Email";
        }
        //Phone number
        else if (this.signupObject.phone === "") {
          throw "Cellphone Number missing";
        } else if (this.signupObject.phone.length < 8) {
          throw "Cellphone Number too short";
        } else {
          signup(this.signupObject).then((res) => {
            console.log(res);
            this.$router.push({
              name: "verify",
              params: { phone: this.signupObject.phone },
            });
          });
        }
      } catch (err) {
        console.log(err);
        this.error = err;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.signup {
  .overflow{
    overflow-y: scroll;
  }
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

  svg {
    height: 24px;
    width: 24px;
    color: $purple-500;
  }

  .errorHandler {
    color: $red-300;
    margin-top: 15px;
  }
}
</style>