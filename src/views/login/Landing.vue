<template>
  <div class="landing">
    <div class="toplayer">
      <div class="toplayer__head">
        <h1 class="toplayer__head--titile heading__lg--balance">Bemo</h1>
        <p class="toplayer__head--sub-title heading__sm">Be More</p>
      </div>

      <div class="toplayer__btns">
        <div class="toplayer__btns--box">
          <router-link :to="{ name: 'signup' }">
            <BtnFull class="bk-green-300">
              <slot slot="btn-title">Get Started</slot>
            </BtnFull>
          </router-link>
        </div>
        <div class="toplayer__btns--box">
          <router-link :to="{ name: 'login' }">
            <BtnFull class="bk-purple-300">
              <slot slot="btn-title">Login</slot>
            </BtnFull>
          </router-link>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img
        src="@/assets/images/devils-respect.png"
        alt="devils-respect"
        class="landing__img-container--hand"
      />
    </div>
  </div>
</template>

<script>
import BtnFull from "../../components/buttons/BtnFull.vue";
export default {
  components: {
    BtnFull,
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.landing {
  width: 100vw;
  height: 100%;
  .toplayer {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &__head {
      padding: $margin-40;
      &--titile {
        color: $white-300;
        text-align: center;
      }
      &--sub-title {
        color: $white-300;
        opacity: 70%;
        text-align: center;
        margin-top: -10px;
      }
    }

    &__btns {
      width: 100%;
      max-width: 500px;
      margin-bottom: 40px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      &--box {
        padding: 0 $padding-40;
        width: 100%;
      }
    }
  }
  .image-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
      position: absolute;
      bottom: -20px;
      height: 70%;
    }
  }
}
</style>