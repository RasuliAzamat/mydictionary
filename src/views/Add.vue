<template>
    <form @submit.prevent="formSubmit">
        <h2 class="mb-7 text-primary">Добавьте новое слово!</h2>

        <div class="w-full md:w-1/2 lg:w-1/3 mb-3">
            <Input
                placeholder="Слово"
                :modelValue="wordModel"
                @update:modelValue="wordHandler"
                class="w-full"
            />
            <small v-if="wordError" class="text-red-500">{{ wordError }}</small>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 mb-7">
            <Input
                placeholder="Перевод"
                :modelValue="translationModel"
                @update:modelValue="translationHandler"
                class="w-full"
            />
            <small v-if="translationError" class="text-red-500">{{ translationError }}</small>
        </div>

        <Button :disabled="!isValidData">Добавить</Button>
    </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore()
const router = useRouter()

import Button from "../components/Button.vue";
import Input from "../components/Input.vue";

const wordModel = ref("");
const wordError = ref("");
const isValidWord = ref(false);

const wordHandler = (newValue) => {
    wordModel.value = newValue;

    if (wordModel.value.trim().length === 0) {
        isValidWord.value = false;
        return wordError.value = "Это обязятаельное для заполнения поле";
    }
    if (wordModel.value.trim().length === 20) {
        isValidWord.value = false;
        return wordError.value = "Максимальная длинна слова 20";
    }

    isValidWord.value = true;
    wordError.value = "";
};

const translationModel = ref("");
const translationError = ref("");
const isValidTranslation = ref(false);

const translationHandler = (newValue) => {
    translationModel.value = newValue;

    if (translationModel.value.trim().length === 0) {
        isValidTranslation.value = false;
        return translationError.value = "Это обязятаельное для заполнения поле";
    }
    if (translationModel.value.trim().length === 20) {
        isValidTranslation.value = false;
        return translationError.value = "Максимальная длинна слова 20";
    }

    isValidTranslation.value = true;
    translationError.value = "";
};

const isValidData = computed(() => isValidWord.value && isValidTranslation.value)

const formSubmit = async () => {
    if (isValidData.value) {
        try {
            await store.dispatch('addWordAsync', {
                date: Date.now(),
                word: wordModel.value,
                translation: translationModel.value,
            })

            router.push('/dictionary')
        } catch (error) {
            console.log(error);
        }
    }
};
</script>

<style lang="postcss" scoped>
</style>    