<template>
  <div class="messages">
    <div class="messages__padding">
      <div class="msg-container">
        <div class="msg-container__stack">
          <h5>20/07/20</h5>
          <div class="msg-container__stack--clear">
            <div class="msg-box bk-purple-500 text__sm col-white-100">
              Lorem ipsum dolor sit amet.
            </div>
            <div class="msg-box bk-purple-500 text__sm col-white-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
              facilis! Voluptatibus corporis magnam, placeat odio laudantium eum
              asperiores cumque excepturi.
            </div>
          </div>
        </div>
        <div class="msg-container__stack-other">
          <div class="msg-container__stack-other--profile">
            <ProfilePic class="small" :imagelink="imagelink2"> </ProfilePic>
          </div>
          <div class="msg-container__stack-other--clear">
            <div class="msg-box bk-white-300 text__sm">
              Lorem ipsum dolor sit amet.
            </div>
            <div class="msg-box bk-white-300 text__sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              nobis provident totam maiores, corrupti officiis facere ut aliquam
              nisi asperiores!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePic from "@/components/profile/ProfilePic.vue";

export default {
  data() {
    return {
      imagelink2:
        "https://images.unsplash.com/photo-1538960792157-b2e2b62d1f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    };
  },
  components: {
    ProfilePic,
  },
  props: ["newMessage"],
  watch: {
    newMessage: function () {
      console.log("new message in" + this.newMessage);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.messages {
  &__padding {
    padding-right: 5%;
    padding-left: 5%;

    .msg-container {
      width: 100%;
      &__stack {
        margin-left: 10%;
        margin-bottom: 10px;

        h5 {
          text-align: center;
        }
        &--clear {
          padding-left: 20%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .msg-box {
            border-radius: 5px;
          }
          .msg-box:first-child {
            border-radius: 5px 15px 5px 5px;
          }
          .msg-box:last-child {
            border-radius: 5px 5px 15px 5px;
          }
          .msg-box:only-child {
            border-radius: 20px;
          }
        }
      }

      &__stack-other {
        margin-top: 15px;
        display: flex;

        &--profile {
          width: 10%;
          display: flex;
          align-items: flex-end;
        }
        &--clear {
          width: 80%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .msg-box {
            border-radius: 5px;
          }
          .msg-box:first-child {
            border-radius: 15px 5px 5px 5px;
          }
          .msg-box:last-child {
            border-radius: 5px 5px 5px 15px;
          }
          .msg-box:only-child {
            border-radius: 20px;
          }
        }
      }
    }
  }

  .msg-box {
    padding: 8px;
    margin-top: 2px;
    display: inline;
  }

  .small {
    width: 7vw;
    height: 7vw;
    border: none;
  }
}
</style>