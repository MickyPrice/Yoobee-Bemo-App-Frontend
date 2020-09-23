<template>
  <div class="sendPayment">
    <div class="sendPayment__top">
      <Bibutton>
        <slot slot="icon" class>
          <i class="fas fa-angle-left col-purple-500"></i>
        </slot>
      </Bibutton>
      <Title>
        <slot slot="text">Send Payment</slot>
      </Title>
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
          <slot slot="profileName">Shrimp</slot>
        </ProfilePic>
      </slot>
      <template slot="SlotComponents">
        <Search></Search>
        <Favorites></Favorites>
        <BtnFull class="bk-purple-500 BtnFull">
          <slot slot="btn-title">Send</slot>
        </BtnFull>
      </template>
    </PushCardPay>
  </div>
</template>

<script>
import PushCardPay from "../components/layout/PushCardPay.vue";
import Bibutton from "../components/buttons/BiButton.vue";
import Title from "../components/text/Title";
import ProfilePic from "../components/profile/ProfilePic.vue";
import Favorites from "../components/profile/Favorites.vue";
import BtnFull from "../components/buttons/BtnFull";

import Direction from "../components/profile/Direction.vue";
import Search from "../components/form/Search";

export default {
  name: "SendPayment",
  components: {
    PushCardPay,
    Bibutton,
    BtnFull,
    Title,
    ProfilePic,
    Direction,
    Search,
    Favorites,
  },
  data() {
    return {
      imagelink1:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      imagelink2:
        "https://images.unsplash.com/photo-1538960792157-b2e2b62d1f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    };
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
    padding: $padding-40;
  }
}
</style>