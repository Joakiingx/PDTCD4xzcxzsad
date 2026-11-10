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

## Anexo 11 · Borrador de trabajo v0.1 · 2026-11-10

Se conservan los identificadores R01–R07. Esta propuesta organiza las cuatro tablas del [Anexo 11](../Evidencias/M7/Unidad-2/02-Anexos/06_M7_Anexo_11_Matriz_de_requisitos_CTX_V01.docx). La clasificación y las pruebas son de trabajo. Se deben acordar tolerancias, prioridades operacionales y criterios finales con sus responsables. Las causas y restricciones remiten al expediente ES1 y a [[04-Evidencias-y-fuentes]].

### 11.1 Requisitos y origen

| ID | Capacidad o condición exigida | Tipo | Causa o restricción de origen | Prioridad y carácter propuestos |
| --- | --- | --- | --- | --- |
| R01 | Determinar zona o posición utilizable a lo largo de todo el recorrido operativo acordado, incluidos extremos y fronteras. | Técnico | Ausencia de información remota de posición obliga a verificar visualmente, F01 y diagnóstico ES1. | Alta · Obligatorio |
| R02 | Entregar a Sala de Control el dato de posición o zona, su validez y el estado de la interfaz. | Técnico | El sistema de supervisión carece de la señal, F01. La contraparte declara I/O disponibles en Sala Eléctrica, F05. | Alta · Obligatorio |
| R03 | Integrar y alimentar la configuración usando rutas autorizadas que prescindan de hilos de reserva del festón. | Técnico | Festón sin hilos de reserva, F05. | Alta · Obligatorio |
| R04 | Mantener identificación utilizable bajo las condiciones ambientales y geométricas acordadas. | Técnico | Falla previa de medición en ambiente con polvo y suciedad, F01 y F02. | Alta · Obligatorio |
| R05 | Planificar el montaje, pruebas y restitución operativa dentro de la ventana autorizada y con alimentación compatible. | Operacional | Ventana mensual de 12 h y alimentación declaradas, F02. | Alta · Obligatorio |
| R06 | Reducir el tiempo de la fase acordada y permitir confirmación remota sin ingreso rutinario por verificación. | Operacional | Espera declarada y traslado del operador para verificar, F01 y F02. | Alta · Capacidad requerida. Valores meta sujetos a acuerdo |
| R07 | Identificar datos inválidos o antiguos, mostrar la degradación y recuperar la indicación con evidencia de una lectura vigente. | Técnico | La supervisión remota necesita distinguir posición actual de una posición sin respaldo vigente. Requisito derivado de F01 y del diseño de ES2. | Alta · Función requerida. Disponibilidad por acordar |

### 11.2 Criterios, método y recursos

| ID | Magnitud o condición esperada | Método | Condiciones y recurso |
| --- | --- | --- | --- |
| R01 | Cobertura de todos los tramos operativos acordados. Error máximo y tratamiento de las fronteras pendientes. | Contrastar posición o zona con referencias independientes en extremos, puntos intermedios y fronteras. | Planta de zonas, extremos vigentes y tolerancia de Operaciones. La cota nominal de 71,84 m orienta el diseño. |
| R02 | El operador recibe posición o zona y una indicación interpretable de su calidad. Formato, latencia y tasa por acordar. | Prueba funcional desde el origen hasta pantalla y, cuando aplique, registro de evento o histórico. | Configuración de I/O autorizada o maqueta representativa. El ensayo de maqueta verifica lógica e intercambio representado. |
| R03 | Trazabilidad completa de cada conexión, sin asignar hilos de reserva del festón. | Revisar esquema de energía y señal, bornes y listado de rutas. | Levantamiento E&I y DCS. Si existe unidad móvil, identificar fuente, protección y ruta autorizadas. |
| R04 | Resultado dentro del criterio R01 y de la calidad R07 en el entorno acordado. | Definir escenario ambiental representativo y contrastar desempeño con referencia física. | Definir polvo, acumulación, humedad, temperatura, obstáculos y método de ensayo con E&I. |
| R05 | Plan completo dentro de 12 h declaradas, sujeto a confirmar duración efectiva y energía. | Revisar precedencias, tareas previas, duraciones, pruebas y restitución. | Plan de trabajo, responsables y ventana aprobada. Es estimación hasta medir una intervención real. |
| R06 | Metas ES1 de menos de 2 min para la fase que se acuerde y cero ingresos rutinarios de verificación. | Comparar maniobras equivalentes y registrar marcas de fase, ingresos y excepciones. | Acordar inicio, fin, trayectos y condiciones operativas. La meta de tiempo requiere una línea base comparable. |
| R07 | Lectura inválida o antigua se distingue visualmente y la confirmación de zona queda inhibida en el diseño conceptual. Meta histórica de disponibilidad superior a 99 % pendiente de definición. | Simular pérdida, congelamiento y recuperación. En prueba representativa, comprobar antigüedad y calidad desde el origen. | Definir umbral de antigüedad, ventana de disponibilidad, denominador y respuesta con Operaciones y DCS. Véase V07 en [[09-Validacion]]. |

### 11.3 Interfaces derivadas

| ID | Interfaz | Tipo | Elemento existente | Riesgo a verificar |
| --- | --- | --- | --- | --- |
| R01, R04 | Medición y referencia respecto al recorrido | Física y datos | Carro, nave, límites de zona | Desalineación, oclusión o zona incorrecta. |
| R02, R07 | Posición, estado y vigencia hasta supervisión | Señal y datos | Sala Eléctrica, DeltaV y HMI | Dato incompatible o antiguo que parece válido. |
| R03, R05 | Alimentación, canalización y secuencia de intervención | Energía, física y procedimiento | Festón, infraestructura fija y ventana de mantenimiento | Ruta sin capacidad disponible o pérdida de continuidad. |
| R06 | Solicitud, confirmación y contingencia | Procedimiento y datos | Sala de Control y operador de terreno | Comparación entre fases distintas o confirmación sin respaldo. |

### 11.4 Priorización preliminar

Regla declarada antes de aplicar. Prioridad alta si la capacidad atiende directamente la ausencia de confirmación, controla un fallo que invalidaría esa confirmación o satisface una restricción de instalación. El orden de trabajo se deriva de las dependencias. Es una prioridad de diseño, separada de la valoración de riesgos institucional.

| Requisito | Aporte y severidad cualitativa de la condición que atiende | Dependencia para especificar o validar |
| --- | --- | --- |
| R01, R04 | Sin cobertura o con lectura afectada por el ambiente, la zona puede quedar indeterminada. | Primero geometría, límites, ambiente y criterio de error. |
| R02, R07 | Sin dato compatible y vigente, Sala de Control no puede confirmar con respaldo. | Canal, protocolo, estados y referencia temporal de origen. |
| R03, R05 | Ruta, energía y ventana condicionan factibilidad. | Inventario y levantamiento de E&I y DCS, plan de montaje. |
| R06 | Tiempo e ingresos expresan el valor operacional del cambio. | Medición de la secuencia y comparabilidad con línea base. |

[[10-Evaluacion-2]] · [[19-Registro-de-pendientes]] · REG-D4-011 en [[12-Bitacora]].
