# Validación de la propuesta

Protocolo inicial para acordar con Operaciones, Mantención E&I y DCS. Los criterios por definir se completan con la pauta y los datos de terreno.

| Qué comprobar | Evidencia esperada |
| --- | --- |
| Identificación de zona | Comparación entre señal de posición y referencia física en extremos y puntos intermedios. |
| Señal a DeltaV | Registro de posición, zona, calidad y marcas de tiempo en pantalla o histórico. |
| Pérdida y recuperación de señal | Prueba de lectura inválida y recuperación con la respuesta operativa acordada. |
| Tiempo de maniobra | Marcas desde solicitud hasta confirmación, con traslación medida por separado. Comparar trayectos y condiciones equivalentes. |
| Ingresos rutinarios | Registro de ingresos por verificación y de excepciones durante el período de prueba acordado. |
| Ventana de intervención | Secuencia y duración de montaje, configuración, pruebas y entrega operativa. |

Las pruebas de mesa o simulación validan los comportamientos que representen. La cobertura, los efectos ambientales y el impacto operacional en faena requieren evidencia correspondiente a esas condiciones.

[[03-Linea-base|Línea base]] · [[06-Requisitos|Metas]] · [[08-Arquitectura-DeltaV|Arquitectura]] · [[11-Defensa-ES3|Defensa]]

## Identificación de cada prueba

Registra requisito, escenario, condiciones iniciales, referencia independiente, resultado esperado, dato medido, evidencia y responsable. Para medir tiempo, utiliza solicitud, autorización, inicio de movimiento, llegada y confirmación si esas marcas están disponibles. Reporta cuántas maniobras pudieron compararse y por qué se excluyó alguna. [[17-Memoria-de-impacto]] · [[19-Registro-de-pendientes]]

## V07 · Prueba de escritorio de vigencia de una lectura

**Fecha y alcance.** 2026-11-10. Evaluación de una regla conceptual con entradas sintéticas en JavaScript. No se usó un sensor, una tarjeta DeltaV ni datos de planta. Los límites sintéticos de 0–10 m y 2 s sirven para ilustrar el método. Los valores de aceptación reales siguen pendientes.

**Regla evaluada.** Una muestra queda apta para evaluar la zona si existe, su origen la declara válida, posición y tiempo son finitos, la posición está entre 0 y 10 m y la edad `reloj de evaluación − marca de adquisición` está entre 0 y 2 s, incluyendo extremos. La categoría apta solo habilita evaluar la zona.

| Caso | Condición | Posición · marca · validez | Reloj | Esperado | Obtenido |
| --- | --- | --- | --- | --- | --- |
| V07-01 | Muestra inicial nueva | 4 m · 0 s · válida | 0 s | Apta para evaluar zona | Apta para evaluar zona |
| V07-02 | Carro inmóvil y nueva adquisición con el mismo valor | 4 m · 2,5 s · válida | 2,5 s | Apta para evaluar zona | Apta para evaluar zona |
| V07-03 | Pérdida de actualización, última muestra antigua | 4 m · 2,5 s · válida | 5 s | Inválida | Inválida |
| V07-04 | El origen marca el dato inválido | 4 m · 5,1 s · inválida | 5,1 s | Inválida | Inválida |
| V07-05 | Valor fuera del rango sintético | 11 m · 5,2 s · válida | 5,2 s | Inválida | Inválida |
| V07-06 | Recuperación con nueva adquisición válida | 4 m · 5,3 s · válida | 5,3 s | Apta para evaluar zona | Apta para evaluar zona |
| V07-07 | Intermediario vuelve a fechar una muestra antigua | 4 m · 5,4 s · válida | 5,4 s | Inválida | Apta para evaluar zona |

**Resultado.** Seis casos coincidieron con lo esperado. V07-07 mostró un falso dato vigente si el intermediario vuelve a fechar una muestra antigua. V07-02 mostró que una posición constante puede ser válida si se sigue midiendo. La regla evaluada distingue antigüedad solo cuando el tiempo proviene de la adquisición. Para una interfaz real, exigir un indicador de adquisición nuevo verificable, como una marca de origen o un contador ligado a la medición, y probar por separado pérdida de enlace, congelamiento del valor y reinicio. La recepción de mensajes por sí sola acredita actividad de la comunicación.

**Cierre pendiente.** Validar con DCS y proveedor qué información viaja, definir umbral y sincronización, y repetir el escenario con datos representativos. Vincula R07, PEND-04 y PEND-06. REG-D4-013 en [[12-Bitacora]].
