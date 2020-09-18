<template>
  <div class="push-card">
    <h1 class="push-card__title heading__base">
      <slot name="PushCardTitle"></slot>
    </h1>
    <p class="push-card__sub-title text__sm">
      <slot name="PushCardSubTitle"></slot>
    </p>
    <slot name="SlotComponents"></slot>
  </div>
</template>

<script>
export default {
  name: "PushCard",
  components: {},
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";

.push-card {
  width: 100%;
  background-color: $white-100;
  border-radius: $corners-top;
  padding: $padding-40;
  position: absolute;
  bottom: 0;

  &__sub-title {
    color: $purple-300;
  }
}
</style>