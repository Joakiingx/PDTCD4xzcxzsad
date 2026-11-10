# Auditoría y corrección de datos del Desafío D4

Revisión D4 v1 del 9 de noviembre de 2026. Esta nota y las tablas vinculadas constituyen la versión de trabajo corregida para la propuesta. Los Excel originales y el expediente de la ES1 se conservan como evidencia y antecedente histórico. El recálculo usa los archivos del repositorio en `b0376cc3c3c4eaa33ecbdae403b9719a1821e414`. Véase [[04-Evidencias-y-fuentes]].

## Cobertura y conciliación

| Insumo | Revisión | Resultado |
| --- | --- | --- |
| F01 y F02/F05 | Se verificaron ficha, tiempo declarado, meta, flujo, contexto y restricciones contra sus fuentes. | Los 10–15 min son una referencia declarada. El flujo de 200–350 t/h y el pico de 400 t/h provienen de F05. El punto medio de 275 t/h es un escenario. |
| F03 | Se procesaron las 792 filas de datos, excluyendo dos encabezados y la fila final vacía. | 781 filas con zona y 11 sin dato. 779 pares horarios evaluables de 791 y 78 cambios observados en 30 de 33 jornadas. |
| F04 | Se incluyeron los 488 registros y se ordenaron por marca civil con milisegundos. | 488 marcas distintas, 487 intervalos observados y 451 tramos, incluidos dos tramos de borde censurados. |
| D04 y copia de cálculo | Se revisaron las cinco hojas. Los dos libros tienen el mismo identificador de contenido en Git. | Cuadraron 30 conteos y 30 proporciones por zona publicada, así como las 24 celdas de impacto con sus parámetros históricos. La revisión incluye explícitamente las cinco zonas sin observación omitidas del detalle. |
| D05, D07 y D08 | Se contrastaron disponibilidad, estadísticas, supuestos, memoria de impacto y referencias históricas. | Se documentaron las discrepancias y se vinculó una versión corregida que separa mediciones, declaraciones, supuestos e hipótesis. |

## Bitácora de hallazgos y correcciones

| ID | Hallazgo verificable | Corrección aplicada |
| --- | --- | --- |
| DAT-01 | El Anexo 9 y D05 remiten a un consolidado depurado. D04 contiene resúmenes, cálculo y matriz de alternativas. Sus dos copias son idénticas. | Se publicaron las series fila por fila, los tramos, el resumen y los escenarios. Los libros históricos quedan identificados en el índice. |
| DAT-02 | D07 y D08 describen la fecha como 11-10. F03 almacena 10-11-2026 en las filas 603–626. | Se conserva la fecha original y se asigna la jornada 10-10-2026 por continuidad. Se etiqueta como supuesto. Se conserva el valor de hora Excel, incluidas 231 filas que ya codifican el día siguiente en horas de 00:00 a 06:00. |
| DAT-03 | F03 contiene 9 guiones y 2 celdas vacías. Los extremos del hueco del 06-10 muestran Z8. | Se conservaron los 11 faltantes, se excluyeron los 12 pares que los tocan y se cortó la permanencia en el hueco. |
| DAT-04 | D04 y D07 presentan 8 h como mediana de permanencia. | Con corte del hueco hay 80 tramos de observaciones consecutivas, mediana de 7,5 h y rango de 1–43 h. Con unión a través del hueco hay 79 tramos y mediana de 8 h, como sensibilidad histórica. |
| DAT-05 | El detalle D04 parte en Z6. D07 expresa un salto de zona como aproximadamente 5,7 m. | Se incluyen Z1–Z35 y las doce zonas sin observación. Los saltos se informan en zonas hasta contar con cotas. Se registraron 37 de una zona, 21 de dos a nueve y 20 de diez o más. |
| DAT-06 | La hoja 3 usa intervalos entre registros y tramos de estado como si fueran equivalentes. Presenta mediana de detención cercana a 39 min y máximo de 7,9 h. | Se separan 263 registros DETENIDO, 262 intervalos con duración y 226 tramos observados. Sobre 224 tramos completos, la mediana es 49,7 min y el máximo es 44,58 h de estado registrado. Hay 66/224 mayores a 3,5 h. |
| DAT-07 | D04 informa 23 detenciones de 2–15 min. | Los 23 corresponden a intervalos entre registros. Con tramos continuos completos resultan 22 de 2–15 min y 8 de 10–15 min. Los límites son inclusivos. |
| DAT-08 | Se describieron las 224 entradas a FUNCIONANDO como arranques del equipo sin identificación verificada. | Se etiquetan como transiciones a FUNCIONANDO de `320CV0251RUN`. Su mediana es 18,991 s y su duración observada es 5,98 h, el 0,83 % del intervalo del log. La identidad del equipo permanece pendiente. |
| DAT-09 | La correlación histórica 33/68 carecía de regla suficiente para reconstruir su subconjunto. | Se definió un cruce exploratorio auditable. Se informan 37/72 ventanas con registro F04 previo entre cambios elegibles y 124/638 entre pares sin cambio. Se separan las 6 diferencias de zona fuera de cobertura completa. |
| DAT-10 | El Excel de impacto usa 2,3636 fijo. La memoria Word usa 2,4. Sus resultados corresponden a esas entradas. | Se calcula con 78/33 y se redondea al presentar. Escenario nominal de 78,8–206,8 t/jornada y pico máximo de 236,4 t/jornada bajo interrupción total. |
| DAT-11 | Algunos encabezados aplican la meta <2 min a cálculos hechos con exactamente 2 min. La memoria combina 1,5 y 2 min al informar 80–90 %. | Se distinguen ambos escenarios. A 2 min, la reducción calculada es de 80,0–86,7 %. A 1,5 min es de 85,0–90,0 %. La reducción real y los ingresos evitados requieren medición. |
| DAT-12 | La matriz ES1 usa puntajes, costos, horas y mejoras estimadas sin respaldo suficiente para recalcularlas como resultados operacionales. | Se mantienen como supuestos históricos. La selección y los criterios de aceptación se contrastan en [[EST-01-Posicionamiento-y-cobertura]]. |

