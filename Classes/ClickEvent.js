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
                    if (input.dataset.name === 'wordInput') word = input.value;
                    if (input.dataset.name === 'translationInput') translation = input.value;
                }

                try {
                    if (!this.checkValidity(word) || !this.checkValidity(translation)) {
                        throw new ValidityError();
                    } else if (!this.checkStrorage(word)) {
                        throw new StorageError();
                    } else {
                        this.addToStorage(word, translation);
                        alert('Успешно добавлено!');
                    }
                } catch (error) {
                    alert(`${error.name}: ${error.message}`);
                } finally {
                    location.href = '/';
                }
                break;

            case 'searchButton':
                let search;
                for (const input of this.inputs) {
                    if (input.dataset.name === 'searchInput') search = input.value;
                }

                try {
                    for (const item of Object.keys(localStorage)) {
                        if (item === this.formatValue(search)) {
                            alert(`Слово: ${item} \nПеревод: ${
                                JSON.parse(localStorage.getItem(item)).translation
                            } \nДата добавления: ${this.makeFullDate(
                                new Date(JSON.parse(localStorage.getItem(item)).addDate)
                            )}
                            `);
                        } else {
                            throw new SearchError();
                        }
                    }
                } catch (error) {
                    alert(`${error.name}: ${error.message}`);
                } finally {
                    location.href = '/';
                }
                break;

            default:
                break;
        }
    }
}
