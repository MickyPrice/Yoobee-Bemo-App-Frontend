<template>
  <div class="landing">
    <div class="head">
      <h1 class="head__titile heading__lg--balance">Bemo</h1>
      <p class="head__sub-title heading__sm">Be More</p>
    </div>
    <div class="landing__img-container">
      <img
        src="@/assets/images/devils-respect.png"
        alt="devils-respect"
        class="landing__img-container--hand"
      />
    </div>

    <div class="landing__btns">
      <router-link :to="{ name: 'signup' }">
        <BtnFull class="bk-green-300">
          <slot slot="btn-title">Get Started</slot>
        </BtnFull>
      </router-link>
      <router-link :to="{ name: 'login' }">
        <BtnFull class="bk-purple-300">
          <slot slot="btn-title">Login</slot>
        </BtnFull>
      </router-link>
    </div>
  </div>
</template>

<script>
import BtnFull from "../buttons/BtnFull";
export default {
  components: {
    BtnFull,
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.landing {
  .head {
    width: 100%;
    position: absolute;
    top: 100px;

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
  &__img-container {
    z-index: -1;
    widows: 100vw;
    height: 100vh;
    overflow: hidden;
    &--hand {
      width: 100%;
      margin-top: 200px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  &__btns {
    width: 100%;
    padding: $padding-40;
    position: absolute;
    bottom: 0px;
  }
}
</style>