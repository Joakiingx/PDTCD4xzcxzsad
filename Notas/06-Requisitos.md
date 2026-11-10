# Requisitos y restricciones

| ID | Requisito o meta | Fuente o estado |
| --- | --- | --- |
| R01 | Determinar posición o zona en todo el recorrido operativo acordado, incluyendo extremos. | Plano Z1–Z35 y recorrido real pendientes. |
| R02 | Integrar la posición a Emerson DeltaV con señal válida y diagnóstico disponible para Sala de Control. | I/O disponibles en Sala Eléctrica, F05. Tipo de canal y protocolo por levantar. |
| R03 | Prescindir de hilos de reserva del festón existente. | Restricción confirmada en F05. |
| R04 | Evaluar desempeño con polvo, humedad, calor y geometría de la nave. | F01–F02 y evidencia visual. Criterios de prueba por acordar. |
| R05 | Planificar la intervención dentro de la ventana mensual de 12 h y con la alimentación disponible. | 12 h y 110 VAC declarados en F02. Verificar punto de conexión. |
| R06 | Alcanzar menos de 2 min por maniobra en la fase acordada y cero ingresos rutinarios para verificación visual. | Meta de propuesta. Definición de tiempos y validación con Operaciones pendientes. |
| R07 | Definir calidad de señal, umbral de disponibilidad y respuesta a lectura inválida. | ES1 propone >99 % de disponibilidad. Criterio y ventana por acordar. |

[[04-Evidencias-y-fuentes|Fuentes]] · [[07-Alternativas|Alternativas]] · [[09-Validacion|Validación]]

## Exclusiones y aceptación

Se excluyen cambios estructurales mayores, reemplazo de DeltaV y detenciones prolongadas. La ventana de 12 h es una restricción declarada para la intervención completa. La duración de cada fase es una estimación hasta contar con un plan. La fuente eléctrica disponible y la alimentación que exige el instrumento son dos datos que se deben cotejar.

Para R01, usa cotas físicas y un criterio de error por zona. Para R02, demuestra datos, calidad y eventos en DeltaV. Para R06, acuerda qué instantes delimitan la meta de tiempo y registra excepciones. [[09-Validacion]] · [[19-Registro-de-pendientes]]
