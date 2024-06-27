<script setup lang="ts">
const props = defineProps<{
    testActive?: boolean
}>()

defineOptions({ name: 'GlobalLink' })
</script>

<template>
    <a
        v-bind="$attrs"
        class="g-link"
        :class="[{ 'is-active': props.testActive }]"
        style="display: inline-block; border-radius: 4px;"
    >
        <slot />
        - <span>{{ props.testActive ? 'Active' : 'Inactive' }}</span>
    </a>
</template>

<style scoped>
.g-link {
    color: #07bdde;
    background-color: transparent;
    padding: 0;
}
</style>
