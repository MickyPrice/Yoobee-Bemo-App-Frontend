<template>
  <div>
    <label for="fname" class="text__sm">
      <slot name="top-text"></slot>
    </label>
    <input
      class="text__base--heavy"
      type="tel"
      name="fname"
      placeholder="Please Enter Phone Number"
      :value="value"
      v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "PhoneNumberBoxForm",
  props: ["value"],
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
div {
  margin: 5% 0;
  label {
    color: $purple-100;
  }
  input {
    width: 100%;
    margin-top: $margin-5;
    height: $height-srch;

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