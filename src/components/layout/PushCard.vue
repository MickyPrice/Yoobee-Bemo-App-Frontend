<template>
  <div class="push-card">
    <p class="push-card__title heading__sm--bold">
      <slot name="PushCardTitle"></slot>
    </p>
    <p class="push-card__sub-title text__sm">
      <slot name="PushCardSubTitle"></slot>
    </p>
    <slot name="SlotComponents"></slot>
    <h5 class="push-card__bottom-text">
      <slot name="PushCardBottomText"></slot>
    </h5>
  </div>
</template>

<script>
export default {
  name: "PushCard",
  components: {},
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.push-card {
  width: 100%;
  max-height: 75%;
  background-color: $white-100;
  border-radius: $corners-top;
  padding: 20px $pad-bor 0 $pad-bor;
  position: absolute;
  bottom: 0;

  &__sub-title {
    color: $purple-300;
    margin-top: $margin-5;
  }
  &__bottom-text {
    text-align: center;
    margin: 4%;
    color: $purple-300;
  }
}
</style>