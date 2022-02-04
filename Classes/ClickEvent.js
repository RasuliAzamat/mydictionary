import { EventMethods } from './EventMethods.js';
import { ValidityError, StorageError, SearchError } from './CustomErrors.js';

export class ClickEvent extends EventMethods {
    onClick(event) {
        const target = event.target;

        switch (target.hash) {
            case '#add':
                this.changeActiveLink('#add');
                this.changeActiveView('add');
                break;
            case '#search':
                this.changeActiveLink('#search');
                this.changeActiveView('search');
                break;
            case '#dictionary':
                this.changeActiveLink('#dictionary');
                this.changeActiveView('dictionary');
                break;

            default:
                break;
        }

        switch (target.dataset.name) {
            case 'addButton':
                let word, translation;
                for (const input of this.inputs) {
                    if (input.dataset.name === 'wordInput') {
                        word = input.value;
                    }
                    if (input.dataset.name === 'translationInput') {
                        translation = input.value;
                    }
                }

                try {
                    if (!this.checkValidity(word) || !this.checkValidity(translation)) {
                        throw new ValidityError();
                    } else if (!this.checkStrorage(word)) {
                        throw new StorageError();
                    } else {
                        this.addToStorage(word, translation);
                        this.showPopup(
                            'Успешно добавлено',
                            `В ваш словарь были добавлены следующие значения: 
                            ${word} - ${translation}`
                        );
                    }
                } catch (error) {
                    this.showPopup(`${error.name}`, `${error.message}`);
                } finally {
                    setTimeout(() => {
                        this.closePopup();
                        location.href = '/';
                    }, 3000);
                }
                break;

            case 'searchButton':
                let search;
                for (const input of this.inputs) {
                    if (input.dataset.name === 'searchInput') {
                        search = input.value;
                    }
                }

                try {
                    for (const item of Object.keys(localStorage)) {
                        if (!this.checkValidity(search)) {
                            throw new ValidityError();
                        } else if (item === this.formatValue(search)) {
                            this.showModal(
                                'In your dictionary',
                                item,
                                JSON.parse(localStorage.getItem(item)).translation,
                                this.makeFullDate(
                                    new Date(JSON.parse(localStorage.getItem(item)).addDate)
                                )
                            );
                        } else {
                            throw new SearchError();
                        }
                    }
                } catch (error) {
                    this.showPopup(`${error.name}`, `${error.message}`);
                } finally {
                    setTimeout(() => {
                        this.closePopup();
                        location.href = '/';
                    }, 3000);
                }
                break;

            case 'closePopupButton':
                this.closePopup();
                location.href = '/';
                break;

            case 'closeModalButton':
                this.closeModal();
                location.href = '/';

                break;

            default:
                break;
        }
    }
}
