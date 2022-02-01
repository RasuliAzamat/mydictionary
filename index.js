import { Add } from './Components/Add/Add.js';
import { Dictionary } from './Components/Dictionary/Dictionary.js';
import { Header } from './Components/Header/Header.js';
import {} from './Components/Modal/Modal.js';
import {} from './Components/Popup/Popup.js';
import { Search } from './Components/Search/Search.js';
import { ClickEvent } from './Events/ClickEvent.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#header').innerHTML = new Header().render();
    document.querySelector('#add').innerHTML = new Add().render();
    document.querySelector('#search').innerHTML = new Search().render();
    document.querySelector('#dictionary').innerHTML = new Dictionary().render();

    document.addEventListener('click', new ClickEvent());
});
