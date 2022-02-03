export class EventMethods {
    constructor() {
        this.container = document.querySelector('#container');
        this.tableBody = document.querySelector('.tbody');
        this.links = document.querySelectorAll('[href*="#"]');
        this.inputs = document.querySelectorAll('[data-name*="Input"]');
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
        return (value[0].toUpperCase() + value.slice(1).toLowerCase()).trim();
    }

    checkStrorage(key) {
        if (localStorage.getItem(key) === null) return true;
    }

    addToStorage(word, translation, date) {
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
            date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
        }-${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}`;
    }

    makeFullDate(date) {
        return `${date.getFullYear()}-${
            date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
        }-${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()} ${
            date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${
            date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        }`;
    }
}
