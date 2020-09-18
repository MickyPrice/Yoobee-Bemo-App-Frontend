<template>
  <input class="text__base" type="submit" value="Login" />
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";

input {
  width: 100%;
  height: $height-btn;
  border-radius: $corners-10;
  background-color: $purple-500;
  margin-top: $margin-30;
  color: $white-300;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>