<template>
  <h1>Chat to {{ $route.params.channelId }}</h1>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: function() {
      return {
          channel: this.$route.params.channelId
      }
  },
  methods: {
      ...mapActions(["joinChannel", "leaveChannel"])
  },
  created() {
      this.joinChannel(this.channel);
  },
  destroyed() {
      this.leaveChannel(this.channel);
  }
};
</script>
