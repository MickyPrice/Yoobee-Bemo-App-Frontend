<template>
  <div class="requestPayment">
    <div class="requestPayment__top">
      <Bibutton>
        <slot slot="icon" class>
          <i class="fas fa-angle-left col-purple-500"></i>
        </slot>
      </Bibutton>
      <Title>
        <slot slot="text">Request Payment</slot>
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
          <slot slot="icon">
            <i class="far fa-arrow-alt-circle-left col-green-300"></i>
          </slot>
        </Direction>
      </slot>
      <slot slot="profile-2">
        <ProfilePic :imagelink="imagelink2">
          <slot slot="profileName">Shrimp</slot>
        </ProfilePic>
      </slot>

      <template slot="SlotComponents">
        <h3 class="requestPayment__request-name text__lg">
          Request From
          <span class="col-black-300">{{request}}</span>
        </h3>
        <MoneyCounter class="col-green-300"></MoneyCounter>
        <TextGifBoxForm></TextGifBoxForm>
        <BtnFull class="bk-purple-300 BtnFull">
          <slot slot="btn-title">
            Generate Code
            <i class="fas fa-qrcode"></i>
          </slot>
        </BtnFull>
      </template>
    </PushCardPay>
  </div>
</template>

<script>
import PushCardPay from "../components/layout/PushCardPay";
import Bibutton from "../components/buttons/BiButton";
import BtnFull from "../components/buttons/BtnFull";
import Title from "../components/text/Title";
import ProfilePic from "../components/profile/ProfilePic.vue";
import Direction from "../components/profile/Direction.vue";
import MoneyCounter from "../components/form/MoneyCounter.vue";
import TextGifBoxForm from "../components/form/TextGifBoxForm.vue";

export default {
  name: "RequestPayment",
  components: {
    PushCardPay,
    Bibutton,
    Title,
    ProfilePic,
    Direction,
    TextGifBoxForm,
    MoneyCounter,
    BtnFull,
  },
  data() {
    return {
      request: "#friendO",
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
.requestPayment {
  background: $purple-500;
  width: 100vw;
  min-height: 100vh;
  &__top {
    padding: $padding-40;
  }
  &__request-name {
    text-align: center;
    color: $grey-100;
  }
}
.BtnFull {
  margin-top: 150px;
}
</style>