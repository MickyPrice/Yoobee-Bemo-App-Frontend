<template>
  <div class="messages">

    <div class="message-block">
      <div class="message-container">
        <div class="message">Hell Hell</div>
      </div>
      <div class="message-container">
        <div
          class="message"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>
      <div class="message-container">
        <div class="message">Hell Hell</div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  props: ["newMessage"],
  watch: {
    newMessage: function() {
      console.log("new message in" + this.newMessage);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

      
.messages {
  outline: 1px solid green;
   padding-left: 5%;
   padding-right: 5%;

  .message-block {
    outline: 1px solid red;
    padding-left: 20%;
    .message-container {
      outline: 1px solid red;
      margin: 3px 0px;
      display: flex;
      justify-content: flex-end;
      
    }
  }
}.message {
        outline: 1px solid $purple-500;
        margin: 5px 0 5px 5px;
        font-size: 0.75em;
      }
</style>