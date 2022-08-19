<template>
    <div>
        <div class="container mx-auto px-2 py-2 sm:px-3 md:px-4">
            <Navigation class="mb-10 lg:mb-14" />
            
            <Transition>
                <RouterView />
            </Transition>
        </div>
    </div>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>