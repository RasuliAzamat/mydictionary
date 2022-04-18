export class Header {
    render() {
        return `
            <nav class="nav">
                <a href="${
                    location.origin + location.pathname
                }" class="logo">My</a>

                <ul class="menu">
                    <li class="menu__item">
                        <a href="#add" class="menu__item--link active">
                            Добавить
                        </a>
                    </li>

                    <li class="menu__item">
                        <a href="#search" class="menu__item--link">
                            Найти
                        </a>
                    </li>
                    
                    <li class="menu__item">
                        <a href="#dictionary" class="menu__item--link">
                            Словарь
                        </a>
                    </li>
                </ul>
            </nav>

            <nav class="mobile-nav">
                <a href="${
                    location.origin + location.pathname
                }" class="mobile-logo">My</a>
                <div class="menu-burger" data-name="showMenuButton"><span></span></div>
                <ul class="mobile-menu">
                    <li class="mobile-menu__item">
                        <a href="#add" class="mobile-menu__item--link active">
                            Добавить
                        </a>
                    </li>
                    <li class="mobile-menu__item">
                        <a href="#search" class="mobile-menu__item--link">
                            Найти
                        </a>
                    </li>
                    <li class="mobile-menu__item">
                        <a href="#dictionary" class="mobile-menu__item--link">
                            Словарь
                        </a>
                    </li>
                </ul>
            </nav>
        `
    }
}
