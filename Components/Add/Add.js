export class Add {
    render() {
        return `
            <h1 class="add__title title">Добавьте новое слово!</h1>

            <form class="form">
                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Слово на английском" data-name="englishWordInput">
                </div>

                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Перевод на русском" data-name="russianTranslationInput">
                </div>

                <button class="form__btn btn" data-name="addButton">Добавить</button>
            </form>
        `
    }
}
