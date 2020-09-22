<template>
  <div class="profile">
    <div class="profile__image-container">
      <!-- <slot name="profileImage"></slot> -->
    </div>
    <h5 class="profile__id text__sm">
      #
      <slot name="profileName"></slot>
    </h5>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.profile {
  display: flex;
  flex-flow: column;
  align-items: center;
  &__image-container {
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 100px;
    background-color: grey;
    border: 5px solid $white-100;
    img {
      width: 100%;
      width: 100%;
      background-position: center;
    }
  }
  &__id {
    color: $purple-100;
  }
}
</style>