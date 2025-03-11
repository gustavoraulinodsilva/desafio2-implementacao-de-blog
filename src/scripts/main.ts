import { AppState } from "./interfaces/product.js";
import { closeMenu, closeOnOverlayClick, openMenu, setupDropdowns } from "./utils/menu.js";
import { fetchProducts, renderProducts, setupCategoryFilters, setupSearch } from "./utils/product.js";

async function init() {
    openMenu();
    closeMenu();
    closeOnOverlayClick();
    setupDropdowns();

    try{
        AppState.allProducts = await fetchProducts();
        renderProducts(AppState.allProducts);
        setupCategoryFilters();
        setupSearch();
    }catch(error){
        console.error('Error loading products', error);
    }
}

document.addEventListener('DOMContentLoaded', init);