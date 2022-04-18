import { Add } from '../Components/Add/Add.js'
import { Dictionary } from '../Components/Dictionary/Dictionary.js'
import { Header } from '../Components/Header/Header.js'
import { Search } from '../Components/Search/Search.js'

import { ClickEvent } from './ClickEvent.js'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#header').innerHTML = new Header().render()
    document.querySelector('#add').innerHTML = new Add().render()
    document.querySelector('#search').innerHTML = new Search().render()
    document.querySelector('#dictionary').innerHTML = new Dictionary().render()

    let counter = 0
    const words = JSON.parse(localStorage.getItem('words')) || []
    words.forEach(({ englishWord, russianTranslation, addDate }) => {
        document.querySelector('.tbody').insertAdjacentHTML(
            'beforeend',
            `
                <tr class="trow">
                    <td class="theading" data-name="count">${++counter}</td>
                    <td class="tdata" data-name="word">${englishWord}</td>
                    <td class="tdata" data-name="translation">${russianTranslation}</td>
                    <td class="tdata small" data-name="date">${new Date(
                        addDate
                    ).toLocaleDateString()}</td>
                    <td class="tdata small" data-name="deleteRowButton"></td>
                </tr>
            `
        )
    })
    document.addEventListener('click', new ClickEvent())
})
