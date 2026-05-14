C:\Users\claudio.navarro\AppData\Roaming\Code\User\globalStorage\github.copilot-chat\memory-tool\memories\preferences.md

C:\Users\claudio.navarro\AppData\Local\Programs\Microsoft VS Code\10c8e557c8\resources\app\extensions\copilot\assets\prompts\skills\agent-customization\SKILL.md

- No mostrar flujos de thinking ni razonamiento interno durante el trabajo en el chat visible; si hace falta conservar contexto operativo, registrarlo en archivos de sesiones dentro de sesiones/ y mantener `session/index.md` como indice corto.

- Mostrar solo avances breves, acciones y resultados.

- Si aparecen etiquetas como thinking, Evaluating o working en el chat visible, mostrarlas sin contenido interno asociado.

- Ser preciso y rápido.

- Registrar referencias del trabajo por sesión usando etiquetas como thinking, Evaluating y working en archivos dentro de sesiones/; `session/index.md` debe quedar como resumen e indice de arranque.

- Cuando una tarea implique cambios en archivos del workspace, registrar en la sesion actual cuales archivos se crearon o modificaron y describir con exactitud que se hizo en cada uno, especialmente si eso explica como se habilito, corrigio o valido una funcionalidad.

- Registrar en la sesión actual los archivos (rutas relativas) creados o modificados y una breve descripción por cada cambio, para facilitar trazabilidad y revisión posterior.

- Actualizar siempre `C:\Users\claudio.navarro\AppData\Roaming\Code\User\globalStorage\github.copilot-chat\memory-tool\memories\preferences.md` tomando como fuente de verdad las preferencias del proyecto definidas en `D:\_SIIAC\preferences.md`.

- Al crear cada archivo dentro de `session/` no necesita incluir inmediatamente la línea de palabras clave al iniciarse: al crear (iniciar) una nueva sesión la cabecera de palabras clave puede omitirse o simplemente indicar `Palabras clave:`.

- Al crear (iniciar) un nuevo archivo de sesión, siempre agregar o actualizar la primera línea con exactamente 10 palabras clave y añadir/actualizar la marca `Session start timestamp: YYYY-MM-DD HH:MM:SS` con la hora actual del sistema TZ=America/Santiago.

- Cada vez que se lea una sesión para recuperar contexto, leer primero la primera línea (si contiene las 10 palabras clave) y el resumen inicial antes de continuar con el resto del contenido.

- Al cerrar un archivo de sesión, NO insertar la hora del sistema directamente (evitar usar `Get-Date`/`Date.now` sin referencia al archivo). En su lugar seguir este procedimiento:

	1. Leer la hora de modificación del archivo (mtime / `LastWriteTime`).
	2. Convertir ese valor de tiempo a la zona `America/Santiago` (no aplicar correcciones manuales ni añadir minutos). En Windows el identificador de zona a usar es `Pacific SA Standard Time`.
	3. Escribir la marca `Session end timestamp: YYYY-MM-DD HH:MM:SS` usando la hora convertida al formato `YYYY-MM-DD HH:MM:SS`.

	Nota: si se actualiza programáticamente el `LastWriteTime`, primero fijar el mtime del archivo y luego escribir la marca con ese mismo valor convertido.

- Al iniciar una nueva sesión, leer primero `sesiones/index.md` y luego las 3 ultimas sesiones siguiendo el orden descendente listado alli.

- Usar `BBDD.md` como referencia principal del sistema y de la base de datos; allí mantener tablas, campos, credenciales disponibles en el archivo y registro de cambios aplicados a la base de datos.

- En cada archivo del proyecto que cree o modifique, agregar comentarios exhaustivos y muy detallados explicando funciones, iteraciones, condicionales, awaits, fetches, constantes y el contexto de cada acción, con foco didáctico para estudio del código generado.