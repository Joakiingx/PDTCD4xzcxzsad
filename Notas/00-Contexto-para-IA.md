# Guía para retomar el Proyecto de Título D4 con cualquier IA

Joaquín Pinto y Kevin Leal · Programa INACAP–Collahuasi · Módulo 7. El D4 aborda la falta de monitoreo en línea de la posición del tripper de la correa 320CV025 en Puerto Patache. Lee primero [AGENTS.md](../AGENTS.md). Esta guía indica dónde buscar, cómo interpretar cada tipo de respaldo y dónde dejar constancia.

## Mapa de carpetas

| Carpeta o archivo raíz | Qué encontrarás | Cómo usarlo |
| --- | --- | --- |
| [README.md](../README.md) | Presentación y navegación general de la bóveda. | Úsalo para orientarte. Confirma el estado vigente con la pauta, la bitácora y los pendientes. |
| [Notas/](.) | Conocimiento consolidado sobre diagnóstico, datos, requisitos, alternativas, DeltaV, validación, evaluaciones, pendientes y bitácora. | Entra por el tema de la tabla siguiente y rastrea afirmaciones hasta su fuente. |
| [Estudios/](../Estudios/) | Preguntas de ingeniería y fichas de trabajo. Contiene el mapa EST-01 a EST-07, el estudio inicial de posicionamiento y la ficha de levantamiento. | Revisa qué verificación cierra cada rama. Un ID del mapa puede tener su investigación pendiente de desarrollar. |
| [Analisis/D4/](../Analisis/D4/) | Script `recalcular-datos.mjs` para reproducir la revisión de los registros. | Lee [[24-Auditoria-de-datos-D4]] para conocer entradas, limpieza, salidas y límites antes de ejecutar o reutilizar resultados. |
| [Evidencias/M7/](../Evidencias/M7/) | Expediente ES1 y materiales oficiales de Unidad 2. | Separa entregas históricas, pautas, plantillas, productos y evidencias de planta. |
| `Evidencias-locales/` | Ruta de consulta local para respaldos autorizados. Puede existir solo en la copia del equipo. | Si no tienes acceso, pide el respaldo específico. Registra su referencia y el límite del análisis. |
| `.obsidian/` | Configuración local de Obsidian, excluida del control de versiones. | Usa [[22-Configuracion-Obsidian-y-GitHub]] para sincronización y organización. |

### Expediente de diagnóstico y datos

Las siguientes subcarpetas pertenecen a [Evidencias/M7/Propuesta de solución M7/](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/). El índice [[04-Evidencias-y-fuentes]] enlaza archivos y códigos de fuente.

| Subcarpeta | Qué encontrarás | Cómo proceder |
| --- | --- | --- |
| `01 Antecedentes/` | Ficha original, acta y confirmaciones de la tutora, Anexo 2 de alcance y actores. | Identifica fecha, contraparte y qué condición respalda cada documento. |
| `02 Datos originales/` | Planillas de posición horaria y estado `320CV0251RUN`, más nota de disponibilidad y origen. | Conserva la fuente original. Identifica resolución, vacíos, convención horaria y significado confirmado del tag antes de correlacionar. |
| `03 Datos trabajados/` | Análisis y Excel históricos. En `Revision_D4_v1/` hay CSV de posición, estados, tramos y resumen recalculados. | Para cifras de la propuesta comienza por la revisión auditada. Declara versión, reglas de limpieza y diferencias con ES1. |
| `04 Calculos/` | Memorias históricas de impacto. En `Revision_D4_v1/` está `escenarios_impacto.csv`. | Declara entradas, unidades, fórmula y supuesto de interrupción del flujo. Distingue capacidad diferida de pérdida observada. |
| `05 Figuras/` | Gráficos, diagrama conceptual, fotos, videos y captura de plano. | Usa [[05-Evidencia-visual]] y la bitácora para distinguir una observación visual de una identificación, una cota leída o una inferencia. |
| `06 Dossier/` | Dossier ES1 v2.0, Anexo 9 y presentación. | Úsalos como entregas históricas y contrasta las cifras con la auditoría. |
| `07 Registros del equipo/` | Respaldo histórico de distribución y acuerdos del equipo. | Para avances actuales usa [[12-Bitacora]]. |

### Unidad 2

La ruta es [Evidencias/M7/Unidad-2/](../Evidencias/M7/Unidad-2/).

| Subcarpeta | Qué encontrarás | Cómo proceder |
| --- | --- | --- |
| `00-Evaluacion/` | [U2_Evaluacion.pdf](../Evidencias/M7/Unidad-2/00-Evaluacion/U2_Evaluacion.pdf), pauta y escala de apreciación para U2_A06. | Consulta las páginas 6 a 10 para estructura, evidencias e indicadores. Si un resumen antiguo marca la pauta como pendiente, usa el PDF disponible. |
| `01-Actividades/` | `U2_Actividad1.pdf` corresponde a U2_A02, alternativas. `U2_Actividad2.pdf` corresponde a U2_A03, arquitectura. `U2_Actividad3.pdf` corresponde a U2_A04, validación. | Usa el identificador que aparece dentro del documento. La pauta también menciona U2_A05 como insumo. Verifica su disponibilidad antes de darlo por revisado. |
| `02-Anexos/` | Anexos 11 de requisitos, 13 de arquitectura, 14 de interfaces y ciberseguridad, 15 de escenarios, 16 de protocolo y 19 de dossier de diseño. | Usa cada anexo como estructura de trabajo. Identifica cuándo es plantilla o material didáctico. Contrasta los productos propios con la pauta. |
| `03-Productos-D4/` | Espacio para productos que genere el equipo. En la revisión del 10 de noviembre de 2026 contenía un marcador de carpeta. | Comprueba el contenido actual. Guarda un borrador o versión de entrega aquí cuando el equipo lo autorice. |

