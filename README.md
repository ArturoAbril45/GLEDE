# GLEDE - Gran Logia Equinoccial del Ecuador

Sitio web institucional de la R.L.S. Francisco Huerta Montalvo No. 69, Delegacion Regional Guayas y Santa Elena, perteneciente a la Gran Logia Equinoccial del Ecuador.

---

## Tecnologias

- React 18 + Vite
- Tailwind CSS v4
- React Router DOM v7
- Lucide React (iconos)
- Vercel (hosting)

---

## Estructura del proyecto

```
frontend/
├── public/
│   ├── folleto/          # Imagenes del Folleto GLEDE 2026 (image1.png ... image14.png)
│   ├── templo.jpg        # Foto hero pagina inicio
│   ├── logia-fhm.jpg     # Foto de la logia FHM
│   ├── consagracion-giovanni.jpg
│   └── sello-glede.png   # Sello institucional
│
├── src/
│   ├── App.jsx           # Rutas principales
│   ├── index.css         # Estilos globales y clases utilitarias
│   │
│   ├── components/
│   │   ├── Navbar.jsx        # Navegacion superior con cambio de idioma
│   │   ├── Footer.jsx        # Pie de pagina
│   │   ├── Reveal.jsx        # Animacion de entrada al hacer scroll
│   │   ├── MasonicIcons.jsx  # Iconos masonicos via Lucide React
│   │   ├── PageLoader.jsx    # Pantalla de carga
│   │   ├── ScrollToTop.jsx   # Vuelve al inicio en cambio de ruta
│   │   └── Select.jsx        # Selector personalizado
│   │
│   ├── context/
│   │   └── LanguageContext.jsx  # Contexto de idioma (ES/EN)
│   │
│   ├── data/
│   │   ├── translations.js  # Todos los textos en ES e EN
│   │   └── ecuador.js       # Datos geograficos Ecuador
│   │
│   ├── hooks/
│   │   └── useInView.js     # Hook para detectar visibilidad en viewport
│   │
│   └── pages/
│       ├── Inicio.jsx          # Pagina principal
│       ├── Masoneria.jsx       # Que es la Masoneria
│       ├── Historia.jsx        # Historia de la GLEDE
│       ├── HistoriaGlobal.jsx  # Historia mundial de la Masoneria
│       ├── FranciscoHuerta.jsx # R.L.S. Francisco Huerta Montalvo No. 69
│       ├── Identidad.jsx       # Mision, Vision, Valores
│       ├── Crecimiento.jsx     # Crecimiento institucional
│       ├── Ingreso.jsx         # Formulario de contacto / ingreso
│       ├── Revista.jsx         # Revista masonica
│       └── admin/
│           ├── Login.jsx       # Login panel administrativo
│           └── Dashboard.jsx   # Panel de administracion
```

---

## Instalacion y desarrollo local

Requisitos: Node.js 18 o superior.

```bash
# Clonar el repositorio
git clone https://github.com/ArturoAbril45/GLEDE.git
cd GLEDE/frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estara disponible en `http://localhost:5173`.

---

## Construccion para produccion

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos estaticos listos para subir a cualquier servidor.

---

## Despliegue en servidor web (Apache / Nginx)

### Con Apache

1. Construir el proyecto con `npm run build`.
2. Copiar el contenido de `dist/` al directorio raiz del servidor (ejemplo: `/var/www/html/`).
3. Crear un archivo `.htaccess` en la raiz con el siguiente contenido para que el enrutamiento de React funcione:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### Con Nginx

Configuracion de bloque de servidor:

```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Con Vercel (hosting actual)

El proyecto esta desplegado en Vercel. Para redesplegar:

```bash
npm install -g vercel
vercel --prod --yes
```

Vercel detecta automaticamente que es un proyecto Vite y configura el build.

---

## Idiomas

El sitio soporta espanol e ingles. Los textos se gestionan en `src/data/translations.js`. Cada clave existe en los bloques `es` y `en`.

Para agregar o modificar un texto:

```js
// src/data/translations.js
es: {
  'inicio.titulo1': 'Gran Logia Equinoccial',
  // ...
},
en: {
  'inicio.titulo1': 'Grand Equinoctial Lodge',
  // ...
}
```

---

## Imagenes del folleto

Las imagenes extraidas del Folleto GLEDE Presentacion 2026 estan en `public/folleto/` y se referencian como `/folleto/imageN.png` desde cualquier componente.

---

## Licencia

Uso interno institucional. Todos los derechos reservados - Gran Logia Equinoccial del Ecuador.
