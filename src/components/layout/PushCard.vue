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
    <div class="overflow">
    <slot name="SlotComponents" ></slot>
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
  max-height: 72%;
  background-color: $white-100;
  border-radius: $corners-top;
  padding: 20px $pad-bor 0 $pad-bor;
  position: absolute;
  bottom: 0;

&__top{
  &--sub-title {
    color: $purple-300;
    margin-top: $margin-5;
  }
  
}
   .overflow{
     border: 1px solid black;
    overflow-y: scroll;
    
    .bottom-text {
    text-align: center;
    margin: 4%;
    color: $purple-300;
  }
  }
}
</style>