<template>
  <div class="push-card-pay">
    <div class="transaction">
      <div class="transaction--profile-1">
        <slot name="profile-1"></slot>
      </div>
      <div class="transaction--direction">
        <slot name="direction"></slot>
      </div>
      <div class="transaction--profile-2">
        <slot name="profile-2"></slot>
      </div>
    </div>
    <div class="push-card-pay__slot">
      <slot name="SlotComponents"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "pushCardPay",
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.push-card-pay {
  width: 100%;
  position: absolute;
  bottom: 0;

  background-color: $white-100;
  border-radius: $corners-top;
  padding: $pad-bor;
  .transaction {
    z-index: 2;
    width: 80%;

    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: -18vw;
  }
  &__slot {
    position: relative;
    top: -10vw;
  }
}
</style>