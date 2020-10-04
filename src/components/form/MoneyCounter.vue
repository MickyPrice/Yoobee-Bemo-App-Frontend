<template>
  <input
    class="heading__lg--balance"
    type="number"
    placeholder="$0.00"
    min="0.00"
    step="none"
  />
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
input {
  width: 100%;
  height: $height-btn;
  margin: 5vh 0;

  background-color: $white-100;
  border-radius: $corners-10;
  border: none;
  outline: none;

  &[type="number"] {
    text-align: center;
  }
}
</style>