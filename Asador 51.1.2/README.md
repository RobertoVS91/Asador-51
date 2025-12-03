# 🍖 Asador 51 - Sitio Web Oficial

![Version](https://img.shields.io/badge/version-2.0-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)
![License](https://img.shields.io/badge/license-MIT-green)

> Sitio web moderno y responsive para Asador 51 - Cocina a las brasas

---

## 📖 Tabla de Contenidos

- [Características](#-características)
- [Requisitos](#-requisitos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Personalización](#-personalización)
- [Despliegue](#-despliegue)
- [Estructura](#-estructura-del-proyecto)
- [Problemas Comunes](#-problemas-comunes)
- [Mantenimiento](#-mantenimiento)
- [Licencia](#-licencia)

---

## ✨ Características

### 🎨 Diseño y UX
- ✅ **Diseño completamente responsive** (Desktop, Tablet, Mobile)
- ✅ **Barra flotante de redes sociales** (Facebook, Instagram, WhatsApp, TikTok)
- ✅ **Navegación activa inteligente** (resalta sección actual)
- ✅ **Animaciones suaves y modernas**
- ✅ **Hero section con parallax effect**
- ✅ **Carrusel de promociones optimizado**

### 📱 Funcionalidades
- ✅ **Menú interactivo** con vista previa de platillos
- ✅ **Sección Bar** con precios de botella y copa
- ✅ **Carrusel con soporte para imágenes y videos**
- ✅ **Integración con WhatsApp** para reservas
- ✅ **Mapa de Google Maps integrado**
- ✅ **Scroll suave entre secciones**

### ⚡ Rendimiento
- ✅ **Lazy loading de imágenes**
- ✅ **Optimización de animaciones** (GPU-accelerated)
- ✅ **Código minificado** (opcional)
- ✅ **Caché de recursos**
- ✅ **Carga rápida** (< 3 segundos)

### 🔍 SEO y Accesibilidad
- ✅ **Meta tags optimizados** (Open Graph, Twitter Cards)
- ✅ **HTML semántico**
- ✅ **Alt text en imágenes**
- ✅ **Contraste de colores WCAG 2.1**
- ✅ **Navegación por teclado**

---

## 📋 Requisitos

### Requisitos Mínimos
- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Servidor web (Apache, Nginx, o servidor estático)
- Conexión a internet (para CDN de Bootstrap)

### Requisitos Opcionales
- Editor de código (VS Code, Sublime Text, etc.)
- Node.js (para minificación y optimización)
- Cliente FTP/SFTP para despliegue

---

## 🚀 Instalación

### Opción 1: Uso Directo (Sin instalación)

El sitio es completamente estático y puede abrirse directamente:

```bash
# Simplemente abre index.html en tu navegador
open index.html
# o en Windows
start index.html
# o en Linux
xdg-open index.html
```

### Opción 2: Servidor Local

#### Con Python (recomendado para testing):

```bash
# Python 3
cd /ruta/al/proyecto
python3 -m http.server 8000

# Luego abre http://localhost:8000 en tu navegador
```

#### Con Node.js:

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar servidor
cd /ruta/al/proyecto
http-server -p 8000

# Abrir http://localhost:8000
```

#### Con PHP:

```bash
cd /ruta/al/proyecto
php -S localhost:8000

# Abrir http://localhost:8000
```

---

## 💻 Uso

### Navegación del Sitio

El sitio incluye las siguientes secciones principales:

1. **Inicio** (`#inicio`) - Hero section con imagen de fondo
2. **Quienes Somos** (`#quienes-somos`) - Historia y valores
3. **Menú** (`#menu-seccion`) - Carta de alimentos
4. **Bar** (`#bar-seccion`) - Carta de bebidas
5. **Promociones** (`#promociones`) - Ofertas especiales
6. **Ubicación** (`#ubicacion`) - Mapa y datos de contacto

### Características Interactivas

#### Menú Interactivo
1. Haz clic en cualquier pestaña (Entradas, Cortes, etc.)
2. Haz clic en un platillo para ver su imagen y descripción
3. Los precios se muestran claramente

#### Carrusel de Promociones
- **Navegación:** Usa las flechas o los indicadores inferiores
- **Autoplay:** Se reproduce automáticamente cada 5 segundos
- **Pausa:** Hover sobre el carrusel para pausar
- **Videos:** Click en el video para reproducir/pausar

#### Redes Sociales
- **Barra lateral:** Siempre visible (derecha en desktop, abajo en mobile)
- **Click:** Abre la red social en nueva pestaña

---

## 🎨 Personalización

### Colores de Marca

Edita las variables CSS en `css/style.css`:

```css
:root {
  --brand-primary: #e66c2c;    /* Color principal (naranja) */
  --brand-secondary: #f1a661;   /* Color secundario */
  --brand-accent: #d05f26;      /* Color de acento */
}
```

### Logo y Favicon

Reemplaza los archivos en la carpeta `img/`:
```
img/asador-51-squarelogo-1670313135043.webp
```

### Imágenes

Coloca tus imágenes en:
- `img/` - Imágenes generales
- `img/entradas/` - Fotos de entradas
- `img/bar/` - Fotos de bebidas
- `videos/` - Videos promocionales

### Contenido de Texto

Edita directamente en `index.html`:

**Ejemplo - Cambiar título del hero:**
```html
<h1 class="display-4 fw-bold mb-3 hero-title animate-fade-in">
  Tu Nuevo Título Aquí
</h1>
```

**Ejemplo - Cambiar número de WhatsApp:**
```html
<!-- Busca y reemplaza: 525586974536 -->
<a href="https://wa.me/TU_NUMERO?text=Hola">
```

### Menú y Platillos

Edita los items del menú en `index.html`:

```html
<div class="menu-item">
  <div class="d-flex justify-content-between align-items-start menu-platillo-selectable" 
       data-img="ruta/imagen.jpg" 
       data-title="Nombre del Platillo" 
       data-desc="Descripción del platillo" 
       data-price="$250">
    <div>
      <h6 class="mb-1">Nombre del Platillo</h6>
      <small class="text-muted">Descripción breve</small>
    </div>
    <span class="menu-price">$250</span>
  </div>
</div>
```

### Enlaces de Redes Sociales

Edita en `index.html`:

```html
<div class="social-sidebar">
  <a href="https://www.facebook.com/TU_PAGINA" target="_blank" class="social-icon facebook">
    <i class="bi bi-facebook"></i>
  </a>
  <a href="https://www.instagram.com/TU_USUARIO" target="_blank" class="social-icon instagram">
    <i class="bi bi-instagram"></i>
  </a>
  <a href="https://wa.me/TU_NUMERO" target="_blank" class="social-icon whatsapp">
    <i class="bi bi-whatsapp"></i>
  </a>
  <a href="https://www.tiktok.com/@TU_USUARIO" target="_blank" class="social-icon tiktok">
    <i class="bi bi-tiktok"></i>
  </a>
</div>
```

### Google Maps

Reemplaza el iframe en la sección de ubicación:

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu dirección
3. Click en "Compartir" → "Insertar un mapa"
4. Copia el código iframe
5. Reemplaza en `index.html`

---

## 🌐 Despliegue

### Opción 1: GitHub Pages (Gratis)

```bash
# 1. Crea un repositorio en GitHub
# 2. Sube los archivos
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/asador51.git
git push -u origin main

# 3. Ve a Settings → Pages
# 4. Selecciona branch "main" y carpeta "root"
# 5. Tu sitio estará en: https://tu-usuario.github.io/asador51
```

### Opción 2: Netlify (Gratis)

```bash
# 1. Instala Netlify CLI
npm install -g netlify-cli

# 2. Despliega
cd /ruta/al/proyecto
netlify deploy --prod

# Sigue las instrucciones en pantalla
```

### Opción 3: Vercel (Gratis)

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Despliega
cd /ruta/al/proyecto
vercel --prod
```

### Opción 4: Hosting Tradicional (cPanel, FTP)

1. **Comprime el proyecto:**
   ```bash
   zip -r asador51.zip .
   ```

2. **Sube via FTP/SFTP:**
   - Host: tu-dominio.com
   - Usuario: tu-usuario
   - Contraseña: tu-contraseña
   - Puerto: 21 (FTP) o 22 (SFTP)

3. **Descomprime en el servidor:**
   ```bash
   unzip asador51.zip
   ```

4. **Configura permisos:**
   ```bash
   chmod -R 755 /ruta/al/proyecto
   ```

### Configuración de Dominio Personalizado

**Archivo `.htaccess` (Apache):**
```apache
# Redirección HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compresión GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Caché
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 📁 Estructura del Proyecto

```
asador51_mejorado/
│
├── index.html                      # Página principal (HTML)
│
├── css/
│   └── style.css                   # Estilos personalizados
│
├── js/
│   └── script.js                   # JavaScript personalizado
│
├── img/                            # Imágenes
│   ├── Banner 2x1 Aperol spritz.jpg
│   ├── Banner 2x1 Aperol spritz2.jpg
│   ├── promo_lunes_hamburguesa.jpg
│   ├── promo_lunes_hamburguesa2.jpg
│   ├── asador-51-squarelogo-1670313135043.webp
│   ├── entradas/                   # Imágenes de entradas
│   │   ├── orden de papas.jpeg
│   │   └── orden de ensalada.jpeg
│   └── bar/                        # Imágenes de bebidas
│       ├── maestro-dobel-diamante.jpg
│       ├── jack-daniels-7.jpg
│       └── ...
│
├── videos/
│   └── promocional-asador51.mp4    # Video promocional
│
├── CAMBIOS_Y_MEJORAS.md            # Documentación de cambios
├── README.md                       # Este archivo
│
└── [OPCIONAL]
    ├── .htaccess                   # Configuración Apache
    ├── robots.txt                  # SEO
    └── sitemap.xml                 # Mapa del sitio
```

---

## ❓ Problemas Comunes

### 1. El carrusel no se ve en móviles

**Solución:** Verifica que estés usando la versión mejorada del CSS. El archivo debe tener:
```css
@media (max-width: 768px) {
  .promo-carousel .carousel-item {
    height: 450px; /* NO 100px */
  }
}
```

### 2. Las imágenes no cargan

**Problema:** Rutas incorrectas  
**Solución:** Verifica las rutas relativas:
```html
<!-- Correcto -->
<img src="img/foto.jpg" alt="Descripción">

<!-- Incorrecto -->
<img src="/img/foto.jpg" alt="Descripción">
```

### 3. Videos no se reproducen

**Problema:** Formato no soportado o autoplay bloqueado  
**Solución:** 
- Usa formato MP4 (H.264)
- Agrega atributo `muted` para autoplay
```html
<video muted playsinline preload="metadata">
  <source src="videos/video.mp4" type="video/mp4">
</video>
```

### 4. Menú no funciona en móvil

**Problema:** JavaScript no cargado  
**Solución:** Verifica la consola del navegador (F12) y asegúrate de que Bootstrap esté cargando:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/script.js"></script>
```

### 5. Redes sociales no abren

**Problema:** Enlaces incorrectos  
**Solución:** Verifica el formato:
```html
<!-- WhatsApp -->
<a href="https://wa.me/525512345678">

<!-- Facebook -->
<a href="https://www.facebook.com/TuPagina">

<!-- Instagram -->
<a href="https://www.instagram.com/TuUsuario">
```

---

## 🔧 Mantenimiento

### Actualización de Contenido

#### Agregar Nueva Promoción al Carrusel:

```html
<div class="carousel-item">
  <img src="img/nueva-promo.jpg" alt="Nueva Promoción">
  <div class="carousel-caption d-none d-md-block">
    <h5>Título de la Promoción</h5>
    <p>Descripción de la promoción</p>
  </div>
</div>
```

No olvides actualizar los indicadores:
```html
<button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="5"></button>
```

#### Agregar Nuevo Platillo al Menú:

1. Localiza la sección correspondiente (Entradas, Cortes, etc.)
2. Copia un item existente
3. Modifica los datos:

```html
<div class="menu-item">
  <div class="d-flex justify-content-between align-items-start menu-platillo-selectable" 
       data-img="img/nuevo-platillo.jpg" 
       data-title="Nuevo Platillo" 
       data-desc="Descripción del nuevo platillo" 
       data-price="$300">
    <div>
      <h6 class="mb-1">Nuevo Platillo</h6>
      <small class="text-muted">Descripción breve del platillo</small>
    </div>
    <span class="menu-price">$300</span>
  </div>
</div>
```

### Optimización de Imágenes

Antes de subir imágenes:

```bash
# Instalar ImageMagick
# macOS:
brew install imagemagick

# Ubuntu/Debian:
sudo apt-get install imagemagick

# Optimizar imagen
convert original.jpg -quality 85 -resize 1920x1080\> optimizada.jpg

# Convertir a WebP (mejor compresión)
cwebp -q 85 original.jpg -o optimizada.webp
```

### Backup Regular

Crea copias de seguridad periódicas:

```bash
# Script de backup simple
#!/bin/bash
fecha=$(date +%Y%m%d)
zip -r backup-asador51-$fecha.zip /ruta/al/proyecto
```

---

## 📊 Monitoreo y Analytics

### Google Analytics

Agrega antes del cierre de `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

---

## 🛡️ Seguridad

### Headers de Seguridad (`.htaccess`)

```apache
# Prevenir XSS
Header set X-XSS-Protection "1; mode=block"

# Prevenir Clickjacking
Header always set X-Frame-Options "SAMEORIGIN"

# Content Type Sniffing
Header set X-Content-Type-Options "nosniff"

# HTTPS Strict Transport Security
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

---

## 📞 Soporte

### Recursos

- **Documentación de Bootstrap:** https://getbootstrap.com/docs/5.3/
- **Bootstrap Icons:** https://icons.getbootstrap.com/
- **MDN Web Docs:** https://developer.mozilla.org/
- **Can I Use:** https://caniuse.com/

### Reportar Problemas

Si encuentras un bug o tienes una sugerencia:

1. Revisa la sección de [Problemas Comunes](#-problemas-comunes)
2. Busca en la documentación
3. Crea un issue detallado con:
   - Descripción del problema
   - Pasos para reproducir
   - Screenshots si es posible
   - Navegador y versión
   - Dispositivo (Desktop/Mobile)

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT.

```
MIT License

Copyright (c) 2024 Asador 51

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
de este software y archivos de documentación asociados (el "Software"), para usar
el Software sin restricciones, incluyendo sin limitación los derechos de usar,
copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias
del Software.
```

---

## 👨‍💻 Créditos

**Desarrollado para:** Asador 51 - Cocina a las brasas  
**Framework:** Bootstrap 5.3.2  
**Iconos:** Bootstrap Icons 1.11.1  
**Fuentes:** System fonts (Segoe UI, etc.)  
**Versión:** 2.0  
**Fecha:** Noviembre 2024

---

## 🎯 Próximos Pasos

Después de configurar tu sitio:

- [ ] Actualizar datos de contacto (teléfono, email, dirección)
- [ ] Personalizar colores de marca
- [ ] Agregar tu logo y favicon
- [ ] Subir imágenes reales de platillos
- [ ] Configurar enlaces de redes sociales
- [ ] Actualizar mapa de Google Maps
- [ ] Optimizar imágenes para web
- [ ] Configurar dominio personalizado
- [ ] Agregar Google Analytics
- [ ] Hacer backup del sitio
- [ ] Probar en múltiples dispositivos

---

## 🌟 ¡Gracias por usar Asador 51!

Si este proyecto te fue útil, considera:
- ⭐ Darle una estrella en GitHub
- 🐛 Reportar bugs o sugerencias
- 📢 Compartir con otros restaurantes

---

**¿Necesitas ayuda?** Consulta la documentación completa en `CAMBIOS_Y_MEJORAS.md`

**Última actualización:** Noviembre 12, 2024
