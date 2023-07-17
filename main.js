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
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu () {
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
   
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive');
    
    
}
