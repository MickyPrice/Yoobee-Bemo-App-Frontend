<template>
  <input
    class="text__base--heavy"
    type="text"
    name="fname"
    :value="value"
    @input="updateDate($event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: ["value", "placeholder"],

  methods: {
    updateDate(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
input {
  width: 100%;
  height: $height-btn;
  margin-top: 10px;
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