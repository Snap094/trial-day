<template>
  <div class="input__wrap">
    <span class="input__title typography_input-title">{{props.title}}</span>
    <img class="input__image" :src="props.src" v-if="props.src">
    <input required :minlength="props.minLength" ref="el" @blur="$emit('godotest', masked)" :placeholder="props.placeholder" class="input" :type="props.inputType">
  </div>
</template>

<script setup>
import { useIMask } from 'vue-imask';
import PromotionPrice from "../PromotionPrice.vue";
import {useModelWrapper} from "../../use/modelWrapper.js";

const emit = defineEmits(['modelValue','godotest'])
const props = defineProps({
  inputType: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  minLength: {
    type: [String, Number],
    default: "",
  },
  mask: {
    type: String
  },
  placeholder: {
    type: String
  },
  title: {
    type: String
  },
  src: {
    type: String
  },
  shinima: {
    type: Object
  },
})

const { el, masked } = useIMask({
  mask: props.mask,
});

// let inputValue = useModelWrapper(props, emit, 'modelValue');

</script>

<style lang="scss" scoped>
  .input {
    border: 1px solid $cl-input-border;
    border-radius: 8px;
    width: 100%;
    height: 46px;
    padding-left: 16px;
    padding-right: 12px;
    color: $cl-input-font;
    outline: 0;

    &:focus::placeholder {
      opacity: 1;
      transition: .3s ease-out;
    }

    &:focus::placeholder {
      opacity: 0;
    }

    &__title {
      color: $cl-font-helper;
      background: #FFFFFF;
      border-radius: 30px;
      position: absolute;
      top: 0;
      left: 12.5px;
      padding: 0 5px;
    }

    &__image {
      position: absolute;
      top: calc(50% + 3.5px);
      transform: translateY(-50%);
      right: 12px;
      max-width: 32px;
      max-height: 22px;
    }

    &__wrap {
      height: 53px;
      position: relative;
      display: flex;
      align-items: end;
      width: 100%;

      &.error {
        .input {
          border: 1px solid $cl_error;
        }
      }

      &.valid {
        .input {
          border: 1px solid $cl_valid;
        }
      }
    }

    &:valid {
      border: 1px solid $cl_valid;
    }
  }
</style>