<template>
  <div class="select__wrap">
    <span class="select__title typography_input-title">{{props.title}}</span>
    <select class="select" v-model="inputValue" required>
     <option hidden selected disabled>Select</option>
      <option v-for="option of props.options" :key="option.id">{{option}}</option>
    </select>
  </div>
</template>

<script setup>
  import {useModelWrapper} from "../../use/modelWrapper.js";

  const props = defineProps({
    options: Array,
    title: String,
    modelValue: {
      type: [String, Number],
      default: "",
    },
  })

  const emit = defineEmits(['update:modelValue'])

  let inputValue = useModelWrapper(props, emit, 'modelValue');
</script>

<style lang="scss" scoped>
.select {
  border: 1px solid $cl-input-border;
  border-radius: 8px;
  width: 100%;
  height: 46px;
  padding-left: 16px;
  padding-right: 12px;
  color: $cl-input-font;
  outline: 0;

  &:disabled {
    opacity: 0;
  }

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
    right: 12px;
    max-width: 32px;
    max-height: 22px;
    bottom: 12px;
  }

  &__wrap {
    height: 53px;
    position: relative;
    display: flex;
    align-items: end;
    width: 100%;
    flex: auto 1 1;
  }

  &:valid {
    border: 1px solid $cl_valid;
  }
}
</style>