(function () {
    const headerNav = document.querySelector('.header-nav');
    window.onscroll = () => {
            if (window.pageYOffset > 50) {
                headerNav.classList.add('header-nav-active');
            } else (
                headerNav.classList.remove('header-nav-active')
            ); 
    };
}());

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header');
    const menuCloseItem = document.querySelector('.header-close');
    const menuLinks = document.querySelectorAll('.nav-link-main');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-active');
            });
        }
    }
}())
