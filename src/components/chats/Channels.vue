<template>
  <section class="channels" v-if="user.status == 1">
    <Channel
      v-for="(channel, index) in orderByDate(chats.channels)"
      :key="index"
      :currentUser="user.data._id"
      :channelKey="channel.key"
      :channel="channel"
      :unread="true"
    />
  </section>
  <section class="channels" v-else>
    <Skeleton :count="10" height="75px" :duration="5" />
  </section>
</template>

<script>
import Channel from "@/components/chats/ChannelItem";
import { mapState } from "vuex";
import Vue from "vue";
import { Skeleton } from "vue-loading-skeleton";
Vue.use(Skeleton);

export default {
  computed: {
    ...mapState(["chats", "user"]),
  },
  methods: {
    orderByDate(dict) {
      let array = Object.keys(dict).map(function(key) {
        return { ...dict[key], key };
      });

      return array.sort(
        (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
      ).reverse();
    },
  },
  components: {
    Channel,
    Skeleton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.channels {
  padding: 20px 0 100px 0;
  margin-top: 140px;
  overflow-x: hidden;
  width: 100%;
  border-top: 0.7px solid $white-300;
}
</style>
