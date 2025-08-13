import '../../General/general.js';


/* || NAVIGATION MENU BAR SECTION */
const menu = document.querySelector('.header__humberger-menu');
const menuBar = document.querySelector('.menu-bar');
const overlay = document.querySelector('.overlay');


menu.addEventListener('click', () => {
    if (menuBar.classList.contains('clicked')) {
        setTimeout(()=> {menuBar.classList.remove('clicked')}, 100);
        

    } else {
        menuBar.classList.add('clicked');
    }
});