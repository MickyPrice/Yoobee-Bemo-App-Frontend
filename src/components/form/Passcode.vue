<template>
  <input class="heading__lg--balance" 
  type="text" pattern="\d*" placeholder="******" :value="verifyCode" maxlength="6" />
</template>

<script>
export default {
  props:["verifyCode"]
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
input {
  width: 100%;
  margin-top: 60px;
  height: $height-btn;
  background-color: $white-100;
  border-radius: $corners-10;
  border: none;
  outline: none;
  &[type="text"] {
    text-align: center;
    letter-spacing: 35px;
  }
}
</style>