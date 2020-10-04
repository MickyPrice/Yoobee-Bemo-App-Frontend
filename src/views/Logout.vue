<template>
  <div>
    Logging out.
  </div>
</template>

<script>
import { logout } from "@/services/api/auth.js";

export default {
  created() {
    console.log(logout);
    logout();
  },
};
</script>

<style></style>
