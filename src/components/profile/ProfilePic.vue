<template>
  <div class="profile" v-bind:style="{ 'background-image': 'url(' + imagelink + ')' }">
    <h5 class="profile__id text__sm">
      #
      <slot name="profileName"></slot>
    </h5>
  </div>
</template>

<script>
export default {
  data() {},
  props: ["imagelink"],
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.profile {
  height: 120px;
  width: 120px;

  border-radius: 100px;
  border: 5px solid $white-100;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__id {
    color: $purple-100;
    position: relative;
    bottom: -105%;
    text-align: center;
  }
}
</style>