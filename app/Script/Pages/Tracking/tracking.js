import '../../General/general.js';


/* || NAVIGATION MENU BAR SECTION */
const menu = document.querySelector('.header__humberger-menu');
const menuBar = document.querySelector('.menu-bar');

menu.addEventListener('click', () => {
    if (menuBar.classList.contains('clicked')) {
        menuBar.classList.remove('clicked');

    } else {
        menuBar.classList.add('clicked');
    }
});