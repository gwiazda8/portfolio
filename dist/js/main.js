//UI selectors 
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');
const menuBranding = document.querySelector('.menu-branding')

menuBtn.addEventListener('click', toggleMenu);

editMode = false;

function toggleMenu() {
    if (!editMode) {
        menuBtn.classList.add('close')
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => {
            item.classList.add('show');
        });
        editMode = true;
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => {
            item.classList.remove('show');
        });
        editMode = false;
    }
}
