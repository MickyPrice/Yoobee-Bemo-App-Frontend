<template>
  <div class="chats">
    <Layout>
      <h1 class="heading__base chats__heading">Chats</h1>
      <SearchBar
        @input-keyup="currentSearch = $event.target.value"
        @input-focus="searchOpen = true"
        @input-blur="closeSearch"
        name="search"
        placeholder="Search"
        type="search"
      />
      <div class="chats__friends">
        <Friends class="chats__friendsList" />
      </div>
      <Channels v-if="!(searchOpen && currentSearch)" />
      <UserSearch v-else :search="currentSearch" />
    </Layout>
    <Navigation :darkTheme="true" gradientColour="#FFF" />
  </div>
</template>

<script>
import Layout from "@/components/layout/Layout";
import Navigation from "@/components/navigation/Navigation";
import SearchBar from "@/components/form/FormInput";
import Friends from "@/components/chats/Friends";
import Channels from "@/components/chats/Channels";
import UserSearch from "@/components/chats/UserSearch";

export default {
  components: {
    Layout,
    Navigation,
    SearchBar,
    Friends,
    Channels,
    UserSearch,
  },
  data: function () {
    return {
      searchOpen: false,
      currentSearch: "",
    };
  },
  sockets: {
    openChannel(channel) {
      this.$router.push({
        path: `/chat/${channel}`,
      });
    },
  },
  methods: {
      closeSearch() {
        setTimeout(() => {this.searchOpen = false}, 100)
      }
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.chats {
  height: 100%;
  padding-top: $padding-40;
  &__heading {
    color: $purple-500;
    font-weight: bold;
  }

  &__friends {
    position: absolute;
    left: 0;
    right: 0;
    height: 140px;
  }
  &__friendsList {
    position: absolute;
    left: 0;
    right: 0;
  }
}
</style>