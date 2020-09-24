<template>
  <ul class="messages">
    <li class="me">hello</li>
    <li class="me">sssss</li>
  </ul>
</template>

<script>
export default {
  props: ["newMessage"],
  watch: {
    newMessage: function () {
      console.log("new message in" + this.newMessage);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.messages {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    clear: both;
    font-size: 0.75em;
    max-width: 70%;
    padding: 10px 20px;
    border-radius: 30px;
    margin-bottom: 2px;
  }

  .me {
    float: right;
    background: $purple-500;
    color: $white-100;
  }

  .me + .me {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .me:last-of-type {
    border-bottom-right-radius: 30px;
  }
}
</style>