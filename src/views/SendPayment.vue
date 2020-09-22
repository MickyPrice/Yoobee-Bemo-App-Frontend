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
        <ProfilePic></ProfilePic>
      </slot>
      <slot slot="direction">
        <Direction>
          <slot slot="icon" class>
            <i class="far fa-arrow-alt-circle-right col-red-300"></i>
          </slot>
        </Direction>
      </slot>
      <slot slot="profile-2">
        <ProfilePic></ProfilePic>
      </slot>
      <template slot="SlotComponents">
        <Search></Search>
        <Favorites></Favorites>
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

import Direction from "../components/profile/Direction.vue";
import Search from "../components/form/Search";

export default {
  name: "SendPayment",
  components: {
    PushCardPay,
    Bibutton,
    Title,
    ProfilePic,
    Direction,
    Search,
    Favorites,
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";
.sendPayment {
  background: $purple-500;
  width: 100vw;
  min-height: 100vh;
  &__top {
    padding: $padding-40;
  }
}
</style>