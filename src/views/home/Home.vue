<template>
  <div class="home">
    <div class="home__center">
      <h1 class="home__center--balance heading__lg">{{ user.balance }}</h1>
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
      balance: "$",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.home {
  background: $purple-500;
  width: 100vw;
  min-height: 100vh;
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