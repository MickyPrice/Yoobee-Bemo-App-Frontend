<template>
  <button class="biButton text__lg">
    <slot class="text__lg" name="icon"></slot>
  </button>
</template>

<script>
// <BiButton class="bk-white-300">
//   <slot slot="icon" class>
//     <i class="fas fa-basketball-ball col-purple-500"></i>
//   </slot>
// </BiButton>
export default {};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.biButton {
  width: 40px;
  height: 40px;

  border-radius: $corners-10;
  border: none;
  outline: none;
  cursor: pointer;

  &:active {
    opacity: 70%;
  }
  &:disabled {
    cursor: no-drop;
    opacity: 50%;
  }
}
</style>