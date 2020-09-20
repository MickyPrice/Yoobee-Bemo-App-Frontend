<template>
  <input class="text__base--heavy" type="text" name="fname" placeholder="Please Enter Name" />
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
input {
  width: 100%;
  margin-top: $margin-20;

  height: $height-btn;
  background-color: $white-300;
  border-radius: $corners-10;
  border: none;
  outline: none;
  &[type="text"] {
    padding-left: $padding-20;
  }
  &:active {
    border: 2px solid $purple-100;
  }
}
</style>