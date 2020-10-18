<template>
  <div class="about">
    <h1 class="about__title">Credits</h1>
    <div class="about__people">
      <div class="about__person">
        <img
          class="about__profile"
          src="@/assets/images/bemo_credits_oliver.jpg"
          alt="Oliver Griffith-Jones"
        />
        <div class="about__desc">
          <h2 class="about__name">Oliver Griffith-Jones</h2>
          <a class="about__link" target="_blank" href="http://twitter.com/olzgj"
            >@olzgj</a
          >
        </div>
      </div>

      <div class="about__person">
        <img
          class="about__profile"
          src="@/assets/images/bemo_credits_oliver.jpg"
          alt="Oliver Griffith-Jones"
        />
        <div class="about__desc">
          <h2 class="about__name">Oliver Griffith-Jones</h2>
          <a class="about__link" target="_blank" href="http://twitter.com/olzgj"
            >@olzgj</a
          >
        </div>
      </div>

      <div class="about__person">
        <img
          class="about__profile"
          src="@/assets/images/bemo_credits_oliver.jpg"
          alt="Oliver Griffith-Jones"
        />
        <div class="about__desc">
          <h2 class="about__name">Oliver Griffith-Jones</h2>
          <a class="about__link" target="_blank" href="http://twitter.com/olzgj"
            >@olzgj</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";

.about {
  background-color: #fff;
  padding: $padding-20;
  height: 100vh;
  &__title {
    color: $purple-500;
    text-align: center;
    font-family: $font-aileron;
  }

  &__people {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
  }
  &__person {
    background-color: $purple-500;
    //   padding: $padding-20;
    border-radius: $corners-10;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    margin: 25px 10px;
    display: flex;
    overflow: hidden;
    flex-grow: 1;
  }
  &__profile {
    width: 50px;
    height: 100%;
    object-fit: cover;
    object-position: center;
    flex-grow: 0;
  }
  &__desc {
    padding: $padding-10;
  }
  &__name {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
  &__link {
    color: lighten($purple-500, 30%);
    text-decoration: none;
  }
}
</style>
