<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
const { type, placeholder, modelValue } = defineProps({
    type: {
        type: String,
        default: "text",
    },
    placeholder: {
        type: String,
        required: false,
    },
    modelValue: {
        type: String,
        required: false,
    },
});
</script>

<style lang="postcss" scoped>
input {
    @apply block p-1 border-b-2 border-slate-500 rounded-sm text-slate-500 font-medium outline-none transition-all placeholder:text-slate-500 focus:text-primary/90 focus:border-primary focus:placeholder:text-primary/90;
}
</style>