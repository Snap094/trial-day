<template>
  <transition name="fade">
  <div class="popup" v-show="props.open" ref="modal" @mousedown="closeModal">
      <div class="popup__inner" ref="modal">
        <div class="popup__content">
          <slot />
          <ButtonComponent class="button_transparent" @click="$emit('close')">Close</ButtonComponent>
        </div>
      </div>
  </div>
  </transition>
</template>

<script setup>
  import ButtonComponent from "./ButtonComponent.vue";
  import {ref} from "vue";

  const props = defineProps({
    open: {
      type: Boolean,
      default: true,
    },
  })

  const emits = defineEmits(['close'])

  const modal = ref(null);

  const closeModal = function ($event) {
    if ($event.target === modal.value) {
      emits('close')
    }
  }
  
</script>

<style lang="scss" scoped>
.popup {
  height: 100vh;
  overflow-y: auto;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  pointer-events: initial;
  opacity: 1;
  z-index: 500;

  &__inner {
    width: 100%;
    max-width: 400px;
    min-height: 500px;
    opacity: 1;
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    transition: 0.5s ease-in-out;
    background: $cl-background;
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 24px 16px 16px;
    display: flex;
    flex-direction: column;
  }

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    row-gap: 12px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

