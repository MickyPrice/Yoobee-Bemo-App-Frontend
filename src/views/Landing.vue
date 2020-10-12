<template>
  <div class="mobileFrame">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mobileFrame {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 900px;
  border: 11px solid #000000;
  border-radius: 26px;
}
</style>
