<template>
  <div class="landing">
    <Modal v-if="modal == 'LOGIN'">
      <h2 class="login__title">Welcome Back</h2>
      <p class="login__subtitle">Enter your phone number to login</p>
      <form @submit.prevent="loginUser">
        <PhoneNumberBoxForm v-model="form.phone">
          <p class="login__formtooltip">Only In New Zealand</p>
        </PhoneNumberBoxForm>
        <SubmitButton class="login__submit" />
      </form>
      <p class="login__bottomText">
        Please use the mobile version of this website to sign up for an account
      </p>
    </Modal>

    <Modal v-if="modal == 'VERIFY'">
      <div>
        <h1 class="verify__title">Enter your code</h1>
        <h5 class="verify__subtitle">The code was sent to your phone number</h5>
        <input
          class="heading__lg--balance passcode"
          type="text"
          pattern="\d*"
          placeholder="******"
          v-model="form.code"
          maxlength="6"
          autocomplete="one-time-code"
        />
        <button class="verify__btn" @click="verifyUser">Check Code</button>
      </div>
    </Modal>

    <nav class="nav">
      <h3 class="nav__title">Bemo</h3>
      <button class="nav__btn" @click="modal = 'LOGIN'">Login</button>
    </nav>
    <div class="landing__gifs">
      <!-- GIFS -->
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/3o7TKQ8kAP0f9X5PoY/giphy.gif"
        alt="Shut up and take my money"
        style="top: 30px; left: 20%"
      />
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/SUtKUblVAvwMkTvaiT/giphy.gif"
        alt="Shut up and take my money"
        style="top: 100px; right: 10%"
      />
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/l5Dh6boITiHi4vAWMZ/giphy.gif"
        alt="Shut up and take my money"
        style="top: 40%; left: 15%"
      />
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/zWpm4CRynyYrC/giphy.gif"
        alt="Shut up and take my money"
        style="top: 50%; right: 20%"
      />
    </div>
    <main class="landing__main">
      <div class="landing__inner">
        <div class="landing__header">
          <h1 class="landing__title">
            <span class="landing__title--top">Payments</span><br />
            <span class="landing__title--bottom">Made Social</span>
          </h1>
          <p class="landing__subtitle">
            The future of sending and receiving payments from friends and
            family.
          </p>
        </div>
        <img
          class="landing__preview"
          src="@/assets/images/landing_preview.svg"
          alt="Bemo App Preview"
        />
        <img
          class="landing__preview landing__preview--mobile"
          src="@/assets/images/landing_mobile.svg"
          alt="Bemo App Mobile Preview"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Modal from "./Modal";
import PhoneNumberBoxForm from "../../components/form/PhoneNumberBoxForm.vue";
import SubmitButton from "../../components/form/SubmitButton.vue";
import { login, verify } from "@/services/api/auth.js";

export default {
  data: function() {
    return {
      form: {
        phone: "",
        code: "",
      },
      modal: "",
    };
  },
  name: "DesktopLanding",
  components: {
    Modal,
    PhoneNumberBoxForm,
    SubmitButton
  },
  methods: {
    loginUser() {
      login(this.form).then(() => {
        this.modal = "VERIFY";
      });
    },
    verifyUser() {
      verify(this.form).then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("authenticated", true);
          this.$router.push("/chat");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.landing {
  background-color: #16191c;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  user-select: none;

  &__gif {
    mix-blend-mode: overlay;
    opacity: 0.9;
    filter: drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.15));
    border-radius: 15px;
    width: 250px;
    position: absolute;
    height: 145px;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 850px) {
      display: none;
    }
    @media screen and (min-width: 3000px) {
      width: 600px;
      height: 390px;
    }
  }

  // &__gifs {
  //   position: absolute;
  //   // transform: translateX(-50%);
  //   // left: 50%;
  //   top: 0; bottom: 0;
  // }

  &__main {
    position: relative;
    height: 100vh;
    padding: 0 100px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    // @media screen and (max-width: 850px) {
    //   align-items: center;
    // }
  }
  &__inner {
    display: flex;
    flex-direction: column;
    height: 100vh;
    @media screen and (max-width: 1000px) {
      width: 90vw;
    }
  }
  &__header {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  &__title {
    font-size: 76px;
    font-family: $font-aileron;
    text-align: center;
    color: #f65e82;
    margin-bottom: 20px;
    @media screen and (max-width: 850px) {
      font-size: 48px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 5vw;
    }
    &--top {
      background: linear-gradient(92.73deg, #f65e82 4.52%, #6f81f7 101.56%),
        #ffffff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &--bottom {
      background: linear-gradient(91.01deg, #503cff 3.19%, #9cf9ce 98.01%),
        #ffffff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__subtitle {
    text-align: center;
    color: #7c7c7c;
    margin: 0 auto;
    max-width: 400px;
    @media screen and (min-width: 1000px) {
      max-width: 100%;
      font-size: 1vw;
    }
  }

  &__preview {
    width: 100%;
    margin-bottom: -35%;
    max-width: 95%;
    display: block;
    @media screen and (min-width: 1000px) {
      width: 80vw;
      margin: 0 auto;
      margin-bottom: -30%;
    }
    @media screen and (max-width: 850px) {
      display: none;
    }
    &--mobile {
      display: none;
      @media screen and (max-width: 850px) {
        display: block;
        width: 100%;
      }
    }
  }
}

.nav {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  @media screen and (min-width: 2000px) {
    font-size: 1vw;
  }
  &__title {
    color: #8b55ff;
  }
  &__btn {
    background-color: #00d6a3;
    color: #16191c;
    padding: 10px 30px;
    border: none;
    border-radius: 11px;
    flex-grow: 0;
    @media screen and (min-width: 2000px) {
      font-size: 1vw;
    }
  }
}

.verify {
  &__btn {
    font-size: 20px;
    background-color: #00d6a3;
    color: #16191c;
    padding: 10px 30px;
    border: none;
    border-radius: 11px;
    flex-grow: 0;
  }
}

.passcode {
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
