<template>
  <div v-if="modalOpen" class="modal__background" @click.stop="close">
    <div class="modal">
      <h2 class="modal__heading">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      modalOpen: this.open,
    };
  },
  props: {
    open: Boolean,
    title: String,
  },
  methods: {
    close() {
      this.modalOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.modal {
  background-color: $white-300;
  position: relative;
  padding: $padding-10;
  border-radius: $corners-10;
  width: 100%;

  &__heading {
    font-size: 24px;
  }

  &__background {
    background-color: rgba($black-300, 70%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    padding: $padding-20;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>