<template>
<div class="pay-and-request-button">
  <button class="pay-and-request-button__pay text__base--heavy">Pay</button>
  <h1 class="pay-and-request-button__wedge">|</h1>
  <button class="pay-and-request-button__request text__base--heavy">Request</button>
</div>
</template>

<script>

export default {

};
</script>

<style scoped lang="scss">
@import "@/scss/_variables";
.pay-and-request-button{
  width: 100%;
    margin-top: $margin-20;

  button{
    width: 48%;
    height: $height-btn;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: $green-300;
  color: $white-100;   
  } 

&__wedge{
  display: inline;
  width: 2%;
  height: $height-btn;

  background-color: $green-300;
    color: $white-100;   
    text-align: center;

}
  &__pay{
  border-radius: 11px 0 0 11px;
  }
  &__request{
      border-radius:  0 11px 11px 0   ;

  }
}


</style>