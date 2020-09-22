<template>
  <div class="numberPad">
    <div class="numberPad__numbers">
      <button class="heading__sm btn">1</button>
      <button class="heading__sm btn">2</button>
      <button class="heading__sm btn">3</button>
      <button class="heading__sm btn">4</button>
      <button class="heading__sm btn">5</button>
      <button class="heading__sm btn">6</button>
      <button class="heading__sm btn">7</button>
      <button class="heading__sm btn">8</button>
      <button class="heading__sm btn">9</button>
      <button class="btn-0 heading__sm btn">0</button>
    </div>
    <slot name="comps"></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.numberPad {
  background-color: $purple-500;
  width: 100%;
  border-radius: $corners-top;
  padding: $padding-40;
  position: absolute;
  bottom: 0;

  &__numbers {
    width: 100%;
    margin: auto;
    margin-top: $margin-30;
    margin-bottom: $margin-30;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .btn-0 {
      grid-column: 2;
    }
  }
  .btn {
    height: 75px;
    border: none;
    color: $white-100;
    text-decoration: none;
    display: inline-block;
    background-color: $purple-500;
    border-radius: 5px;
    outline: none;

    &:hover {
      cursor: pointer;
    }
    &:active {
      background-color: $purple-300;
    }
  }
}
</style>