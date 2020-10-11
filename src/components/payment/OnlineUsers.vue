<template>
  <div class="online">
    <div class="online__search">
      <label for="search" class="online__searchlabel">Search</label>
      <Search
        id="search"
        class="online__searchbar"
        type="search"
        placeholder="Search by username"
        @input-keyup="searchForUser"
      />
    </div>
    <h2 class="online__favtitle">Users</h2>
    <div class="online__list">
      <p v-if="!users.length">No users found :(</p>
      <button @click="$emit('select-user', user)" class="online__user" v-for="(user, index) in users" :key="index">
        <img class="online__userImg" :src="imgUrlStart + user._id" />
        <p class="online__username">{{ user.username }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import Search from "@/components/form/FormInput";

export default {
  components: {
    Search,
  },
  data: function () {
    return {
      users: "", // Get list of users from backend
      imgUrlStart: `${process.env.VUE_APP_API_URL}/user/profile/`,
    };
  },
  methods: {
    searchForUser(e) {
      this.$socket.client.emit("searchUser", e.target.value);
    },
  },
  sockets: {
    userSearchResponse(data) {
      this.users = data;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.online {
  margin-bottom: 50px;
  &__searchbar {
    margin: 10px 0 30px 0;
    padding: 30px;
  }
  &__searchlabel {
    color: desaturate($purple-500, 60%);
    font-family: $font-aileron;
    font-weight: 600;
  }

  // LIST
  &__favtitle {
    font-size: 20px;
    margin-bottom: 10px;
    font-family: $font-aileron;
  }
  &__list {
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  &__user {
    background: none;
    border: none;
    // margin: 10px;
    margin-bottom: 10px;
    text-align: center;
    width: 25%;
    color: lighten($black-500, 20%);
    font-family: $font-aileron;
    overflow: hidden;
    @media screen and (min-width: 600px) {
      width: auto;
      margin-right: 10px;
    }
  }
  &__userImg {
    width: 62px;
    height: 62px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__username {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    &:before {
      content: "@";
      margin-right: 2px;
    }
  }
}
</style>