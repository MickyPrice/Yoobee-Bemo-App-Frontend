<template>
  <div>
    {{user}}
  </div>
</template>

<script>
// State
import { mapState } from "vuex";

export default {
 computed: {
    ...mapState(["user"]),
  }
}
</script>

<style>

</style>