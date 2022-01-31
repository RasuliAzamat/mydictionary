export const templateAdd = `
    <form class="form">
        <h1 class="form__title _title">Add new word!</h1>
        <div class="input-field">
            <input type="text" name="wordInput" class="form__input" placeholder="Word">
        </div>
        <div class="input-field">
            <input type="text" name="translInput" class="form__input" placeholder="Translation">
        </div>
        <button type="submit" class="form__btn btn" data-action="addButton">Add word</button>
    </form>
`;

export const templateSearch = `
    <form class="form">
        <h1 class="form__title _title">Search for the word!</h1>
        <div class="input-field">
            <input type="text" class="form__input" placeholder="Search" data-action="searchInput" >
        </div>
        <button type="submit" class="form__btn btn" data-action="findButton">Find word</button>
    </form>
`;

export const templateDictionary = `
    <div class="dictionary-wrapper">
        <div class="dictionary">
            <p class="dictionary__title _title">My dictionary</p>
            <table class="table">
                <thead class="theader">
                    <tr class="trow">
                        <th class="theading">№</th>
                        <th class="theading">Word</th>
                        <th class="theading">Translation</th>
                        <th class="theading">Add date</th>
                    </tr>
                </thead>
                <tbody class="tbody" data-action="tableRow">${
                    localStorage.length === 0
                        ? `
                        <tr class="trow">
                            <th class="theading">0</th>
                            <td class="tdata">(empty)</td>
                            <td class="tdata">(empty)</td>
                            <td class="tdata" data-action="datePlace">(empty)</td>
                        </tr>
                    `
                        : ''
                }</tbody>
                <tfoot class="tfooter">
                    <tr class="trow">
                        <td class="tdata" colspan="100%">
                            Итого: <span data-action="countPlace">${localStorage.length}</span>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
`;

const correctDate = (date) =>
    `${date.getDate()}-${
        date.getMonth() < 10 ? '' + date.getMonth() + 1 : date.getMonth() + 1
    }-${date.getFullYear()} `;
// ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}

export const tableRowInfo = (word, translation, date, count = 0) => `
    <tr class="trow">
        <th class="theading">${++count}</th>
        <td class="tdata">${word}</td>
        <td class="tdata">${translation}</td>
        <td class="tdata" data-action="datePlace">${correctDate(date)}</td>
    </tr>
`;
