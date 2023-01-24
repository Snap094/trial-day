<script setup>

</script>

<template>
  <button class="button ">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 56px;
    min-width: 100px;
    max-width: 100%;
    width: 100%;
    word-break: break-word;
    padding: 4px 18px;
    border-radius: 12px;
    text-align: center;
    vertical-align: center;
    border: 0;
    transition: .3s linear;
    background-color: $cl-button-bg-black;
    color: $cl-font-white;
    @include typography_button;

    &:hover {
      cursor: pointer;
      opacity: 0.8;

      &:active {
        background-color: $cl-background-green;
      }
    }

    &:disabled {
      cursor: default;
      background-color: $cl-button-bg-disabled;
      color: $cl-font-white;

      &:hover {
        opacity: 1;
      }

      &:active {
        background-color: $cl-button-bg-disabled;
      }
    }

    &_black {
      background-color: $cl-button-bg-black;
      color: $cl-font-white;
    }

    &_yellow {
      background-color: $cl-button-bg-yellow;
      color: $cl-font-black;
      text-transform: uppercase;
      column-gap: 10px;

      &:hover {
        opacity: 1;
        background-color: $cl-button-bg-yellow-hvr;
      }
    }

    &_transparent {
      background-color: transparent;
      padding: 10px 16px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.36px;
      color: rgba(0, 0, 0, 0.4);
      min-height: inherit;
      width: inherit;
      align-self: center;
      border-radius: 0;

      &:hover {
        &:active {
          background-color: transparent;
        }
      }

    }

    &_white {
      background-color: $cl-button-bg-white;
      border: 1px solid #E1E1E1;
      color: $cl-font-black;
      font-family: $font-dm-sans;
      text-transform: uppercase;
      gap: 6px;

      &:hover {
        opacity: 1;
        background-color: $cl-button-bg-black;
        color: $cl-font-white;
      }

    }
  }
</style>
