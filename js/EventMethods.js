import { Modal } from '../Components/Modal/Modal.js';
import { Popup } from '../Components/Popup/Popup.js';

export class EventMethods {
    constructor() {
        this.container = document.querySelector('.container');
        this.tableBody = document.querySelector('.tbody');
        this.popup = document.querySelector('.popup');
        this.modal = document.querySelector('.modal');
        this.menu = document.querySelector('.mobile-nav');

        this.links = document.querySelectorAll('[href*="#"]');
        this.inputs = document.querySelectorAll('[data-name*="Input"]');
        this.serialNumbers = document.querySelectorAll('[data-name="count"]');
        this.countPlace = document.querySelector('[data-name="countPlace"]');
    }

    handleEvent(event) {
        event.preventDefault();

        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }

    changeActiveLink(name) {
        for (const link of this.links) {
            if (link.hash === name) link.classList.add('active');
            else link.classList.remove('active');
        }
        window.location.hash = name;
    }

    changeActiveView(name) {
        for (const element of this.container.children) {
            if (element.id === name) element.classList.add('active');
            else element.classList.remove('active');
        }
    }

    checkValidity(value) {
        if (value.trim().length > 0 && isNaN(value)) return true;
    }

    formatValue(value) {
        return (
            value.trim()[0].toUpperCase() + value.trim().slice(1).toLowerCase()
        ).trim();
    }

    checkStrorage(key) {
        if (localStorage.getItem(key) === null) return true;
    }

    addToStorage(word, translation) {
        if (this.checkStrorage(word)) {
            localStorage.setItem(
                this.formatValue(word),
                JSON.stringify({
                    translation: this.formatValue(translation),
                    addDate: new Date(),
                })
            );
        }
    }

    makeShortDate(date) {
        return `${date.getFullYear()}-${
            date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        }-${
            date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        }`;
    }

    makeFullDate(date) {
        return `${date.getFullYear()}-${
            date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        }-${
            date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        } ${
            date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        }:${
            date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        }:${
            date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        }`;
    }

    showPopup(title, text) {
        document.body.classList.add('block');

        this.popup.innerHTML = new Popup(title, text).render();
        this.popup.classList.add('active');
    }

    closePopup() {
        document.body.classList.remove('block');

        this.popup.innerHTML = '';
        this.popup.classList.remove('active');
    }

    showModal(title, word, translation, addDate) {
        document.body.classList.add('block');

        this.modal.innerHTML = new Modal(title, word, translation, addDate).render();
        this.modal.classList.add('active');
    }

    closeModal() {
        document.body.classList.remove('block');

        this.modal.innerHTML = '';
        this.modal.classList.remove('active');
    }
}
