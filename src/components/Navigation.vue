<template>
    <nav class="flex items-center justify-between">
        <Logo />

        <ul class="hidden md:flex ">
            <li v-for="{ id, text, route } in navLinks" :key="id" class="mr-5 lg:mr-10 last:mr-0">
                <RouterLink :to="route"
                    class="font-semibold border-b-[2.5px] border-b-transparent text-lg text-slate-600 md:text-xl transition-all hover:border-b-primary">
                    {{ text }}
                </RouterLink>
            </li>
        </ul>

        <div class="inline-block md:hidden mt-[10px]">
            <span v-if="!isVisible" @click="isVisible = true" class="material-symbols-outlined cursor-pointer text-3xl font-bold text-primary">
                menu
            </span>
            <span v-else @click="isVisible = false" class="material-symbols-outlined cursor-pointer text-4xl font-semibold text-primary">
                close
            </span>
        </div>

        <div :class="[
            'absolute left-0 bottom-0 top-[67px] flex items-center justify-center transition-all mobile-menu bg-primary',
            { 'opacity-100': isVisible },
            { 'right-0': isVisible },
            { 'z-50': isVisible },
            { visible: isVisible },
            { 'pointer-events-auto': !isVisible },
            { 'opacity-0': !isVisible },
            { '-right-full': !isVisible },
            { '-z-40': !isVisible },
            { 'pointer-events-auto': !isVisible },
            { invisible: !isVisible },
        ]" style="box-shadow: 0px 15px 20px -20px rgba(0, 0, 0, 0.5)">
            <ul class="flex flex-col items-center">
                <li v-for="{ id, text, route } in navLinks" :key="id" class="mb-3 last:mb-0">
                    <RouterLink :to="route" @click="isVisible = !isVisible"
                        class="font-semibold text-white border-b-[2.5px] border-b-transparent text-2xl">
                        {{ text }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import Logo from "./Logo.vue";

const isVisible = ref(false)

const navLinks = ref([
    { id: 1, text: 'Добавить', route: '/' },
    { id: 2, text: 'Найти', route: '/find' },
    { id: 3, text: 'Словарь', route: '/dictionary' },
])
</script>

<style lang="postcss" scoped>
nav ul li a.router-link-active.router-link-exact-active {
    @apply text-primary border-b-primary;
}
.mobile-menu ul li a.router-link-active.router-link-exact-active {
    @apply text-white border-b-white;
}
</style>