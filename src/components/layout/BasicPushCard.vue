<template>
  <div class="push-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BasicPushCard",
  components: {},
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.push-card {
  width: 100%;
  height: 100%;
  background-color: $white-100;
  border-radius: $corners-top;
  padding: 20px $pad-bor 0 $pad-bor;
  position: absolute;
  bottom: 0;
}
</style>