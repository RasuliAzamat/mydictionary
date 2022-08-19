<template>
    <form @submit.prevent="formSubmit">
        <h2 class="mb-7 text-primary">Найдите добавленное слово!</h2>

        <div class="w-full md:w-1/2 lg:w-1/3 mb-3">
            <Input
                placeholder="Слово или перевод"
                :modelValue="wordModel"
                @update:modelValue="wordHandler"
                class="w-full"
            />
            <small v-if="wordError" class="text-red-500">{{ wordError }}</small>
        </div>

        <Button :disabled="!isValidWord">Найти</Button>
    </form>
</template>

<script setup>
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";

import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

onBeforeMount(() => store.dispatch("getWordsAsync"));

const wordModel = ref("");
const wordError = ref("");
const isValidWord = ref(false);

const wordHandler = (newValue) => {
    wordModel.value = newValue;

    if (wordModel.value.trim().length === 0) {
        isValidWord.value = false;
        return (wordError.value = "Минимальная длинна слова 1");
    }
    if (wordModel.value.trim().length === 20) {
        isValidWord.value = false;
        return (wordError.value = "Максимальная длинна слова 20");
    }

    isValidWord.value = true;
    wordError.value = "";
};

const formSubmit = () => {
    if (isValidWord.value) {
        const word = store.getters.getWords.find((w) => {
            if (w.word === wordModel.value || w.translation === wordModel.value)
                return w;
        });

        if (word) {
            alert(`слово: ${word.word}; перевод: ${word.translation}`);
            return (wordModel.value = "");
        }

        alert(`${wordModel.value} нету в вашем словаре`);
        return (wordModel.value = "");
    }
};
</script>

<style lang="postcss" scoped>
</style>    