export var AppState;
(function (AppState) {
    AppState.originalProducts = [];
    AppState.allProducts = [];
    AppState.previousRandomProducts = [];
    AppState.currentFilter = 'Random';
    AppState.currentSearchTerm = '';
    AppState.cartItemsCount = 0;
})(AppState || (AppState = {}));
export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
