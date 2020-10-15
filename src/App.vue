<template>
  <div v-if="!mobile" class="app" id="desktop">
    <router-view />
  </div>
  <div class="app" id="app" v-else>
    <router-view />
  </div>
</template>

<script>
import { isMobile, isElectron } from "mobile-device-detect";

export default {
  computed: {
    mobile() {
      if (isMobile && !isElectron) {
        return true;
      }
      return false;
    },
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
  },
  bemoerror(err) {
    alert("ERROR: " + err);
    console.error(err);
  },
  created() {
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@import "./scss/_variables.scss";
@font-face {
  src: url(./scss/font/aileron-regular.otf);
  font-family: Aileron;
}
.app {
  font-family: Aileron;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black-300;

  // Fill full height
  height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>
