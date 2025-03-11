export function openMenu() {
    const menuHamburger = document.querySelector('.ts-menu-hamburger') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;
    const overlay = document.querySelector('.nav-overlay') as HTMLElement;

    menuHamburger.addEventListener('click', () => {
        nav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

export function closeMenu() {
    const closeButton = document.querySelector('.ts-close-hamburger') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;
    const overlay = document.querySelector('.nav-overlay') as HTMLElement;
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
    const overlay = document.querySelector('.nav-overlay') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;

    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

export function setupDropdowns(){
    const dropdowns = document.querySelectorAll('.shop-dropdown, .services-dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('p.header-link');
        const menu = dropdown.querySelector('ul');

        document.addEventListener('click', (e) => {
            if(!dropdown.contains(e.target as Node)){
                dropdown.classList.remove('active');
            }
        });

        trigger?.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');

            dropdowns.forEach(other => {
                if(other !== dropdown){
                    other.classList.remove('active');
                }
            });
        });

        menu?.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}