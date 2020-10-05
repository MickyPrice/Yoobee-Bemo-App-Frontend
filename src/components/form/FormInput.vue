<template>
  <input class="text__base--heavy" :type="type" :name="name" :placeholder="placeholder"/>
</template>

<script>
export default {
  props: ["placeholder","name","type"]
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
input {
  width: 100%;
  margin-top: $margin-20;

  height: $height-btn;
  background-color: $white-300;
  border-radius: $corners-10;
  border: 2px solid $white-300;
  outline: none;
  overflow: hidden;
  padding: 20px;
  &[type="text"] {
    padding-left: $padding-20;
  }
  &:focus {
    border: 2px solid $purple-100;
  }
}
</style>