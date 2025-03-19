# Petshop - landingpage

Este projeto é uma aplicação web para um pet shop, desenvolvida com TypeScript, HTML e CSS. O objetivo é fornecer uma interface dinâmica para exibição de produtos, serviços e informações da equipe, utilizando dados estruturados em arquivos JSON e scripts organizados para facilitar a manutenção e escalabilidade do projeto.

## Funcionalidades

- **Exibição de produtos e serviços:** Utiliza arquivos JSON para armazenar informações de produtos e serviços.
- **Equipe:** Informações sobre a equipe do pet shop.
- **Interatividade:** Scripts TypeScript para controle de funcionalidades como menu, newsletter, contato e exibição dinâmica de conteúdo.
- **Layout Responsivo:** Estilização com CSS para uma melhor experiência do usuário.
- **Integração com ferramentas de build:** Utilização do TypeScript com configuração definida no `tsconfig.json`.

## Tecnologias Utilizadas no projeto

- HTML
- CSS
- TYPESCRIPT

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```petshop.zip
├── license                      # Arquivo de licença do projeto
└── petshop
    ├── node_modules             # Dependências instaladas via npm (não versionadas em repositórios públicos)
    ├── package-lock.json        # Gerenciador de versões das dependências
    ├── package.json             # Metadados do projeto e scripts de execução
    ├── index.html               # Página principal do projeto
    ├── tsconfig.json            # Configuração do compilador TypeScript
    └── src                      # Código-fonte da aplicação
        ├── css
        │   └── style.css        # Estilos CSS para a aplicação
        ├── data                 # Dados da aplicação em formato JSON
        │   ├── products.json    # Informações sobre produtos
        │   ├── services.json    # Informações sobre serviços
        │   └── team.json        # Informações sobre a equipe
        ├── images               # Arquivos de imagem utilizados na aplicação
        └── scripts              # Lógica da aplicação em TypeScript
            ├── interfaces     # Definição de interfaces para tipagem
            │   ├── product.ts
            │   ├── service.ts
            │   └── team.ts
            ├── main.ts        # Arquivo principal que inicia a aplicação
            └── utils          # Funções utilitárias para funcionalidades específicas
                ├── contact.ts
                ├── menu.ts
                ├── newsletter.ts
                ├── product.ts
                ├── services.ts
                └── team.ts
```

## Como Executar o Projeto

1. **Pré-requisitos:**
   - [Node.js](https://nodejs.org/) instalado.
   - [npm](https://www.npmjs.com/) (geralmente incluso com o Node.js).

2. **Instalação das dependências:**

   Navegue até a pasta `petshop` e execute:

   ```bash
   npm install

3. **Utilização do lite-server para rodar a aplicação**

    Estou usando o lite-server para rodar a aplicação em tempo real

    ```bash
    npm start