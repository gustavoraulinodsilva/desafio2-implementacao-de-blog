export function openMenu() {
    const menuHamburger = document.querySelector('.ts-menu-hamburger');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.nav-overlay');
    menuHamburger.addEventListener('click', () => {
        nav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}
export function closeMenu() {
    const closeButton = document.querySelector('.ts-close-hamburger');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.nav-overlay');
    const dropdowns = document.querySelectorAll('.shop-dropdown, .services-dropdown');
    closeButton.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        dropdowns.forEach(dropdowns => {
            dropdowns.classList.remove('active');
        });
    });
}
export function closeOnOverlayClick() {
    const overlay = document.querySelector('.nav-overlay');
    const nav = document.querySelector('.nav');
    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}
export function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.shop-dropdown, .services-dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('p.header-link');
        const menu = dropdown.querySelector('ul');
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
        trigger === null || trigger === void 0 ? void 0 : trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
        });
        menu === null || menu === void 0 ? void 0 : menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}
export function changeColorHeader() {
    const header = document.querySelector('.header');
    if (!header) {
        return;
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add("active");
        }
        else {
            header.classList.remove("active");
        }
    });
}
