<template>
  <div class="numberPad">
    <div class="numberPad__numbers">
      <button @click="$emit('add-number','1')" class="heading__sm btn">1</button>
      <button @click="$emit('add-number','2')" class="heading__sm btn">2</button>
      <button @click="$emit('add-number','3')" class="heading__sm btn">3</button>
      <button @click="$emit('add-number','4')" class="heading__sm btn">4</button>
      <button @click="$emit('add-number','5')" class="heading__sm btn">5</button>
      <button @click="$emit('add-number','6')" class="heading__sm btn">6</button>
      <button @click="$emit('add-number','7')" class="heading__sm btn">7</button>
      <button @click="$emit('add-number','8')" class="heading__sm btn">8</button>
      <button @click="$emit('add-number','9')" class="heading__sm btn">9</button>
      <button @click="$emit('clear')" class=" heading__sm btn">C</button>
      <button @click="$emit('add-number','0')" class="heading__sm btn">0</button>
      <button @click="$emit('back-space')" class=" heading__sm btn">kill</button>

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
@import "@/scss/_variables";
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