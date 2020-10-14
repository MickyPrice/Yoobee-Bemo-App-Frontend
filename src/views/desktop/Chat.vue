<template>
  <div class="chat">
      <Room />
  </div>
</template>

<script>
import Room from "@/components/chat/Room.vue";
import { mapActions, mapState } from "vuex";

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
  computed: {
    // Get the state for chats and user
    ...mapState(["chats", "user", "chat"]),
    // Reactivly generate a chat name
    channels() {
      if (this.chats) {
        return this.chats.channels;
      }
      return {};
    },
    name() {
      if (this.channel.members) {
        let members = this.channel.members;
        if (this.user.data != null) {
          delete members[this.user.data._id];
        }
        let users = Object.keys(members);
        return users
          .map((id) => {
            if (users > 1) {
              return members[id].fullname.split(" ")[0];
            } else {
              return members[id].fullname;
            }
          })
          .join(", ");
      }
      return "Loading...";
    },
    // Reactivly get the users in the current channel
    users() {
      if (this.channel.members) {
        let members = this.channel.members;
        if (this.user.data != null) {
          delete members[this.user.data._id];
        }
        return members;
      }
      return [];
    },
  },
  watch: {
    channels: {
      immediate: true,
      handler(val) {
        if (val[this.channelId]) {
          this.channel = val[this.channelId];
        }
      },
    },
  },
  methods: {
    ...mapActions(["joinChannel", "leaveChannel"]),
  },
  // On creation join the socket room by ID
  created() {
    if(!this.channel[this.channelId]){
      this.$socket.client.emit("getChannel", this.channelId);
    }
    this.joinChannel(this.channelId);
  },
  // On destroy leave the socket room
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
