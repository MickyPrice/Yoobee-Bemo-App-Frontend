<template>
  <div>
    <label for="fname" class="text__sm">
      <slot name="top-text"></slot>
    </label>
    <input
      class="text__base--heavy"
      type="number"
      name="fname"
      placeholder="Please Enter Phone Number"
    />
  </div>
</template>

<script>
export default {
  name: "PhoneNumberBoxForm",
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
div {
  margin-top: $margin-30;
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
    &[type="number"] {
      padding-left: $padding-20;
    }
    &:active {
      border: 2px solid $purple-100;
    }
  }
}
</style>