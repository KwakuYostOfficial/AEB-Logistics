import '../../General/general.js';


/* || NAVIGATION MENU BAR SECTION */
const menuIcon = document.querySelector('.header__humberger-menu');
const menuBar = document.querySelector('.menu-bar');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');


menuIcon.addEventListener('click', () => {
    if (menuBar.classList.contains('clicked')) {
        menuBar.classList.remove('clicked');
        overlay.classList.remove('overlay-animation-down');
        overlay.classList.add('overlay-animation-up');
        menu.classList.remove('nav-animation-down');
        menu.classList.add('nav-animation.up');

    } else {
        menuBar.classList.add('clicked');
        overlay.classList.add('overlay-animation-down');
        overlay.classList.remove('overlay-animation-up');
        menu.classList.remove('nav-animation-up');
        menu.classList.add('nav-animation-down');

    }
});