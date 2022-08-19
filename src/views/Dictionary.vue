<template>
    <table>
        <thead>
            <tr>
                <th>№</th>
                <th>Слово</th>
                <th>Перевод</th>
                <th>Дата</th>
                <th>Удалить</th>
            </tr>
        </thead>
        <tbody v-if="wordsLength">
            <TransitionGroup name="words">
                <tr
                    v-for="({ id, word, translation, date }, index) in words"
                    :key="id"
                >
                    <td>{{ index + 1 }}</td>
                    <td>{{ word }}</td>
                    <td>{{ translation }}</td>
                    <td>{{ new Date(date).toLocaleDateString() }}</td>
                    <td>
                        <span @click="store.dispatch('deleteWordAsync', id)" class="material-symbols-outlined"> delete </span>
                    </td>
                </tr>   
            </TransitionGroup>
        </tbody>
        <tbody v-else>
            <tr>
                <td>0</td>
                <td>пусто</td>
                <td>пусто</td>
                <td>0</td>
                <td>
                    <span class="material-symbols-outlined"> delete </span>
                </td>
            </tr>
        </tbody>
        <!-- <tfoot>
            <tr>
                <td colspan="100%">
                    Итого: <span>{{ wordsLength }}</span>
                </td>
            </tr>
        </tfoot> -->
    </table>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount(() => store.dispatch("getWordsAsync"));

const words = computed(() => store.getters.getWords )
const wordsLength = computed(() => store.getters.getWords?.length )
</script>

<style lang="postcss" scoped>
.words-enter-active,
.words-leave-active {
  transition: all 0.3s ease-in-out 0.1s;
}
.words-enter-from,
.words-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

table {
    border-collapse: separate;
    @apply w-full text-white text-center;
}

table thead tr {
    @apply bg-secondary;
}
table thead tr th {
    @apply py-1 px-1 lg:py-1 lg:px-4 font-medium lg:font-semibold text-sm md:text-base lg:text-lg;
}

table tbody tr {
    @apply bg-primary/80 hover:bg-primary/90;
}
table tbody tr td {
    @apply py-1 px-1 lg:py-1 lg:px-4 text-xs md:text-sm lg:text-base;
}
table tbody tr td:last-child {
    @apply w-auto flex items-center justify-center cursor-pointer !important;
}
table tbody tr td:last-child span {
    @apply font-light;
}

table tfoot tr {
    @apply bg-primary;
}
table tfoot tr td {
    @apply py-1 px-1 lg:py-1 lg:px-4 text-right text-base lg:text-lg;
}

@media (max-width: 425px) {
    table {
        border-spacing: 1px;
    }
    table thead tr th:nth-child(4),
    table thead tr th:nth-child(5) {
        @apply w-0 font-thin text-xs;
    }
    table tbody tr td:nth-child(4),
    table tbody tr td:nth-child(5) {
        @apply w-0 font-thin text-[10px];
    }
    table tbody tr td:last-child span {
        @apply font-thin;
    }
}
</style>