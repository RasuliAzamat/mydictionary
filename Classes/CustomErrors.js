export class ValidityError extends Error {
    constructor() {
        super();
        this.name = 'Ошибка валидации';
        this.message = `Похоже вы вводите данные в некорректном виде... \nВот как нужно: \nHello - Привет \nПопробуйте еще раз!`;
    }
}

export class StorageError extends Error {
    constructor() {
        super();
        this.name = 'Ошибка хранилища';
        this.message = `Вы уже добавили это слово в словарь. Добавьте что-то новое!`;
    }
}

export class SearchError extends Error {
    constructor() {
        super();
        this.name = 'Ошибка поиска';
        this.message = `Данное слово отсутсвует в вашем словаре. Добавьте же!`;
    }
}
