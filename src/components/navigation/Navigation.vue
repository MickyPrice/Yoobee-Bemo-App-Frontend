<template>
  <nav class="nav" :style=" { backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), ${gradientColour} 60%)` }">
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
      to="/"
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
      to="/wallet"
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
      :class="{ 'nav__link--light': !darkTheme, 'nav__link--notification': alertsNotification }"
      class="nav__link"
      to="/alerts"
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
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
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
    gradientColour: String
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
  padding: 50px 20px 20px 20px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;

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
        background-color: $purple-500;
      }
      &--active {
        background-color: $purple-500;
      }
    }

    &--active {
      color: $purple-500;
    }

    &--notification::after {
        content: '';
        background-color: $red-300;
        height: 8px; width: 8px;
        display: block;
        position: absolute;
        top: 2px;
        right: 2px;
        border-radius: 100%;
    }
  }
}
</style>


