<template>
  <div class="promotion-price" v-if="!props.promotionEnded">
    <p class="promotion-price__price">Then $9.99</p>
    <p class="promotion-price__discount">$39.99/week</p>
  </div>
  <transition name="bounce">

    <div class="promotion-price" v-if="props.promotionEnded">
      <p class="promotion-price__price" :class="props.promotionEnded ? 'center_mob' : ''">Then $39.99/week</p>
    </div>
  </transition>

</template>

<script setup>
const props = defineProps({
  promotionEnded: Boolean
})
</script>

<style lang="scss" scoped>
.promotion-price {
  margin-top: 8px;

  &__price {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: $cl-font-black;

    @include media-sm {
      font-family: $font-outfit;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }

  &__discount {
    opacity: 0.4;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-decoration-line: line-through;
    margin-top: 2px;

    @include media-sm {
      font-weight: 600;
      font-size:20px;
      line-height: 20px;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>