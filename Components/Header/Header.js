export class Header {
    render() {
        return `
            <nav class="nav">
                <a href="${location.origin}" class="logo">My</a>
                <ul class="menu">
                    <li class="menu__item">
                        <a href="#add" class="menu__item--link active">
                            Add word
                        </a>
                    </li>
                    <li class="menu__item">
                        <a href="#search" class="menu__item--link">
                            Search word
                        </a>
                    </li>
                    <li class="menu__item">
                        <a href="#dictionary" class="menu__item--link">
                            Visit dictionary
                        </a>
                    </li>
                </ul>
            </nav>

            <nav class="mobile-nav">
                <a href="${location.origin}" class="mobile-logo">My</a>
                <div class="menu-burger" data-name="showMenuButton"><span></span></div>
                <ul class="mobile-menu">
                    <li class="mobile-menu__item">
                        <a href="#add" class="mobile-menu__item--link active">
                            Add word
                        </a>
                    </li>
                    <li class="mobile-menu__item">
                        <a href="#search" class="mobile-menu__item--link">
                            Search word
                        </a>
                    </li>
                    <li class="mobile-menu__item">
                        <a href="#dictionary" class="mobile-menu__item--link">
                            Visit dictionary
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}
