<template>
  <div>
    <label for="fname" class="text__lg">Search</label>
    <input class="text__base--heavy" type="text" name="fname" placeholder="Search" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
div {
  label {
    color: $purple-100;
  }
  input {
    width: 100%;
    margin-top: $margin-5;
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
}
</style>