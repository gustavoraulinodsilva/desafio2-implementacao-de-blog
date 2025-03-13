import { AppState } from "./interfaces/product.js";
import { closeMenu, closeOnOverlayClick, openMenu, setupDropdowns } from "./utils/menu.js";
import { fetchProducts, openSearch, renderProducts, setupCategoryFilters, setupSearch } from "./utils/product.js";
import { fetchServices, renderServices } from "./utils/services.js";

async function init() {
    openMenu();
    closeMenu();
    closeOnOverlayClick();
    setupDropdowns();
    openSearch();
    initializeServices();
    initializeProducts();
}

async function initializeProducts() {
    try{
        AppState.allProducts = await fetchProducts();
        renderProducts(AppState.allProducts);
        setupCategoryFilters();
        setupSearch();
    }catch(error){
        console.error('Error loading products', error);
    }
}

async function initializeServices() {
    try {
        const services = await fetchServices();
        renderServices(services);
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

document.addEventListener('DOMContentLoaded', init);