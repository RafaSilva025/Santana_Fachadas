const menuButton = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-icon');
const navList = document.querySelector('.ul');

function openMenu() {
    navList.classList.add('open');
}

function closeMenu() {
    navList.classList.remove('open');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);