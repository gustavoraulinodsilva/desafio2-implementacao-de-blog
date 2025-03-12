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
    export let previousRandomProducts: Product[] = [];
    export let currentFilter = 'Random';
    export let currentSearchTerm = '';
    export let cartItemsCount = 0;
}

export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}