## Reglas que explican los resultados

- F03 se lee en su orden original. Cada jornada va de 07:00 a 06:00. El cambio se asigna a la observación posterior. El denominador de 33 jornadas conserva el bloque con datos incompletos y describe frecuencia observada. Los límites de zonas y el recorrido físico requieren el plano.
- F04 asigna a cada registro el intervalo hasta la siguiente marca. Los estados consecutivos iguales se unen en un tramo. El último registro carece de duración posterior. Los tramos primero y último aportan tiempo observado a los totales y se excluyen de las estadísticas de duración completa. El I/O Timeout se conserva como estado separado.
- El cruce usa la hora anterior a la observación F03 como intervalo con inicio incluido y fin excluido. Exige dos zonas válidas y que la ventana esté entre la primera y la última marca F04. Son 710 pares elegibles, 72 con cambio y 638 sin cambio. El 22,7 % de los 710 pares tiene algún registro F04 previo. Por separado, 35/72 cambios y 91/638 pares sin cambio tienen una entrada a FUNCIONANDO. Las marcas se comparan como horas civiles registradas. El cruce permanece exploratorio hasta confirmar convención horaria, identidad de la señal y completitud de registros.
- El modelo de impacto calcula tiempo y tonelaje por escenario de caudal constante y detención total de transferencia durante la espera. Capacidad potencial recuperable = caudal × minutos ahorrados ÷ 60 × 78/33. Distingue tonelaje diferido, capacidad potencial y resultado real. El tiempo de 10–15 min requiere delimitación y medición por fase con Operaciones.

## Archivos corregidos

| Archivo | Uso |
| --- | --- |
| [Posición depurada](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/posicion_tripper_depurada.csv) | 792 filas, zona original y válida, fecha original y corregida, cambio, tramo y recuentos del cruce. |
| [Eventos F04 depurados](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/estados_320CV0251RUN_depurados.csv) | 488 registros, orden civil, tipo de registro, siguiente marca e intervalo. |
| [Tramos F04](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/tramos_320CV0251RUN.csv) | 451 tramos con duración, repeticiones y marcas de inicio y fin de muestra. |
| [Resumen de línea base](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/resumen_linea_base.csv) | Indicadores y desglose por jornada, hora, zona, salto, estado y cruce. |
| [Escenarios de impacto](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/04%20Calculos/Revision_D4_v1/escenarios_impacto.csv) | 16 escenarios con los supuestos y cálculos en unidades explícitas. |
| [Generador y comprobación](../Analisis/D4/recalcular-datos.mjs) | Regenera las cinco tablas desde F03 y F04 y verifica su consistencia. |

## Reproducción y mantenimiento

Desde la raíz del repositorio, con Node.js instalado:

```powershell
node Analisis/D4/recalcular-datos.mjs --check
```

Sin `--check` el programa regenera las tablas de esta revisión. La verificación reconcilia conteos, cambios, tramos, tiempos y denominadores del cruce. Los CSV usan UTF-8, delimitador coma y punto decimal. Conserva el vínculo a la fila fuente y el registro de cambios al incorporar una nueva versión o un nuevo período.

[[03-Linea-base]] · [[15-Estadistica-de-zonas]] · [[16-Registro-de-estados]] · [[17-Memoria-de-impacto]] · [[23-Revision-ES1-antes-de-ES2]]
