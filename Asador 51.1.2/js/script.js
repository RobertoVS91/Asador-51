// ========================================
// ASADOR 51 - JAVASCRIPT MEJORADO Y OPTIMIZADO
// Versión: 2.0
// Mejoras: Navegación activa, animaciones mejoradas,
//          gestión de video optimizada, lazy loading
// ========================================

'use strict';

// ========================================
// CONFIGURACIÓN INICIAL
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar año en footer
    initializeYear();
    
    // Inicializar navegación activa
    initializeActiveNavigation();
    
    // Inicializar menú interactivo
    initializeMenuInteractions();
    
    // Inicializar sección bar
    initializeBarInteractions();
    
    // Inicializar carrusel
    initializeCarousel();
    
    // Inicializar animaciones scroll
    initializeScrollAnimations();
    
    // Inicializar navbar scrolled effect
    initializeNavbarScroll();
    
    // Manejar errores de imágenes
    handleImageErrors();
    
    // Tracking de eventos
    initializeEventTracking();
    
    console.log('✅ Asador 51 - Sitio cargado correctamente');
});

// ========================================
// AÑO DINÁMICO EN FOOTER
// ========================================

function initializeYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ========================================
// NAVEGACIÓN ACTIVA MEJORADA
// ========================================

function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveLink() {
        let currentSection = '';
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }
    
    // Actualizar al hacer scroll
    window.addEventListener('scroll', debounce(updateActiveLink, 100));
    
    // Actualizar al cargar
    updateActiveLink();
}

// ========================================
// SCROLL SUAVE MEJORADO
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Solo aplicar a anclas internas válidas
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar navbar en móvil
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
// NAVBAR SCROLL EFFECT
// ========================================

