<template>
  <div>
    {{user}}
    <br/> .................. <br/>
    {{chat}}
  </div>
</template>

<script>
// State
import { mapState } from "vuex";

export default {
 computed: {
    ...mapState(["user", "chat"]),
  }
}
</script>

<style>

</style>