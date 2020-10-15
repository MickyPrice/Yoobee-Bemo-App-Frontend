<template>
  <div class="chat-box">
    <button class="btn" v-if="isHidden" @click="paymentRedirect">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
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
    <button
      v-show="isHidden"
      class="text__base--heavy btn gif"
      @click="comingSoon"
    >
      GIF
    </button>
    <form
      :style="isHidden ? { 'grid-column': '3/4' } : { 'grid-column': '2/4' }"
      @submit.prevent="checkForm"
    >
      <div class="textarea">
        <div
          class="textbox"
          ref="textbox"
          @focus="isHidden = false"
          @blur="isHidden = true"
          contenteditable="true"
          tabindex="0"
          data-slate-editor="true"
          aria-multiline="true"
          autocorrect="off"
          spellcheck="true"
          role="textbox"
          style="
            outline: none;
            white-space: pre-wrap;
            overflow-wrap: break-word;
            -webkit-user-modify: read-write-plaintext-only;
          "
          @input="typing"
          @keydown="keyPress"
        ></div>
      </div>
      <button class="submit" :disabled="string == ''">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import { mapState } from "vuex";

export default {
  data() {
    return {
      string: "",
      isHidden: true,
    };
  },
  computed: {
    ...mapState(["chats", "user"]),
  },
  methods: {
    typing(e) {
      this.string = e.target.innerText;
    },
    checkForm() {
      if (this.string != "") {
        this.$emit("newPost", this.string.trim());
        this.$refs.textbox.innerText = "";
      }
    },
    keyPress(event) {
      if (event.key == "Enter" && !isMobile) {
        if (!event.shiftKey) {
          event.preventDefault();
          this.checkForm();
        }
      }
    },
    paymentRedirect() {
      const channelId = this.$route.params.channelId;
      let members = this.chats.channels[channelId].members;
      delete members[this.user.data._id];
      this.$router.push(`/payment/${Object.keys(members)[0]}`);
    },
    comingSoon() {
      alert("Coming Soon");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.chat-box {
  min-height: 80px;
  flex-shrink: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 50px 50px auto;
  gap: 10px;
  align-items: end;
  padding: 0 5% 15px 5%;

  form {
    width: 100%;
    display: flex;
    .textarea {
      width: 80%;
      height: auto;
      padding: 15px 15px 15px 20px;
      border: none;
      outline: none;
      border-radius: 22px 0 0 22px;
      max-height: 150px;
      overflow-y: scroll;
      background-color: $white-300;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }
    }
    .textbox {
      width: 100%;
      height: 100%;

      &[type="text"] {
        padding-left: $padding-20;
      }
    }
    .submit {
      height: auto;
      width: 20%;
      background-color: $white-300;
      border-radius: 0 22px 22px 0;
      border: none;
      outline: none;
      svg {
        transform: rotate(90deg);
        height: 20px;
        width: 20px;
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
    display: flex;
    align-items: center;
    justify-content: center;

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
