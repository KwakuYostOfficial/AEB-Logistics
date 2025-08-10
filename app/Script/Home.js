/* || THIS IS FOR THE BUTTONS NAVIGATION BUTTON AND ETC */

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


/* HEADER SECTION */
const header = document.querySelector('.header-js');