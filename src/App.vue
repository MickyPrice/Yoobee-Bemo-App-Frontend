<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  sockets: {
    connect() {
      console.log("socket connected");
    },
    bemoerror(err) {
      alert("ERROR: " + err);
      console.error(err);
    }
  }
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
#app {
  font-family: Aileron;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black-300;
}
</style>
