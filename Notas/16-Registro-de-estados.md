# Registro de estados 320CV0251RUN

F04 es el libro de eventos del 16 de septiembre al 16 de octubre de 2026. La hoja y la tendencia identifican la señal como `320CV0251RUN`. La columna está rotulada «Estado correa». La identificación del equipo requiere confirmación de DCS u Operaciones.

| Estado | Registros | Intervalos con duración | Tramos observados | Tramos completos | Horas de estado observado |
| --- | ---: | ---: | ---: | ---: | ---: |
| DETENIDO | 263 | 262 | 226 | 224 | 716,799 |
| FUNCIONANDO | 224 | 224 | 224 | 224 | 5,981 |
| I/O Timeout | 1 | 1 | 1 | 1 | 0,012 |
| **Total** | **488** | **487** | **451** | **449** | **722,791** |

Las horas se redondean por fila. Las 37 repeticiones corresponden a DETENIDO. Un intervalo es el tiempo entre dos marcas. Un tramo une intervalos consecutivos del mismo estado. El primer y último tramo tienen un extremo desconocido y se cuentan para el tiempo observado. Las estadísticas de duración usan tramos completos.

- **DETENIDO.** Mediana de 49,7 min, máximo registrado de 44,58 h, 66 de 224 tramos mayores a 3,5 h, 22 entre 2 y 15 min y 8 entre 10 y 15 min. Estos datos describen el estado del tag.
- **FUNCIONANDO.** Se registraron 224 entradas a ese estado. La mediana es 18,991 s y el máximo es 854,318 s. Representa 0,83 % del intervalo total del log.
- **I/O Timeout.** Aparece el 21-09-2026 a las 16:01:03.149 con un intervalo de 42,391 s.

## Cruce exploratorio con F03

La hora previa completa al registro F03 se evalúa cuando ambos registros horarios tienen zona válida y la ventana está dentro del intervalo F04. Hay 710 pares comparables. Entre 72 cambios elegibles, 37 tienen algún registro F04 previo. Entre 638 pares sin cambio, 124 tienen algún registro previo. Seis cambios F03 quedaron fuera de cobertura completa. Para una comprobación operacional hacen falta sincronización horaria, identificación del accionamiento y marcas de maniobra.

[Eventos depurados](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/estados_320CV0251RUN_depurados.csv) · [Tramos depurados](../Evidencias/M7/Propuesta%20de%20soluci%C3%B3n%20M7/03%20Datos%20trabajados/Revision_D4_v1/tramos_320CV0251RUN.csv) · [[24-Auditoria-de-datos-D4]] · [[15-Estadistica-de-zonas]] · [[19-Registro-de-pendientes]]
