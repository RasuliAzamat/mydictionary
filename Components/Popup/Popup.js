export class Popup {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
    render() {
        return `
        <div class="popup-inner">
            <div class="popup-close" data-name="closePopupButton"><span></span></div>
            
            <div class="popup-info">
                <h3 class="popup-info__title">${this.title}</h3>
                <p class="popup-info__text">${this.text}</p>
            </div>
        </div>
    `;
    }
}
