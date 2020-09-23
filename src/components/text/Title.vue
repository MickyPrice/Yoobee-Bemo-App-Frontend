<template>
  <h1 class="heading__sm">
    <slot name="text"></slot>
  </h1>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
h1 {
  color: $white-100;
  text-align: center;
  margin: $margin-20;
}
</style>