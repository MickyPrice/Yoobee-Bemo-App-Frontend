<template>
  <input
    class="text__base--heavy"
    type="email"
    name="fname"
    placeholder="Please Enter Eamil"
  />
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
input {
  width: 100%;
  height: $height-btn;
  margin-top: 5%;

  background-color: $white-300;
  border-radius: $corners-10;
  border: none;
  outline: none;
  &[type="email"] {
    padding-left: $padding-20;
  }
  &:active {
    border: 2px solid $purple-100;
  }
}
</style>