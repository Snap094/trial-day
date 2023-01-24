<template>
  <div class="logo">
    <router-link to="/"><img class="logo__image" src="@/assets/images/Logo.svg" alt="PlanetLearn logo"></router-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .logo {
    width: 179px;
    height: 40px;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

  }

</style>