## Rutas rápidas por tarea

| Si necesitas trabajar en… | Empieza por… |
| --- | --- |
| Problema, contraparte y límites | [[01-Desafio-D4]], [[02-Operacion-actual]], [[13-Ficha-y-acta]] y [[04-Evidencias-y-fuentes]] |
| Qué quedó en ES1 y qué se corrigió | [[14-Expediente-ES1]], [[23-Revision-ES1-antes-de-ES2]] y [[24-Auditoria-de-datos-D4]] |
| Línea base, calidad e impacto | [[03-Linea-base]], [[15-Estadistica-de-zonas]], [[16-Registro-de-estados]] y [[17-Memoria-de-impacto]] |
| Causas, riesgos y evidencia de terreno | [[18-Diagnostico-causal-y-riesgos]], [[05-Evidencia-visual]] y [[12-Bitacora]] |
| Diseñar y comparar soluciones | [[00-Mapa-de-estudios]], [[EST-01-Posicionamiento-y-cobertura]], [[06-Requisitos]], [[07-Alternativas]] y [[21-Matriz-historica-de-alternativas]] |
| Integrar y validar | [[08-Arquitectura-DeltaV]], [[09-Validacion]] y [[19-Registro-de-pendientes]] |
| Preparar entrega, defensa y coordinación | [[10-Evaluacion-2]], [[11-Defensa-ES3]], [[20-Referencias-de-modulos]] y [[22-Configuracion-Obsidian-y-GitHub]] |

## Cómo proceder en una sesión

1. **Ubica el encargo.** Lee la pauta si el trabajo apunta a la evaluación. Revisa las últimas entradas de [[12-Bitacora]] y el pendiente asociado antes de repetir un análisis.
2. **Traza la pregunta.** Identifica qué decisión afecta, qué evidencia existe y qué dato falta. Usa los identificadores de fuentes, requisitos, estudios y pendientes que ya existen.
3. **Investiga y comprueba.** Abre la fuente original cuando sea posible. Si consultas fabricantes, registra modelo, versión, modo, configuración, condiciones y fecha de revisión. Si recalculas, indica insumos, unidades, método y resultado reproducible.
4. **Explica el aprendizaje.** Separa observación, interpretación y decisión. Traduce el dato técnico a su efecto para el D4. Por ejemplo, el plano permite leer **71,84 m de carrera nominal**. La distancia sensor–reflector depende del montaje. Consulta REG-D4-005 y las verificaciones posteriores antes de fijar un alcance.
5. **Convierte el vacío en una acción.** Redacta una pregunta precisa, a quién corresponde, qué evidencia solicitar y para qué decisión. Las preguntas C01 a C10 están en REG-D4-002. Añade aclaraciones con referencia al ID vigente.
6. **Registra el avance.** Deja el resultado y su estado en [[12-Bitacora]] cuando esté autorizado, con enlace al estudio o pendiente. Si el entorno es de solo lectura, entrega un registro en texto listo para incorporar. Al retomar después, consulta la entrada más reciente y conserva el historial de correcciones.

## Criterios para revisar la ES2

La ES1 se conserva como diagnóstico histórico. La ES2 corresponde a U2_A06, dossier de diseño y validación. La modalidad y los criterios oficiales de una defensa posterior deben verificarse con su propia pauta.

- Relaciona la causa del diagnóstico con un requisito medible y un criterio de aceptación que indique condición, método y aplicación.
- Compara familias con el mismo nivel de detalle e incluye el escenario de continuidad sin intervención. Declara criterios y pesos antes de puntuar.
- Distingue componentes nuevos y existentes. Describe rutas, dirección y validez de los datos, interfaces y estado degradado visible para el operador.
- Vincula cada escenario con el criterio, el resultado y su evidencia. Compara con línea base usando variables, unidades y condiciones equivalentes. Declara supuestos, simulaciones y verificaciones pendientes.
- Presenta riesgos de la propuesta, controles y responsables. Fundamenta costos, recursos, hitos, capacitación y contingencia. [Pauta ES2, páginas 6 a 10](../Evidencias/M7/Unidad-2/00-Evaluacion/U2_Evaluacion.pdf)

## Prompt breve para iniciar en otra IA

> Trabaja como asistente de investigación y aprendizaje del Proyecto de Título D4 de Joaquín Pinto y Kevin Leal. Abre el repositorio privado `Joakiingx/proyecto-titulo-d4` en `main` o la bóveda local autorizada. Lee `AGENTS.md`, `Notas/00-Contexto-para-IA.md`, las últimas entradas de `Notas/12-Bitacora.md` y los pendientes relevantes. Si no tienes acceso, indícame qué archivos necesitas para el encargo concreto. Sigue el mapa de carpetas y verifica las fuentes antes de reutilizar datos. Explica qué encontraste, por qué importa, para qué sirve, qué queda por comprobar y cómo se comprobará. Trabaja dentro del alcance autorizado y deja un registro que otra IA o un integrante del equipo pueda continuar.
