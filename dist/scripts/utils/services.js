var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('./src/data/services.json');
        const data = yield response.json();
        return data.services;
    });
}
export function renderServices(services) {
    const grid = document.querySelector('.services-grid');
    if (!grid) {
        return;
    }
    grid.innerHTML = services.map(service => `
        <div class="service-item">
            <div class="image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <h3 class="name-front">${service.title}</h3>
            <div class="card-back">
                <div class="card-back-content">
                    <h3 class="name">
                        ${service.title}
                    </h3>
                    <p class="excerpt">
                        ${service.description}
                    </p>
                    <a href="" class="btn-learn-more">
                        ${service.btnlabel}
                    </a>
                </div>
            </div>
        </div>
        `).join('');
}
