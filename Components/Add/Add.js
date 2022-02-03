export class Add {
    render() {
        return `
            <h1 class="add__title title">Add new word!</h1>
            <form class="form">
                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Word" data-name="wordInput">
                </div>
                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Translation" data-name="translationInput">
                </div>
                <button class="form__btn btn" data-name="addButton">Add</button>
            </form>
        `;
    }
}
