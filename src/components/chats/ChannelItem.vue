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
    </div>
  </router-link>
</template>

<script>
export default {
  data: function () {
    return {
      channelId: "CHANNELID",
      image: "https://thumbs.gfycat.com/ShabbyEagerBarebirdbat-max-1mb.gif",
      title: "Michael Price",
      lastMessage: {
        text: "Thanks for the 🍔 😍 😍",
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

// .channel {
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     color: $black;
//     &__image_wrapper {
//         width: 60px;
//         margin-right: 22px;
//     }
//     &__image {
//         width: 60px;
//         height: 60px;
//         object-fit: cover;
//         object-position: center;
//         border-radius: 100%;
//     }
//     &__title {
//         margin-bottom: 6px;
//     }
//     &__flex {
//         display: flex;
//         justify-content: space-between;
//         width: calc(100% - 60px);
//     }
//     &__date {
//         font-size: 12px;
//         opacity: 0.5;
//         display: block;
//     }
// }

.channel {
  color: $black;
  text-decoration: none;
  display: flex;
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
    margin-right: 10px;
  }
  &__content {
    width: 100%;
  }
  &__flex {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: $margin-5;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  &__message {
    font-family: "Nunito Sans", sans-serif;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: lighten($black-500, 30) ;
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
  }

  &--unread {
    .channel__message {
      font-weight: 600;
      color: lighten($black-500, 5);
    }
  }

}
</style>