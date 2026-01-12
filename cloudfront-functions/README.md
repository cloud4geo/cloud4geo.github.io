# CloudFront Functions para Cloud4Geo

## Función: redirect-root.js

Esta función maneja:
1. Redirección de `/` a `/en/`
2. Agregar trailing slash a rutas de directorios

## Cómo configurar en CloudFront:

1. Ve a tu distribución de CloudFront
2. Navega a **Functions** en el menú lateral
3. Crea una nueva función:
   - Nombre: `redirect-root`
   - Copia el contenido de `redirect-root.js`
4. Publica la función
5. Ve a **Behaviors** en tu distribución
6. Edita el comportamiento por defecto (Default (*))
7. En **Function associations**:
   - **Viewer request**: Selecciona `redirect-root`
8. Guarda los cambios
9. Espera a que la distribución se actualice (puede tomar 5-15 minutos)

## Alternativa: Configurar Error Pages

Si prefieres no usar Functions, puedes configurar Error Pages:

1. Ve a **Error pages** en tu distribución CloudFront
2. Crea una página de error personalizada:
   - **HTTP error code**: 403
   - **Response page path**: `/en/index.html`
   - **HTTP response code**: 200
3. Repite para código 404 con la misma configuración

