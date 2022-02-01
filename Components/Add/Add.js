export class Add {
    render() {
        return `
            <h1 class="add__title title">Add new word!</h1>
            <form class="form">
                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Word">
                </div>
                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Translation">
                </div>
                <button class="form__btn btn">Add</button>
            </form>
        `;
    }
}
