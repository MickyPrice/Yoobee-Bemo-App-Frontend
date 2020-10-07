<template>
  <input
    class="text__base--heavy"
    type="text"
    name="fname"
    :value="value"
    @input="updateDate($event.target.value)"
    placeholder="Please Enter Name"
  />
</template>

<script>
export default {
  props: ["value"],

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