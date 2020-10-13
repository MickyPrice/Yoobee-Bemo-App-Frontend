<template>
  <div class="verify">
    <div class="verify__top">
      <router-link :to="{ name: 'landing' }">
        <Bibutton class="bk-purple-500 verify__back">
          <slot slot="icon">
            <i class="fas fa-angle-left"></i>
          </slot>
        </Bibutton>
      </router-link>

      <h1 class="verify__title">Enter your code</h1>
      <h5 class="verify__subtitle">The code was sent to your phone number</h5>
      <input
        class="heading__lg--balance input__passcode"
        type="text"
        pattern="\d*"
        disabled
        placeholder="******"
        v-model="form.code"
        maxlength="6"
        autocomplete="one-time-code"
      />
    </div>
    <NumberPad
      v-on:add-number="updateCode($event)"
      v-on:clear="clear()"
      v-on:back-space="backspace()"
      class="verify__numpad"
    >
      <template slot="comps">
        <BtnFull class="bk-green-300" @click="verifyUser">
          <slot slot="btn-title">Check Code</slot>
        </BtnFull>
      </template>
    </NumberPad>
  </div>
</template>

<script>
import Bibutton from "../../components/buttons/BiButton.vue";
import NumberPad from "../../components/layout/NumberPad.vue";
import BtnFull from "../../components/buttons/BtnFull.vue";

import { verify } from "@/services/api/auth.js";

export default {
  components: {
    Bibutton,
    NumberPad,
    BtnFull,
  },
  data() {
    return {
      form: {
        phone: this.$route.params.phone,
        code: "",
      },
    };
  },
  methods: {
    backspace() {
      this.form.code = this.form.code.slice(0, -1);
    },
    clear() {
      this.form.code = "";
    },
    updateCode(updatedCode) {
      if (this.form.code.length <= 7) {
        this.form.code += updatedCode;
        return;
      }
    },
    verifyUser() {

      verify(this.form).then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("authenticated", true);
          this.$router.push("home");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.verify {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  background-color: $white-100;
  width: 100vw;
  &__title {
      margin-top: $margin-30;
      color: $black-500;
      font-size: 25px;
      width: 100%;
  }
  &__subtitle {
      margin-top: 15px;
      width: 100%;
      color: desaturate($purple-500, 60%);
  }

  &__top {
    padding: 60px 40px 20px 40px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  &__bot {
    text-align: center;
    margin: $margin-10 0;
  }
  &__back {
    position: absolute;
    top: $padding-40;
    left: $padding-40;
    color: #FFF;
  }
  &__numpad {
    padding-bottom: $padding-40;
  }
}
.input__passcode {
  width: 100%;
  margin-top: 40px;
  background-color: $white-100;
  border-radius: $corners-10;
  border: none;
  outline: none;
  &[type="text"] {
    text-align: center;
  }
}
</style>
