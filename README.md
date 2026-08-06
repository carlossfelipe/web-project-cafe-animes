# ☕ CafeAnime — Plataforma Web de Catálogo de Mídia

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

O **CafeAnime** é um projeto acadêmico de desenvolvimento web Front-End que simula a interface e a experiência do usuário de uma plataforma de streaming e catálogo de animes.

---

## 📌 Sobre o Projeto

A proposta do projeto é entregar uma interface moderna, intuitiva e responsiva inspirada em plataformas de consumo de mídia. 

> ⚠️ **Nota de Transparência:** Devido a restrições legais e de direitos autorais, a plataforma **não realiza transmissão ou distribuição de vídeos/episódios**. O sistema atua exclusivamente como um **catálogo informativo**, consumindo e exibindo dados em tempo real sobre os animes.

---

## 🚀 Funcionalidades

- **Apresentação Institucional:** Página inicial com proposta visual do serviço.
- **Catálogo de Animes:** Listagem completa de conteúdos disponíveis na API.
- **Detalhamento Dinâmico:** Exibição de informações detalhadas (sinopse, avaliação, episódios, gênero) via rota dinâmica por ID.
- **Interface de Autenticação:** Interfaces visuais de login e cadastro (simulação de fluxo de UI).
- **Design Responsivo:** Adaptado para navegação em dispositivos móveis e desktops.

---

## 🗺️ Mapeamento de Rotas

O projeto utiliza o sistema de roteamento do **Next.js**:

| Rota | Descrição |
| :--- | :--- |
| `/` | Página principal de apresentação do serviço |
| `/cartaz` | Catálogo geral de animes |
| `/cartaz/[id]` | Rota dinâmica com informações detalhadas do anime selecionado |
| `/login` | Interface visual para login de usuário *(Mock UI)* |
| `/cadastro` | Interface visual para criação de conta *(Mock UI)* |

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** — Framework React para renderização e roteamento.
- **[React](https://reactjs.org/)** — Biblioteca para construção das interfaces baseadas em componentes.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework CSS utilitário para estilização e responsividade.
- **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** — Lógica de aplicação e manipulação de dados.
- **[Jikan API](https://jikan.moe/)** — API REST pública e não oficial do MyAnimeList para fornecimento dos dados.

---

## 💡 Informações de Desenvolvimento (Front-End Only)

Por se tratar de uma aplicação estritamente Front-End desenvolvida para fins acadêmicos:
- As páginas de `/login` e `/cadastro` cumprem papel estético e de validação de interface; **não há persistência de dados ou integração com banco de dados/Back-End no momento**.

---

## 🔧 Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/carlossfelipe/web-project-cafe-animes.git](https://github.com/carlossfelipe/web-project-cafe-animes.git)
