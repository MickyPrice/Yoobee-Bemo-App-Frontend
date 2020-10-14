<template>
  <div class="chat">
    {{channel}}
    {{channelId}}
    <Room />
  </div>
</template>

<script>
import Room from "@/components/chat/Room.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Room,
  },
  data: function() {
    return {
      channel: {},
      api: process.env,
      channelId: this.$route.params.channelId,
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.channel = {}
    this.channelId = to.params.channelId
    this.leaveChannel(from.params.channelId);
    this.joinChannel(to.params.channelId);
    next();
  },
  methods: {
    ...mapActions(["joinChannel", "leaveChannel"]),
  },
  destroyed() {
    this.leaveChannel(this.channelId);
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.chat {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  &__bottom {
    height: 80%;
    min-height: 350px;
  }
}
</style>
