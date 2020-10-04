<template>
  <section class="channels">
    <!-- <Channel />
        <Channel :unread="true" />
        <Channel />
        <Channel />
        <Channel />
        <Channel /> -->

    <Channel v-for="(channel, index) in chats.channels" :key="index" :currentUser="user._id" :channelKey="index" :channel="channel"/>
  </section>
</template>

<script>
import Channel from "@/components/chats/ChannelItem";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["chats", "user"]),
  },
  components: {
    Channel,
  }
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
