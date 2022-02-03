export class Dictionary {
    render() {
        return `
            <table class="table">
                <thead class="thead">
                    <tr class="trow">
                        <td class="theading">№</td>
                        <td class="theading">Word</td>
                        <td class="theading">Translation</td>
                        <td class="theading">Add date</td>
                    </tr>
                </thead>
                <tbody class="tbody"></tbody>
                <tfoot class="tfoot">
                    <tr class="trow">
                        <td class="theading" colspan="100%">Итого: <span>${
                            localStorage.length
                        }</span></td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}
