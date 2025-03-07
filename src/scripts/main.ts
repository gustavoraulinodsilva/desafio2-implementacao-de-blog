function init() {
    openMenu();
    closeMenu();
    closeOnOverlayClick();
}

function openMenu() {
    const menuHamburger = document.querySelector('.ts-menu-hamburger') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;
    const overlay = document.querySelector('.nav-overlay') as HTMLElement;

    menuHamburger.addEventListener('click', () => {
        nav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

function closeMenu() {
    const closeButton = document.querySelector('.ts-close-hamburger') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;
    const overlay = document.querySelector('.nav-overlay') as HTMLElement;

    closeButton.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

function closeOnOverlayClick() {
    const overlay = document.querySelector('.nav-overlay') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;

    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}


document.addEventListener('DOMContentLoaded', init);