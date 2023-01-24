<template>
  <div class="terms" >
    <div class="terms__description mb-24">
      <div class="terms__description-row">
        <img class="terms__star" src="@/assets/images/star.svg" alt="star">
        <p>Exclusive access to <b class="text-orange">350+</b> learning programs</p>
      </div>
      <div class="terms__description-row">
        <img class="terms__star" src="@/assets/images/star.svg" alt="star">
        <p>Personalized course plan</p>
      </div>
      <div class="terms__description-row">
        <img class="terms__star" src="@/assets/images/star.svg" alt="star">
        <p>Comfy learning schedule made by you</p>
      </div>
      <div class="terms__description-row">
        <img class="terms__star" src="@/assets/images/star.svg" alt="star">
        <p><b class="text-orange">24/7</b> tutor support in a secure chat</p>
      </div>
      <div class="terms__description-row">
        <img class="terms__star" src="@/assets/images/star.svg" alt="star">
        <p>Lifetime access to materials</p>
      </div>
    </div>
    <div class="terms__secure center mb-24">
      <img class="terms__secure-image" src="@/assets/images/Lock.svg" alt="Lock">
      <span class="terms__secure-text">Safe & secure payment</span>
    </div>
    <div class="terms__lower">
      <p class="terms__lower-text">$0.99 charged today. If you don't cancel at least 24 hours before the end of the
        3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your
        subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions,
        Privacy Policy , Money Back , and Subscription Terms .</p>
    </div>
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
  .terms {

    &_pc {
      display: block;
      @include media-sm {
        display: none;
      }
    }

    &_mobile {
      display: none;
      @include media-sm {
        display: block;
        margin-top: 32px;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
    }

    &__description-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__secure {
      background: $cl-button-bg-white;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 12px;
      height: 56px;
    }

    &__secure-image {
      width: 24px;
      height: 24px;
    }

    &__secure-text {
      margin-left: 8px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: $cl-font-green;
    }

    &__lower-text {
      ont-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #000000;
      opacity: 0.5;
    }
  }
</style>