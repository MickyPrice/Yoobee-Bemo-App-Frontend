<template>
  <div>
    <form v-on:submit.prevent="checkVerify">
      <input v-model="form.code" type="number" maxlength="6" />
      <input type="submit" />
    </form>

    <Numpad/>
  </div>
</template>

<script>
import Numpad from "../form/NumPad";
import { mapActions } from "vuex";
import { verify } from "../../services/api/auth";

export default {
  data: function() {
    return {
      form: {
        phone: this.$route.params.phone,
        code: null,
      },
      errors: [],
    };
  },
  components: {
    Numpad,
  },
  methods: {
    ...mapActions(["updateUser"]),
    checkVerify() {
      verify(this.form).then(() => {
        this.updateUser();
      });
    },
  },
};
</script>

<style></style>
