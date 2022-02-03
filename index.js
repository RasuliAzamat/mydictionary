import { Add } from './Components/Add/Add.js';
import { Dictionary } from './Components/Dictionary/Dictionary.js';
import { Header } from './Components/Header/Header.js';
import { Search } from './Components/Search/Search.js';

import {} from './Components/Modal/Modal.js';
import {} from './Components/Popup/Popup.js';

import { ClickEvent } from './Classes/ClickEvent.js';
import { EventMethods } from './Classes/EventMethods.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#header').innerHTML = new Header().render();
    document.querySelector('#add').innerHTML = new Add().render();
    document.querySelector('#search').innerHTML = new Search().render();
    document.querySelector('#dictionary').innerHTML = new Dictionary().render();

    const tableBody = document.querySelector('.tbody');

    let counter = 0;
    for (const item of Object.keys(localStorage)) {
        document.querySelector('.tbody').insertAdjacentHTML(
            'beforeend',
            `
                <tr class="trow">
                    <td class="theading">${++counter}</td>
                    <td class="tdata">${item}</td>
                    <td class="tdata">${JSON.parse(localStorage.getItem(item)).translation}</td>
                    <td class="tdata">${new EventMethods().makeShortDate(
                        new Date(JSON.parse(localStorage.getItem(item)).addDate)
                    )}</td>
                </tr>
            `
        );
    }
    
    document.addEventListener('click', new ClickEvent());
});
