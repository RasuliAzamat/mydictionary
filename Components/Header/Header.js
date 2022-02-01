export class Header {
    render() {
        return `
            <nav class="nav">
                <a href="/" class="logo">My<span>Dictionary</span></a>
                <ul class="menu">
                    <li class="menu__item">
                        <a href="#add" class="menu__item--link active">Add word</a>
                    </li>
                    <li class="menu__item">
                        <a href="#search" class="menu__item--link">Search word</a>
                    </li>
                    <li class="menu__item">
                        <a href="#dictionary" class="menu__item--link">Visit dictionary</a>
                    </li>
                </ul>
            </nav>
        `;
    }
}
