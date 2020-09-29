<template>
  <div class="chat-box">
    <button class="btn" v-if="isHidden">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </button>
    <button class="btn" v-if="!isHidden">
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <button v-show="isHidden" class="text__base--heavy btn gif">GIF</button>
    <form
      :style="isHidden ? { 'grid-column': '3/4' } : { 'grid-column': '2/4' }"
    >
      <input
        class="textbox"
        type="text"
        @focus="isHidden = false"
        @blur="isHidden = true"
        v-model="string"
      />
      <button class="submit" v-on:click.stop.prevent>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      string: "",
      isHidden: true,
    };
  },
  methods: {
    submit: function () {
      console.log(this.string);
      this.$emit("newPost", this.string);
      this.string = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.chat-box {
  height: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 50px 50px auto;
  gap: 10px;
  align-items: center;
  padding: 0 5% 0 5%;

  form {
    width: 100%;
    .textbox {
      width: 80%;
      height: 50px;
      border-radius: 50px 0 0 50px;
      border: none;
      outline: none;
      background-color: $white-300;

      &[type="text"] {
        padding-left: $padding-20;
      }
    }
    .submit {
      height: 50px;
      width: 20%;
      background-color: $white-300;
      border-radius: 0 50px 50px 0;
      border: none;
      outline: none;
      svg {
        height: 10px;
        width: 10px;
        color: $purple-500;
      }
    }
  }

  .btn {
    background-color: $white-300;
    min-width: 50px;
    height: 50px;
    color: $purple-500;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50px;

    &:active {
      border: 2px solid $purple-500;
    }
    svg {
      height: 30px;
      width: 30px;
    }
  }
}
</style>