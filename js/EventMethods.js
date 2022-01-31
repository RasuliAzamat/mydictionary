export class EventMethods {
    constructor() {
        this.modal = document.querySelector('[data-action="modal"]');
        this.popup = document.querySelector('[data-action="popup"]');
        this.menu = document.querySelector('[data-action="mobileMenu"]');
        this.content = document.querySelector('[data-action="content"]');
        this.tablerow = document.querySelector('[data-action="tableRow"]');
        this.links = document.querySelectorAll('[data-action*="Link"]');
        this.inputs = document.querySelectorAll('[data-action*="Input"]');
        this.buttons = document.querySelectorAll('[data-action*="Button"]');
        this.places = document.querySelectorAll('[data-action*="Place"]');
    }

    handleEvent(event) {
        event.preventDefault();
        const method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }

    addClass(element, className) {
        element.classList.add(className);
    }

    removeClass(element, className) {
        element.classList.remove(className);
    }

    insertTemplate(template, container, positiion = 'beforeend') {
        container.insertAdjacentHTML(positiion, template);
    }

    removeChilds(parent) {
        for (let element of parent.children) {
            if (parent.children === 0) return;
            else element.remove(), this.removeChilds(parent);
        }
    }

    changePage(
        element,
        template,
        parent = this.links,
        container = this.content,
        className = 'active',
        positiion = 'afterbegin'
    ) {
        for (let child of parent) this.removeClass(child, className);
        this.addClass(element, className);
        this.removeChilds(container);
        this.insertTemplate(template, container, positiion);
    }

    checkValidity(value) {
        if (isNaN(value) && value.trim() !== '') return true;
    }

    checkStorage(key) {
        if (localStorage.getItem(key) === null) return true;
    }

    formatValue(value) {
        return (value[0].toUpperCase() + value.slice(1).toLowerCase()).trim();
    }

    addToStorage(word, translation, date) {
        localStorage.setItem(
            this.formatValue(word),
            JSON.stringify({ translation: this.formatValue(translation), addDate: date })
        );
    }

    randomNumber(min = 0, max = 1e6) {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    }

    randomValue() {
        function* generateSequence(start, end) {
            for (let i = start; i <= end; i++) yield i;
        }

        function* generatePasswordCodes() {
            // 0..9
            yield* generateSequence(48, 57);

            // A..Z
            yield* generateSequence(65, 90);

            // a..z
            yield* generateSequence(97, 122);
        }

        let str = '';

        for (let code of generatePasswordCodes()) {
            str += String.fromCharCode(code);
        }

        return str;
    }
}
