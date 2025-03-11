export interface Product {
    id: number;
    name: string;
    category: string;
    desc: string;
    price: string;
    quantity: number;
    image: string;
}

export namespace AppState{
    export let allProducts: Product[] = [];
    export let currentFilter = 'Random';
    export let currentSearchTerm = '';
    export let cartItemsCount = 0;
}