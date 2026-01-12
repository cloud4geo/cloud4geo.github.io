# Configuración de CloudFront para Cloud4Geo

## Problema
CloudFront está redirigiendo a `https://d258rl6mqyeauw.cloudfront.net/en/` - esto es **correcto**, pero puedes mejorarlo.

## Soluciones

### Opción 1: Configurar Error Pages (Recomendado - Más Simple)

1. Ve a tu distribución CloudFront en la consola de AWS
2. Navega a **Error pages** (Páginas de error)
3. Crea dos páginas de error personalizadas:

   **Para 403:**
   - HTTP error code: `403`
   - Customize error response: ✅ (activado)
   - Response page path: `/en/index.html`
   - HTTP response code: `200`
   
   **Para 404:**
   - HTTP error code: `404`
   - Customize error response: ✅ (activado)
   - Response page path: `/en/index.html`
   - HTTP response code: `200`

4. Guarda los cambios y espera la actualización (5-15 minutos)

### Opción 2: Usar CloudFront Function (Más Avanzado)

1. Ve a **Functions** en CloudFront
2. Crea una nueva función:
   - Nombre: `redirect-root`
   - Copia el código de `cloudfront-functions/redirect-root.js`
3. Publica la función
4. Ve a **Behaviors** → Edita el comportamiento por defecto
5. En **Function associations**:
   - **Viewer request**: Selecciona `redirect-root`
6. Guarda y espera la actualización

### Opción 3: Configurar Origin Path en CloudFront

Si tu contenido está en un subdirectorio de S3:

1. Ve a **Origins and origin groups**
2. Edita tu origen S3
3. En **Origin path**, déjalo **vacío** (no pongas `/path`)
4. Guarda los cambios

## Verificación

Después de configurar, verifica:

1. `https://tu-dominio.com/` → Debe redirigir a `/en/`
2. `https://tu-dominio.com/en/` → Debe mostrar la página en inglés
3. `https://tu-dominio.com/es/` → Debe mostrar la página en español

## Nota sobre el index.html

El archivo `out/index.html` ya está configurado para redirigir automáticamente. Si CloudFront está funcionando correctamente, deberías ver la redirección funcionando.

## Troubleshooting

Si la redirección no funciona:

1. **Limpia la caché de CloudFront**: Ve a **Invalidations** y crea una invalidación para `/*`
2. **Verifica que el index.html esté en S3**: 
   ```bash
   aws s3 ls s3://tu-bucket/index.html
   ```
3. **Verifica los permisos del bucket**: Asegúrate de que CloudFront tenga acceso de lectura

