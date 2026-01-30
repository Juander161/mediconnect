# 🚀 Guía Rápida de Despliegue en GitHub Pages

## Paso 1: Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `mediconnect-health-platform` (o el que prefieras)
3. Descripción: "Plataforma moderna de salud para conectar pacientes con doctores"
4. Público o Privado (recomendado: Público para GitHub Pages gratis)
5. **NO** marques "Add a README file" (ya tenemos uno)
6. Haz clic en "Create repository"

## Paso 2: Inicializar Git localmente
Abre PowerShell en esta carpeta y ejecuta:

```powershell
git init
git add .
git commit -m "Initial commit: MediConnect Health Platform"
```

## Paso 3: Conectar con GitHub
Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub:

```powershell
git remote add origin https://github.com/TU-USUARIO/mediconnect-health-platform.git
git branch -M main
git push -u origin main
```

Si te pide autenticación, usa tu token de acceso personal (PAT) en vez de contraseña.

## Paso 4: Desplegar a GitHub Pages

```powershell
npm run deploy
```

Este comando:
- Construye la aplicación automáticamente
- Crea una rama `gh-pages`
- Sube los archivos compilados

## Paso 5: Configurar GitHub Pages en el repositorio
1. Ve a tu repositorio en GitHub
2. Click en "Settings" (Configuración)
3. En el menú lateral, click en "Pages"
4. En "Source", selecciona la rama `gh-pages`
5. Deja la carpeta en `/ (root)`
6. Click en "Save"

## Paso 6: Acceder a tu sitio
Tu aplicación estará en:
```
https://TU-USUARIO.github.io/mediconnect-health-platform/
```

⏱️ Puede tardar 1-5 minutos en estar disponible la primera vez.

## 🔄 Actualizar el sitio después de cambios

```powershell
# 1. Guardar cambios
git add .
git commit -m "Descripción de los cambios"

# 2. Subir a GitHub
git push origin main

# 3. Re-desplegar
npm run deploy
```

## ✅ Verificar que todo funciona

1. Verifica que tu repositorio tenga la rama `gh-pages`
2. En Settings > Pages debe aparecer: "Your site is live at https://..."
3. Haz clic en el enlace para ver tu sitio

## ⚠️ Si tienes problemas

**Error: remote origin already exists**
```powershell
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/mediconnect-health-platform.git
```

**Error: src refspec main does not match any**
```powershell
git add .
git commit -m "Initial commit"
git push -u origin main
```

**La página muestra 404**
- Espera unos minutos más
- Verifica que en Settings > Pages esté seleccionada la rama `gh-pages`
- Asegúrate de que el sitio esté en "Public" o tengas GitHub Pro/Team

## 📝 Notas
- El comando `npm run deploy` hace todo automáticamente
- No necesitas tocar la rama `gh-pages` manualmente
- El sitio se actualiza automáticamente cuando ejecutas `npm run deploy`
