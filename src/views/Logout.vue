<template>
  <div>
    Logging out.
  </div>
</template>

<script>
import { logout } from "@/services/api/auth.js";

export default {
  created() {
    localStorage.removeItem("authenticated");
    logout();
  },
};
</script>

<style></style>
