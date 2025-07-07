# Node Backend Server

Este es un servidor backend construido con Node.js y Express. Incluye configuración para entorno de desarrollo con `nodemon`, y soporte para variables de entorno, CORS, y Firebase.

## Características

- Servidor HTTP con [Express](https://expressjs.com/)
- Recarga automática en desarrollo con [Nodemon](https://nodemon.io/)
- Soporte para variables de entorno con [dotenv](https://github.com/motdotla/dotenv)
- Permite peticiones CORS con [cors](https://github.com/expressjs/cors)
- Integración con [Firebase](https://firebase.google.com/)

## Instalación

Cloná el repositorio y luego ejecutá:

```bash
npm install
```

## Uso

### Modo desarrollo

```bash
npm start
```

Esto iniciará el servidor con nodemon para recarga automática.

### Variables de entorno

Creá un archivo .env en la raíz del proyecto para configurar tus variables de entorno, por ejemplo:

```env
API_KEY= #tus credenciales de firestore
AUTH_DOMAIN= #tus credenciales de firestore
PROJECT_ID= #tus credenciales de firestore
STORAGE_BUCKET= #tus credenciales de firestore
MESSAGING_SENDER_ID= #tus credenciales de firestore
APP_ID= #tus credenciales de firestore
MEASUREMENT_ID= #tus credenciales de firestore
```

## Estructura basica

```bash
project-root/
├── index.js
├── package.json
├── .env
└── ...
```
