# Ficha original y reunión con la contraparte

## F01 · Levantamiento del desafío

La ficha del 3 de agosto de 2026 fue levantada por Daniela Guerra Sepúlveda, jefa de Mantención Eléctrica e Instrumentación de Puerto Patache. Su filtro inicial registra recurrencia diaria, prioridad 4 de 5 y evidencia inicial basada en experiencia operacional. Los dos Excel se incorporaron después.

- Sala de Control solicita apoyo en terreno al cambiar la zona. El operador se traslada, sube a la parte superior del stockpile, verifica visualmente y confirma o ejecuta el cambio.
- La ficha informa 10–15 min por movimiento y fija una meta de menos de 2 min. También menciona disponibilidad del operador y exposición durante el traslado. En esa etapa faltaba cuantificación de recuperación o costo.
- Se busca identificación o monitoreo integrado a Sala de Control, con confirmación o eventual mando. Las exclusiones son cambios estructurales mayores, reemplazo del sistema de control y detenciones prolongadas.
- Se informa un intento previo con sensor láser y desempeño insatisfactorio atribuido a la polución. La marca, el modelo, las condiciones de montaje y el desempeño medido no constan en la ficha.
- La ficha menciona planos de distancias y zonas. Según Joaquín, la tutora mostró el material en un PPT en esa primera reunión. Joaquín aclaró que la captura disponible es la lámina de referencia del equipo. Falta documentar su procedencia detallada y cruzar sus referencias con los códigos operativos. [Fuente F07](04-Evidencias-y-fuentes.md#antecedentes-de-la-visita-y-del-plano)

## F02 · Reunión técnica de octubre de 2026

El acta del equipo registra dos stockpiles en una nave techada de aproximadamente 200 m de extremo a extremo. Esa cifra describe el edificio y sirve para dimensionar el problema. El recorrido útil del carro y las distancias reales al instrumento requieren verificación.

La contraparte informó uso de Emerson DeltaV sin PLC o SCADA independiente para este caso, ausencia de variable de posición en línea, polución, humedad y calor, disponibilidad de 110 VAC, ventana mensual de 12 h y CAPEX flexible sujeto a factibilidad. La estimación inicial era del orden de dos cambios al día. El análisis de F03 obtiene 2,36 diferencias de zona por jornada a partir de pares horarios válidos.

## F05 · Confirmaciones escritas del 23 de octubre

| Pregunta | Respuesta registrada | Consecuencia |
| --- | --- | --- |
| ¿Dónde están las I/O disponibles? | En Sala Eléctrica, sin controlador en terreno. | Levantar tipo de canal, bornes, energía y ruta de señal. |
| ¿Hay conductores de reserva en el festón? | Sin disponibilidad de hilos de reserva. | Toda opción debe resolver la señal sin recurrir a esos hilos. |
| ¿Cuál es el flujo de la 320CV025? | Entre 200 y 350 t/h, con máximos ocasionales de 400 t/h. | Usar como dato declarado en el cálculo por escenarios. |
| ¿Qué permisivos habilitan el movimiento? | La tutora indicó que solicitaría el dato al área DCS. | Mantener pendiente. El acta no contiene la lógica. |

Según el registro de origen D05, los dos Excel cuantitativos se recibieron el 22 de octubre de 2026. [[04-Evidencias-y-fuentes]] · [[06-Requisitos]] · [[19-Registro-de-pendientes]]

## Visita a Puerto Patache del 01-11-2026

Fuente F06. Relato de Joaquín registrado en la conversación de revisión del 13-11-2026.

- **Observación del equipo.** Durante la visita, vieron al tripper descargando concentrado en un stockpile. El equipo conserva fotos y videos. Falta asociar el relato al archivo y momento específicos. [Inventario visual](05-Evidencia-visual.md)
- **Declaración verbal de Omar, encargado de Mantención de Equipos e Instrumentación, según Joaquín.** Informó que se estaba instalando una antena inalámbrica cerca del tripper y que podría servir para el envío de señales. Omar recomendó reevaluar RFID junto con radar a partir de su experiencia. Queda pendiente confirmar esos antecedentes con el interlocutor, el estado de la instalación y las condiciones para usarla en el proyecto.
- **Hipótesis actual de Joaquín.** Confirmar la zona al llegar podría cubrir la necesidad del operador. Se estudia una configuración con etiquetas por zona. Operaciones debe precisar el alcance y qué se muestra ante tránsito, pérdida de lectura o confirmación desactualizada.

[Comparación en estudio](07-Alternativas.md)
