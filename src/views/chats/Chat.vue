<template>
  <div class="chat">
    <div class="chat__top">
      <!-- Back button -->
      <router-link to="/chat">
        <Bibutton class="bk-purple-500">
          <slot slot="icon" class>
            <svg
              width="21"
              height="21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 16.625L7 10.5l6.125-6.125"
                stroke="#FFFFFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </slot>
        </Bibutton>
      </router-link>
      <!--  -->
      <div class="chat__users">
        <ChatPic
          v-for="(user, userId, num) in users"
          :key="userId"
          :overlap="num"
          :imagelink="api.VUE_APP_API_URL + '/user/profile/' + userId"
        />
        <div class="chat__name">
          {{ name }}
        </div>
      </div>
    </div>
    <div class="chat__bottom">
      <Room></Room>
    </div>
  </div>
</template>

<script>
import Bibutton from "@/components/buttons/BiButton.vue";
import ChatPic from "@/components/profile/ChatPic.vue";
import Room from "@/components/chat/Room.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Bibutton,
    ChatPic,
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
  background-color: $white-300;
  width: 100vw;
  height: 100vh;
  &__top {
    height: 20%;
    margin: 0 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    &--small {
      justify-self: center;
      height: 75px;
      width: 75px;
    }
  }
  &__bottom {
    height: 80%;
    min-height: 350px;
  }
  &__users {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
  }
  &__name {
    padding-top: 5px;
    width: 100%;
    text-align: center;
  }
}
</style>
