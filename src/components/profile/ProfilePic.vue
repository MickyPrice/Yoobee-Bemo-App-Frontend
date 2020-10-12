<template>
  <div
    @click="send()"
    class="profile"
    :style="{ 'background-image': 'url(' + imagelink + ')' }"
  >
    <h5 class="profile__id text__sm">
      <slot name="profileName"></slot>
    </h5>
  </div>
</template>

<script>
export default {
  props: ["imagelink"],
  methods: {
    send: function () {
      this.$emit("updateExchange", this.imagelink);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.profile {
  width: 25vw;
  height: 25vw;

  border-radius: 100px;
  border: 3px solid $white-100;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__id {
    color: $purple-300;
    position: relative;
    bottom: -105%;
    text-align: center;
  }
}
</style>