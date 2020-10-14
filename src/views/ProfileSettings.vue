<template>
  <div class="settings">
    <Modal ref="setupPin" title="HELLO WORLD" :open="setupPinModal">
      hello world
    </Modal>

    <header class="settings__header">
      <Layout>
        <h1 class="settings__heading heading__sm">Your Profile</h1>
      </Layout>
    </header>
    <main class="settings__main" v-if="user.status == 1">
      <PushCard class="settings__push_card">
        <template slot="SlotComponents">
          <!-- Profile Photo -->
          <label for="pfp">
            <ProfilePic
              class="settings__profile"
              :imagelink="user.data.profilePic"
            ></ProfilePic>
          </label>
          <form
            method="POST"
            ref="uploadPhotoForm"
            action="http://localhost:3000/user/profile"
          >
            <input
              @change="uploadImage"
              class="settings__file_input"
              id="pfp"
              type="file"
              name="photo"
              accept="image/*"
            />
          </form>
          <h2 class="settings__name text__lg">{{ user.data.fullname }}</h2>
          <p class="settings__username text__sm">@{{ user.data.username }}</p>
          <Btn
            text="Reset Pin"
            v-if="user.data.pinCode"
            class="settings__pinbtn text__base"
          />
          <!-- <Btn text="Setup Pin" @click="setupPinModal = true" v-else class="settings__pinbtn text__base" /> -->
          <Btn
            text="Logout"
            @click="logoutUser();"
            v-else
            class="settings__pinbtn text__base"
          />

          <!-- Form -->
          <label for="profileTag" class="settings__label">Profile Tag</label>
          <TextInput
            disabled
            v-model="this.user.data.username"
            class="settings__input"
            id="profileTag"
          />

          <label for="fullName" class="settings__label">Full Name</label>
          <TextInput
            disabled
            v-model="this.user.data.fullname"
            class="settings__input"
            id="fullName"
          />
        </template>
      </PushCard>
    </main>
    <Navigation :darkTheme="true" />
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import Layout from "@/components/layout/Layout.vue";
import PushCard from "@/components/layout/PushCard.vue";
import ProfilePic from "@/components/profile/EditableProfilePic.vue";
import Btn from "@/components/buttons/SmallRoundedBtn.vue";
import TextInput from "@/components/form/FormInput.vue";
import Modal from "@/components/modals/Modal.vue";

import { uploadPhoto } from "@/services/api/profilePic.js";
import { mapState } from "vuex";
import { logout } from "@/services/api/auth.js";

export default {
  data: function () {
    return {
      setupPinModal: false,
    };
  },
  components: {
    Navigation,
    Layout,
    PushCard,
    ProfilePic,
    Btn,
    TextInput,
    Modal,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    uploadImage: function () {
      const file = event.target.files[0];
      uploadPhoto(file)
        .then(() => {
          // RELOAD PAGE WHEN FILE IS UPLOADED
          this.$router.go();
        })
        .catch(function (err) {
          alert(`Can't upload that photo. Sorry\n(${err})`);
        });
    },
    openSetupPin: function () {
      this.setupPinModal = true;
    },
    logoutUser() {
      localStorage.removeItem('authenticated');
      logout();
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.settings {
  background-color: $purple-500;
  height: 100%;

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
  &__push_card {
    height: 500px;
  }
  &__profile {
    margin-top: -100px;
  }

  &__name {
    color: lighten($black-500, 20%);
    font-family: $font-noto;
    font-weight: 400;
    text-align: center;
    margin-top: 10px;
  }
  &__username {
    color: lighten($purple-500, 20%);
    text-align: center;
  }
  &__pinbtn {
    margin: 0 auto;
    display: block;
    margin-top: $margin-20;
    color: lighten($black-300, 20%);
  }

  // Form
  &__label {
    display: block;
    margin-top: 20px;
    margin-bottom: -10px;
    color: desaturate($purple-500, 50%);
    font-weight: 500;
  }
  &__file_input {
    display: none;
  }
}
</style>