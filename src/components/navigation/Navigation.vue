<template>
  <nav
    class="nav"
    :class="{'nav--bg': background}"
  >
    <router-link
      active-class="nav__link--active"
      :class="{ 'nav__link--light': !darkTheme }"
      class="nav__link"
      to="/friends"
    >
      <svg
        class="nav__svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </router-link>
    <router-link
      active-class="nav__link--active"
      :class="{ 'nav__link--light': !darkTheme, 'nav__link--notification': alertsNotification }"
      class="nav__link"
      to="/chat"
    >
      <svg
        class="nav__svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    </router-link>

    <!-- MAIN MIDDLE BTN -->
    <router-link
      :class="{ 'nav__link--large--light': !darkTheme }"
      class="nav__link nav__link--large"
      to="/home"
    >
      <svg
        class="nav__svg nav__svg--large"
        fill="none"
        viewBox="0 0 24 29"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 1.5v18m-4-14l4-4-4 4zm4-4l4 4-4-4zM20.5 23.5l-4 4m0 0l-4-4m4 4v-18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </router-link>

    <router-link
      active-class="nav__link--active"
      :class="{ 'nav__link--light': !darkTheme }"
      class="nav__link"
      to="/payment"
    >
      <svg
        class="nav__svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </router-link>
    <router-link
      active-class="nav__link--active"
      :class="{ 'nav__link--light': !darkTheme }"
      class="nav__link"
      to="/settings"
    >
      <svg
        class="nav__svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    darkTheme: Boolean,
    chatNotification: Boolean,
    alertsNotification: Boolean,
    background: Boolean
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px 20px 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  &--bg {
    background-color: rgba(255,255,255,0.5)
  }

  // Style individual icons
  &__svg {
    width: 25px;
    &--large {
      width: 30px;
    }
  }

  &__link {
    border-radius: 21px;
    color: $black-300;
    display: block;
    transition: all 0.4s;
    position: relative;
    padding-bottom: 5px;

    // Light theme regular button
    &--light {
      color: $white-100;
    }

    &:hover,
    &:focus {
      transform: translateY(-5px);
      outline: none;
    }

    // Large button
    &--large {
      background-color: $purple-500;
      // background-color: $black-300;
      color: $white-100;
      padding: 16px 20px;
      // Light large button
      &--light {
        background-color: $black-300;
      }
      &--active {
        background-color: $purple-500;
      }
    }

    &--active {
      color: $purple-500;
    }

    &--notification::after {
      content: "";
      background-color: $red-300;
      height: 8px;
      width: 8px;
      display: block;
      position: absolute;
      top: 2px;
      right: 2px;
      border-radius: 100%;
    }
  }
}
</style>


