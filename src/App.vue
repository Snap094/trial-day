<script setup>
    import Header from '@/layouts/Header.vue'

</script>

<template>
    <Header/>
    <div class="content">
        <div class="site-content">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
