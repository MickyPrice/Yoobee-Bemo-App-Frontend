<template>
  <input
    class="text__base--heavy"
    type="email"
    :value="value"
    name="fname"
    placeholder="Please Enter Eamil"
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