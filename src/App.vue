<script setup lang="ts">

defineOptions({ name: 'App' })
</script>

<template>
    <div>
        <h1 style="color: #d6d6d6;">
            Vue 3 with TS Folder Structure - Opinionated
        </h1>

        <div style="display: flex; align-items: center; column-gap: 4px; margin-top: 20px;">
            <router-link to="/" style="font-size: 16px;">
                Home
            </router-link>
            <router-link to="/about" style="font-size: 16px;">
                About
            </router-link>
        </div>

        <div style="margin-top: 20px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
</style>
