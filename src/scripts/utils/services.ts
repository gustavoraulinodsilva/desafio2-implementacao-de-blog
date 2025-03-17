import { Service } from "../interfaces/service.js";

export async function fetchServices(): Promise<Service[]>{
    const response = await fetch('./src/data/services.json');
    const data = await response.json();
    return data.services;
}

export function renderServices(services: Service[]){
    const grid = document.querySelector('.services-grid');
    if(!grid){
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