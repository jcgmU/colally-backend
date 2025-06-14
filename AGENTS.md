# AGENTS.md — ColAlly Backend

## 🎯 Propósito

Este repositorio contiene el backend del sistema ColAlly, una plataforma de gestión de equipos, tareas y métricas. Aquí se implementan los casos de uso, control de roles, autenticación, almacenamiento de datos relacionales y no relacionales, notificaciones en tiempo real y generación de reportes.

---

## 📐 Arquitectura

- **Clean Architecture + Hexagonal**
- Carpetas base: `src/domain`, `src/application`, `src/infrastructure`, `src/presentation`, `src/adapters`
- Separación clara entre lógica de negocio, orquestación y entrega
- Inyección de dependencias con `tsyringe` o similar
- Resolvers GraphQL solo deben delegar a casos de uso

---

## 🛠️ Stack tecnológico

- **Lenguaje:** TypeScript (strict)
- **API:** Apollo Server (GraphQL code-first)
- **Auth:** JWT + Better Auth (roles y permisos)
- **ORM SQL:** Prisma (PostgreSQL)
- **ODM NoSQL:** Mongoose (MongoDB)
- **Caché/RT:** Redis (caching y pub/sub), Socket.io
- **Testing:** Jest + Supertest
- **Tooling:** ESLint, Prettier, Husky, commitlint, GraphQL Code Generator
- **CI/CD:** GitHub Actions (`lint`, `typecheck`, `test`, `build`)

---

## ✅ Reglas obligatorias

- Código fuertemente tipado
- No se permite lógica de negocio en controladores ni resolvers
- Toda función nueva debe tener pruebas asociadas
- Usar `DataLoader` para resolver problemas N+1
- Paginación tipo cursor en resolvers con muchas entidades
- Toda funcionalidad crítica debe tener manejo de errores y logging

---

## 🧠 Instrucciones para Codex y agentes

1. Leer este archivo antes de cualquier modificación.
2. No generar código sin pruebas ni validaciones.
3. Dividir tareas complejas en submódulos y PRs separados.
4. Documentar los cambios que alteren flujos o contratos.
5. Cumplir con las reglas de `domain-driven design` al modelar entidades.

---

## 🔐 Seguridad

- Nunca exponer `.env`, claves, secretos o tokens.
- Validación con `class-validator`, `zod` u otro sistema de tipado estructural.
- Implementar Rate Limiting (`express-rate-limit`) y cabeceras seguras con `helmet.js`.

---

## 🚫 No permitido

- `any` en código productivo
- Lógica duplicada
- Uso de librerías obsoletas
- Resolver GraphQL como función anónima inline

---

## 📦 Directorio por dominio

- `projects/`: gestión de proyectos
- `tasks/`: creación, edición, validación y métricas
- `auth/`: registro, login, JWT, refresh
- `notifications/`: sistema de notificación vía socket o push
- `logs/`: historial de acciones MongoDB

---

## 📋 Entregables esperados por cada tarea

- Código funcional y tipado
- Pruebas unitarias y de integración
- Lint y tests pasados
- PR auto-contenido con mensaje estructurado
