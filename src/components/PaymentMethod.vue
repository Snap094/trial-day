<template>
  <div class="payment">
    <p class="payment__title mb-24">Payment method</p>
    <ButtonComponent class="button_yellow mb-16">
      <img src="@/assets/images/PayPal.svg" alt="PayPel">
      BuyNow
    </ButtonComponent>
    <ButtonComponent class="button_white">
      <img src="@/assets/images/GooglePay.svg" alt="PayPel">
      pay
    </ButtonComponent>
    <div class="payment__or">
      <span class="payment__or-text">or</span>
    </div>
    <FormPayment />
  </div>
</template>

<script setup>
import FormPayment from "@/components/FormPayment.vue";
import ButtonComponent from "@/components/ui-components/ButtonComponent.vue";

</script>

<style lang="scss" scoped>
  .payment {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &__title {
      font-weight: 800;
      font-size: 21px;
      line-height: 25px;
      text-align: center;
    }

    &__or {
      width: 100%;
      text-align: center;
      position: relative;
      margin: 16px 0;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 2px;
      }

      &-text {
        color: rgba(0, 0, 0, 0.4);
        font-weight: 600;
        font-size: 12px;
        line-height: 17px;
        text-transform: uppercase;
        background-color: $cl-background;
        padding: 0 8px;
        position: relative;
      }
    }
  }
</style>