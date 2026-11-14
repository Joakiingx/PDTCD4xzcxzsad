# Evaluación 2 · Plan de diseño y validación D4

**Insumos académicos localizados.** Pauta U2_A06, actividades U2_A02 a U2_A04 y anexos 11, 13, 14, 15, 16 y 19 disponibles. La pauta menciona U2_A05 y el Anexo 19 lo vincula a viabilidad y riesgos. La actividad específica, la fecha de entrega y la matriz institucional editable quedan por confirmar. Los productos D4 se encuentran en preparación. [Pauta U2_A06](../Evidencias/M7/Unidad-2/00-Evaluacion/U2_Evaluacion.pdf) · [[19-Registro-de-pendientes]]

## Producto de esta etapa

Dossier grupal de diseño y validación, con requisitos, alternativas, arquitectura e interfaces, evidencia de prueba, riesgos, recursos y plan preliminar. Ambos integrantes deben poder explicar la decisión, la alternativa descartada y la respuesta a fallas. El trabajo se apoya en el diagnóstico auditado y declara el entorno y el alcance de cada prueba. [Carpeta Unidad 2](../Evidencias/M7/Unidad-2/) · [[24-Auditoria-de-datos-D4]]

## Orden de ejecución y evidencia para cerrar cada frente

| Orden | Frente y estado | Usar y completar | Evidencia de cierre |
| --- | --- | --- | --- |
| 1 | **Diagnóstico a requisitos.** Existe borrador R01–R07. | Cruzar causas y fuentes del diagnóstico con U2_A02 y Anexo 11. Para cada requisito separar capacidad, prioridad y obligatoriedad, aceptación, método, condiciones e interfaz. Resolver supuestos sobre metas con Operaciones. | Matriz que permite seguir causa → requisito → criterio. Cada criterio tiene una forma viable de comprobarse. [[06-Requisitos]] |
| 2 | **Levantamiento y comparación.** Hay fichas candidatas y geometría nominal. | Completar ficha EST-01. Levantar extremos, zonas, referencia cero, posiciones de montaje y condiciones ambientales. Comparar por familia y configuración con filtros excluyentes, y documentar la continuidad sin intervención. Obtener cotizaciones con alcance comparable. | Ficha de cada configuración con fuente, geometría, interfaces y estado de cada filtro. Pesos justificados antes de puntuar. [[EST-01-Levantamiento-y-consulta-tecnica]] · [[07-Alternativas]] |
| 3 | **Operación, arquitectura e interfaces.** Hay esquema conceptual. | Levantar secuencia actual, roles y señales con Operaciones. Aplicar U2_A03 y anexos 13 y 14. Identificar el hardware existente, la ruta, origen, destino, calidad, sincronización y modo degradado. Mantener rotuladas las tablas simuladas. | Diagrama nuevo/existente y matriz de interfaces, con revisión DCS pendiente o realizada según evidencia. [[02-Operacion-actual]] · [[08-Arquitectura-DeltaV]] |
| 4 | **Validación y comparación con línea base.** Hay protocolo inicial. | Aplicar U2_A04 y anexos 15 y 16. Definir antes de probar el escenario normal y al menos uno límite. Incluir pérdida de lectura y recuperación cuando corresponda. Elegir análisis, simulación, prototipo o caso aplicado según qué se quiere demostrar. | Registro de protocolo y resultados por escenario, con criterio, condiciones, evidencia y limitación. Las pruebas de lógica y las pruebas físicas quedan diferenciadas. [[09-Validacion]] |
| 5 | **Viabilidad, riesgos y plan.** Hay antecedentes de ES1 y un manual institucional incorporado. | Verificar U2_A05. Separar riesgo actual del desafío y riesgo que introduce la solución. Usar las secciones revisadas del manual y confirmar la planilla institucional antes de asignar niveles. Estimar costo, tareas previas, uso de la ventana mensual, responsables, pruebas y contingencia. | Matriz multicriterio, registro de riesgos con controles y verificación, estimación con fuentes y secuencia de implementación. [[20-Referencias-de-modulos]] · [[17-Memoria-de-impacto]] |
| 6 | **Integración del dossier.** Plantilla y pauta disponibles. | Aplicar Anexo 19 y pauta U2_A06. Verificar que cada conclusión remita a un respaldo, que supuestos y brechas queden declarados y que las cifras sean coherentes entre dossier y defensa. | Dossier con trazabilidad de causa, requisito, decisión y evidencia. Preparación de defensa con una explicación verificable por integrante. [[11-Defensa-ES3]] |

Los frentes 1, 2 y el levantamiento de operación del frente 3 pueden avanzar en paralelo. El protocolo se puede redactar mientras se levantan insumos. La aceptación final y la estimación de montaje dependen de la configuración y de la evidencia que realmente se consiga. Las asignaciones de ES2 se acuerdan entre Joaquín y Kevin.

## Próximo producto de trabajo

La revisión del 13 de noviembre prioriza respaldar la observación de la visita y cruzar la lámina disponible con los códigos de zona. [Plano y conteo](05-Evidencia-visual.md#plano-mostrado-en-la-primera-reunión) Con Operaciones se debe acordar si basta confirmar la zona al llegar antes de cerrar R01. RFID y radar quedan en reevaluación. [Fuentes de la visita y del plano](04-Evidencias-y-fuentes.md#antecedentes-de-la-visita-y-del-plano)

Revisar el borrador de Anexo 11 en [[06-Requisitos]] y completar sus criterios con los pendientes de terreno. La carpeta [Productos D4](../Evidencias/M7/Unidad-2/03-Productos-D4/README.md) indica dónde vincular los documentos del equipo. Comenzar por cobertura R01, integración R02 y señal válida R07, y conservar los requisitos operacionales de tiempo y exposición. Para cada criterio, registrar qué condición conocemos, qué valor falta acordar y con qué prueba sería defendible.

| Requisito | Base disponible | Qué falta para redactar un criterio comprobable |
| --- | --- | --- |
| R01 · Cobertura e identificación de zona | Verificación presencial en F01. Carrera dibujada de 71,84 m en REG-D4-005. | Acordar zonas operativas, tolerancia y si se exige confirmar al llegar o informar durante el traslado. Definir una referencia física para comprobarlo. PEND-01/14. |
| R02 · Integración a DeltaV | Disponibilidad de I/O declarada en F05. Arquitectura conceptual ES1. | Obtener tipo de canal y protocolo efectivos, y definir qué datos deben llegar y mostrarse. Diseñar una comprobación desde la fuente hasta la indicación en Sala de Control. PEND-04 · EST-03 |
| R07 · Validez y recuperación | Riesgo de lectura inválida documentado en la propuesta conceptual y meta preliminar de disponibilidad en ES1. | Acordar cuándo una lectura queda antigua, qué ve el operador y cómo se confirma que la señal se recuperó. Definir ventana e indicador de disponibilidad antes de atribuir un porcentaje. PEND-06 · EST-03 y EST-04 |

[[00-Mapa-de-estudios]] · [[19-Registro-de-pendientes]] · [[12-Bitacora]] · [[00-Contexto-para-IA]]
