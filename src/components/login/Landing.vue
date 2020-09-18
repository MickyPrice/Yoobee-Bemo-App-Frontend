<template>
  <div class="landing">
    <div class="head">
      <h1 class="head__titile heading__lg--balance">Bemo</h1>
      <p class="head__sub-title heading__sm">Be More</p>
    </div>
    <BtnFull class="bk-green-300">
      <slot slot="btn-title">Get Started</slot>
    </BtnFull>
    <BtnFull class="bk-purple-300">
      <slot slot="btn-title">Login</slot>
    </BtnFull>
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
  padding: $padding-40;
}
.head {
  padding-top: 100px;
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