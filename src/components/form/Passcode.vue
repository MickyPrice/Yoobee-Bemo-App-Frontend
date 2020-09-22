<template>
  <input class="heading__lg--balance" type="password" placeholder="****" maxlength="4" />
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
input {
  width: 100%;
  margin-top: 60px;
  height: $height-btn;
  background-color: $white-100;
  border-radius: $corners-10;
  border: none;
  outline: none;
  &[type="password"] {
    text-align: center;
    letter-spacing: 35px;
  }
}
</style>