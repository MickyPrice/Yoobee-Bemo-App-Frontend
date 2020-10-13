<template>
  <input class="text__base" type="submit" value="Login" />
</template>

<script>
export default {
  name: "SubmitButton",
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

input {
  width: 100%;
  height: $height-btn;
  margin: 2% 0;
  border-radius: 10px;
  background-color: $purple-500;
  color: $white-300;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>