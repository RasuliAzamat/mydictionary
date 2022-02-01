export class EventMethods {
    constructor() {
        this.container = document.querySelector('#container');
        this.links = document.querySelectorAll('[href*="#"]');
        this.add = document.querySelector('#add');
    }

    handleEvent(event) {
        let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        this[method](event);
    }

    changeActiveLink(name) {
        for (const link of this.links) {
            if (link.hash === name) link.classList.add('active');
            else link.classList.remove('active');
        }
    }

    changeActiveView(name) {
        for (const element of this.container.children) {
            if (element.id === name) element.classList.add('active');
            else element.classList.remove('active');
        }
    }
}
