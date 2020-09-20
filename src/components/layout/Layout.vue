<template>
  <div class="padding">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.padding {
  padding: $padding-40;
}
</style>