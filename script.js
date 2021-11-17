const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.sideMenu');
const mobileNav = document.querySelector('.mobileNav');

function closeMobileMenu() {
    mobileNav.style.display = 'none';
    openMenu.style.display = 'block'
}

function openMobileMenu() {
    mobileNav.style.display = 'block';
    openMenu.style.display = 'none'
}