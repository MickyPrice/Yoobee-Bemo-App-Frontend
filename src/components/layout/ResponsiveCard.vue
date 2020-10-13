<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PushCard",
  components: {},
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.card {
  width: 100%;
  flex: 1;
  background-color: $white-100;
  border-radius: $corners-top;
  padding: 20px $padding-40 0 $padding-40;
}
</style>