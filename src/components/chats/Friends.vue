<template>
  <section class="friends">
    <button class="friends__item">
      <div class="friends__image">
        <svg
          class="friends__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      <span class="friends__name">Create Chat</span>
    </button>
    <button
      v-for="(user, index) in friends"
      :key="index"
      class="friends__item"
      @click="loadDirectChannel(user)"
    >
      <img
        class="friends__image"
        :src="api.VUE_APP_API_URL + '/user/profile/' + user._id"
        aria-hidden="true"
      />
      <span class="friends__name">@{{ user.username }}</span>
    </button>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["users", "user"]),
    friends() {
      if (this.user.status == 1) {
        let activeUsers = this.users.active;
        delete activeUsers[this.user.data._id];
        return activeUsers;
      } else {
        return []
      }
    },
  },
  data: function() {
    return {
      api: process.env,
    };
  },
  methods: {
    loadDirectChannel(user) {
      this.$socket.client.emit("getDirectChannel", user._id);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.friends {
  padding: $padding-20 $padding-40;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  position: absolute;
  left: 0;
  right: 0;
  flex-basis: content;
  flex-shrink: 0;
  align-items: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
    background: none;
    border: none;
    text-align: center;
    display: block;
    margin-right: $padding-10;
    text-overflow: ellipsis;
    flex: 0 0 72px;
    cursor: pointer;
    &:focus,
    &:hover {
      outline: none;
      opacity: 0.6;
    }
    &:last-child {
      padding-right: $padding-40;
    }
  }
  &__image {
    width: 60px;
    height: 60px;
    margin: 0 auto 10px auto;
    object-position: center;
    object-fit: cover;
    border-radius: 100%;
    background-color: $white-300;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      to bottom right,
      $purple-500,
      $purple-300
    );
    color: #fff;
  }
  &__name {
    color: $black;
    padding: 0 5px;
    opacity: 0.9;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 118%;
    font-family: $font-noto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
  &__svg {
    width: 30px;
    color: $white-100;
  }
}
</style>
