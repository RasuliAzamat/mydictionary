import { EventMethods } from './EventMethods.js';
import { ValidityError, StorageError, SearchError, EmptyStorageError } from './CustomErrors.js';

export class ClickEvent extends EventMethods {
    onClick(event) {
        const target = event.target;

        switch (target.href) {
            case `${location.origin + location.pathname}`:
                location.href = location.origin + location.pathname;
                break;
        }

        switch (target.hash) {
            case '#add':
                this.changeActiveLink('#add');
                this.changeActiveView('add');
                this.menu.classList.toggle('active');
                break;

            case '#search':
                this.changeActiveLink('#search');
                this.changeActiveView('search');
                this.menu.classList.toggle('active');
                break;

            case '#dictionary':
                this.changeActiveLink('#dictionary');
                this.changeActiveView('dictionary');
                this.menu.classList.toggle('active');
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
                    if (!(this.checkValidity(word) && this.checkValidity(translation))) {
                        throw new ValidityError();

                    } else if (!this.checkStrorage(word)) {
                        throw new StorageError();

                    } else {
                        this.addToStorage(word, translation);

                        this.showPopup(
                            'Успешно добавлено!',
                            `В ваш словарь были добавлены следующие значения: 
                            ${this.formatValue(word)} - ${this.formatValue(translation)}`
                        );
                    }

                } catch (error) {
                    this.showPopup(`${error.name}`, `${error.message}`);

                } finally {
                    setTimeout(() => {
                        this.closePopup();
                        location.href = location.origin + location.pathname;
                    }, 5000);
                }
                break;

            case 'searchButton':

                let search;
                for (const input of this.inputs) {
                    if (input.dataset.name === 'searchInput') search = input.value;
                }

                try {
                    if (localStorage.length <= 0) throw new EmptyStorageError();

                    for (const item of Object.keys(localStorage)) {

                        if (!this.checkValidity(search)) {
                            throw new ValidityError();

                        } else if (item === this.formatValue(search)) {
                            this.showModal(
                                'В вашем словаре:',
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
                        location.href = location.origin + location.pathname;
                    }, 5000);
                }
                break;

            case 'closePopupButton':
                this.closePopup();
                location.href = location.origin + location.pathname;
                break;

            case 'closeModalButton':
                this.closeModal();
                location.href = location.origin + location.pathname;
                break;

            case 'showMenuButton':
                this.menu.classList.toggle('active');
                break;

            case 'deleteRowButton':
                let trow = target.closest('.trow');

                for (const element of trow.children) {

                    if (element.dataset.name === 'word') {
                        
                        localStorage.removeItem(element.textContent);
                        this.countPlace.textContent = localStorage.length;

                        for (const item of this.serialNumbers) {
                            if (!(item.textContent <= 1)) --item.textContent;
                        }
                    }
                }

                trow.remove();
                break;
        }
    }
}
