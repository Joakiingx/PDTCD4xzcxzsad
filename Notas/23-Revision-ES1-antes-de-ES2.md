# Revisión de la Evaluación Sumativa 1 antes de la Evaluación 2

Revisión del 9 de noviembre de 2026. Se contrastó la retroalimentación del docente con el expediente D4, los respaldos del repositorio y las notas de trazabilidad. La retroalimentación se usa como pauta de revisión de la ES1. La pauta específica de ES2 se mantiene pendiente.

**Resultado.** Están los cinco entregables descritos por el docente. El expediente permite sostener el problema y formular la condición que debe abordar la propuesta. Quedan correcciones de trazabilidad antes de reutilizar las cifras y verificaciones técnicas antes de cerrar alcance, tecnología e impacto.

## Entregables solicitados

| Entregable, retroalimentación p. 1 | Evidencia del D4 | Estado de revisión |
| --- | --- | --- |
| Anexo 9 completado | D02, con tablas 9.1 a 9.4 | Presente. Actualizar nombres, extensiones y alcance del consolidado. |
| Dossier con siete secciones | D01, versión 2.0, con conclusiones y referencias de respaldo | Presente. Revisar la separación entre condición accionable, hipótesis y selección tecnológica. |
| Carpeta de evidencias | Siete subcarpetas numeradas, con originales, cálculos, figuras y registro de aportes | Presente. La tabla 9.3 del Anexo 9 aún cita rutas y entregables de otras versiones. |
| Presentación breve | D03, siete láminas | Presente. Alinear estados y cifras con la revisión de la evidencia. |
| Archivos de datos, cálculo y figuras | F03, F04, D04, D08 y FIG-01 a FIG-04 | Presentes. El libro de resumen y el de memoria de cálculo son copias del mismo archivo. Falta conservar la serie depurada que el Anexo 9 declara. |

Fuentes y enlaces de originales en [[04-Evidencias-y-fuentes]]. Inventario de la entrega y diferencias de versión en [[14-Expediente-ES1]].

## Contraste por criterio

| Criterio del docente | Evidencia que sostiene el avance | Brecha de cierre |
| --- | --- | --- |
| Delimitación, alcance y criterios de éxito, pp. 8–10 | D01 y D06 identifican la correa 320CV025, stockpiles, verificación presencial, efectos y alcance. F01 informa una meta de menos de 2 min. | Definir el inicio y fin del tiempo que se comparará. Separar espera, caminata, verificación y movimiento físico. La meta y el indicador son referencias para medir la propuesta. |
| Actores y restricciones, pp. 10–11 | Identifica a Sala de Control, operador en terreno, E&I y DCS. F05 registra I/O en Sala Eléctrica y falta de hilos de reserva del festón. F02 recoge la ventana de 12 h y 110 VAC como antecedentes declarados. | Verificar el hardware, la alimentación en el punto de conexión y la lógica vigente. Separar las restricciones documentadas de la arquitectura conceptual. |
| Acta y trazabilidad, pp. 2, 11–12 | F02 registra participantes, medio, preguntas, respuestas, cifras, acuerdos y validación. F05 transcribe las confirmaciones del 23 de octubre de 2026 sobre I/O, festón y flujo. | La primera reunión está fechada solo como octubre de 2026. Completar día y hora si existe respaldo. Conservar la conformidad o confirmación escrita autorizada cuando esté disponible. |
| Línea base e indicadores, pp. 5–7, 12–13 | F03 permite reproducir 792 registros horarios, 781 con zona, 11 sin zona y 78 cambios observados en 33 jornadas. F01/F02 respaldan 10–15 min como valor declarado. F05 respalda 200–350 t/h y pico de 400 t/h como flujo declarado. | Versionar la serie depurada con regla de fecha y faltantes. Confirmar el equipo detrás de F04. Medir duración por fase y transferencia durante la maniobra antes de cuantificar mejora real. |
| Diagnóstico causal, pp. 14–15 | D01 separa síntoma, causa directa y condiciones de fondo. Presenta tres explicaciones, por encima del mínimo de dos de la pauta. | Mantener patinaje e interpretación de las micro-marchas como hipótesis. Describir la condición accionable sin convertir un candidato de radar en una selección aprobada. |
| Riesgos y controles, p. 15 | D01 identifica riesgos de exposición, espera, descarga en zona errónea y trazabilidad. Describe EPP, radio y verificación visual. | Distinguir presencia declarada y eficacia comprobada. El conteo horario sustenta recurrencia de cambios. La eficacia del control y la duración de la espera requieren otra evidencia. |
| Verificaciones pendientes, pp. 12, 16 | D01 y la bóveda tienen un registro de vacíos y contrapartes. | Completar fecha o estado de gestión, responsable del seguimiento y evidencia esperada para cada pendiente. Separar lo necesario para sostener el diagnóstico de lo requerido para seleccionar o validar el diseño. |
| Figuras, conclusiones y anexos, pp. 4, 16–17 | Hay mapa causal, flujo actual, gráfico estadístico y esquema conceptual. D01 incluye conclusiones e inventario. | FIG-02, como archivo independiente, carece del pie de autoría, fuente y estado que el Anexo 9 declara para todas las figuras. Incorporarlo cuando se reutilice. Normalizar el inventario y las referencias D3/D4. |

