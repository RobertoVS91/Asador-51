// ========================================
// ========================================
// MENÚ INTERACTIVO: Mostrar imagen y datos del platillo seleccionado
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    function activarMenuInteractivo() {
        const platillos = document.querySelectorAll('.menu-platillo-selectable');
        const imgDestacada = document.getElementById('imagen-destacada');
        const tituloDestacado = document.getElementById('titulo-destacado');
        const descDestacado = document.getElementById('desc-destacado');
        platillos.forEach(item => {
            item.addEventListener('click', function() {
                // Quitar clase activa de todos
                platillos.forEach(p => p.classList.remove('active'));
                // Agregar clase activa al seleccionado
                this.classList.add('active');
                // Cambiar imagen, título y descripción
                const img = this.getAttribute('data-img');
                const title = this.getAttribute('data-title');
                const desc = this.getAttribute('data-desc');
                if (imgDestacada) imgDestacada.src = img;
                if (tituloDestacado) tituloDestacado.textContent = title;
                if (descDestacado) descDestacado.textContent = desc;
            });
        });
    }
    activarMenuInteractivo();
    // Reactivar al cambiar de pestaña
    const menuTabs = document.getElementById('menuTabs');
    if (menuTabs) {
        menuTabs.addEventListener('click', function(e) {
            setTimeout(activarMenuInteractivo, 100); // Espera a que cambie el DOM
        });
    }
});
// CONFIGURACIÓN INICIAL
// ========================================

// Año dinámico en el footer
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ========================================
// NAVEGACIÓN SUAVE
// ========================================

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Solo aplicar scroll suave a anclas internas
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                // Calcular offset para navbar fija
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar navbar en móvil después de hacer clic
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler) {
                        navbarToggler.click();
                    }
                }
            }
        }
    });
});

// ========================================
// EFECTOS DE NAVBAR AL HACER SCROLL
// ========================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Cambiar opacidad del navbar según scroll
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(14, 15, 18, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(14, 15, 18, 0.96)';
        navbar.style.boxShadow = 'none';
    }
    
    // Opcional: Ocultar/mostrar navbar al hacer scroll (descomenta si lo deseas)
    /*
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    */
    
    lastScrollTop = scrollTop;
});

// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.card-custom, .menu-item, .section-title');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// ========================================
// CARRUSEL DE PROMOCIONES
// ========================================

// Configuración adicional del carrusel (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#promoCarousel');
    if (carousel) {
        // Pausar carrusel al hacer hover
        carousel.addEventListener('mouseenter', function() {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) {
                carouselInstance.pause();
            }
        });
        
        // Reanudar carrusel al quitar hover
        carousel.addEventListener('mouseleave', function() {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) {
                carouselInstance.cycle();
            }
        });
    }
});

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

// Función para validar y formatear números de teléfono
function formatPhoneNumber(phone) {
    // Remover caracteres no numéricos
    const cleaned = phone.replace(/\D/g, '');
    
    // Formatear según longitud
    if (cleaned.length === 10) {
        return `+52${cleaned}`;
    } else if (cleaned.length === 12 && cleaned.startsWith('52')) {
        return `+${cleaned}`;
    }
    return phone;
}

