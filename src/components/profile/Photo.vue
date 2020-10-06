<template>
  <div>
    <div v-if="source" class="profile">
      <img :src="source" class="profile__img">
      <svg
        class="profile__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="20px"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
    <div v-else class="profile profile--empty">
      <svg width="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 7v3-3zm0 3v3-3zm0 0h3-3zm0 0h-3 3zm-5-5a4 4 0 11-8 0 4 4 0 018 0v0zM1 18a6 6 0 1112 0v1H1v-1z"
          stroke="#E7E7E7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";
.profile {
  height: 100px;
  width: 100px;

  background-color: #c4c4c4;
  border-radius: 100%;
  border: 5px solid $white-100;
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