<template>
  <div>
    <div v-if="source" class="profile">
      <img :src="source" class="profile__img" />
    </div>
    <div v-else class="profile profile--empty">
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 9v3-3zm0 3v3-3zm0 0h3-3zm0 0h-3 3zm-5-5a4 4 0 11-8 0 4 4 0 018 0v0zM3 20a6 6 0 1112 0v1H3v-1z"
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
    clickable: Boolean,
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

  &__img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.2s all;
  }
}
</style>