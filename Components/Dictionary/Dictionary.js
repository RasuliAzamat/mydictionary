export class Dictionary {
    render() {
        return `
            <table class="table">
                <thead class="thead">

                    <tr class="trow">
                        <td class="theading">№</td>
                        <td class="theading">Слово</td>
                        <td class="theading">Перевод</td>
                        <td class="theading small">Добавлено</td>
                        <td class="theading small">Удалить</td>
                    </tr>

                </thead>
                <tbody class="tbody">${
                    JSON.parse(localStorage.getItem('words')).length <= 0
                        ? `
                        <tr class="trow">
                            <td class="theading">0</td>
                            <td class="tdata" data-name="word">(пусто)</td>
                            <td class="tdata" data-name="translation">(пусто)</td>
                            <td class="tdata small" data-name="date">(пусто)</td>
                            <td class="tdata small hide" data-name="deleteRowButton"></td>
                        </tr>
                    `
                        : ''
                }</tbody>
                <tfoot class="tfoot">

                    <tr class="trow">
                        <td class="theading" colspan="100%">
                            Итого: <span data-name="countPlace">${
                                JSON.parse(localStorage.getItem('words')).length
                            }</span>
                        </td>
                    </tr>
                    
                </tfoot>
            </table>
        `
    }
}
