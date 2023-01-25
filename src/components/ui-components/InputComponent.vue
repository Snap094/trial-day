<template>
  <div class="input__wrap">
    <span class="input__title typography_input-title">{{props.title}}</span>
    <img class="input__image" src="@/assets/images/mastercard.svg" alt="mastercard" v-if="props.masterCard">
    <input required :minlength="props.minLength" ref="el" @blur="$emit('blur', masked)" :placeholder="props.placeholder" class="input" :type="props.inputType">
  </div>
</template>

<script setup>
import { useIMask } from 'vue-imask';

const emit = defineEmits(['modelValue','blur'])
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
  masterCard: {
    type: Boolean
  },
})

const { el, masked } = useIMask({
  mask: props.mask,
});

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

          &:focus {
            border: 1px solid $cl_error;
          }
        }
      }
    }

    &:focus {
      &:valid {
        border: 1px solid $cl-input-border;
      }
    }
    &:valid {
      border: 1px solid $cl_valid;
    }
  }
</style>