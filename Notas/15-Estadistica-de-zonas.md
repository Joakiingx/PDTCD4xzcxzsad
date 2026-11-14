# Estadística reproducible de zonas

Fuente F03. Entre la jornada del 15-09-2026 y la jornada del 17-10-2026 hay **33 bloques de 24 horas**, 792 filas, 781 zonas válidas y 11 horas sin zona. Se observaron **78 cambios**, en **30 de 33 jornadas** y en **22 de 24 horas del reloj**. La mediana diaria es 2 y el máximo es 6 usando jornadas de 07:00 a 06:00. Los bloques de medianoche a medianoche producen un máximo distinto.

## Reglas de depuración

1. Lee las columnas de fecha, hora y zona en el orden del archivo original. Omite las dos filas de encabezado y la fila final vacía.
2. Cada jornada se rotula al inicio del bloque de 07:00 a 06:00. La hora Excel original ya contiene el día adicional en las 231 filas de 00:00 a 06:00. Para construir la marca civil se suma ese valor original a la fecha de jornada corregida. El último registro corresponde a las 06:00 del 18-10 en tiempo civil.
3. Las filas 603–626 se guardaron como 10-11-2026. Por secuencia se tratan como jornada del 10-10-2026. Conserva ambas versiones y etiqueta la corrección como supuesto.
4. El 06-10 entre 09:00 y 19:00 hay nueve guiones y dos celdas vacías en la columna zona. Déjalas sin dato. Los extremos observados del hueco están en Z8, sin información de lo que ocurrió dentro.
5. Cuenta cambios únicamente entre filas horarias consecutivas con zona válida. Atribuye cada cambio al instante y jornada de la observación posterior. Para permanencia, la política conservadora corta la estadía en un hueco. Produce 80 estadías y mediana de 7,5 h, con rango 1–43 h. El dossier informa mediana de 8 h. Unir los registros válidos a ambos lados del hueco cuando tienen la misma zona da 79 estadías y mediana de 8 h.

Los saltos representan diferencias de código en F03. Z1–Z35 es la nomenclatura usada en esta serie y en su resumen histórico. Se observaron 23 códigos distintos. Antes de interpretar la distancia de saltos o asignarlos a alguno de los dos trippers, hace falta el cruce de códigos con sus referencias físicas. [Evidencia disponible](05-Evidencia-visual.md#plano-mostrado-en-la-primera-reunión)

## Horas por zona

Totales por sectores definidos en la ES1. Z6–Z13 registran 357 h, Z15–Z24 284 h y Z31–Z35 140 h. Las 23 zonas con dato suman 781 h. Una zona con cero horas significa ausencia de observación en esta muestra.

| Zona | Horas | Zona | Horas | Zona | Horas |
| --- | --- | --- | --- | --- | --- |
| Z1 | 0 | Z13 | 2 | Z25 | 0 |
| Z2 | 0 | Z14 | 0 | Z26 | 0 |
| Z3 | 0 | Z15 | 14 | Z27 | 0 |
| Z4 | 0 | Z16 | 13 | Z28 | 0 |
| Z5 | 0 | Z17 | 18 | Z29 | 0 |
| Z6 | 57 | Z18 | 30 | Z30 | 0 |
| Z7 | 9 | Z19 | 45 | Z31 | 40 |
| Z8 | 82 | Z20 | 47 | Z32 | 56 |
| Z9 | 98 | Z21 | 38 | Z33 | 6 |
| Z10 | 70 | Z22 | 35 | Z34 | 21 |
| Z11 | 27 | Z23 | 22 | Z35 | 17 |
| Z12 | 12 | Z24 | 22 | — | — |

## Cambios por magnitud

37 cambios saltan una zona, 21 saltan entre dos y nueve, y 20 saltan entre diez y veinticinco. Equivalen respectivamente a 47,4 %, 26,9 % y 25,6 %.

| Zonas de diferencia | Cambios | Zonas de diferencia | Cambios |
| --- | --- | --- | --- |
| 1 | 37 | 14 | 2 |
| 2 | 5 | 15 | 1 |
| 3 | 4 | 16 | 0 |
| 4 | 1 | 17 | 0 |
| 5 | 1 | 18 | 1 |
| 6 | 2 | 19 | 0 |
| 7 | 3 | 20 | 0 |
| 8 | 4 | 21 | 0 |
| 9 | 1 | 22 | 3 |
| 10 | 0 | 23 | 2 |
| 11 | 2 | 24 | 1 |
| 12 | 3 | 25 | 3 |
| 13 | 2 | — | — |

## Cambios por hora del reloj

| Hora | Cambios | Hora | Cambios | Hora | Cambios |
| --- | --- | --- | --- | --- | --- |
| 00:00 | 5 | 08:00 | 3 | 16:00 | 3 |
| 01:00 | 3 | 09:00 | 3 | 17:00 | 2 |
| 02:00 | 3 | 10:00 | 4 | 18:00 | 2 |
| 03:00 | 1 | 11:00 | 3 | 19:00 | 7 |
| 04:00 | 6 | 12:00 | 3 | 20:00 | 3 |
| 05:00 | 4 | 13:00 | 3 | 21:00 | 3 |
| 06:00 | 0 | 14:00 | 5 | 22:00 | 4 |
| 07:00 | 2 | 15:00 | 0 | 23:00 | 6 |

## Cambios y completitud por jornada

| Jornada | Fecha inicial | Horas con zona | Cambios |
| --- | --- | --- | --- |
| 01 | 15-09 | 24 | 2 |
| 02 | 16-09 | 24 | 2 |
| 03 | 17-09 | 24 | 3 |
| 04 | 18-09 | 24 | 0 |
| 05 | 19-09 | 24 | 3 |
| 06 | 20-09 | 24 | 2 |
| 07 | 21-09 | 24 | 3 |
| 08 | 22-09 | 24 | 1 |
| 09 | 23-09 | 24 | 1 |
| 10 | 24-09 | 24 | 3 |
| 11 | 25-09 | 24 | 0 |
| 12 | 26-09 | 24 | 2 |
| 13 | 27-09 | 24 | 1 |
| 14 | 28-09 | 24 | 2 |
| 15 | 29-09 | 24 | 1 |
| 16 | 30-09 | 24 | 2 |
| 17 | 01-10 | 24 | 4 |
| 18 | 02-10 | 24 | 0 |
| 19 | 03-10 | 24 | 3 |
| 20 | 04-10 | 24 | 2 |
| 21 | 05-10 | 24 | 2 |
| 22 | 06-10 | 13 | 1 |
| 23 | 07-10 | 24 | 2 |
| 24 | 08-10 | 24 | 1 |
| 25 | 09-10 | 24 | 6 |
| 26 | 10-10 | 24 | 4 |
| 27 | 11-10 | 24 | 4 |
| 28 | 12-10 | 24 | 5 |
| 29 | 13-10 | 24 | 4 |
| 30 | 14-10 | 24 | 4 |
| 31 | 15-10 | 24 | 4 |
| 32 | 16-10 | 24 | 2 |
| 33 | 17-10 | 24 | 2 |

[[03-Linea-base]] · [[16-Registro-de-estados]] · [[17-Memoria-de-impacto]]

[Serie depurada de 792 filas](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/posicion_tripper_depurada.csv) · [Resumen recalculado](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/resumen_linea_base.csv) · [[24-Auditoria-de-datos-D4]]
