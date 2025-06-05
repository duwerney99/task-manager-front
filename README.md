## Task Manager - Frontend (React + MUI)


Este proyecto es la interfaz web del sistema de gestión de tareas Task Manager. Permite al usuario realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre tareas, conectándose a una API RESTful desplegada en Google Cloud Run.


## URL DESPLEGADA EN VERCEL
https://task-manager-front-henna.vercel.app/tasks


## Tecnologías y herramientas utilizadas
React con Vite

MUI (Material UI) como librería de componentes

Redux Toolkit + Redux Thunk para manejo del estado global y lógica asincrónica

React Hook Form para validación de formularios

React Router para el enrutamiento

Vercel para despliegue


## Estructura del proyecto

src/
├── api/                # Llamadas HTTP al backend
├── components/         # Componentes reutilizable (BackButton, ConfirmDialog, etc.)
├── features/           # Lógica de negocio (Redux slices + thunks)
│   └── tasks/          # Lógica de tareas
├── pages/              # Vistas principales (TaskList, TaskCreate, TaskEdit, Home)
├── routes/             # Configuración de rutas
├── store/              # Configuración global de Redux
└── main.jsx            # Punto de entrada



## Funcionalidades
Ver listado de tareas

Crear nueva tarea

Editar tarea existente

Eliminar tarea con confirmación

Navegación intuitiva entre pantallas

Feedback visual con MUI Snackbar (toast)


## Despliegue
Backend (Cloud Run):
La API está desplegada en GCP y es consumida desde el frontend mediante:

.env:
    VITE_API_URL=https://task-manager-backend-74938929962.us-central1.run.app


Frontend (Vercel):
Este frontend está desplegado en Vercel automáticamente desde GitHub.


## Docker
Puedes correr el frontend localmente con Docker:

docker build -t task-manager-frontend .

docker run -d -p 80:80 task-manager-frontend


## Instalación local

git clone https://github.com/duwerney99/task-manager-front.git
cd task-manager-frontend
npm install
npm run dev



## Próximas mejoras
Autenticación de usuarios

Paginación y filtrado de tareas

Tests de componentes con React Testing Library

Manejo de errores más robusto


## Tiempo estimado invertido: 
Aproximadamente 30 a 35 horas distribuidas entre diseño, desarrollo y despliegue completo del backend y frontend.
Durante este proceso se aplicaron buenas prácticas de arquitectura (Clean Architecture, SOLID), pruebas unitarias, manejo de estado global, validaciones robustas y despliegue real en producción con Google Cloud Run (backend) y Vercel (frontend), incluyendo Dockerización y gestión de variables de entorno.