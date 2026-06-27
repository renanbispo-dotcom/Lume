# ☕ Lume - Café Experience

O **Lume** é um site moderno e responsivo para uma plataforma de pedidos de café. O projeto foca em uma estética minimalista, utilizando tons terrosos e tipografia limpa para uma experiência acolhedora e funcional.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** — interface em componentes reutilizáveis
- **React Router** — navegação entre páginas (SPA)
- **Vite** — bundler e servidor de desenvolvimento
- **CSS3** — estilos originais preservados (Flexbox, Grid, media queries)
- **Fontes** — Noto Sans Georgian, Georgia, Montserrat, Cormorant Garamond, DM Sans

---

## 📂 Estrutura do Projeto

```text
├── index.html              # Entrada Vite
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # Bootstrap React
    ├── App.jsx             # Rotas
    ├── assets/             # Imagens, ícones e fontes
    ├── components/         # Header, Footer, LogoIcon
    ├── pages/              # Páginas (Home, Cardápio, Login, etc.)
    ├── styles/             # Estilos globais da home
    └── utils/              # Máscaras de formulário
```

---

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 📄 Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial |
| `/cardapio` | Catálogo de cafés |
| `/cadastro` | Formulário de cadastro |
| `/login` | Autenticação |
| `/reserva` | Reserva de mesa |
| `/nossa-historia` | História da marca |
| `/contato` | Informações de contato |
