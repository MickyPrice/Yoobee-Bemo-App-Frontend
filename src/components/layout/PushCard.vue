<template>
  <div class="push-card">
    <div class="push-card__top">
      <p class="push-card__top--title heading__sm--bold">
        <slot name="PushCardTitle"></slot>
      </p>
      <p class="push-card__top--sub-title text__sm">
        <slot name="PushCardSubTitle"></slot>
      </p>
    </div>
    <div class="form">
      <slot name="SlotComponents"></slot>
      <h5 class="bottom-text">
        <slot name="PushCardBottomText"></slot>
      </h5>
    </div>
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
  min-height: 200px;
  max-height: 67%;
  background-color: $white-100;
  border-radius: $corners-top;
  padding: 20px $padding-40 0 $padding-40;
  position: absolute;
  bottom: 0;

  &__top {
    &--sub-title {
      color: $purple-300;
      margin-top: $margin-5;
    }
  }
  .form {
    width: 100%;
  }

  .bottom-text {
    text-align: center;
    margin: 10px;
    color: $purple-300;
  }
}
</style>