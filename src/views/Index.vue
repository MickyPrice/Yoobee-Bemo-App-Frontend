<template>
  <div class="index">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.index {
  background: $purple-500;
  width: 100vw;
  min-height: 100vh;
}
</style>