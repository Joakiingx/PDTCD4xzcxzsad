# Línea base de la Evaluación 1

| Dato | Valor | Estado y fuente |
| --- | --- | --- |
| Registro horario | 792 registros en 33 bloques, 781 con zona y 11 sin zona | Reproducido desde F03. |
| Cambios observados | 78, equivalentes a 2,36 por día | Reproducido desde F03. Cada registro representa una observación horaria. |
| Tamaño del cambio | 37 de una zona y 20 de diez zonas o más. Máximo de 25 zonas. | Reproducido desde F03. Los saltos se expresan en zonas. |
| Tiempo actual | 10–15 min por movimiento | Declarado en F01 y F02. Falta medir fases de la maniobra. |
| Flujo | 200–350 t/h y pico de 400 t/h | Declarado por escrito en F05. |
| Tonelaje diferido | 78,8–206,8 t/día a flujo nominal | Escenario con frecuencia exacta. Supone interrupción durante toda la espera. |
| Registro de estados | 488 registros, 224 en FUNCIONANDO, mediana de marcha ≈19 s, marcha ≈0,83 % del intervalo | Reproducido desde F04. El accionamiento asociado a la señal requiere confirmación. |

Tonelaje diario del escenario = flujo horario × minutos de espera por maniobra ÷ 60 × cambios diarios. El dossier expresa el rango redondeado como aproximadamente 80–210 t/día. Mantén el mismo criterio de redondeo en informe, planilla y láminas.

## Regla de reproducción

El original F03 agrupa jornadas de 07:00 a 06:00. El bloque con fecha almacenada 10-11-2026 encaja por secuencia como 10-10-2026. Registra esa interpretación como supuesto. Trata guiones y celdas vacías como dato faltante. Cuenta diferencias de zona entre filas horarias adyacentes con zona válida. El bloque sin zona del 06-10 va de 09:00 a 19:00.

Queda pendiente documentar el procedimiento reproducible con una serie depurada fila por fila y confirmar la convención horaria antes de correlacionar F03 con F04.

[[04-Evidencias-y-fuentes|Fuentes F01–F05]] · [[06-Requisitos|Metas]] · [[09-Validacion|Medición antes y después]]

## Detalle disponible para reutilizar

- [[15-Estadistica-de-zonas]] contiene las tablas por jornada, zona, hora y magnitud del cambio, con el método de depuración.
- [[16-Registro-de-estados]] contiene métricas, regla de cálculo e interpretación del log de estados.
- [[17-Memoria-de-impacto]] contiene fórmulas y los cuatro escenarios de flujo.

La afirmación precisa es que se observaron cambios en 30 de 33 jornadas. Para permanencia, el redondeo o tratamiento del hueco debe declararse.
