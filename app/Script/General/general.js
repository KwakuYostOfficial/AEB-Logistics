/* || THIS IS FOR THE HOME PAGE*/

const menu =  document.querySelector('.header__menu');
const mobMenu = document.querySelector('.header__navigation-menu-mob');


menu.addEventListener('click', () => {
    if (mobMenu.classList.contains('show-menu')) {
        mobMenu.classList.remove('show-menu');
        mobMenu.classList.remove('fade-in');
        mobMenu.classList.add('fade-out');
    } else {
        mobMenu.classList.add('show-menu');
        mobMenu.classList.remove('fade-out');
        mobMenu.classList.add('fade-in');
    }
});

/* || THIS IS FOR THE TRACKING PAGE */