<template>
  <div class="direction heading__sm--bold">
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.direction {
  background-color: $white-100;
  border-radius: 50px;
  i {
    margin: 5px;
  }
}
</style>