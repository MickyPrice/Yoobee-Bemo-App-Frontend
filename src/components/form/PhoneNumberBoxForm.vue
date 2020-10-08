<template>
  <div>
    <label for="fname" class="text__sm">
      <slot name="top-text"></slot>
    </label>
    <input-mask
      class="text__base--heavy"
      placeholder="Please Enter Cellphone Number"
      v-model="value"
      mask="+64 \ 999 999 9999"
      maskChar=""
      v-on:blur="updateValue(value)"
    >
    </input-mask>
  </div>
</template>

<script>
export default {
  name: "PhoneNumberBoxForm",
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    updateValue: function (value) {
      value = value.replace(/ /g, "").slice(3, 14);
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
div {
    margin: 2% 0;

  label {
    color: $purple-100;
  }
  input {
    width: 100%;
    height: $height-srch;
    background-color: $white-300;
    border-radius: $corners-10;
    border: none;
    outline: none;
    padding-left: $padding-20;

    &:active {
      border: 2px solid $purple-100;
    }
  }
}
</style>