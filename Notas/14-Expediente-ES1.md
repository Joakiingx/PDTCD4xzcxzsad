# Expediente de la Evaluación 1

El dossier D01 y el Anexo 9 D02 están identificados como versión 2.0 del 1 de noviembre de 2026. El cierre de la evaluación en clases fue informado posteriormente por el equipo.

| Sección del dossier D01 | Contenido conservado en la bóveda |
| --- | --- |
| 1 Delimitación | [[01-Desafio-D4]] y [[13-Ficha-y-acta]] |
| 2 Actores y restricciones | [[02-Operacion-actual]] y [[06-Requisitos]] |
| 3 Trazabilidad | [[04-Evidencias-y-fuentes]] y [[19-Registro-de-pendientes]] |
| 4 Línea base | [[03-Linea-base]], [[15-Estadistica-de-zonas]], [[16-Registro-de-estados]] y [[17-Memoria-de-impacto]] |
| 5 Diagnóstico causal | [[18-Diagnostico-causal-y-riesgos]] y [[21-Matriz-historica-de-alternativas]] |
| 6 Riesgos | [[18-Diagnostico-causal-y-riesgos]] |
| 7 Verificaciones pendientes | [[19-Registro-de-pendientes]] |
| Conclusiones e inventario de respaldo | [[01-Desafio-D4]], [[04-Evidencias-y-fuentes]] y [[05-Evidencia-visual]] |

## Qué cubre la presentación D03

La presentación tiene siete láminas. La secuencia es portada, delimitación, actores y restricciones, línea base, diagnóstico causal, comparación de alternativas y cierre con riesgos y verificaciones. La lámina 6 llama Opción B al radar fijo y Opción A al doble radar. Los puntajes y horas son estimaciones de la ES1.

## Diferencias que deben quedar rastreadas

- Algunos títulos y nombres conservan D3. El identificador vigente del caso es D4.
- D02 cita nombres antiguos y describe un consolidado con hojas de series limpias. El libro entregado en las carpetas 03 y 04 es idéntico en ambas ubicaciones y contiene cinco hojas de resúmenes, cálculos y nivelación.
- La fecha anómala de F03 está guardada como 10-11-2026. D01 la describe como 11-10 y duplicada. La regla de reconstrucción y las filas afectadas están en [[15-Estadistica-de-zonas]].
- El conjunto de alternativas cambia entre dossier, láminas y Excel. La comparación histórica está en [[21-Matriz-historica-de-alternativas]].
- La meta de tiempo se expresa con porcentajes distintos según el archivo. La comparación con un escenario fijo de 2 min está en [[17-Memoria-de-impacto]].
- El esquema de radar usa `ZT-025`, iRPU, 4–20 mA y una fuente de 24 VDC como componentes conceptuales. El tag definitivo, la compatibilidad y la alimentación efectiva deben verificarse.

La revisión frente a la retroalimentación del docente y las condiciones que pasan al diseño están en [[23-Revision-ES1-antes-de-ES2]].

## Correcciones para reutilizar la ES1 en ES2

Para una lámina, argumento o cálculo nuevo, usa las formulaciones de trabajo de esta tabla. D01, D03, D04, D07, D08 y las figuras identifican las versiones de la entrega previa. [Índice de fuentes](04-Evidencias-y-fuentes.md)

| Ubicación donde aparece | Formulación respaldada para ES2 |
| --- | --- |
| D01 §§ 1.3 y 5.3–5.4. D03 láminas 4 y 6. Alcance de cobertura de 200 m y salto de una zona estimado en 5,7 m. | Los aproximadamente 200 m corresponden a la nave, según F02. F07 aporta «71840 TRAVEL» en la elevación. La equivalencia de 71,84 m supone unidades en milímetros. Los saltos de F03 se informan en zonas hasta cotejar sus referencias y extremos efectivos. [Plano](05-Evidencia-visual.md#plano-mostrado-en-la-primera-reunión). |
| D01 §§ 1.2, 1.5 y 4.4. D03 láminas 2 y 7. Frecuencia de cambios y unas 72 exposiciones mensuales. | F03 contiene 78 diferencias entre observaciones horarias válidas en 33 jornadas. Es un recuento de cambios registrados. Los ingresos, su duración y la exposición requieren evidencia específica. F01 declara el traslado presencial y 10–15 min por movimiento. [Línea base](03-Linea-base.md). |
| D01 §§ 4.2–4.4. D03 láminas 4 y 7. Estados de marcha y tonelaje diferido. | F04 registra 224 tramos completos en FUNCIONANDO de una señal por identificar. Interpretar la traslación requiere confirmar el tag. El tonelaje corresponde a un cálculo bajo interrupción total de la transferencia durante la espera y uso de un caudal declarado. [Estados](16-Registro-de-estados.md) · [Cálculo](17-Memoria-de-impacto.md). |
| D01 §§ 2.2, 5.1 y 5.3–5.4. D03 lámina 5. Inmunidad al polvo y patinaje como causa. | F01 informa que el rendimiento del láser previo fue insatisfactorio por polución. El desempeño de una alternativa se comprueba en condiciones representativas. El patinaje sigue como hipótesis. [Diagnóstico causal](18-Diagnostico-causal-y-riesgos.md). |
| D01 §§ 2.2, 5.4 y 7. D03 lámina 6 y FIG-04. Ganador, horas de montaje y mejoras anticipadas. | RFID y radar quedan en estudio. Los puntajes, porcentajes, costos y tiempos históricos requieren respaldo antes de reutilizarse. F05 declara I/O en sala eléctrica. El tipo de canal, los 24 VDC en el punto de conexión y cualquier rango efectivo de un modelo requieren verificación. [Alternativas](07-Alternativas.md) · [Integración](08-Arquitectura-DeltaV.md). |
| D01 tablas de éxito y D03 láminas 6–7. Meta de espera y disponibilidad. | F01 plantea una meta de menos de 2 min. Falta acordar fase y comparar maniobras equivalentes. El >99 % es una meta preliminar de ES1. Definir indicador, ventana, denominador y prueba con Operaciones y DCS. [Requisitos](06-Requisitos.md). |
