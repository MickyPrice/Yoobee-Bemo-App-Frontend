<template>
  <div class="favs">
    <h5 class="favs__text text__lg">Favourites</h5>
    <div class="favs__grid">
      <ProfilePic
        @updateExchange="sendSelected($event)"
        v-for="fav in favs"
        :key="fav.index"
        :imagelink="fav.imagelink"
        class="small"
      >
        <slot slot="profileName">{{ fav.name }}</slot>
      </ProfilePic>
    </div>
  </div>
</template>

<script>
import ProfilePic from "./ProfilePic";
export default {
  data() {
    return {
      favs: [
        {
          imagelink:
            "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          name: "sniffer",
        },
        {
          imagelink:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          name: "theGrill",
        },
        {
          imagelink:
            "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          name: "smGuy",
        },
        {
          imagelink:
            "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          name: "smGuy",
        },
        {
          imagelink:
            "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          name: "smGuy",
        },
      ],
    };
  },
  components: {
    ProfilePic,
  },
  methods: {
    sendSelected: function (profile) {
      console.log("Image caught by favs" + profile);
      this.$emit("toDirectionProfile", profile);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.favs {
  width: 100%;
  margin: 5% 0 0;
  &__text {
    margin-bottom: $margin-20;
    color: $black;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;

    .small {
      width: 20vw;
      height: 20vw;
    }
  }
}
</style>