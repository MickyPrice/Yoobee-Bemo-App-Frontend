<template>
  <input
    class="text__base--heavy"
    type="email"
    :value="value"
    name="fname"
    placeholder="Email"
    @input="updateDate($event.target.value)"
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
  margin: 1% 0;

  background-color: $white-300;
  border-radius: $corners-10;
  border: none;
  outline: none;
  &[type="email"] {
    padding-left: $padding-20;
    font-size: 0.75em;
    color: $black;
  }
  &:active {
    border: 2px solid $purple-100;
  }
}
</style>