## Lectura de las cifras y evidencia

- **Observado en F03.** 78 diferencias de zona entre registros horarios consecutivos válidos, en 30 de 33 jornadas. Es evidencia de recurrencia. El registro conserva una resolución de una hora y un hueco de 11 observaciones.
- **Declarado.** 10–15 min por movimiento en F01 y F02. Caudal de 200–350 t/h con máximo ocasional de 400 t/h en F05.
- **Escenario derivado.** Aproximadamente 80–210 t/día a flujo nominal con las cifras redondeadas de la ES1. El cálculo supone interrupción durante toda la espera. Para estimar el impacto real, se necesitan marcas de maniobra y evidencia de la transferencia efectiva.
- **Hipótesis.** Las marchas breves de F04 pueden estar asociadas a la traslación. Queda pendiente identificar la señal `320CV0251RUN` con DCS u Operaciones.
- **Supuesto de depuración.** Las filas 603–626 de F03 almacenan la fecha 10-11-2026. Su posición en la serie permite tratarlas como la jornada del 10-10-2026, conservando la fecha original y la regla aplicada. [[15-Estadistica-de-zonas]] · [[16-Registro-de-estados]] · [[17-Memoria-de-impacto]]

## Orden de cierre

1. **Correcciones del equipo.** Conciliar el Anexo 9 con los nombres reales del expediente, documentar la serie depurada, corregir la leyenda de FIG-02 y homologar los estados y cifras que pasan del dossier a las láminas.
2. **Confirmación con Operaciones y DCS.** Acordar qué evento empieza y termina la medición de la meta de menos de 2 min, quién hace cada paso y cuándo se afecta la descarga. Identificar `320CV0251RUN` antes de usarlo para inferir duración de traslación. PEND-02, PEND-03 y PEND-05.
3. **Insumos para seleccionar y validar el diseño.** Conseguir el plano acotado Z1–Z35 y el recorrido útil. Confirmar tipo de I/O, alimentación, canalización y permisivos. Estos datos permiten contrastar las alternativas y cerrar la configuración. PEND-01, PEND-03, PEND-04 y PEND-06.
4. **Criterio académico.** Obtener la pauta de ES2 para traducir estos hallazgos en entregables y criterios de aceptación. PEND-08.

**Condición accionable que pasa al diseño.** Sala de Control necesita disponer de una indicación confiable de la posición o zona del tripper para reducir la dependencia de la verificación presencial. La propuesta deberá demostrar cobertura operativa e integración a DeltaV con las restricciones de instalación del D4.

Fuente docente. *Retroalimentación y propuestas de mejora para la Evaluación Sumativa 1 (1)*, documento adjunto del equipo, 17 páginas.

[[10-Evaluacion-2]] · [[19-Registro-de-pendientes]] · [[00-Mapa-de-estudios]]
