<template>
  <button class="btn-full text__base--heavy" @click="$emit('click')">
    <p class="btn-full__text">
      <slot name="btn-title"></slot>
    </p>
  </button>
</template>

<script>
// <BtnFull class="bk-green-300">
//   <slot slot="btn-title">Green</slot>
// </BtnFull>
export default {
  props: ["location"],
  methods: {
    log: function () {
      console.log(this.location);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";

.btn-full {
  width: 100%;
  height: $height-btn;
  margin-top: $margin-20;
  border-radius: $corners-10;
  border: none;
  outline: none;
  cursor: pointer;

  &__text {
    color: $white-100;
  }
  &:active {
    opacity: 70%;
  }
  &:disabled {
    cursor: no-drop;
    opacity: 50%;
  }
}
</style>