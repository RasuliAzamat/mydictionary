import { EventMethods } from './EventMethods.js';

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
    }
}
