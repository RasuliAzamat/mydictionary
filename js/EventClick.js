import { templateAdd, templateDictionary, templateSearch } from './variables.js';
import { EventMethods } from './EventMethods.js';
import { ValidationError, FullStorageError } from './CustomErrors.js';

export class EventClick extends EventMethods {
    constructor() {
        super();
    }

    onClick(event) {
        const target = event.target;

        switch (target.dataset.action) {
            case 'addLink':
                this.changePage(event.target, templateAdd);
                this.removeClass(this.menu, 'click');
                this.removeClass(document.body, 'blockScroll');
                break;
            case 'searchLink':
                this.changePage(event.target, templateSearch);
                this.removeClass(this.menu, 'click');
                this.removeClass(document.body, 'blockScroll');
                break;
            case 'dictionaryLink':
                this.changePage(event.target, '');
                this.removeClass(this.menu, 'click');
                this.removeClass(document.body, 'blockScroll');

                const dictionary = document.createElement('div');
                dictionary.classList.add('dictionary-wrapper');
                dictionary.innerHTML = templateDictionary;
                this.content.append(dictionary);

                const tbody = dictionary.querySelector('tbody');

                for (let word of Object.keys(localStorage)) {
                    const values = JSON.parse(localStorage.getItem(word));

                    tbody.insertAdjacentHTML(
                        'beforeend',
                        `
                        <tr class="trow">
                            <th class="theading"></th>
                            <td class="tdata">${word}</td>
                            <td class="tdata">${values.translation}</td>
                            <td class="tdata" data-action="datePlace">${new Date(
                                values.addDate
                            )}</td>
                        </tr>
                    `
                    );
                }

                break;

            case 'showMenu':
                this.menu.classList.toggle('click');
                document.body.classList.toggle('blockScroll');
                break;

            case 'addButton':
                let word, translation;

                for (let input of this.inputs) {
                    if (input.dataset.action === 'wordInput') {
                        word = input.value;
                    }
                    if (input.dataset.action === 'translationInput') {
                        translation = input.value;
                    }
                }

                try {
                    if (!this.checkValidity(word) || !this.checkValidity(translation)) {
                        throw new ValidationError();
                    } else if (!this.checkStorage(word)) {
                        throw new FullStorageError();
                    } else {
                        this.addToStorage(word, translation, new Date());
                        setTimeout(() => (location.href = '/'), 2000);
                    }
                } catch (error) {
                    console.log(error.name, error.message);
                    setTimeout(() => (location.href = '/'), 2000);
                } finally {
                    for (let input of this.inputs) input.value = '';
                    setTimeout(() => (location.href = '/'), 2000);
                }

                break;

            default:
                break;
        }
    }
}
