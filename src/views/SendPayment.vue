<template>
  <div class="sendPayment">
    <div class="sendPayment__top">
      <router-link :to="{ name: 'Home' }">
        <Bibutton>
          <slot slot="icon" class>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </slot>
        </Bibutton>
      </router-link>

      <h1 class="sendPayment__top--title text__lg">Send Payment</h1>
    </div>
    <PushCardPay>
      <slot slot="profile-1">
        <ProfilePic :imagelink="imagelink1">
          <slot slot="profileName">Help</slot>
        </ProfilePic>
      </slot>
      <slot slot="direction">
        <Direction>
          <slot slot="icon" class>
            <i class="far fa-arrow-alt-circle-right col-red-300"></i>
          </slot>
        </Direction>
      </slot>
      <slot slot="profile-2">
        <ProfilePic :imagelink="imagelink2">
          <slot slot="profileName">{{ sendName }}</slot>
        </ProfilePic>
      </slot>
      <template slot="SlotComponents">
        <!-- WHEN SEND PAYMENT FIRST LOADS -->
        <Search v-show="!send"></Search>
        <Favorites
          @toDirectionProfile="updateProfile($event)"
          v-show="!send"
        ></Favorites>

        <!-- WHEN A PERSON IS SELECTED TO HAVE A PAYMENT SENT TO -->
        <h3 v-show="send" class="sendPayment__name">
          Sending Payment Too
          <span class="col-black-300">{{ sendName }}</span>
        </h3>
        <MoneyCounter v-show="send" class="col-red-300"></MoneyCounter>
        <BtnFull v-show="send" class="bk-purple-500 BtnFull">
          <slot slot="btn-title">Send</slot>
        </BtnFull>
      </template>
    </PushCardPay>
  </div>
</template>

<script>
import PushCardPay from "../components/layout/PushCardPay.vue";
import Bibutton from "../components/buttons/BiButton.vue";
import ProfilePic from "../components/profile/ProfilePic.vue";
import Favorites from "../components/profile/Favorites.vue";
import BtnFull from "../components/buttons/BtnFull";
import Direction from "../components/profile/Direction.vue";
import Search from "../components/form/Search";
import MoneyCounter from "../components/form/MoneyCounter.vue";

export default {
  name: "SendPayment",
  components: {
    PushCardPay,
    Bibutton,
    BtnFull,
    ProfilePic,
    Direction,
    Search,
    Favorites,
    MoneyCounter,
  },
  data() {
    return {
      send: false,
      sendName: "shrimp",
      imagelink1:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      imagelink2:
        "https://images.unsplash.com/photo-1538960792157-b2e2b62d1f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    };
  },
  methods: {
    updateProfile: function (profileData) {
      console.log("New Profile Direction" + profileData);
      this.imagelink2 = profileData;
      this.send = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.BtnFull {
  margin-top: $margin-40;
}
.sendPayment {
  background: $purple-500;
  width: 100vw;
  min-height: 100vh;
  &__top {
    padding: $pad-bor;

    &--title {
      text-align: center;
      color: $white-100;
    }
  }
  &__name {
    text-align: center;
    color: $grey-100;
  }
  svg {
    height: 24px;
    width: 24px;
    color: $purple-500;
  }
}
</style>