<template>
  <div class="profile">
    <div class="profile__image"></div>
    <h5 class="profile__id text__sm">#hello</h5>
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
  &__image {
    background-color: grey;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 4px solid $white-100;
  }
  &__id {
    color: $purple-100;
  }
}
</style>