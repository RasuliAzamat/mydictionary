import { createStore } from "vuex";
import { httpService } from "../services/httpService";

import { transformFbObj } from "../services/transformFbObj";

export const store = createStore({
    state: () => ({
        words: []
    }),
    mutations: {
        updateWords(state, words) {
            state.words = words
        },
    },
    actions: {
        async getWordsAsync({ commit }) {
            try {
                const fbObj = await httpService.fetchData()

                let words = []
                if (fbObj) words = transformFbObj(fbObj)

                commit('updateWords', words)
            } catch (error) {
                throw error
            }
        },

        async deleteWordAsync({ commit }, wordId) {
            try {
                await httpService.deleteById(wordId)
                const fbObj = await httpService.fetchData()

                let words = []
                if (fbObj) words = transformFbObj(fbObj)

                commit('updateWords', words)
            } catch (error) {
                throw error
            }
        },

        async addWordAsync({ commit }, word) {
            try {
                await httpService.postData(word)

                // const candidate = state.words.find(w => w.id === word.id)

                // if (candidate) {
                //     throw new Error('Данное слово уже есть в словаре!')
                // }

                // commit('updateWords', result)

                // return result
            } catch (error) {
                throw error
            }
        }
    },
    getters: {
        getWords(state) {
            return state.words
        }
    }
})