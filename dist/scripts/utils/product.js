var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AppState, shuffleArray } from "../interfaces/product.js";
export function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('./src/data/products.json');
        const data = yield response.json();
        let allProducts = data.products.map((p) => (Object.assign(Object.assign({}, p), { quantity: parseInt(p.quantity) })));
        AppState.originalProducts = allProducts;
        const itemsToShow = window.innerWidth < 901 ? 2 : 3;
        allProducts = shuffleArray(allProducts).slice(0, itemsToShow);
        AppState.allProducts = allProducts;
        return AppState.allProducts;
    });
}
export function renderProducts(products) {
    const grid = document.querySelector('.featured-products-grid');
    if (!grid)
        return;
    grid.innerHTML = products.map(product => `
        <div class="product" data-category=${product.category} data-id="${product.id}" data-stock="${product.quantity}">
                    <div class="image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="hover">
                        <div class="hover-content">
                            <div class="money-and-favorite">
                                <p class="money">
                                    ${product.price}
                                </p>
                                <div class="favorite">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 6.87497C9.375 1.03247 2.5 5.34372 2.5 11.4225C2.5 17.5 7.525 20.7387 11.2025 23.6387C12.5 24.6612 13.75 25.625 15 25.625" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                        <path opacity="0.5" d="M15 6.87497C20.625 1.03247 27.5 5.34372 27.5 11.4225C27.5 17.5012 22.475 20.74 18.7975 23.64C17.5 24.6612 16.25 25.625 15 25.625" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>                                    
                                </div>
                            </div>
                            <div class="content">
                                <h5 class="product-title">
                                    ${product.name}
                                </h5>
                                <p class="product-desc">
                                    ${product.desc}
                                </p>
                            </div>
                            <div class="cart">
                                <div class="count">
                                    <div class="plus">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.05734 3.88H9.83734V6.02H6.05734V9.78H3.91734V6.02H0.137344V3.88H3.91734V0.0799997H6.05734V3.88Z" fill="white"/>
                                        </svg>                                    
                                    </div>
                                    <div class="cart-count">0</div>
                                    <div class="minus">
                                        <svg width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.877344 2.86V0.419999H6.11734V2.86H0.877344Z" fill="white"/>
                                        </svg>                                    
                                    </div>
                                </div>
                                <a href="" class="btn-add-to-cart">
                                    Add to card
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        `).join('');
    setupProductInteractions();
}
export function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.btn-filter-products');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            AppState.currentFilter = button.getAttribute('data-filter') || 'Random';
            applyFilters();
        });
    });
}
export function setupSearch() {
    const searchInputs = document.querySelectorAll('.custom-search');
    searchInputs.forEach(input => {
        const searchInput = input;
        searchInput.addEventListener('input', () => {
            AppState.currentSearchTerm = searchInput.value.toLowerCase();
            applyFilters();
        });
    });
}
export function openSearch() {
    const searchContainer = document.querySelector('.search-container');
    const input = searchContainer.querySelector('.custom-search');
    if (!searchContainer || !input) {
        return;
    }
    searchContainer.addEventListener('click', () => {
        searchContainer.classList.add('active');
        input.focus();
    });
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });
}
export function getRandomProducts(products, count) {
    let candidates = products.filter(p => !AppState.previousRandomProducts.includes(p));
    if (candidates.length < count) {
        AppState.previousRandomProducts = [];
        candidates = products;
    }
    const shuffled = shuffleArray(candidates).slice(0, count);
    AppState.previousRandomProducts = shuffled;
    return shuffled;
}
function applyFilters() {
    let filtered = [...AppState.originalProducts];
    if (AppState.currentSearchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(AppState.currentSearchTerm) || p.desc.toLowerCase().includes(AppState.currentSearchTerm));
    }
    if (AppState.currentFilter === 'Random' || AppState.currentFilter === '') {
        filtered = getRandomProducts(filtered, 3);
        if (!AppState.currentSearchTerm) {
            filtered = getRandomProducts(filtered, window.innerWidth < 901 ? 2 : 3);
        }
    }
    else {
        const filterMap = {
            'Cat': 'cat',
            'Dogs': 'dog',
            'Birds': 'bird',
            'Fish': 'fish'
        };
        const category = filterMap[AppState.currentFilter] || AppState.currentFilter.toLowerCase();
        filtered = filtered.filter(p => p.category.toLowerCase() === category);
    }
    renderProducts(filtered);
}
function setupProductInteractions() {
    document.querySelectorAll('.product').forEach(productElement => {
        var _a;
        const plus = productElement.querySelector('.plus');
        const minus = productElement.querySelector('.minus');
        const addToCart = productElement.querySelector('.btn-add-to-cart');
        const quantityElement = productElement.querySelector('.cart-count');
        const stock = parseInt((_a = productElement.getAttribute('data-stock')) !== null && _a !== void 0 ? _a : '0');
        plus === null || plus === void 0 ? void 0 : plus.addEventListener('click', () => {
            const current = parseInt((quantityElement === null || quantityElement === void 0 ? void 0 : quantityElement.textContent) || '1');
            if (current < stock) {
                quantityElement.textContent = (current + 1).toString();
            }
        });
        minus === null || minus === void 0 ? void 0 : minus.addEventListener('click', () => {
            const current = parseInt((quantityElement === null || quantityElement === void 0 ? void 0 : quantityElement.textContent) || '1');
            if (current > 1) {
                quantityElement.textContent = (current - 1).toString();
            }
        });
        addToCart === null || addToCart === void 0 ? void 0 : addToCart.addEventListener('click', (e) => {
            e.preventDefault();
            const quantity = parseInt((quantityElement === null || quantityElement === void 0 ? void 0 : quantityElement.textContent) || '1');
            const productId = productElement.getAttribute('data-id');
            if (quantity > stock) {
                showMessage('error', 'Quantidade excede o estoque disponível');
                return;
            }
            AppState.cartItemsCount += quantity;
            updateCartCount();
            showMessage('success', 'Produto adicionado ao carrinho!');
        });
    });
}
function showMessage(type, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = AppState.cartItemsCount.toString();
    });
}
