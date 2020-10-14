<template>
  <div class="desktop">
    <div class="chats">
      <h1 class="heading__base chats__heading">Chats</h1>
      <SearchBar
        @input-keyup="currentSearch = $event.target.value"
        @input-focus="searchOpen = true"
        @input-blur="closeSearch"
        name="search"
        placeholder="Search"
        type="search"
      />
      <Channels v-if="!(searchOpen && currentSearch)" />
      <UserSearch v-else :search="currentSearch" />
    </div>
    <router-view />
    <div class="sidebar">

    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/form/FormInput";
import Channels from "@/components/chats/Channels";
import UserSearch from "@/components/chats/UserSearch";

export default {
  components: {
    SearchBar,
    Channels,
    UserSearch,
  },
  data: function() {
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
      setTimeout(() => {
        this.searchOpen = false;
      }, 100);
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables";

.chats {
  height: 100%;
  background-color: #FCFCFE;
  padding: 50px 50px;
  max-width: 500px;
  &__heading {
    color: $purple-500;
    font-weight: bold;
  }
}
.desktop {
  width: 100%;
  height: 100%;
  display: flex;
}
.sidebar {
  height: 100%;
  min-width: 400px;
  background-color: #FCFCFE;
}
</style>
