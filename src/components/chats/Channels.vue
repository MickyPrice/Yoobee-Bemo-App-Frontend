<template>
  <section class="channels" v-if="user.status == 1">
    <!-- <Channel :unread="true" /> -->
    <Channel
      v-for="(channel, index) in chats.channels"
      :key="index"
      :currentUser="user.data._id"
      :channelKey="index"
      :channel="channel"
    />
  </section>
  <section class="channels" v-else>
    <Skeleton :count="10" height="75px" :duration="5"/>
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
