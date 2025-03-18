import { AppState } from "./interfaces/product.js";
import { formValidation } from "./utils/contact.js";
import { closeMenu, closeOnOverlayClick, openMenu, setupDropdowns } from "./utils/menu.js";
import { fetchProducts, openSearch, renderProducts, setupCategoryFilters, setupSearch } from "./utils/product.js";
import { fetchServices, renderServices } from "./utils/services.js";
import { fetchTeam, renderTeam } from "./utils/team.js";

async function init() {
    openMenu();
    closeMenu();
    closeOnOverlayClick();
    setupDropdowns();
    openSearch();
    initializeServices();
    initializeProducts();
    initializeTeam();
    formValidation();
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

async function initializeTeam(){
    try{
        const team = await fetchTeam();
        renderTeam(team);
    } catch(error){
        console.error('Error loading team: ', error);
    }
}

document.addEventListener('DOMContentLoaded', init);