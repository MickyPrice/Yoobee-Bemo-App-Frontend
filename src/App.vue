<template>
  <div class="app" id="app" v-if="mobile">
    <router-view />
  </div>
  <div v-else class="app" id="desktop">
    <router-view />
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";

export default {
  computed: {
    mobile() {
      return isMobile;
    },
  },
  sockets: {
    connect() {
      console.log("Server Connected 🙂");
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
