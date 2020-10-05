<template>
  <div class="transaction">
    <Layout>
      <BiButton @click="close">
        <slot slot="icon" class>
          <svg
            width="21"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.125 16.625L7 10.5l6.125-6.125"
              stroke="#8B55FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </slot>
      </BiButton>
      <header>
        <h1 class="heading__sm transaction__heading">Send Payment</h1>
      </header>
    </Layout>
    <PushCard class="transaction__pushcard">
      <template slot="SlotComponents">
        <!-- SEND BUTTON -->
        <div class="transaction__moneyInput">
          ${{ price }}<input class="transaction__moneyInputField" type="number"/>
        </div>

        <FullBtn class="transaction__send">
          <template slot="btn-title">Send</template>
        </FullBtn>
      </template>
    </PushCard>
  </div>
</template>

<script>
import PushCard from "@/components/layout/PushCard.vue";
import Layout from "@/components/layout/Layout.vue";
import FullBtn from "@/components/buttons/BtnFull.vue";
import BiButton from "@/components/buttons/BiButton.vue";
// import TextInput from "@/components/form/FormInput.vue";

export default {
  data: function () {
    return {
      open: false,
      price: 5.60
    };
  },
  components: {
    PushCard,
    FullBtn,
    Layout,
    BiButton,
    // TextInput,
  },
  methods: {
    close() {
      this.open = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.transaction {
  background-color: $purple-500;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  &__pushcard {
    height: 500px;
  }

  &__send {
    background-color: $purple-500;
  }
  &__heading {
    color: $white-300;
    text-align: center;
    margin-top: $margin-20;
  }
  &__moneyInput {
    display: flex;
    width: 100%;
    font-size: 64px;
    justify-content: center;
  }
  &__moneyInputField {
    width: 50%;
    font-size: 64px;
    border: none;
    // float: left;
    // clear: left;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    text-align: center;
  }
}
</style>