// Función para generar enlaces de WhatsApp
function generateWhatsAppLink(phone, message = '') {
    const formattedPhone = formatPhoneNumber(phone);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone.replace('+', '')}?text=${encodedMessage}`;
}

// ========================================
// MANEJO DE ERRORES DE IMÁGENES
// ========================================

// Manejar imágenes que no cargan
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Reemplazar con imagen placeholder si falla la carga
            this.src = 'https://placehold.co/600x400?text=Imagen+no+disponible';
            this.alt = 'Imagen no disponible';
        });
    });
});

// ========================================
// OPTIMIZACIÓN DE RENDIMIENTO
// ========================================

// Lazy loading para imágenes (si no está soportado nativamente)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observar imágenes con data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// FUNCIONES ADICIONALES PARA PERSONALIZACIÓN
// ========================================

// Función para cambiar colores dinámicamente (opcional)
function updateBrandColors(primary, secondary) {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', primary);
    root.style.setProperty('--brand-secondary', secondary);
    root.style.setProperty('--brand-accent', adjustBrightness(primary, -20));
}

// Función auxiliar para ajustar brillo de colores
function adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// ========================================
// ANALYTICS Y TRACKING (OPCIONAL)
// ========================================

// Función para trackear clics en botones importantes
function trackButtonClick(buttonName, destination) {
    // Aquí puedes integrar Google Analytics, Facebook Pixel, etc.
    console.log(`Button clicked: ${buttonName} -> ${destination}`);
    
    // Ejemplo para Google Analytics (descomenta si lo usas)
    /*
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'Button',
            'event_label': buttonName,
            'value': destination
        });
    }
    */
}

// Agregar tracking a botones de WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackButtonClick('WhatsApp', this.href);
        });
    });
});

// ========================================
// MODO DEBUG (SOLO PARA DESARROLLO)
// ========================================

// Función para mostrar información de debug (remover en producción)
function debugInfo() {
    console.log('🍽️ Restaurante Website Debug Info:');
    console.log('- Bootstrap version:', typeof bootstrap !== 'undefined' ? 'Loaded' : 'Not loaded');
    console.log('- Viewport:', window.innerWidth + 'x' + window.innerHeight);
    console.log('- User Agent:', navigator.userAgent);
    console.log('- Current section:', getCurrentSection());
}

// Función para detectar sección actual
function getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    for (let section of sections) {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            return section.id;
        }
    }
    return 'inicio';
}

// Ejecutar debug info en desarrollo (comentar en producción)
// debugInfo();

// ========================================
// INTERACCIÓN PARA LA SECCIÓN BAR
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Utilidad: formatea números o cadenas a moneda local (MXN)
    function formatCurrency(value) {
        if (!value) return '-';
        // Si ya tiene símbolo, devolver tal cual
        if (typeof value === 'string' && value.trim().startsWith('$')) return value;
        // Quitar todo lo que no sea dígito o punto
        const num = Number(String(value).replace(/[^0-9.]/g, ''));
        if (isNaN(num)) return '-';
        return num.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 0 });
    }

    function activarBarInteractivo() {
        const barSection = document.getElementById('bar-seccion');
        if (!barSection) return;
        const items = barSection.querySelectorAll('.menu-platillo-selectable');
    const img = document.getElementById('bar-imagen');
    const title = document.getElementById('bar-titulo');
    const desc = document.getElementById('bar-desc');
    const priceBottle = document.getElementById('bar-price-bottle');
    const priceGlass = document.getElementById('bar-price-glass');

        items.forEach(i => {
            i.addEventListener('click', function() {
                // quitar active
                items.forEach(x => x.classList.remove('active'));
                this.classList.add('active');
             const src = this.getAttribute('data-img');
             const t = this.getAttribute('data-title');
             const d = this.getAttribute('data-desc');
                const pb = this.getAttribute('data-price-bottle');
                const pg = this.getAttribute('data-price-glass');
                if (img && src) img.src = src;
                if (title && t) title.textContent = t;
                if (desc && d) desc.textContent = d;
                if (priceBottle) priceBottle.textContent = formatCurrency(pb);
                if (priceGlass) priceGlass.textContent = formatCurrency(pg);
            });
        });
        // Normalizar visualmente los precios en la lista (si están en atributos)
        items.forEach(i => {
            const pb = i.getAttribute('data-price-bottle');
            const pg = i.getAttribute('data-price-glass');
            const bottleSpan = i.querySelector('.bar-item-prices .bottle');
            const glassSpan = i.querySelector('.bar-item-prices .glass');
            if (bottleSpan) bottleSpan.textContent = formatCurrency(pb);
            if (glassSpan) glassSpan.textContent = formatCurrency(pg);
        });
    }
    activarBarInteractivo();
    // Reactivar al cambiar pestaña dentro del Bar
    const barTabs = document.getElementById('barTabs');
    if (barTabs) {
        barTabs.addEventListener('click', function() {
            setTimeout(activarBarInteractivo, 100);
        });
    }
});