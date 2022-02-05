export class Dictionary {
    render() {
        return `
            <table class="table">
                <thead class="thead">
                    <tr class="trow">
                        <td class="theading">№</td>
                        <td class="theading">Word</td>
                        <td class="theading">Translation</td>
                        <td class="theading small">Add date</td>
                        <td class="theading small">Delete</td>
                    </tr>
                </thead>
                <tbody class="tbody">${
                    localStorage.length <= 0
                        ? `
                        <tr class="trow">
                            <td class="theading">0</td>
                            <td class="tdata" data-name="word">(empty)</td>
                            <td class="tdata" data-name="translation">(empty)</td>
                            <td class="tdata small" data-name="date">(empty)</td>
                            <td class="tdata small hide" data-name="deleteRowButton"></td>
                        </tr>
                    `
                        : ''
                }</tbody>
                <tfoot class="tfoot">
                    <tr class="trow">
                        <td class="theading" colspan="100%">Итого: <span data-name="countPlace">${
                            localStorage.length
                        }</span></td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}
