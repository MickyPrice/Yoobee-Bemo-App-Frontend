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
  background-color: $white-100;
  border-radius: $corners-top;
  padding: $padding-40;
  position: absolute;
  bottom: 0;

  &__transaction {
    width: 70%;
    max-width: 350px;
    margin: auto;
    position: relative;
    top: -95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>