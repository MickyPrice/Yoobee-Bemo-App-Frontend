<template>
  <Layout>
    <div class="hero">
      <h1 class="hero__heading">Chats</h1>
      <TextInput :placeholder="Search" />
    </div>
    <div class="chats">
      <div class="chat">
        <img
          class="chat__img"
          src="https://media.giphy.com/media/lSPlEENLTonvclZP44/giphy.gif"
        />
        <div class="chat__content">
          <h3>John Smith</h3>
          <h5>Chat Content...</h5>
        </div>
        <div class="chat__status">
          <p>2.30pm</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import TextInput from "../../components/form/TextInput";
import Layout from "../../components/layout/Layout.vue";

export default {
  components: {
    TextInput,
    Layout
  },
};
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  margin-bottom: 40px;

  &__heading {
    color: purple;
  }
}
.chats {
  width: 100%;

  .chat {
    width: 100%;
    display: flex;
    align-items: center;

    &__img {
      border-radius: 100%;
      width: 60px;
      height: 60px;
      object-fit: center;
    }

    &__content {
        flex-grow: 1;
      padding-left: 20px;
    }
  }
}
</style>
