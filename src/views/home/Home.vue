<template>
  <div class="home">
      <div class="home__center">
          <h1 class="home__center--balance heading__lg">$300.26</h1>
          <h4 class="home__center--sub-heading text__base--heavy">Bemo Balance</h4>
          <PayAndRequestButton />
      </div>
    <Navigation :darkTheme="false" />

  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation";
import PayAndRequestButton from "@/components/buttons/PayAndReqestButton.vue";


export default {
components:{
    Navigation,
    PayAndRequestButton
}
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.home{
    background: $purple-500;
  width: 100vw;
  min-height: 100vh;
  padding-top: 45%;
  &__center{
border: 1px solid black;

      width: 90%;
      height: 40vh;
      margin:  auto;

      &--balance{
          color: $white-100;
          text-align: center;
      }
      &--sub-heading{
                    color: $white-100;

          text-align: center;
      }
  }
}
</style>