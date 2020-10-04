<template>
  <div class="settings">
    <header class="settings__header">
      <Layout>
        <BiButton class="settings__back_btn">
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
        <h1 class="settings__heading heading__sm">Your Profile</h1>
      </Layout>
    </header>
    <main class="settings__main">
      <PushCard class="settings__push_card">
        <template slot="SlotComponents">
          <ProfilePic class="settings__profile" imagelink="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"></ProfilePic>        </template>
      </PushCard>
    </main>
    <Navigation :darkTheme="true" />
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import BiButton from "@/components/buttons/BiButton.vue";
import Layout from "@/components/layout/Layout.vue";
import PushCard from "@/components/layout/PushCard.vue";
import ProfilePic from "@/components/profile/EditableProfilePic.vue";

export default {
  components: {
    Navigation,
    BiButton,
    Layout,
    PushCard,
    ProfilePic
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.settings {
  background-color: $purple-500;
  height: 100vh;

  // HEADER
  &__header {
    color: #fff;
  }
  &__back_btn {
    background-color: #fff;
  }
  &__heading {
    color: #fff;
    text-align: center;
    margin-top: $margin-20;
  }

  // MAIN CONTENT
  &__main {
  }
  &__push_card {
    height: 70vh;
    max-height: 500px;
  }
  &__profile {
    margin-top: -100px;
  }
}
</style>