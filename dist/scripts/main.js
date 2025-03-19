var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AppState } from "./interfaces/product.js";
import { formValidation } from "./utils/contact.js";
import { changeColorHeader, closeMenu, closeOnOverlayClick, openMenu, setupDropdowns } from "./utils/menu.js";
import { newsletterValidation } from "./utils/newsletter.js";
import { fetchProducts, openSearch, renderProducts, setupCategoryFilters, setupSearch } from "./utils/product.js";
import { fetchServices, renderServices } from "./utils/services.js";
import { fetchTeam, renderTeam } from "./utils/team.js";
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        openMenu();
        closeMenu();
        closeOnOverlayClick();
        setupDropdowns();
        changeColorHeader();
        openSearch();
        initializeServices();
        initializeProducts();
        initializeTeam();
        formValidation();
        newsletterValidation();
    });
}
function initializeProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            AppState.allProducts = yield fetchProducts();
            renderProducts(AppState.allProducts);
            setupCategoryFilters();
            setupSearch();
        }
        catch (error) {
            console.error('Error loading products', error);
        }
    });
}
function initializeServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const services = yield fetchServices();
            renderServices(services);
        }
        catch (error) {
            console.error('Error loading services:', error);
        }
    });
}
function initializeTeam() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const team = yield fetchTeam();
            renderTeam(team);
        }
        catch (error) {
            console.error('Error loading team: ', error);
        }
    });
}
document.addEventListener('DOMContentLoaded', init);
