<template>
  <div class="home">
    <div class="home__center">
      <h1 class="home__center--balance heading__lg">
        ${{ balance }}
      </h1>
      <h4 class="home__center--sub-heading text__base--heavy">Bemo Balance</h4>
      <PayAndRequestButton />
    </div>
    <Navigation :darkTheme="false" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navigation from "@/components/navigation/Navigation";
import PayAndRequestButton from "@/components/buttons/PayAndReqestButton.vue";

export default {
  components: {
    Navigation,
    PayAndRequestButton,
  },
  data() {
    return {
      null: "",
    };
  },
  computed: {
    ...mapState(["user"]),
    balance() {
      if( this.user.status == 1){
        return this.user.data.balance / 100;
      }
      return 0;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.home {
  background: $purple-500;
  width: 100vw;
  height: 100%;
  font-family: $font-noto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__center {
    width: 80%;
    max-width: 600px;
    max-height: 200px;
    position: relative;

    &--balance {
      color: $white-100;
      text-align: center;
    }
    &--sub-heading {
      color: $white-100;
      text-align: center;
      margin-bottom: 300px;
    }
  }
}
</style>