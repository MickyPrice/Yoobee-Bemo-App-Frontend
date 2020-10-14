<template>
  <div class="index">
    <router-view></router-view>
  </div>
</template>

<script>
import { getUser } from "../../services/api/user.js"

export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  created() {
    getUser().then(user => {
      if(user.data != "") {
        this.$router.push("home");
      } 
    });
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.index {
  background: $purple-500;
  width: 100vw;
  height: 100%;
}
</style>