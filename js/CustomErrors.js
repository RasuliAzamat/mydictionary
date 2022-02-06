export class ValidityError extends Error {
    constructor() {
        super();
        this.name = 'Ошибка валидации!';
        this.message = `Введите данные в корректнои формате. <br/> Попробуйте еще раз!`;
    }
}

export class StorageError extends Error {
    constructor() {
        super();
        this.name = 'Ошибка хранилища!';
        this.message = `Вы уже добавили это слово в словарь. <br /> Добавьте что-то новое!`;
    }
}

export class SearchError extends Error {
    constructor() {
        super();
        this.name = 'Ошибка поиска!';
        this.message = `Данное слово отсутсвует в вашем словаре. <br /> Добавьте же!`;
    }
}
