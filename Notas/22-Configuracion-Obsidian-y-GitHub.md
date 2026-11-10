# Configuración de Obsidian y GitHub

La carpeta clonada del repositorio privado es la bóveda sincronizada. En Windows, desde PowerShell ejecuta:

```powershell
Set-Location "$env:USERPROFILE\Documents\GitHub"
git clone https://github.com/Joakiingx/proyecto-titulo-d4.git
```

Si tu carpeta de trabajo es otra, ejecuta el clon desde esa carpeta. Git puede abrir el inicio de sesión de GitHub. Después, en Obsidian selecciona **Abrir carpeta como bóveda** y elige la nueva carpeta `proyecto-titulo-d4`. Abre [README](../README.md) o [[00-Contexto-para-IA]] para navegar.

La carpeta original del ZIP puede mantenerse como copia local. Para conservar sus ajustes, cierra ambas bóvedas y copia la carpeta oculta `.obsidian` de la bóveda anterior a la clonada antes de abrirla de nuevo. Si la bóveda anterior contiene notas propias, copia únicamente esas notas después de revisar sus nombres.

## Sincronización habitual

En Obsidian de escritorio, entra a **Ajustes → Plugins de la comunidad → Explorar**, busca **Git** de Vinzent, instálalo y actívalo si quieres sincronizar dentro de Obsidian. En Windows este complemento utiliza la instalación de Git del equipo. Desde la paleta de comandos, usa **Git: Pull** antes de empezar y **Git: Commit-and-sync** al cerrar una sesión de trabajo. Mantén el remoto `origin` que configuró el clon. Empieza con sincronización manual mientras el equipo adopta el flujo.

- [Instalación de Git para Obsidian](https://publish.obsidian.md/git-doc/Installation)
- [Uso con un repositorio existente](https://publish.obsidian.md/git-doc/Getting%20Started)

## Adjuntos locales y sesiones de IA

El repositorio contiene notas, tablas derivadas, referencias y enlaces públicos. Para conservar los originales disponibles desde la bóveda local, puedes copiar la estructura `Propuesta de solución M7` bajo `Evidencias-locales/`. La regla de Git excluye esa carpeta completa y las extensiones comunes de archivos originales. Respeta los permisos aplicables a los datos de faena.

Un asistente con acceso al repositorio privado puede leer la memoria de trabajo desde GitHub. Un asistente que opera sobre la bóveda clonada puede leer los originales si están presentes en `Evidencias-locales/` y la sesión tiene acceso a esa carpeta. Para iniciar una sesión, comparte el nombre del repositorio y la ruta de la nota [[00-Contexto-para-IA]].
