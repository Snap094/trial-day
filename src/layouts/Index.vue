<script setup>
import ButtonComponent from "@/components/ui-components/ButtonComponent.vue";
import TrialDay from "@/components/TrialDay.vue";
import ModalPopUp from "@/components/ui-components/ModalPopUp.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import TermsAction from "@/components/TermsAction.vue";
import {ref} from "vue";

const isOpen = ref(false);
</script>

<template>
  <section class="main">
    <div class="main__col">
      <h1 class="main__title typography_h1 mb-24">Start your learning journey now</h1>
      <p class="main__subtitile typography_semibold mb-32">Get a <b><span class="text-orange">Planet</span>Learn</b> plan to rock self-learning</p>
      <ButtonComponent @click="isOpen = true" class="main__button button_black">Get my plan</ButtonComponent>
      <ModalPopUp :open="isOpen" @close="isOpen = !isOpen">
        <PaymentMethod />
      </ModalPopUp>
      <TermsAction class="terms_mobile"/>
    </div>
    <div class="main__col order-mobile">
        <TrialDay />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;

    @include media-lg {
      column-gap: 18px
    }

    &__col {
      max-width: 474px;
      width: 100%;

      @include media-md {
        max-width: 100%;
      }
    }

    &__button {
      max-width: 273px;

      @include media-sm {
        max-width: none;
      }
    }

    &__title {
      margin-top: 15px;
    }

    &__subtitile {
      max-width: 375px;
    }

    &__terms {
      display: none;
      @include media-sm {
        display: block;
      }
    }
  }

</style>
