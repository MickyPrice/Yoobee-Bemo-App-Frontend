<template>
  <div class="verify">
    <div class="verify__top">
      <router-link :to="{ name: 'landing' }">
        <Bibutton class="bk-purple-500">
          <slot slot="icon" class>
            <i class="fas fa-angle-left col-white-100"></i>
          </slot>
        </Bibutton>
      </router-link>

      <h1 class="verify__top--titile">Enter your code</h1>
      <h5 class="verify__top--sub">The code was sent to +64 021 783 374</h5>
      <Passcode :verifyCode="form.code"></Passcode>
    </div>
    {{$route.params.phone}}
    <NumberPad v-on:add-number="updateCode($event)" v-on:clear="clear()" v-on:back-space="backspace()">
      <template slot="comps">
        <BtnFull class="bk-green-300" @click="verifyUser">
          <slot slot="btn-title">Check Code</slot>
        </BtnFull>
        <h3 class="col-green-300 text__sm verify__bot">Resend Code</h3>
      </template>
    </NumberPad>
  </div>
</template>

<script>
import Bibutton from "../../components/buttons/BiButton.vue";
import Passcode from "../../components/form/Passcode.vue";
import NumberPad from "../../components/layout/NumberPad.vue";
import BtnFull from "../../components/buttons/BtnFull.vue";

import { verify } from "@/services/api/auth.js";

export default {
  components: {
    Bibutton,
    NumberPad,
    Passcode,
    BtnFull,
  },
  data(){
    return{
      form: {
        phone: this.$route.params.phone,
        code: ""
      }
    }
  },
  methods:{
    backspace(){
      this.form.code = this.form.code.slice(0,-1);
    },
    clear(){
      this.form.code = "";
    },
    updateCode(updatedCode){
      console.log(updatedCode)
      if(this.form.code.length <= 7) {
      this.form.code += updatedCode;
      return;
      }
      console.log(this.form.code) 
    },
    verifyUser() {
      console.log(this.form)
      verify(this.form).then(()=> {
        this.$router.push('about')
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.verify {
  background-color: $white-100;
  width: 100vw;
  height: 100vh;

  &__top {
    padding: $padding-40;

    &--titile {
      margin-top: $margin-30;
      color: $black-300;
    }
    &--sub {
      margin-top: 15px;
      color: $purple-300;
    }
  }

  &__bot {
    text-align: center;
    margin-top: $margin-30;
  }
}
</style>