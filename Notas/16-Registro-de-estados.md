# Registro de estados 320CV0251RUN

F04 es el libro de eventos entre el 16 de septiembre y el 16 de octubre de 2026. La hoja y la leyenda de la tendencia incrustada identifican la señal como `320CV0251RUN`. La columna de estados se titula «Estado correa». Esos rótulos documentan el archivo. La identificación del equipo real requiere confirmación de DCS u Operaciones.

| Indicador recalculado | Resultado |
| --- | --- |
| Registros | 488 |
| DETENIDO | 263 |
| FUNCIONANDO | 224 |
| I/O Timeout | 1 |
| Repeticiones consecutivas | 37, todas DETENIDO |
| Intervalo entre la primera y la última marca | 722,79 h |
| Tiempo acumulado de tramos en FUNCIONANDO | 21.529,946 s, equivalentes a 5,98 h y 0,83 % del intervalo |
| Duración de tramos en FUNCIONANDO | Mediana 18,991 s y máximo 854,318 s |
| Tramo con I/O Timeout | 42,391 s el 21 de septiembre |

Para reproducir, combina fecha y hora, ordena ascendente y atribuye a cada estado el tiempo hasta el siguiente registro. El último registro carece de duración posterior observada. Conserva Timeout como categoría propia y declara si agrupas estados repetidos para análisis de ciclos.

## Lectura técnica

El perfil intermitente es compatible con la hipótesis de que la señal corresponde a la traslación. La misma hipótesis requiere trazabilidad al tag real y a las marcas de maniobra. Los 224 registros de marcha son registros de esta señal. La serie horaria F03 tiene otra granularidad y carece de inicio y fin de movimiento por evento. Para cruzarlas, acuerda la convención 07:00–06:00, resuelve la fecha anómala y usa un criterio de ventana explícito.

La pestaña 3 del consolidado incluye una correlación exploratoria entre cambios y eventos. La cifra se conserva como antecedente de trabajo. Para usarla ante el comité, documenta cómo se obtuvieron el subconjunto temporal y su denominador.

[[03-Linea-base]] · [[15-Estadistica-de-zonas]] · [[19-Registro-de-pendientes]]
