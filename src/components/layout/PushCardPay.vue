<template>
  <div class="push-card-pay">
    <div class="push-card-pay__transaction">
      <div class="push-card-pay__transaction--profile-1">
        <slot name="profile-1"></slot>
      </div>
      <div class="push-card-pay__transaction--direction">
        <slot name="direction"></slot>
      </div>
      <div class="push-card-pay__transaction--profile-2">
        <slot name="profile-2"></slot>
      </div>
    </div>
    <slot name="SlotComponents"></slot>
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

  &__transaction {
    width: 100%;
    max-width: 350px;
    padding: 0 40px 0 40px;
    position: relative;
    top: -60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>