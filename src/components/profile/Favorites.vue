<template>
  <div class="favs">
    <h5 class="favs__text text__lg">Favourites</h5>
    <div class="favs__grid">
      <ProfilePic></ProfilePic>
    </div>
  </div>
</template>

<script>
import ProfilePic from "./ProfilePic";
export default {
  components: {
    ProfilePic,
  },
  data() {
    return {
      favorites: [
        {
          name: "1",
          url:
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        },
        {
          name: "2",
          url:
            "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        },
        {
          name: "3",
          url:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.favs {
  width: 100%;
  margin-top: $margin-30;
  &__text {
    margin-bottom: $margin-20;
    color: $black;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
  }
}
</style>