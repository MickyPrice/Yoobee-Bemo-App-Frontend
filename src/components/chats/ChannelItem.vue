<template>
  <router-link class="channel" :class=" { 'channel--unread': unread } " :to="`/chat/${ channelId }`">
    <div class="channel__image_wrapper">
      <img class="channel__image" :src="image" aria-hidden="true" />
    </div>
    <div class="channel__content">
      <div class="channel__flex">
        <h3 class="channel__title">{{ title }}</h3>
        <time class="channel__time">{{ lastMessage.time }}</time>
      </div>
      <div class="channel__flex">
        <p class="channel__message">{{ lastMessage.text }}</p>
        <span v-if="unread" class="channel__unreadDot"></span>
      </div>
      <hr class="channel__underline"/>
    </div>
  </router-link>
</template>

<script>
export default {
  data: function () {
    return {
      channelId: "CHANNELID",
      image: "https://thumbs.gfycat.com/ShabbyEagerBarebirdbat-max-1mb.gif",
      title: "Michael Price aoihfpuaiw fuio;awifokajw;fioajwf",
      lastMessage: {
        text: "Thank the 🍔 😍 😍 awbfiua wbfilawbfliabwjfklahwbf",
        time: "5:00 PM",
      }
    }
  },
  props: {
    unread: Boolean
  }  
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.channel {
  color: $black;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: $margin-20;
  &__image {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    flex-grow: 0;
    margin-right: 15px;
  }
  &__underline {
    border-bottom: 1px solid $white-300;
    border-top: none;
    border-left: none;
    border-right: none;
    position: absolute;
    left: 0; right: 0;
    bottom: -8px;
  }
  &__content {
    width: 100%; 
    position: relative;
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
  }
  &__title {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
    max-width: 100%;
    margin-bottom: $margin-5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  &__message {
    font-family: $font-noto;
    text-overflow: ellipsis;
    // white-space: nowrap;
    max-width: 100%;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: lighten($black-500, 30);
  }
  &__time {
    font-weight: light;
    opacity: 0.6;
    flex-shrink: 0;
    font-size: 12px;
  }
  &__unreadDot {
    background-color: $purple-500;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    flex-shrink: 0;
  }

  &--unread {
    .channel__message {
      font-weight: 500;
      color: $black-500;
    }
  }

}
</style>