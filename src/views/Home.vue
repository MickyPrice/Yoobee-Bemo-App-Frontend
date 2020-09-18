<template>
  <div class="home">
    <Layout>
      <template slot>
        <BiButton class="bk-white-300">
          <slot slot="icon" class>
            <i class="fas fa-basketball-ball col-purple-500"></i>
          </slot>
        </BiButton>
      </template>
    </Layout>

    <PushCard>
      <!-- Push Card Elements -->
      <slot slot="PushCardTitle">BEMO</slot>
      <slot slot="PushCardSubTitle">Enter your phone number to login</slot>

      <!-- Add Components In Template -->
      <template slot="SlotComponents">
        <form action>
          <TextBoxForm></TextBoxForm>
          <EmailBoxForm></EmailBoxForm>
          <PhoneNumberBoxForm></PhoneNumberBoxForm>
          <SubmitButton></SubmitButton>
        </form>
      </template>
    </PushCard>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layout/Layout.vue";
import BiButton from "@/components/buttons/BiButton.vue";
import PushCard from "@/components/layout/PushCard.vue";
import TextBoxForm from "@/components/form/TextBoxForm.vue";
import EmailBoxForm from "@/components/form/EmailBoxForm.vue";
import PhoneNumberBoxForm from "@/components/form/PhoneNumberBoxForm.vue";

import SubmitButton from "@/components/form/SubmitButton.vue";

export default {
  name: "Home",
  components: {
    Layout,
    PushCard,
    BiButton,
    TextBoxForm,
    EmailBoxForm,
    PhoneNumberBoxForm,
    SubmitButton,
  },
  data() {
    return {
      location: ["load to new page"],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/_variables.scss";

.home {
  background: $purple-500;
  width: 100vw;
  min-height: 100vh;
}
</style>