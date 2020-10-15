<template>
  <div class="modal">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  &__content {
      width: 95%;
      border-radius: 11px;
      max-width: 900px;
      padding: 20px;
      background-color: #FFF;
      @media screen and (min-width: 2000px) {
          max-width: 80%;
      }
  }
}
</style>
