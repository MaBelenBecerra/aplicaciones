# APP-REST-SUSHI

**Proyecto:** Aplicación Web para el Restaurante "Qitchen"

Este repositorio contiene el desarrollo de una aplicación web tipo SPA (Single Page Application) para un restaurante de sushi.
El frontend está construido con **Vanilla JavaScript** y **Web Components**, mientras que el backend proporciona una API RESTful desarrollada con **Node.js**, **Express** y **Prisma ORM**, conectada a una base de datos **PostgreSQL** alojada en **Supabase**.

---

## Estructura del Proyecto

```
├── backend/
│   ├── commands/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── .env
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json

├── frontend/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── blocks/
│   ├── components/
│   ├── css/
│   ├── data/
│   ├── services/
│   ├── index.html
│   ├── router.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/

├── schema_design/
│   └── supabase-schema.png

├── .gitignore
├── .gitattributes
├── README.md
├── package-lock.json
```

---

## Base de Datos

Este proyecto utiliza **PostgreSQL** como base de datos, gestionado desde **Supabase** y sincronizado con **Prisma ORM**.

---

## Patrones de Diseño Utilizados

### Observer

Para reaccionar a cambios de estado como inicio de sesión o cambios en el carrito.

```js
// auth-service.js (Sujeto)
notificar() {
  this.observadores.forEach(obs => obs.update(this));
}

// site-header.js (Observador)
update(servicio) {
  if (servicio.estaLogueado()) this.render();
}
```

---

## Tecnologías Utilizadas

### Backend

* Node.js
* Express
* Supabase (PostgreSQL)
* Prisma ORM
* JWT
* Bcrypt.js

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript
* Web Components

### Herramientas

* Git
* npm

---

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone <https://github.com/MaBelenBecerra/aplicaciones.git>
cd PROYECT_RESTAURANTE
```

### 2. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la carpeta `/backend` con el siguiente contenido:

```env
DATABASE_URL="URL de la base de datos en Supabase"
JWT_SECRET="TuLlaveSecretaJWT"
```

### 4. Ejecutar el proyecto

**Terminal 1: Backend**

```bash
cd backend
npm run dev
```

**Terminal 2: Frontend**

```bash
cd frontend
npm run dev
```

