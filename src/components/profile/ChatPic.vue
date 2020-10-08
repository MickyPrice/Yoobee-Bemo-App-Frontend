<template>
  <div>
    <div
      :class="[overlap ? 'profile__chat profile__chat--lap' : 'profile__chat--first']"
      v-if="imagelink"
      class="profile"
    >
      <img :src="imagelink" class="profile__img" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imagelink", "overlap"],
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.profile {
  background-color: #c4c4c4;
  border-radius: 100%;
  border: solid $white-100;
  overflow: hidden;

  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &--empty {
    background-color: $white-300;
  }

  &__chat {
    width: 65px;
    height: 65px;
    &--first {
      width: 62px;
      height: 62px;
    }
    &--lap {
      margin-left: -33px;
    }
  }

  &__icon {
    position: absolute;
    opacity: 0;
    color: $purple-500;
    width: 30px;
    transition: all 0.2s;
    &--empty {
      opacity: 1;
    }
  }
  &:hover &__icon {
    opacity: 1;
  }

  &__img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.2s all;
  }
  &:hover &__img {
    opacity: 0.5;
    filter: brightness(130%);
  }
}
</style>
