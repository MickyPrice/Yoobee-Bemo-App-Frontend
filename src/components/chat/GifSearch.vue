<template>
  <div class="gifs">
    <input
      type="text"
      name="gifSearch"
      class="gifs__search"
      v-model="search"
      @input="doSearch"
      autocomplete="off"
      placeholder="Search Gifs..."
      ref="search"
    />
    <div class="gifs__list">
      <img
        class="gifs__gif"
        v-for="(gif, index) in gifList"
        :key="index"
        :src="gif.images.downsized.url"
        :alt="gif.title"
        @click="sendGif(gif.images.downsized_large.url);$emit('close', gif)"
      />
    </div>
  </div>
</template>

<script>
import { GiphyFetch } from "@giphy/js-fetch-api";

export default {
  data: function() {
    return {
      gf: new GiphyFetch(process.env.VUE_APP_GIPHY_API_KEY),
      search: "",
      gifs: [],
    };
  },
  computed: {
      gifList() {
          return (this.gifs) ? this.gifs : [];
      }
  },
  methods: {
    getTrending: async function() {
      const { data: gifs } = await this.gf.trending({ limit: 20, rating: 'pg-13' });
      this.gifs = gifs;
    },
    doSearch: async function() {
      if (this.search.length) {
        const { data: gifs } = await this.gf.search(this.search, {
          sort: "relevant",
          lang: "en",
          limit: 20,
          type: "gifs",
          rating: 'pg-13'
        });
        this.gifs = gifs;
      }
    },
    sendGif(gif) {
        this.$socket.client.emit("sendMsg", {
            message: {
                contentType: "GIF",
                content: gif
            },
            channel: this.$route.params.channelId
        });
    }
  },
  created() {
      this.getTrending();
  },
  mounted() {
      this.$refs.search.focus();
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.gifs {
  position: absolute;
  bottom: 85px;
  height: 400px;
  max-width: 500px;
  background-color: #16191C;
  left: 10px;
  right: 10px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: $corners-20;
  justify-content: space-between;
  overflow-y: scroll;
  @media screen and (min-width: 500px) {
      left: 50px;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__gif {
    height: 100px;
    flex-grow: 1;
    object-fit: cover;
    object-position: center;
    box-sizing: border-box;
    border: solid 3px #16191C;
    border-radius: 10px;
    cursor: pointer;
  }
  &__search {
    width: 100%;
    flex: 1;
    padding: 10px;
    background-color: #1E2126;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #c5c3c3;
    &:focus {
        outline: none;
    }
  }
}
</style>
