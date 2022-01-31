export class ValidationError extends Error {
    constructor() {
        super();
        this.name = `Ошибка валидации!`;
        this.message = `\nПохоже вы вводите данные в некорректном формате. Вот как правильно: \nПоле word: Hello; Поле Translayion: Привет. \nПопробуйте еще раз!`;
    }
}

export class FullStorageError extends Error {
    constructor() {
        super();
        this.name = 'Повторяющиеся значение!';
        this.name = `Вы уже добавляли данное значение в словарь. \nДобавьте новое слово!`;
    }
}
