const burgerIcon = document.getElementsByClassName('burger-link')[0];
const mobileNav = document.getElementById('mobileNavLinks');

burgerIcon.addEventListener('click', () => {
    if (mobileNav.classList.contains('showMobileNav')) {
        mobileNav.classList.remove('showMobileNav');
    } else {
        mobileNav.classList.add('showMobileNav');
    }
})
