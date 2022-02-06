export class Add {
    render() {
        return `
            <h1 class="add__title title">Добавьте новое слово!</h1>

            <form class="form">
                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Слово" data-name="wordInput">
                </div>

                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Перевод" data-name="translationInput">
                </div>

                <button class="form__btn btn" data-name="addButton">Добавить</button>
            </form>
        `;
    }
}
