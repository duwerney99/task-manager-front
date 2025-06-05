# Guía de uso - Task Manager

Esta aplicación te permite:

- Crear tareas
- Editarlas y actualizarlas (actualiza el estado de la tarea)
- Eliminar tareas completadas
- Ver el listado general

## Cómo usar

1. Haz clic en el botón "+" para agregar una nueva tarea.
2. Para editar, haz clic en el ícono de lápiz.
3. Para eliminar, haz clic en el ícono de la papelera.

¡Es muy fácil!



## Descripción de la arquitectura

La solución está compuesta por dos repositorios:

### 1. Backend (Node.js + Express + Firebase)
- API RESTful desarrollada en Node.js con Express.
- Persistencia en Firebase Firestore.
- Arquitectura basada en **Clean Architecture**.
- Desplegado en **Google Cloud Run** como imagen Docker.
- Pruebas unitarias implementadas con Jest.

### 2. Frontend (React + MUI + Redux)
- Interfaz creada con React y Material UI.
- Manejo de estado con Redux Toolkit + Thunk.
- Arquitectura modular basada en `features/`, `pages/`, `components/`.
- Desplegado en **Vercel**.
- Consumo de API usando `axios`.
- Integración de Markdown (`usage.md`) para documentación visible desde la UI.


## ⚙️ Instrucciones para ejecución local

### Backend

1. Clonar el repositorio backend:

git clone https://github.com/duwerney99/task-manager-backend.git
cd task-manager-backend

Instalar dependencias:
    npm install

Ejecutar en desarrollo:
    npm run dev

Correr pruebas:
    npm test


2. Clonar el repositorio frontend:
git clone https://github.com/duwerney99/task-manager-frontend.git
cd task-manager-frontend

Crear archivo .env
    VITE_API_URL=https://task-manager-backend-74938929962.us-central1.run.app


Instalar dependencias:
    npm install


Ejecutar en desarrollo:
    npm run dev



## Despliegue
Backend desplegado en Google Cloud Run desde imagen Docker.

Frontend desplegado en Vercel conectado a GitHub.

Ambos proyectos están dockerizados.


## Decisiones técnicas clave
Arquitectura Clean para escalabilidad y mantenimiento en el backend.

Redux Toolkit para manejo eficiente del estado y lógica de negocio.

Axios + services como capa intermedia para solicitudes HTTP.

React Router v6 con layout base y rutas anidadas.

Vite en el frontend por su velocidad y compatibilidad moderna.

MUI para UI accesible, estética y rápida de construir.

Jest para pruebas unitarias del backend.

Toast y confirm dialogs personalizados con MUI para mejor UX.


## Metodología Scrum (cómo lo abordaría)
Product Backlog: Historias de usuario como:

"Como usuario quiero ver mis tareas"

"Como usuario quiero editar una tarea"

"Como usuario quiero eliminar una tarea con confirmación"

Sprint Planning:

Sprint 1: Backend básico (API CRUD)

Sprint 2: Frontend (UI + consumo API)

Sprint 3: Testing + documentación + mejoras UI

Daily Standups: Revisión diaria del avance (en equipo o individual).

Sprint Review: Demostración del CRUD completo y despliegue funcional.

Sprint Retrospective: Evaluación del proceso y propuestas de mejora.


## Contacto
Desarrollado por Duwerney Hernandez
GitHub