const menu =  document.querySelector('.header__menu');
const mobMenu = document.querySelector('.header__navigation-menu-mob');


menu.addEventListener('click', () => {
    if (mobMenu.classList.contains('show-menu')) {
        mobMenu.classList.remove('show-menu');
    } else {
        mobMenu.classList.add('show-menu');
    }
});

