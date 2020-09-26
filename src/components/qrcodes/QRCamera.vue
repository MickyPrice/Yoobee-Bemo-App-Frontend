<template>
  <div>
    <p class="decode-result">
      Last result:
      <b>{{ result }}</b>
    </p>

    <qrcode-stream class="qrscanner" :camera="camera" @decode="onDecode" @init="onInit">
      <div v-if="validationSuccess" class="validation-success">This is a URL</div>

      <div v-if="validationFailure" class="validation-failure">This is NOT a URL!</div>

      <div v-if="validationPending" class="validation-pending">Long validation in progress...</div>
    </qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  components: {
    QrcodeStream,
    // QrcodeDropZone,
    // QrcodeCapture
  },
  data() {
    return {
      isValid: undefined,
      camera: "auto",
      result: null,
    };
  },
  computed: {
    validationPending() {
      return this.isValid === undefined && this.camera === "off";
    },

    validationSuccess() {
      return this.isValid === true;
    },

    validationFailure() {
      return this.isValid === false;
    },
  },
  methods: {
    onInit(promise) {
      promise.catch(console.error).then(this.resetValidationState);
    },

    resetValidationState() {
      this.isValid = undefined;
    },

    async onDecode(content) {
      this.result = content;
      console.log(content);
      this.turnCameraOff();
      this.isValid = content.startsWith("BEMOAPP:");

      if (!this.isValid) {
        alert("INVALID BEMO QR CODE");
        this.turnCameraOn();
      } else {
        alert(content);
      }
    },

    turnCameraOn() {
      this.camera = "auto";
    },

    turnCameraOff() {
      this.camera = "off";
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
      });
    },
  },
};
</script>


<style lang="scss" scoped>
    .qrscanner {
        width: 100vw;
        height: 100vh;
    }
</style>