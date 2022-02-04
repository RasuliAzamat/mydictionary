export class Modal {
    constructor(title, word, translation, addDate) {
        this.title = title;
        this.word = word;
        this.translation = translation;
        this.addDate = addDate;
    }

    render() {
        return `
            <div class="modal-inner">
                <div class="modal-close" data-name="closeModalButton"><span></span></div>
                <div class="modal-info">
                    <h3 class="modal-info__title">${this.title}</h3>
                    <p class="modal-info__word">
                        Word: <span data-name="wordPlace">${this.word}</span>
                    </p>
                    <p class="modal-info__translation">
                        Translation: <span data-name="translationPlace">${this.translation}</span>
                    </p>
                    <p class="modal-info__date">
                        Date add: <span data-name="addDatePlace">${this.addDate}</span>
                    </p>
                </div>
            </div>
        `;
    }
}