function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar-custom');
    if (!navbar) return;
    
    let lastScrollTop = 0;
    
    function handleNavbarScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Agregar clase scrolled cuando se hace scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(14, 15, 18, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(14, 15, 18, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', debounce(handleNavbarScroll, 10));
}

// ========================================
// MENÚ INTERACTIVO MEJORADO
// ========================================

function initializeMenuInteractions() {
    function activarMenuInteractivo() {
        const platillos = document.querySelectorAll('#menu-seccion .menu-platillo-selectable');
        const imgDestacada = document.getElementById('imagen-destacada');
        const tituloDestacado = document.getElementById('titulo-destacado');
        const descDestacado = document.getElementById('desc-destacado');
        
        if (!imgDestacada || !tituloDestacado || !descDestacado) return;
        
        platillos.forEach(item => {
            item.addEventListener('click', function() {
                // Quitar clase activa de todos
                platillos.forEach(p => p.classList.remove('active'));
                
                // Agregar clase activa al seleccionado
                this.classList.add('active');
                
                // Obtener datos
                const img = this.getAttribute('data-img') || '';
                const title = this.getAttribute('data-title') || '';
                const desc = this.getAttribute('data-desc') || '';
                
                // Actualizar con animación
                updateImageWithFade(imgDestacada, img);
                tituloDestacado.textContent = title;
                descDestacado.textContent = desc;
                
                // Scroll suave a la imagen en móvil
                if (window.innerWidth < 992) {
                    imgDestacada.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
    }
    
    activarMenuInteractivo();
    
    // Reactivar al cambiar de pestaña
    const menuTabs = document.getElementById('menuTabs');
    if (menuTabs) {
        menuTabs.addEventListener('click', function() {
            setTimeout(activarMenuInteractivo, 100);
        });
    }
}

// ========================================
// BAR INTERACTIVO MEJORADO
// ========================================

function initializeBarInteractions() {
    function formatCurrency(value) {
        if (!value || value === '-') return '-';
        if (typeof value === 'string' && value.trim().startsWith('$')) return value;
        
        const num = Number(String(value).replace(/[^0-9.]/g, ''));
        if (isNaN(num)) return '-';
        
        return num.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 0
        });
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
        
        if (!img || !title || !desc || !priceBottle || !priceGlass) return;
        
        items.forEach(item => {
            item.addEventListener('click', function() {
                // Quitar active de todos
                items.forEach(x => x.classList.remove('active'));
                this.classList.add('active');
                
                // Obtener datos
                const src = this.getAttribute('data-img') || '';
                const t = this.getAttribute('data-title') || '';
                const d = this.getAttribute('data-desc') || '';
                const pb = this.getAttribute('data-price-bottle') || '-';
                const pg = this.getAttribute('data-price-glass') || '-';
                
                // Actualizar con animación
                updateImageWithFade(img, src);
                title.textContent = t;
                desc.textContent = d;
                priceBottle.textContent = formatCurrency(pb);
                priceGlass.textContent = formatCurrency(pg);
                
                // Scroll suave en móvil
                if (window.innerWidth < 992) {
                    img.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
        
        // Normalizar precios en la lista
        items.forEach(item => {
            const pb = item.getAttribute('data-price-bottle');
            const pg = item.getAttribute('data-price-glass');
            const bottleSpan = item.querySelector('.bar-item-prices .bottle');
            const glassSpan = item.querySelector('.bar-item-prices .glass');
            
            if (bottleSpan) bottleSpan.textContent = formatCurrency(pb);
            if (glassSpan) glassSpan.textContent = formatCurrency(pg);
        });
    }
    
    activarBarInteractivo();
    
    // Reactivar al cambiar pestaña
    const barTabs = document.getElementById('barTabs');
    if (barTabs) {
        barTabs.addEventListener('click', function() {
            setTimeout(activarBarInteractivo, 100);
        });
    }
}

// ========================================
// ACTUALIZAR IMAGEN CON FADE
// ========================================

function updateImageWithFade(imgElement, newSrc) {
    if (!imgElement || !newSrc) return;
    
    imgElement.style.opacity = '0.5';
    imgElement.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        imgElement.src = newSrc;
        imgElement.style.opacity = '1';
    }, 150);
}

// ========================================
// CARRUSEL MEJORADO CON GESTIÓN DE VIDEO
// ========================================

function initializeCarousel() {
    const carousel = document.querySelector('#promoCarousel');
    if (!carousel) return;
    
    const videos = carousel.querySelectorAll('video');
    
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
    
    // Gestión de videos
    carousel.addEventListener('slid.bs.carousel', function(e) {
        // Pausar todos los videos
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
        
        // Reproducir video del slide activo
        const activeSlide = e.target.querySelector('.carousel-item.active');
        const activeVideo = activeSlide ? activeSlide.querySelector('video') : null;
        
        if (activeVideo) {
            const carouselInstance = bootstrap.Carousel.getInstance(carousel);
            if (carouselInstance) {
                carouselInstance.pause();
            }
            
            activeVideo.play().catch(error => {
                console.log('Video autoplay bloqueado:', error);
            });
            
            // Reanudar carrusel cuando termine el video
            activeVideo.addEventListener('ended', function() {
                if (carouselInstance) {
                    carouselInstance.cycle();
                    carouselInstance.next();
                }
            }, { once: true });
        }
    });
    
    // Controles de video con clic
    videos.forEach(video => {
        video.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (this.paused) {
                this.play().catch(error => {
                    console.log('Error al reproducir video:', error);
                });
            } else {
                this.pause();
            }
        });
        
        // Mostrar controles al hacer hover
        video.addEventListener('mouseenter', function() {
            this.setAttribute('controls', 'controls');
        });
        
        video.addEventListener('mouseleave', function() {
            if (!this.paused) {
                this.removeAttribute('controls');
            }
        });
    });
    
    // Inicializar: pausar todos los videos excepto el activo
    const initialActiveSlide = carousel.querySelector('.carousel-item.active');
    const initialVideo = initialActiveSlide ? initialActiveSlide.querySelector('video') : null;
    
    videos.forEach(video => {
        if (video !== initialVideo) {
            video.pause();
        }
    });
}

// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    const elementsToAnimate = document.querySelectorAll('.card-custom, .menu-item, .contact-item');
    elementsToAnimate.forEach(el => {
        if (!el.classList.contains('animate-fade-in')) {
            observer.observe(el);
        }
    });
}

// ========================================
// MANEJO DE ERRORES DE IMÁGENES
// ========================================

function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Reemplazar con placeholder si falla
            if (!this.dataset.errorHandled) {
                this.src = 'https://placehold.co/800x450/1a1d24/e66c2c?text=Imagen+no+disponible';
                this.alt = 'Imagen no disponible';
                this.dataset.errorHandled = 'true';
                console.warn('Error cargando imagen:', this.getAttribute('data-original-src') || this.src);
            }
        });
    });
}

