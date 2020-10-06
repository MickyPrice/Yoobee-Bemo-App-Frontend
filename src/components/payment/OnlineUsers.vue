<template>
  <div class="online">
    <div class="online__search">
      <label for="search" class="online__searchlabel">Search</label>
      <Search id="search" class="online__searchbar" type="Search" placeholder="Search by username" />
    </div>
    <h2 class="online__favtitle">Favorites</h2>
    <div class="online__list">
      <button class="online__user" v-for="i in 10" :key="i">
        <img
          class="online__userImg"
          src="https://images.unsplash.com/photo-1602006462828-4fdc44c553df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
        <p class="online__username">MickyP</p>
      </button>
    </div>
  </div>
</template>

<script>
import Search from "@/components/form/FormInput";

export default {
  components: {
    Search
  },
  data: function() {
      return {
          users: [] // Get list of users from backend
      }
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
  &__username:before {
    content: "@";
    margin-right: 2px;
  }
}
</style>