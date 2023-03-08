const nav_icon = document.querySelector('.nav-icon');
const nav_close = document.querySelector('.nav-close');
const nav_list = document.querySelector('.nav-list');
const nav_bgoverlay = document.querySelector('.nav-bgoverlay');

const navOpen = () => {
    nav_list.classList.add('show');
    nav_bgoverlay.classList.add('active');
    document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
}

const navClose = () => {
    nav_list.classList.remove('show');
    nav_bgoverlay.classList.remove('active');
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

nav_icon.addEventListener('click', navOpen);
nav_close.addEventListener('click', navClose);
nav_bgoverlay.addEventListener('click', navClose);


// aos
AOS.init({
    offset: 150,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})