<template>
  <div>
    {{chats}}
  </div>
</template>

<script>
// State
import { mapState } from "vuex";
// const { getUser } = require("../services/api/user");
import { mapActions } from "vuex";

export default {
 computed: {
    ...mapState(["user", "chats"]),
  },
  created() {
    this.updateUser()
    console.log(this.user.data)
  },
  methods: {
    ...mapActions(["updateUser"])
  }
}
</script>

<style>

</style>