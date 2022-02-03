export class Search {
    render() {
        return `
            <h1 class="add__title title">Search word!</h1>
            <form class="form">
                <div class="input-field">
                    <input type="text" class="form__input" placeholder="Search" data-name="searchInput">
                </div>
                <button class="form__btn btn" data-name="searchButton">Search</button>
            </form>
        `;
    }
}
