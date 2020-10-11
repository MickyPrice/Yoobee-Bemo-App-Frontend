<template>
  <div class="pay-and-request-button">
    <div
      @click="goTo('SendPayment')"
      class="pay-and-request-button__pay btn text__base--heavy"
    >
      Pay
    </div>

    <div class="pay-and-request-button__wedge">
      <div></div>
    </div>

    <div
      @click="goTo('RequestPayment')"
      class="pay-and-request-button__request btn text__base--heavy"
    >
      Request
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.pay-and-request-button {
  width: 100%;
  margin-top: $margin-20;
  position: absolute;
  bottom: 0;
  background-color: $green-300;
  border-radius: 11px;
  display: flex;
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  .btn {
    font-family: $font-noto;
    cursor: pointer;
    background-color: $green-300;
    color: $white-100;
    text-align: center;
    padding: 10px;
  }

  &__wedge {
    background-color: $green-300;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 3px;
      height: 60%;
      border-radius: 15px;
      background-color: $white-100;
    }
  }
  &__pay {
    border-radius: 11px 0 0 11px;
  }
  &__request {
    border-radius: 0 11px 11px 0;
  }
}
</style>