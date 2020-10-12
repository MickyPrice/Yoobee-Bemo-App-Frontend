<template>
  <div class="direction heading__sm--bold">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.direction {
  background-color: $white-100;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>