// ========================================
// LAZY LOADING MEJORADO
// ========================================

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
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    // Observar imágenes con data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// TRACKING DE EVENTOS
// ========================================

function initializeEventTracking() {
    // Tracking de botones WhatsApp
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('WhatsApp', 'click', this.href);
        });
    });
    
    // Tracking de redes sociales
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.className.split(' ').find(c => 
                ['facebook', 'instagram', 'whatsapp', 'tiktok'].includes(c)
            ) || 'unknown';
            trackEvent('Social Media', 'click', platform);
        });
    });
    
    // Tracking de menú
    const menuTabs = document.querySelectorAll('#menuTabs .nav-link, #barTabs .nav-link');
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            trackEvent('Menu Navigation', 'tab_click', this.textContent.trim());
        });
    });
}

function trackEvent(category, action, label) {
    console.log(`📊 Event: ${category} - ${action} - ${label}`);
    
    // Integración con Google Analytics (descomentar si se usa)
    /*
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    */
    
    // Integración con Facebook Pixel (descomentar si se usa)
    /*
    if (typeof fbq !== 'undefined') {
        fbq('trackCustom', action, {
            category: category,
            label: label
        });
    }
    */
}

// ========================================
// UTILIDADES
// ========================================

// Debounce para optimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Detectar sección actual
function getCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;
    
    for (let section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
            return section.id;
        }
    }
    return 'inicio';
}

// Formatear números de teléfono
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.length === 10) {
        return `+52${cleaned}`;
    } else if (cleaned.length === 12 && cleaned.startsWith('52')) {
        return `+${cleaned}`;
    }
    return phone;
}

// Generar enlaces de WhatsApp
function generateWhatsAppLink(phone, message = '') {
    const formattedPhone = formatPhoneNumber(phone);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone.replace('+', '')}?text=${encodedMessage}`;
}

// ========================================
// MODO DEBUG (DESARROLLO)
// ========================================

function debugInfo() {
    console.log('🍽️ Asador 51 - Debug Info:');
    console.log('- Bootstrap:', typeof bootstrap !== 'undefined' ? 'Loaded ✅' : 'Not loaded ❌');
    console.log('- Viewport:', `${window.innerWidth}x${window.innerHeight}`);
    console.log('- Sección actual:', getCurrentSection());
    console.log('- Device pixel ratio:', window.devicePixelRatio);
    console.log('- Touch device:', 'ontouchstart' in window ? 'Yes ✅' : 'No ❌');
}

// Ejecutar debug en desarrollo (comentar en producción)
// debugInfo();

// ========================================
// PERFORMANCE MONITORING
// ========================================

// Monitorear performance de carga
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Tiempo de carga: ${pageLoadTime}ms`);
        
        // Tiempo de carga de DOM
        const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
        console.log(`📄 DOM listo en: ${domReadyTime}ms`);
    }
});

// ========================================
// SERVICE WORKER (PWA - OPCIONAL)
// ========================================

// Descomentar para habilitar PWA
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('✅ Service Worker registrado:', registration.scope);
            })
            .catch(function(error) {
                console.log('❌ Error al registrar Service Worker:', error);
            });
    });
}
*/

// ========================================
// MANEJO DE ORIENTACIÓN (MÓVILES)
// ========================================

window.addEventListener('orientationchange', function() {
    // Recargar animaciones y posiciones
    setTimeout(() => {
        initializeScrollAnimations();
        console.log('📱 Orientación cambiada');
    }, 300);
});

// ========================================
// PREVENIR ZOOM EN INPUTS (iOS)
// ========================================

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// ========================================
// EXPORTAR FUNCIONES GLOBALES (OPCIONAL)
// ========================================

window.Asador51 = {
    trackEvent,
    formatPhoneNumber,
    generateWhatsAppLink,
    getCurrentSection,
    debugInfo
};

// ========================================
// FIN DEL SCRIPT
// ========================================

console.log('🔥 Asador 51 - Script cargado completamente');
