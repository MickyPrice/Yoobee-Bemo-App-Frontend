<template>
  <Generator :code="`${prefix}:${userId}|${paymentAmount}`" />
</template>

<script>
import Generator from "@/components/qrcodes/QRGenerator";

const QRPrefix = "BEMOAPP";

export default {
  components: {
    Generator,
  },
  data: function () {
    return { 
        userId: "",
        paymentAmount: 0,
        prefix: QRPrefix
    };
  },
};
</script>
