# Videos para el Carrusel de Promociones

## Instrucciones para agregar videos

Para que el video se muestre correctamente en el carrusel de promociones, necesitas colocar tu archivo de video en esta carpeta con el nombre:

- **promocional-asador51.mp4** (formato principal)
- **promocional-asador51.webm** (formato alternativo para mayor compatibilidad)

## Características recomendadas para el video:

### Formato y Calidad:
- **Formato**: MP4 (H.264) y WebM (VP9/VP8)
- **Resolución**: 1200x500 píxeles (proporción 2.4:1)
- **Duración**: Entre 10-30 segundos
- **Tamaño de archivo**: Máximo 10MB para buena carga web

### Configuración técnica:
- **Bitrate**: 1-3 Mbps
- **Frame rate**: 30fps
- **Audio**: Opcional (el video se reproduce sin sonido por defecto)

## Funcionalidades implementadas:

✅ **Reproducción automática**: El video se reproduce automáticamente cuando llega su turno en el carrusel
✅ **Pausa inteligente**: El carrusel se pausa mientras se reproduce el video
✅ **Controles de usuario**: Haz clic en el video para pausar/reproducir
✅ **Controles al hover**: Los controles aparecen al pasar el mouse sobre el video
✅ **Responsive**: Se adapta a diferentes tamaños de pantalla
✅ **Fallback**: Si el video no carga, muestra una imagen de respaldo

## Cómo reemplazar el video:

1. Coloca tu archivo de video en esta carpeta (`/videos/`)
2. Nombra el archivo como `promocional-asador51.mp4`
3. Opcionalmente, crea también una versión `.webm` para mayor compatibilidad
4. El video aparecerá automáticamente en el carrusel

## Personalización adicional:

Si quieres cambiar el texto del slide del video, edita estas líneas en `index.htm`:

```html
<div class="carousel-caption d-none d-md-block">
  <h5>¡Vive la experiencia Asador 51!</h5>
  <p>Descubre el sabor de las brasas en nuestro restaurante</p>
</div>
```

## Herramientas recomendadas para optimizar videos:

- **Handbrake**: Para comprimir y convertir videos
- **FFmpeg**: Para conversiones por línea de comandos
- **Online tools**: 
  - CloudConvert.com
  - Convertio.co

¡Tu video promocional está listo para impresionar a los visitantes de tu sitio web!