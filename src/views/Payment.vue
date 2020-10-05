<template>
  <div>
      <button @click="sendFufill">FUFILL</button>
      <button @click="sendPayment">SEND PAYMENT</button>
  </div>
</template>

<script>
export default {
    methods: {
        sendFufill() {
            this.$socket.client.emit("fufillRequest", {payment: "5f7bad6562188a14655f8635"})            
        },
        sendPayment() {
            this.$socket.client.emit("payment", {
                mode: "SEND",
                actor: "5f67e7fcf5731e102a0379ac",
                amount: 124
            })            
        }
    },
    sockets: {
        paymentResponse(data) {
            console.log(data);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>