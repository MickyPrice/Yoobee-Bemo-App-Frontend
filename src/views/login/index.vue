<template>
  <div class="index">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  created() {
    if(localStorage.getItem("authenticated")){
      this.$router.push("home");
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.index {
  background: $purple-500;
  width: 100vw;
  min-height: 100vh;
}
</style>