# Ficha original y reunión con la contraparte

## F01 · Levantamiento del desafío

La ficha del 3 de agosto de 2026 fue levantada por Daniela Guerra Sepúlveda, jefa de Mantención Eléctrica e Instrumentación de Puerto Patache. Su filtro inicial registra recurrencia diaria, prioridad 4 de 5 y evidencia inicial basada en experiencia operacional. Los dos Excel se incorporaron después.

- Sala de Control solicita apoyo en terreno al cambiar la zona. El operador se traslada, sube a la parte superior del stockpile, verifica visualmente y confirma o ejecuta el cambio.
- La ficha informa 10–15 min por movimiento y fija una meta de menos de 2 min. También menciona disponibilidad del operador y exposición durante el traslado. En esa etapa faltaba cuantificación de recuperación o costo.
- Se busca identificación o monitoreo integrado a Sala de Control, con confirmación o eventual mando. Las exclusiones son cambios estructurales mayores, reemplazo del sistema de control y detenciones prolongadas.
- Se informa un intento previo con sensor láser y desempeño insatisfactorio atribuido a la polución. La marca, el modelo, las condiciones de montaje y el desempeño medido no constan en la ficha.
- La ficha menciona planos de distancias y zonas. El plano acotado que se necesita para diseñar todavía no figura entre las evidencias revisadas.

## F02 · Reunión técnica de octubre de 2026

El acta del equipo registra dos stockpiles en una nave techada de aproximadamente 200 m de extremo a extremo. Esa cifra describe el edificio y sirve para dimensionar el problema. El recorrido útil del carro y las distancias reales al instrumento requieren verificación.

La contraparte informó uso de Emerson DeltaV sin PLC o SCADA independiente para este caso, ausencia de variable de posición en línea, polución, humedad y calor, disponibilidad de 110 VAC, ventana mensual de 12 h y CAPEX flexible sujeto a factibilidad. La cifra inicial de frecuencia era del orden de dos cambios al día. La estadística posterior de F03 calculó 2,36 cambios horarios observados por día.

## F05 · Confirmaciones escritas del 23 de octubre

| Pregunta | Respuesta registrada | Consecuencia |
| --- | --- | --- |
| ¿Dónde están las I/O disponibles? | En Sala Eléctrica, sin controlador en terreno. | Levantar tipo de canal, bornes, energía y ruta de señal. |
| ¿Hay conductores de reserva en el festón? | Sin disponibilidad de hilos de reserva. | Toda opción debe resolver la señal sin recurrir a esos hilos. |
| ¿Cuál es el flujo de la 320CV025? | Entre 200 y 350 t/h, con máximos ocasionales de 400 t/h. | Usar como dato declarado en el cálculo por escenarios. |
| ¿Qué permisivos habilitan el movimiento? | La tutora indicó que solicitaría el dato al área DCS. | Mantener pendiente. El acta no contiene la lógica. |

Según el registro de origen D05, los dos Excel cuantitativos se recibieron el 22 de octubre de 2026. [[04-Evidencias-y-fuentes]] · [[06-Requisitos]] · [[19-Registro-de-pendientes]]
