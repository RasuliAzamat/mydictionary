<template>
    <button type="submit" :class="{'opacity-50 pointer-events-none cursor-not-allowed': disabled}">
        <slot />
    </button>
</template>

<script setup>
const { disabled } = defineProps({
    disabled: {
        type: Boolean,
        default: true
    }
})
</script>

<style lang="postcss" scoped>
button {
    @apply px-12 py-1 rounded-sm border-2 border-slate-500 text-slate-500 font-semibold transition-all outline-none 
    hover:text-white hover:bg-primary/90 hover:border-primary/90;
}
</style>