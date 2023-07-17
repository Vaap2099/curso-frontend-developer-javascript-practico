const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener ('click', toggleMobileMenu);
shoppingCartIcon.addEventListener ('click', toggleShoppingCart);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart () {
    shoppingCart.classList.toggle('inactive');
}