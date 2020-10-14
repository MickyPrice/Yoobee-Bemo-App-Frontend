<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "Chats",
  components: {},
  data() {
    return {};
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$socket.client.emit("init");
    },
  },
};
</script>

<style scoped lang="scss"></style>
