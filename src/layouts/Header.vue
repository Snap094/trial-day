<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
              <LogoComponent />
            </div>
        </div>
    </header>
</template>

<script setup>
import LogoComponent from "@/components/ui-components/LogoComponent.vue"

// const className = ref('');
// const scrollTrigger = 60;
// onMounted(()=> {
//   window.onscroll = function() {
//     return window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger ? className.value = 'header_white' : className.value = ''
//   };
// })
</script>

<style lang="scss" scoped>
  .header {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    transition: .2s linear;
    &_white {
      background-color: $cl-background;
    }

    &__inner {
      display: flex;
      height: 56px;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }

  }

</style>