<template>
  <div class="numberPad">
    <div class="numberPad__numbers">
      <button @click="$emit('add-number', '1')" class="text__lg btn">1</button>
      <button @click="$emit('add-number', '2')" class="text__lg btn">2</button>
      <button @click="$emit('add-number', '3')" class="text__lg btn">3</button>
      <button @click="$emit('add-number', '4')" class="text__lg btn">4</button>
      <button @click="$emit('add-number', '5')" class="text__lg btn">5</button>
      <button @click="$emit('add-number', '6')" class="text__lg btn">6</button>
      <button @click="$emit('add-number', '7')" class="text__lg btn">7</button>
      <button @click="$emit('add-number', '8')" class="text__lg btn">8</button>
      <button @click="$emit('add-number', '9')" class="text__lg btn">9</button>
      <button @click="$emit('clear')" class="text__lg btn">C</button>
      <button @click="$emit('add-number', '0')" class="text__lg btn">0</button>
      <button @click="$emit('back-space')" class="text__lg btn">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <slot name="comps"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.numberPad {
  background-color: $purple-500;
  width: 100%;
  max-height: 60%;
  border-radius: $corners-top;
  padding: 0px $pad-bor;
  position: absolute;
  bottom: 0;

  &__numbers {
    width: 100%;
    margin: auto;
    margin-top: $margin-30;
    margin-bottom: $margin-10;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .btn {
    height: 7vh;
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
  svg {
    height: 1.33em;
    width: 1.33em;
  }
}
</style>