<template>
  <div>
    {{chats}}
  </div>
</template>

<script>
// State
import { mapState } from "vuex";

export default {
 computed: {
    ...mapState(["user", "chats"]),
  },
  created() {
    console.log(this.user.data)
  }
}
</script>

<style>

</style>