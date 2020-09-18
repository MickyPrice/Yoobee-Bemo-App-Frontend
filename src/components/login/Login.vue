<template>
  <div class="head">
    <h1 class="head__titile heading__lg--balance">Bemo</h1>
    <p class="head__sub-title heading__sm">Be More</p>
    <PushCard>
      <slot slot="PushCardTitle">Welcome Back</slot>
      <slot slot="PushCardSubTitle">Enter your phone number to login</slot>
      <template slot="SlotComponents">
        <form action="login">
          <PhoneNumberBoxForm>
            <slot slot="top-text">Only In New Zealand</slot>
          </PhoneNumberBoxForm>
          <SubmitButton></SubmitButton>
        </form>
      </template>
    </PushCard>
  </div>
</template>

<script>
import PushCard from "../layout/PushCard.vue";
import PhoneNumberBoxForm from "../form/PhoneNumberBoxForm.vue";
import SubmitButton from "../form/SubmitButton.vue";
export default {
  components: {
    PushCard,
    PhoneNumberBoxForm,
    SubmitButton,
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_variables.scss";
.landing {
  padding: $padding-40;
}
.head {
  padding-top: 70px;
  &__titile {
    color: $white-300;
    text-align: center;
  }
  &__sub-title {
    color: $white-300;
    opacity: 70%;
    text-align: center;
    margin-top: -10px;
  }
}
</style>