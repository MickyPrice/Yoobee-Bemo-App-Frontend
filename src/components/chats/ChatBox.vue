<template>
  <div class="chat-box">
    <button class="text__base--heavy">$</button>
    <button class="text__base--heavy">GIF</button>
    <form class="message">
      <input type="text" />
      <button type="submit" class="text__base--heavy submit">@</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.chat-box {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
  .message {
    width: 60%;
    input {
      height: 50px;
      width: 100%;

      border-radius: 50px;
      border: none;
      outline: none;
      background-color: $white-300;

      &[type="text"] {
        padding-left: $padding-20;
      }
      &:active {
        border: 2px solid $purple-500;
      }
    }
    .submit {
      z-index: 1;
      position: absolute;
      right: 5%;
    }
  }

  button {
    background-color: $white-300;
    min-width: 50px;
    height: 50px;
    color: $purple-500;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50px;
  }
}
</style>