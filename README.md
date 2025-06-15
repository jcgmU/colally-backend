# ColAlly – Backend (API & Services)
[![CI](https://github.com/jcgmU/colally-backend/actions/workflows/ci.yml/badge.svg)](https://github.com/jcgmU/colally-backend/actions/workflows/ci.yml)

Este repositorio contiene el **servidor backend** de ColAlly. Implementa la API GraphQL, autenticación, lógica de negocio y servicios en tiempo real.

## 🛠️ Tecnologías principales

- **TypeScript** + **Node.js**
- **Express.js** + **Apollo Server** (GraphQL)
- **Prisma** (PostgreSQL/MySQL)
- **Mongoose** (MongoDB)
- **Redis** (Cache)
- **Socket.io** (WebSockets)
- **Jest / Supertest** (Testing)
- **Docker Compose** (entorno local)

## 📦 Instalación local rápida

```bash
git clone https://github.com/jcgmU/colally-backend.git
cd colally-backend
npm install
docker compose up -d   # levanta Postgres, Mongo, Redis, MailHog
npm run dev
```

La API GraphQL estará disponible en `http://localhost:4000/graphql`.

## 🧪 Scripts importantes

| Script               | Descripción                           |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Arranca servidor con hot‑reload       |
| `npm run test`       | Ejecuta pruebas unitarias/integración |
| `npm run lint`       | ESLint + Prettier                     |
| `npm run typecheck`  | Verifica tipos sin emitir código      |
| `npm run build`      | Compila el proyecto                   |
| `npm run prisma:mig` | Ejecuta migraciones de Prisma         |

## 🔑 Convención de commits (Conventional Commits)

```
<type>(<scope>): <short summary>
```

- **feat**: nueva funcionalidad
- **fix**: corrección de bug
- **docs**, **style**, **refactor**, **test**, **chore**

## 📝 Branch naming

- `feature/<nombre>` – nuevas features
- `bugfix/<nombre>` – fixes
- `hotfix/<nombre>` – fix urgente
- `chore/<nombre>` – mantenimiento

---

## Contacto

📧 jcgm1047@gmail.com  
👨🏻‍💻 Juan Camilo Garcia Martin  
🚀 Desarrollado con ❤️ usando **Node.js, GraphQL y Socket.io**
