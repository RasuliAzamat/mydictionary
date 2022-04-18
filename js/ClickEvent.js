import { EventMethods } from './EventMethods.js'
import {
    ValidityError,
    StorageError,
    SearchError,
    EmptyStorageError,
} from './CustomErrors.js'

export class ClickEvent extends EventMethods {
    onClick(event) {
        const target = event.target

        switch (target.href) {
            case `${location.origin + location.pathname}`:
                location.href = location.origin + location.pathname
                break
        }

        switch (target.hash) {
            case '#add':
                this.changeActiveLink('#add')
                this.changeActiveView('add')
                this.menu.classList.toggle('active')
                break

            case '#search':
                this.changeActiveLink('#search')
                this.changeActiveView('search')
                this.menu.classList.toggle('active')
                break

            case '#dictionary':
                this.changeActiveLink('#dictionary')
                this.changeActiveView('dictionary')
                this.menu.classList.toggle('active')
                break
        }

        switch (target.dataset.name) {
            case 'addButton':
                let englishWord, russianTranslation
                for (const input of this.inputs) {
                    if (input.dataset.name === 'englishWordInput') {
                        englishWord = input.value
                    }
                    if (input.dataset.name === 'russianTranslationInput') {
                        russianTranslation = input.value
                    }
                }

                try {
                    if (
                        !(
                            this.checkValidity(englishWord) &&
                            this.checkValidity(russianTranslation)
                        )
                    ) {
                        throw new ValidityError()
                    } else if (!this.checkStrorage(englishWord)) {
                        throw new StorageError()
                    } else {
                        const words =
                            JSON.parse(localStorage.getItem('words')) || []
                        const candidate = words.find(
                            word => word.englishWord === englishWord
                        )

                        if (candidate) {
                            this.showPopup(
                                'Ошибка значений!',
                                'Вы уже добавляли это слово в ваш словарь!'
                            )
                        } else {
                            words.push({
                                englishWord,
                                russianTranslation,
                                addDate: Date.now(),
                            })
                            this.showPopup(
                                'Успешно добавлено!',
                                `В ваш словарь были добавлены следующие значения: 
                                ${this.formatValue(
                                    englishWord
                                )} - ${this.formatValue(russianTranslation)}`
                            )
                        }

                        localStorage.setItem('words', JSON.stringify(words))
                    }
                } catch (error) {
                    this.showPopup(`${error.name}`, `${error.message}`)
                } finally {
                    setTimeout(() => {
                        this.closePopup()
                        location.href = location.origin + location.pathname
                    }, 5000)
                }
                break

            case 'searchButton':
                let searchWord
                for (const input of this.inputs) {
                    if (input.dataset.name === 'searchInput') {
                        searchWord = input.value
                    }
                }

                try {
                    if (localStorage.getItem('words').length <= 0) {
                        throw new EmptyStorageError()
                    }

                    const words =
                        JSON.parse(localStorage.getItem('words')) || []
                    const candidate = words.find(
                        word => word.englishWord === searchWord
                    )

                    if (!this.checkValidity(searchWord)) {
                        throw new ValidityError()
                    } else if (
                        candidate.englishWord === this.formatValue(searchWord)
                    ) {
                        console.log(candidate)
                        this.showModal(
                            'В вашем словаре:',
                            candidate.englishWord,
                            candidate.russianTranslation,
                            new Date(candidate.addDate).toLocaleDateString()
                        )
                    } else {
                        throw new SearchError()
                    }
                } catch (error) {
                    this.showPopup(`${error.name}`, `${error.message}`)
                } finally {
                    setTimeout(() => {
                        this.closePopup()
                        location.href = location.origin + location.pathname
                    }, 5000)
                }
                break

            case 'closePopupButton':
                this.closePopup()
                location.href = location.origin + location.pathname
                break

            case 'closeModalButton':
                this.closeModal()
                location.href = location.origin + location.pathname
                break

            case 'showMenuButton':
                this.menu.classList.toggle('active')
                break

            case 'deleteRowButton':
                let trow = target.closest('.trow')

                for (const element of trow.children) {
                    if (element.dataset.name === 'word') {
                        const words =
                            JSON.parse(localStorage.getItem('words')) || []
                        const candidate = words.find(
                            word => word.englishWord === element.textContent
                        )
                        const updatedWords = words.filter(
                            word => word.englishWord !== candidate.englishWord
                        )
                        localStorage.setItem(
                            'words',
                            JSON.stringify(updatedWords)
                        )

                        this.countPlace.textContent = words.length

                        for (const item of this.serialNumbers) {
                            if (!(item.textContent <= 1)) --item.textContent
                        }
                    }
                }
                trow.remove()
                break
        }
    }
}
