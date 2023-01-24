<template>
  <div class="trial-day">
    <div class="trial-day__head mb-24">
      <div class="trial-day__head-left">
        <p class="typography_extra-bold">3-day trial for <span class="text-orange ">$0.99</span></p>
          <PromotionPrice :promotionEnded="isCompletedTimer"/>
      </div>
        <TimerComponent v-if="!isCompletedTimer" @completed="completedTimer" :maxTime="180" />
    </div>
    <TermsAction class="terms_pc" />
  </div>
</template>

<script setup>
import PromotionPrice from "@/components//PromotionPrice.vue";
import TimerComponent from "@/components/TimerComponent.vue";
import {ref} from "vue";
import TermsAction from "./TermsAction.vue";

const isCompletedTimer = ref(false)

const completedTimer = (e) => {
  return isCompletedTimer.value = e
}
</script>

<style lang="scss" scoped>
.trial-day {
  background: $cl-background;
  border: 1px solid $cl-border;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  padding: 23px;
  position: relative;

  @include media-sm {
    padding: 12px 16px;
    border-radius: 12px;
    height: 95px;
  }

  &__head {
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 85px;

    @include media-sm {
      justify-content: center;
      margin-bottom: 0;
      height: 100%;
    }
  }

  &::before {
    content: url("@/assets/images/Asteroid.svg");
    position: absolute;
    top: -56px;
    right: 19.2px;

    @include media-sm {
      content: '';
    }
  }

  &__star {
    width: 24px;
    height: 24px;
  }
}


</style>