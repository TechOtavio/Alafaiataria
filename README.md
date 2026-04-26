# 🧵 Alfaiataria Bespoke — Luxo Sob Medida

![Preview do Projeto](https://site-alafaiataria01.vercel.app/og-image.png)

Este é o repositório oficial do site institucional da **Alfaiataria Bespoke**, uma landing page premium desenvolvida para oferecer uma experiência digital à altura da alta costura. O projeto foca em **exclusividade, performance extrema e conversão**.

---

## 🚀 Tecnologias de Ponta

| Tecnologia | Versão | Propósito |
| :--- | :--- | :--- |
| **React 19** | 19.x | Interface declarativa e ultra-veloz. |
| **Vite 8** | 8.x | Build engine com **Rolldown** para performance de carregamento. |
| **CSS Modular** | — | Estilização isolada, evitando vazamento de estilos e conflitos. |
| **Lucide Icons** | 1.x | Ícones minimalistas e leves. |
| **Formspree** | — | Integração de formulários inteligente e segura. |

---

## 📂 Organização do Ateliê (Estrutura)

```text
SiteAfaiataria/
├── public/                 # Assets estáticos (Imagens, Logo, Metadados)
├── src/
│   ├── components/         # Elementos globais (Navbar, Cursor, Footer, WhatsApp)
│   ├── sections/           # Seções lógicas da Landing Page (Hero, Sobre, FAQ, etc.)
│   ├── App.jsx             # Orquestrador principal e observador de animações
│   └── index.css           # Design System (Variáveis de cor, fontes, espaçamentos)
├── index.html              # Porta de entrada com SEO e Metadados Avançados
└── vite.config.js          # Configuração de Build e Otimização
```

---

## 🛠️ Como Iniciar a Produção

### 1. Clonar e Instalar
```bash
npm install
```

### 2. Desenvolvimento
```bash
npm run dev
```

### 3. Build para Deploy
```bash
npm run build
```

## 💎 Diferenciais Técnicos

- **Performance LCP:** Imagem da Hero pré-carregada via `link rel="preload"`.
- **Zero CLS:** Dimensões fixas e `aspect-ratio` em todas as imagens para evitar saltos de layout.
- **Acessibilidade:** Semântica HTML5 completa e atributos ARIA em componentes interativos.
- **UX Premium:** Cursor customizado com inércia real (lag) e animações de scroll sincronizadas.

---

## 📄 Licença

Este software é um ativo proprietário da **Alfaiataria Bespoke**. Todos os direitos reservados.

---
*Desenvolvido com precisão e elegância por Antigravity AI.*
