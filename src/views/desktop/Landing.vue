<template>
  <div class="landing">
    <nav class="nav">
      <h3 class="nav__title">Bemo</h3>
      <button class="nav__btn">Get Started</button>
    </nav>
    <div class="landing__gifs">
      <!-- GIFS -->
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/3o7TKQ8kAP0f9X5PoY/giphy.gif"
        alt="Shut up and take my money"
        style="top: 30px; left: 20%"
      />
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/SUtKUblVAvwMkTvaiT/giphy.gif"
        alt="Shut up and take my money"
        style="top: 100px; right: 10%"
      />
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/l5Dh6boITiHi4vAWMZ/giphy.gif"
        alt="Shut up and take my money"
        style="top: 40%; left: 15%"
      />
      <img
        class="landing__gif"
        src="https://media.giphy.com/media/zWpm4CRynyYrC/giphy.gif"
        alt="Shut up and take my money"
        style="top: 50%; right: 20%"
      />
    </div>
    <main class="landing__main">
      <div class="landing__inner">
        <div class="landing__header">
          <h1 class="landing__title">
            <span class="landing__title--top">Payments</span><br />
            <span class="landing__title--bottom">Made Social</span>
          </h1>
          <p class="landing__subtitle">
            The future of sending and receiving payments from friends and
            family.
          </p>
        </div>
        <img
          class="landing__preview"
          src="@/assets/images/landing_preview.svg"
          alt="Bemo App Preview"
        />
        <img
          class="landing__preview landing__preview--mobile"
          src="@/assets/images/landing_mobile.svg"
          alt="Bemo App Mobile Preview"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "DesktopLanding",
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.landing {
  background-color: #16191c;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  user-select: none;

  &__gif {
    mix-blend-mode: overlay;
    opacity: 0.9;
    filter: drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.15));
    border-radius: 15px;
    width: 200px;
    position: absolute;
    // z-index: -1;
    height: 130px;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 850px) {
      display: none;
    }
  }

  // &__gifs {
  //   position: absolute;
  //   // transform: translateX(-50%);
  //   // left: 50%;
  //   top: 0; bottom: 0;
  // }

  &__main {
    position: relative;
    height: 100vh;
    padding: 0 100px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    // @media screen and (max-width: 850px) {
    //   align-items: center;
    // }
  }
  &__inner {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  &__header {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  &__title {
    font-size: 76px;
    font-family: $font-aileron;
    text-align: center;
    color: #f65e82;
    margin-bottom: 20px;
    @media screen and (max-width: 850px) {
      font-size: 48px;
    }
    @media screen and (min-width: 1000px) {
      font-size: 5vw;
    }
    &--top {
      background: linear-gradient(92.73deg, #f65e82 4.52%, #6f81f7 101.56%),
        #ffffff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &--bottom {
      background: linear-gradient(91.01deg, #503cff 3.19%, #9cf9ce 98.01%),
        #ffffff;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__subtitle {
    text-align: center;
    color: #7c7c7c;
    margin: 0 auto;
    max-width: 400px;
    @media screen and (min-width: 1000px) {
      max-width: 900px;
      font-size: 1vw;
    }
  }

  &__preview {
    width: 100%;
    margin-bottom: -35%;
    max-width: 800px;
    display: block;
    @media screen and (min-width: 1000px) {
      max-width: 1000px;
      margin: 0 auto;
      margin-bottom: -30%;
    }
    @media screen and (max-width: 850px) {
      display: none;
    }
    &--mobile {
      display: none;
      @media screen and (max-width: 850px) {
        display: block;
        width: 100%;
      }
    }
  }
}

.nav {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  &__title {
    color: #8b55ff;
  }
  &__btn {
    background-color: #00d6a3;
    color: #16191c;
    padding: 10px 30px;
    border: none;
    border-radius: 11px;
  }
}
</style>
