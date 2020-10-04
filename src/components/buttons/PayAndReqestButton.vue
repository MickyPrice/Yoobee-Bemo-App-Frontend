<template>
<div class="pay-and-request-button">
  <button @click="goTo('SendPayment')" class="pay-and-request-button__pay text__base--heavy">Pay</button>

  <h1 class="pay-and-request-button__wedge">
    <div></div>
  </h1>
  
  <button @click="goTo('RequestPayment')" class="pay-and-request-button__request text__base--heavy">Request</button>
    

</div>
</template>

<script>

export default {
methods:{
  goTo(route){
    this.$router.push(route);
  }
}
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.pay-and-request-button{
  width: 100%;
    margin-top: $margin-20;
      position: absolute;
  bottom: 0;
display: flex;
  button{
    font-family: $font-noto;
    width: 48%;
    height: $height-btn;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: $green-300;
  color: $white-100;   
  } 

&__wedge{
  width: 4%;
  height: $height-btn;
  background-color: $green-300;
  display: flex;
  justify-content: center;
  align-items: center;
 
div{
  width: 3px;
  height: 60%;
  border-radius: 15px;
  background-color: $white-100;

}

}
  &__pay{
  border-radius: 11px 0 0 11px;
  }
  &__request{
      border-radius:  0 11px 11px 0   ;

  }
}


</style>