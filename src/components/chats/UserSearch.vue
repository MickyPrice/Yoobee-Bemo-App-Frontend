<template>
  <div class="users">
    <h2 class="users__favtitle">Users</h2>
    <div class="users__list">
      <p v-if="!users.length">No users found :(</p>
      <button
        @click="loadDirectChannel(user)"
        class="users__user"
        v-for="(user, index) in users"
        :key="index"
      >
        <img class="users__userImg" :src="imgUrlStart + user._id" />
        <p class="users__username">{{ user.username }}</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
    },
  },
  watch: {
    search: {
      immediate: true,
      handler(val) {
        this.$socket.client.emit("searchUser", val);
      },
    },
  },
  data: function () {
    return {
      users: [], // Get list of users from backend
      imgUrlStart: `${process.env.VUE_APP_API_URL}/user/profile/`,
    };
  },
  methods: {
    loadDirectChannel(user) {
        // console.log("HELLO");
      this.$socket.client.emit("getDirectChannel", user._id);
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

.users {
  padding: 20px 0 100px 0;
  margin-top: 140px;
  overflow-x: hidden;
  width: 100%;
  border-top: 0.7px solid $white-300;

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
    cursor: pointer;
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