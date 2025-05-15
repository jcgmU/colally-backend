# 🤝 Guía de Contribución – ColAlly Backend

Este documento define las **convenciones que seguimos** en este proyecto para asegurar consistencia y claridad en el flujo de desarrollo, tanto para el **frontend** como el **backend**.

---

## 🚀 Convención de Nombres de Branches

Usamos prefijos para indicar el tipo de trabajo que se realiza. El formato es:

```
<tipo>/<nombre-claro-en-kebab-case>
```

### 📚 Tipos válidos:

- `feature/` ➜ Nueva funcionalidad
- `bugfix/` ➜ Corrección de error
- `hotfix/` ➜ Arreglo urgente para producción
- `chore/` ➜ Mantenimiento o configuración

### ✅ Ejemplos:

- `feature/auth-jwt`
- `bugfix/login-error`
- `hotfix/docker-connection`
- `chore/update-eslint-config`

---

## 📝 Convención de Commits

Utilizamos el estándar **Conventional Commits**.  
Formato general:

```
<tipo>(<área>): <descripción corta>

<detalle opcional del cambio>

<footer opcional: referencias a issues o breaking changes>
```

### ✅ Tipos válidos:

- `feat`: nueva funcionalidad
- `fix`: corrección de bug
- `docs`: cambios en documentación
- `style`: formato (espacios, punto y coma, etc.)
- `refactor`: cambio de código sin cambio funcional
- `test`: añadir o ajustar tests
- `chore`: mantenimiento (builds, dependencias, etc.)

### ✅ Ejemplos:

```
feat(auth): implement login with JWT
fix(login): correct null email check
docs(readme): clarify setup instructions
style(tasks): remove unused CSS classes
refactor(api): move task service to use case layer
test(user): add unit test for email validator
chore(deps): update Prisma to v5.0.1
```

---

## ✅ Reglas para Pull Requests

- Siempre crea ramas desde `dev`, nunca desde `main`.
- Describe claramente **qué hace la PR y por qué**.
- Si resuelve un issue, añade al final:  
  `Closes #123`

---

Gracias por seguir estas convenciones 🙌  
Esto hace que el proyecto sea más fácil de mantener, entender y colaborar.
