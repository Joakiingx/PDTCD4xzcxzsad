# Registro de cobertura y hallazgos de revisión · D4

Este registro documenta las auditorías del proyecto. Los [pendientes](19-Registro-de-pendientes.md) conservan las verificaciones técnicas y académicas abiertas. La [bitácora](12-Bitacora.md) conserva las sesiones y sus efectos. Aquí se registra qué material revisó cada IA y qué observaciones remite al equipo.

## Cómo registrar una auditoría

1. Asigna `AUD-D4-NNN`. Identifica fecha, revisor, commit o copia de la bóveda, carpeta inventariada y alcance. Identifica además las fuentes locales autorizadas y externas citadas que deban cotejarse.
2. Registra cada archivo o conjunto enumerado, versión, comprobación, resultado, limitaciones y fecha. Usa estados **verificado en el alcance descrito**, **hallazgo abierto**, **pendiente de revisar** o **acceso pendiente**. Distingue materiales vigentes, históricos y simulados.
3. Abarca como mínimo los bloques siguientes. Vuelve a contrastar los elementos relacionados cuando se agregue una nueva evidencia o versión.

| Bloque | Qué comprobar |
| --- | --- |
| Diagnóstico y fuentes | Correspondencia entre afirmación y evidencia, origen, fecha, versión y diferencia entre dato observado, declarado y supuesto. |
| Datos, scripts y cálculos | Reproducción de fórmulas y resultados, filas, faltantes, filtros, redondeo, unidades, períodos y separación de escenarios respecto de medición real. |
| Figuras, planos y gráficos | Legibilidad, origen, revisión, escala o unidad, ejes, leyendas, coherencia con tablas y diferencia entre cotas, estimaciones y geometría confirmada. |
| Avances, descubrimientos y alternativas | Validez de las nuevas evidencias, trazabilidad, vigencia de fichas, modelo y configuración, límites de los hallazgos y compatibilidad con la condición de faena. |
| Propuesta de ingeniería | Coherencia entre alcance, requisitos, selección, interfaces, arquitectura, riesgos, continuidad, costos y mantenimiento. |
| Evaluación y validación | Cobertura de pauta y anexos, cadena causa → requisito → criterio → prueba → evidencia, resultados obtenidos y límites de prueba. |
| Integridad documental | Originales y derivados identificables, enlaces, diferencias entre versiones y contradicciones entre notas, dossier, planillas y presentación. |

## Cómo registrar un posible cambio sin aplicarlo

Asigna `REV-D4-NNN` y anota fecha, auditoría relacionada, archivo y ubicación exacta, afirmación actual, evidencia de contraste, motivo, posible efecto, verificación necesaria y estado. Si otra fuente sostiene una lectura distinta, consérvala y explica la discrepancia. Los estados de hallazgo son **por revisar**, **en revisión por el equipo** y **cerrado por el equipo con evidencia**. Cerrar requiere anotar quién decidió, cuándo y con qué respaldo. Durante la auditoría escribe las observaciones aquí y en la bitácora. Conserva intactas las fuentes y el trabajo revisado.

## AUD-D4-001 · 2026-11-10 · Primera pasada parcial

Revisión asistida por IA sobre la [versión base de GitHub](https://github.com/Joakiingx/proyecto-titulo-d4/tree/c04874b4e3fc1268c30bddcf69d23394046f66a8). Inventario de 85 archivos versionados, incluidos cinco marcadores de carpeta. El inventario acredita presencia. Las comprobaciones realizadas se describen abajo.

| Alcance exacto | Comprobación | Resultado |
| --- | --- | --- |
| Los 31 archivos Markdown de la versión base | Se contrastaron 331 destinos de enlaces internos Markdown y Obsidian con el árbol del repositorio. | Los destinos revisados existen. El contenido, las anclas internas y las fuentes externas requieren verificación según el bloque. |
| `posicion_tripper_depurada.csv` y `escenarios_impacto.csv`, revisión D4 v1 | Desde el CSV depurado se volvieron a contar pares horarios consecutivos con zona válida y cambios. Se recalcularon diez valores por escenario con 78/33, caudales y minutos de sus filas. | 792 filas, 781 válidas, 11 faltantes, 779 pares evaluables y 78 cambios en 33 jornadas. Coinciden 160 valores de los 16 escenarios con tolerancia numérica de 10⁻⁸. Comprobación sobre CSV derivados. |
| EST-01 y REG-D4-005 | Se contrastó la vigencia de la referencia de alcance utilizada en la explicación del estudio. | REV-D4-001 abierto para revisión del equipo. |
| Resto del contenido | Incluye revisión directa de originales, figuras, anexos, cálculos restantes, diseño completo y fuentes externas asociadas. | Pendiente en AUD-D4-001. Este registro complementa las revisiones históricas. La auditoría integral sigue abierta. |

## Hallazgos

| ID | Estado | Ubicación y evidencia | Por qué importa y qué debe revisar el equipo |
| --- | --- | --- | --- |
| REV-D4-001 · 2026-11-10 · AUD-D4-001 | Por revisar · Vigencia de una referencia | [EST-01, Comprobación preliminar de alcance](../Estudios/EST-01-Posicionamiento-y-cobertura.md) ilustra una carrera de 200 m y 3 m de separación. [Bitácora, REG-D4-005](12-Bitacora.md) documenta una carrera nominal dibujada de 71,84 m y dos distancias teóricas de montaje. | El caso de 200 m está marcado como ilustrativo. Antes de reutilizarlo para dimensionar o defender la propuesta, el equipo debe decidir si añade la referencia vigente y confirma las distancias de montaje. El texto original queda disponible para cotejo. |
