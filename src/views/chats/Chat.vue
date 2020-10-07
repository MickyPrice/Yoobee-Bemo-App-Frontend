<template>
  <div class="chat">
    <div class="chat__top">
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
      <ProfilePic class="chat__top--small" :imagelink="imagelink2">
        <slot slot="profileName">{{ name }}</slot>
      </ProfilePic>
    </div>
    <div class="chat__bottom">
      <Room></Room>
    </div>
  </div>
</template>

<script>
import Bibutton from "@/components/buttons/BiButton.vue";
import ProfilePic from "@/components/profile/ProfilePic.vue";
// import ChatPushCard from "@/components/chats/ChatPushCard.vue";
import Room from "@/components/chat/Room.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Bibutton,
    ProfilePic,
    Room,
  },
  data: function() {
    return {
      name: "",
      channelId: this.$route.params.channelId,
      imagelink1:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      imagelink2:
        "https://images.unsplash.com/photo-1538960792157-b2e2b62d1f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    };
  },
  computed: {
    ...mapState(["chats"]),
  },
  methods: {
    ...mapActions(["joinChannel", "leaveChannel"]),
  },
  created() {
    this.joinChannel(this.channelId);
  },
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
}
</style>
