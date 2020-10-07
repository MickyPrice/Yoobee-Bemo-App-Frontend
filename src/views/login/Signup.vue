<template>
  <div class="signup">
    <div class="signup__top">
      <router-link :to="{ name: 'landing' }">
        <Bibutton>
          <slot slot="icon">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>          </slot>
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
          <TextBoxForm placeholder="Full Name" v-model="signupObject.fullname" />
          <TextBoxForm placeholder="User Name" v-model="signupObject.username" />
          <PhoneNumberBoxForm v-model="signupObject.phone" >
            <slot slot="top-text">Only In New Zealand</slot>
          </PhoneNumberBoxForm>
          <p>{{signupObject.phone}}</p>
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
import PhoneNumberBoxForm from "@/components/form/PhoneNumberBoxForm.vue";
import SubmitButton from "@/components/form/SubmitButton.vue";
import Bibutton from "@/components/buttons/BiButton.vue";

// import { signup } from "@/services/api/auth.js"

export default {
  components: {
    PushCard,
    TextBoxForm,
    PhoneNumberBoxForm,
    SubmitButton,
    Bibutton,
  },
  data: function () {
    return {
      signupObject: {
        fullname: "",
        username: "",
        phone: "",
      },
    };
  },

  methods: {
   
    checkSignup() {
      console.log("checking form");
      console.log(this.signupObject);
      try {
        //Full Name
        if(this.signupObject.fullname === ""){
          throw "Full Name error, Missing Full Name"
        }
        // User Name
        if (this.signupObject.username === "") {
          throw "Username error, Missing User Name";
        }
        if (/\s/.test(this.signupObject.username)) {
          throw "Username error, invalid text";
        }
        //Phone number
        if (this.signupObject.phone === "") {
          throw "Phone number missing";
        }

        //not working ******************
        if (/^[0-9]+$/.test(!this.signupObject.phone)) {
          throw "Phone error, letter found";
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};

// signup(signupObject).then((res) => {
//   console.log(res);
// });
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
  svg{
    height: 24px;
    width: 24px;
    color: $purple-500;
  }
}
</style>