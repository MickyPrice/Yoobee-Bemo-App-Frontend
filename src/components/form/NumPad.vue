<template>
  <div class="numpad">
    <div @click="thing += '1'" class="numpad__btn">1</div>
    <div @click="thing += '2'" class="numpad__btn">2</div>
    <div @click="thing += '3'" class="numpad__btn">3</div>
    <div @click="thing += '4'" class="numpad__btn">4</div>
    <div @click="thing += '5'" class="numpad__btn">5</div>
    <div @click="thing += '6'" class="numpad__btn">6</div>
    <div @click="thing += '7'" class="numpad__btn">7</div>
    <div @click="thing += '8'" class="numpad__btn">8</div>
    <div @click="thing += '9'" class="numpad__btn">9</div>
    <div class="numpad__btn numpad__btn--blank"></div>
    <div @click="thing += '0'" class="numpad__btn">0</div>
    <div class="numpad__btn numpad__btn--blank"></div>

    {{thing}}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      thing: ""
    };
  },
};
</script>

<style scoped lang="scss">
.numpad {
  display: flex;
  flex-wrap: wrap;

  &__btn {
    width: 33.33%;
    text-align: center;
    padding: 30px 0px;

    &--blank {
      background-color: unset;
    }
  }
}
</style>
