<template>
  <vue-qrcode
    :value="code"
    :color="{ dark: '#000', light: '#ffffff00' }"
    :width="400"
    class="qrcode"
    :margin="0"
    :version="3"
    errorCorrectionLevel="L"
  />
</template>

<script>
import VueQrcode from "vue-qrcode";

export default {
  components: {
    VueQrcode,
  },
  props: {
      code: String
  }
};
</script>

<style scoped lang="scss">
.qrcode {
  width: 100%;
  padding: 50px;
}
</style>