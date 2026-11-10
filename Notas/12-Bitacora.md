# Bitácora del proyecto D4

Esta nota reúne las decisiones, los avances técnicos y lo aprendido en cada revisión. Al retomar el proyecto, lee primero las últimas entradas de avances y revisa [[19-Registro-de-pendientes]] para conocer el estado vigente de cada verificación.

## Decisiones del proyecto

| Registro | Estado | Evidencia y consecuencia |
| --- | --- | --- |
| Usar D4 como código vigente | Base de trabajo | Ficha original y dossier. Conservar etiquetas D3 como referencias históricas. |
| Cierre de la Evaluación 1 | Informado por el equipo | El dossier ES1 v2.0 se mantiene como referencia de la etapa completada. |
| Radar fijo como candidato | Preliminar | El concepto responde a la ausencia de reserva en festón. Los modelos de la ES1 requieren revisión por alcance e interfaz. |
| Alcance inicial de monitoreo y confirmación | Propuesto | Acordar cualquier mando con Operaciones y DCS antes de cerrar ingeniería. |
| Fecha anómala en F03 | Supuesto documentado | El bloque rotulado 10-11-2026 corresponde por continuidad al 10-10-2026. Confirmar con la fuente. |
| Evaluación 3 ante comité | Prevista | El equipo informa que sería la presentación y defensa. Confirmar en pauta. |

Para cada nuevo acuerdo agrega fecha, participantes, decisión, fuente, estado y notas afectadas.

[[04-Evidencias-y-fuentes|Fuentes]] · [[10-Evaluacion-2|Trabajo próximo]] · [[11-Defensa-ES3|Defensa]]

El detalle de los pendientes se mantiene en [[19-Registro-de-pendientes]]. El estado de cada dato del diagnóstico se conserva en [[14-Expediente-ES1]] y [[04-Evidencias-y-fuentes]].

## Avances y aprendizajes

Agrega una entrada fechada en la misma actualización que incluya un cambio autorizado del repositorio. Enumera los archivos afectados. Registra también las revisiones, nuevas evidencias, recálculos, acuerdos y verificaciones cerradas. Usa identificadores `REG-D4-NNN` consecutivos. Para cada entrada deja quién hizo el aporte, qué se revisó y por qué, la fuente, el resultado y su estado, para qué se usará, y el paso siguiente o criterio de cierre. Si cambia una conclusión, conserva la entrada original y vincula la que la corrige. La bitácora registra el avance. Las notas técnicas y [[19-Registro-de-pendientes]] mantienen el detalle y el estado vigente. Las fotos y documentos de terreno se referencian desde su respaldo autorizado.

### REG-D4-001 · 2026-11-10 · Cruce de posición horaria y estado RUN

- **Aporte y evidencia.** Revisión asistida por IA a partir de las series depuradas F03 y F04, con criterio de calidad documentado en [[24-Auditoria-de-datos-D4]]. Consultar [[15-Estadistica-de-zonas]] y [[16-Registro-de-estados]].
- **Por qué.** El diagnóstico necesitaba distinguir la espera total de la duración del estado `FUNCIONANDO` y verificar si es posible vincular una entrada a ese estado con cada cambio de zona.
- **Resultado documentado.** De 224 tramos completos en `FUNCIONANDO`, 142 duraron menos de 30 s, 34 duraron desde 30 s hasta menos de 2 min y 48 duraron 2 min o más. La mediana fue de 18,991 s. De 72 cambios con ventana horaria evaluable, 35 coincidieron con al menos una entrada a ese estado en la hora previa y 17 de esos 35 tuvieron varias entradas.
- **Aprendizaje y uso.** El cruce horario orienta qué eventos investigar. La duración mecánica y la asociación de una entrada con una maniobra requieren identificar el tag y la convención de la planilla. Sirve para definir qué se medirá al evaluar la meta de 2 minutos.
- **Siguiente paso.** Contrastar una maniobra corta y una larga con Operaciones y DCS. Levantar las horas de solicitud, orden, movimiento observado y confirmación, además del estado del flujo. Asociado a PEND-02, PEND-05 y PEND-10.

### REG-D4-002 · 2026-11-10 · Preguntas de levantamiento para ES2

- **Aporte y estado.** Borrador preparado en la investigación del equipo con apoyo de IA. Respuestas pendientes de levantamiento. Se conserva la numeración del registro original.
- **Por qué y para qué.** Cada pregunta identifica una incertidumbre que condiciona el alcance, los requisitos, la selección o las pruebas. Las respuestas se vinculan al pendiente y a la nota técnica correspondiente.

| ID | Pregunta | Uso de la respuesta |
| --- | --- | --- |
| C01 | ¿Cómo ocurre el cambio de zona, quién mueve el carro, desde dónde y con qué permisivos? | Secuencia operativa y límites de intervención. |
| C02 | ¿Sala de Control debe ver la posición, confirmar llegada o también comandar el movimiento? | Alcance funcional y pruebas. |
| C03 | ¿Entre qué eventos se miden los 10 a 15 minutos actuales y la meta de menos de 2 minutos? ¿Incluye el recorrido largo? | Línea base y criterio de aceptación comparables. |
| C04 | ¿Cuál es el plano acotado de zonas y recorrido, dónde se podría montar un sensor y qué margen de posición admite la descarga? | Cobertura, precisión y montaje. |
| C05 | ¿Qué tipo de entrada, canal, alimentación y canalización fija pueden asignarse? | Interfaz viable con DeltaV. |
| C06 | ¿Qué equipo y variable origina `320CV0251RUN`? ¿Es orden, realimentación de marcha o indicación de movimiento? ¿Se puede contrastar con una maniobra? | Interpretar F04 y sus tiempos. |
| C07 | ¿Cuándo se detiene o reduce el flujo durante la maniobra y qué registro lo respalda? | Estimar el tonelaje diferido con datos de operación. |
| C08 | ¿Qué componente está instalado, a qué eje está acoplado y qué señales están disponibles? Por separado, ¿el 845H de bodega sigue disponible, está operativo y tiene sus accesorios? | Evaluar evidencia existente y el candidato de bodega como dos activos por identificar. |
| C09 | ¿Cuál fue el modelo, montaje y modo de falla del láser anterior? | Convertir el antecedente en condiciones de prueba. |
| C10 | ¿Cuánto tiempo efectivo queda para instalación y pruebas dentro de la parada mensual? | Dimensionar el plan de ejecución. |

### REG-D4-003 · 2026-11-10 · Encoder Allen-Bradley informado en bodega

- **Aporte y fuente.** Joaquín adjuntó en la conversación del 2026-11-10 una foto de placa e informó que el encoder estaba disponible en bodega de Puerto Patache. Ubicación del respaldo autorizado y disponibilidad actual pendientes. Las imágenes del componente en terreno siguen referenciadas en [[05-Evidencia-visual]].
- **Observado en placa.** Allen-Bradley `845H-SJDL26CMY2`, serie C, incremental, 500 y 8–24 V CC.
- **Contrastado con fabricante.** El boletín 845H corresponde a encoders ópticos incrementales rotativos. El código `CM` corresponde a 500 pulsos por vuelta y `6` a salida digital diferencial de 8–24 V CC. El grado de protección IP66 corresponde a la familia de catálogo. Rockwell indica que la serie 847 reemplazó a la 845H. [Catálogo Rockwell, págs. impresas 6-37 a 6-39](https://support.rockwellautomation.com/ci/okcsFattach/get/609416_20) · [Familia sucesora 847](https://www.rockwellautomation.com/es-ar/products/hardware/motion-control/847-high-resolution.html)
- **Por qué importa.** El disco óptico está dentro del equipo y lee el giro del eje. El láser anterior dependía de un haz en el ambiente de la nave. Para convertir el giro en posición del carro se requieren una referencia física, una relación de transmisión conocida y una verificación del error acumulado, incluida la pérdida de referencia y el deslizamiento cuando el montaje dependa de una rueda.
- **Para qué se usará.** Mantener el 845H como candidato de banco y de comparación en [[07-Alternativas]]. Su disponibilidad informada justifica evaluar el equipo. La aptitud para terreno, el costo de integración y la equivalencia con el componente instalado quedan pendientes.
- **Siguiente paso y criterio de cierre.** E&I confirma identidad, estado, conector y posible acople. DCS identifica el equipo receptor y verifica compatibilidad de niveles, conteo bidireccional a la frecuencia esperada y ruta de comunicación. El equipo contrasta conteo con una referencia física y documenta recuperación después de un corte de alimentación. La ausencia de hilos de reserva en el festón obliga a verificar una ruta de señal viable. Asociado a PEND-04, PEND-06, PEND-07 y C08.

### REG-D4-004 · 2026-11-10 · Revisión de la elevación longitudinal del tripper

- **Aporte y fuente.** Joaquín adjuntó `planos tripper.png`, captura de 601 × 341 píxeles. Se revisó la vista longitudinal aportada, con revisión y unidades del plano original pendientes de cotejo.
- **Observado.** Se distinguen los ejes 1 al 18, la estructura sobre la pila y un tramo central rotulado como recorrido del tripper (`TRIPPER TRAVEL`, lectura visual). La cadena de cotas muestra un tramo adicional hacia el extremo derecho. La captura no permite confirmar el valor del recorrido ni identificar los límites de las zonas de descarga Z1 a Z35.
- **Indicio geométrico.** La cota parcial derecha parece indicar `35000`. Si el original confirma 35 000 mm y la vista conserva la escala, el tramo central mide gráficamente cerca del doble de ese tramo, lo que sugiere un orden de magnitud de 70–72 m. Esta estimación de captura queda como hipótesis. Requiere leer la cota original y corroborar sus extremos.
- **Por qué y para qué.** Los aproximadamente 200 m declarados corresponden a la nave techada de los dos stockpiles. El recorrido útil del carro y la distancia entre un radar fijo y su reflector dependen de otras referencias. La elevación sirve para orientar el levantamiento de extremos, obstáculos y posibles puntos de montaje en [[EST-01-Posicionamiento-y-cobertura]].
- **Siguiente paso y criterio de cierre.** Para C04 y PEND-01, solicitar la elevación acotada en PDF/DWG o un recorte legible de las cotas superiores, con unidades y revisión. Confirmar los extremos operativos, la posición de las zonas y, para cada montaje candidato, las distancias mínima y máxima al carro. El original gráfico se conserva en el respaldo autorizado.

### REG-D4-005 · 2026-11-10 · Desglose de la elevación y cota de traslación

- **Aporte y fuente.** Joaquín adjuntó dos recortes ampliados del mismo plano, `image(1).png` y `image(2).png`. Sustituye la lectura provisional de las cotas de REG-D4-004. Se conserva el registro previo para mostrar cómo se corrigió.
- **Resultado principal.** En el recorte superior se lee `71840 TRAVEL`, equivalente a **71,84 m de recorrido nominal dibujado** al interpretar la cadena horizontal en milímetros. El valor de diseño se distingue del recorrido disponible en operación, sujeto a revisión del plano y verificación en terreno.
- **Cadena horizontal.** Desde el eje 1 hasta la primera referencia se lee `28360 (REF.)`. Sigue `71840 TRAVEL` y, hasta el eje 18, `35800`. La suma es 28,36 + 71,84 + 35,80 = **136,00 m entre los ejes 1 y 18 de la elevación**. Hacia la izquierda se aprecia una cota exterior cercana a 9,1 m y junto al comienzo del recorrido una cota auxiliar de aproximadamente 3,6 m, de función pendiente de cotejo. A la derecha se lee `4 SPACES @ 8000` asociado a expansión futura, equivalente a 32 m proyectados. Los 200 m del dossier se conservan como antecedente declarado de la nave de ambos stockpiles.
- **Equipos y referencias.** La vista superior muestra la correa elevada, dos representaciones del tripper en los extremos del recorrido y el rótulo `CONCENTRATE STORAGE CONVEYOR TRIPPER`. El identificador se lee como `320-CV025-1`. Es una pista para PEND-02 y C06 por su semejanza con `320CV0251RUN`. DCS debe confirmar qué variable origina el estado y cómo se genera. Se distinguen estructura, accesos y lazos que parecen corresponder a un festón, pendientes de cotejo con el plano eléctrico.
- **Stockpile y equipos inferiores.** La envolvente magenta rotulada `CONCENTRATE STOCKPILE MAX` representa un perfil máximo de acopio, con dos taludes y una parte superior aproximadamente horizontal. El rótulo `T.O. STOCKPILE EL.` marca la elevación superior respecto al datum del plano. Sin la cota de piso validada no entrega por sí solo la altura de la pila. Por proporción horizontal, la base dibujada es del orden de 110 m. Es una estimación gráfica y queda pendiente una cota directa. En la parte baja se identifican la torre `TAKE UP TOWER` a la izquierda y el `CONCENTRATE SCRAPER RECLAIMER` cerca del centro. El equipo dentro de la estructura auxiliar derecha queda sin identificar.
- **Por qué y para qué.** Con origen en eje 1, los límites dibujados del recorrido están en x = 28,36 m y x = 100,20 m. Para un montaje ideal, colineal y sin desfases, la distancia de medición sería 28,36–100,20 m desde eje 1 o 35,80–107,64 m desde eje 18. Este ejercicio explica por qué la carrera de 71,84 m y el alcance de detección exigido al instrumento son magnitudes distintas. Se usará en [[EST-01-Posicionamiento-y-cobertura]] como geometría preliminar.
- **Siguiente paso y criterio de cierre.** Para C04 y PEND-01, conseguir el original vigente con cajetín y unidades, la planta acotada Z1–Z35, y las posiciones de límites operativos. Confirmar puntos de montaje y reflector, alineación, distancias reales y obstáculos. Distinguir ejes estructurales, zonas de descarga, límites de traslación y perfil máximo de la pila.

### REG-D4-006 · 2026-11-10 · Guía de trabajo y verificación de la pauta ES2

- **Aporte y evidencia.** Se contrastó el árbol del repositorio con [AGENTS.md](../AGENTS.md), [[00-Contexto-para-IA]] y [U2_Evaluacion.pdf](../Evidencias/M7/Unidad-2/00-Evaluacion/U2_Evaluacion.pdf), páginas 6 a 10. Se comprobó el código interno de los tres PDF de actividades disponibles.
- **Resultado documentado.** La pauta de U2_A06 está disponible. Los PDF de actividades 1, 2 y 3 contienen U2_A02, U2_A03 y U2_A04. U2_A05 se menciona en la pauta, y al revisar la carpeta de actividades no se encontró un documento con ese código entre esos tres PDF.
- **Por qué y para qué.** Una IA nueva necesita conocer la ubicación, autoridad y alcance de cada insumo antes de recuperar cifras o redactar una entrega. Se actualizó la guía con inventario, orden de lectura, control de versiones, reglas de verificación, criterios de ES2 y un prompt portable.
- **Siguiente paso.** Vincular los productos del equipo a los criterios de la pauta y verificar con Docencia la disponibilidad del insumo U2_A05. Mantener separada la pauta de ES2 de la pauta de una defensa posterior.

### REG-D4-007 · 2026-11-10 · Radar pasivo de 150 m y filtro preliminar de alcance

- **Aporte y evidencia.** Se contrastó la geometría de REG-D4-005 con documentación pública de fabricante y proveedor. Aplican R01, R02, R03 y R04 de [[06-Requisitos]], EST-01 y PEND-06. Las cotas son de plano y los escenarios de montaje son hipotéticos.
- **Hallazgo nuevo.** SAG publica para el **KY-RAY 1D.01.01** un modo reflexivo con reflector recomendado, hasta 150 m, IP65, alimentación 9–36 V CC, 20 Hz, precisión publicada de hasta ±2,5 cm y Ethernet con TCP/IP, UDP y Profinet. Publica además una aplicación con radar fijo y reflector metálico pasivo. El resultado depende del ambiente y del blanco. La página ofrece solicitud de cotización. El PDF enlazado no estuvo accesible durante la revisión. [Ficha web, Datos técnicos](https://sag.ind.br/produtos/radares/ky-ray-1d/) · [Caso de aplicación](https://sag.ind.br/medicao-de-altura-de-containers-por-radar-em-ambientes-hostis/)
- **Cálculo reproducible.** La resta entre el máximo publicado de 150 m y los extremos lejanos teóricos de 100,20 m y 107,64 m deja diferencias nominales de 49,80 m y 42,36 m. Son diferencias de catálogo. El margen real requiere verificar extremo cercano, blanco, ángulo, oclusiones, polvo, acumulación y estabilidad de lectura. IP65 exige contrastar la condición ambiental y de limpieza con E&I. Un protocolo publicado requiere comprobar la interfaz DeltaV efectivamente disponible.
- **Contraste de configuraciones.** La ficha detallada DOC.DBL.000518.0012 de Symeo, págs. 3 a 5, separa el **LPR-1DHP-291** con reflector, típicamente 50 m, del modo secundario con dos unidades activas, hasta 300 m, y del modo diversidad de cuatro equipos, hasta 500 m según configuración. Un 291 pasivo queda fuera del filtro nominal para un único montaje en cualquiera de los ejes ilustrados. El par activo supera el filtro numérico preliminar y necesita alimentación móvil. El **LPR-1DHP-350** publica 40 m en primario y 100 m en secundario en la ficha consultada. Ambos quedan por debajo de los extremos lejanos de estos dos montajes hipotéticos. [Ficha 291, págs. 3–5](https://www.symeo.com/site/assets/files/8738/doc_dbl_000518_datasheet_symeo_lpr-1dhp-291_long_version.pdf) · [Ficha 350](https://www.symeo.com/site/assets/files/5617/doc_dbl_000500_0008_symeo_datasheet_lpr-1dhp-350_24-3725_sym_240208_online.pdf)
- **Para qué se usará.** Añadir SAG a los candidatos pasivos para solicitud técnica. Mantener como referencia de consulta el **Indurad iLDR-H-DN150**, cuya ficha pública identifica la variante como de largo alcance y remite a solicitar su ficha específica. Mantener el par activo Symeo y el encoder como configuraciones distintas de contraste. La selección técnica y los precios cotizados quedan pendientes. [Indurad, variante iLDR-H-DN150](https://indurad.com/sensors/1d-radar/)
- **Criterio de cierre.** Obtener distancias y límites operativos en terreno. Solicitar a cada proveedor reflector y requisitos de montaje, rango mínimo y máximo aplicable, tolerancia a desalineación, diagnóstico de lectura inválida, interfaz, mantenimiento, prueba representativa, soporte y cotización con componentes y plazos. Acordar aceptación con E&I y DCS antes de consolidar la matriz.

### REG-D4-008 · 2026-11-10 · Inventario y punto de entrada del proyecto

- **Aporte y evidencia.** Joaquín pidió ordenar la explicación del proyecto y las próximas investigaciones. Se verificó el árbol del repositorio y se contrastaron README, guía, bitácora, pendientes, notas de ingeniería, pauta U2_A06 y seis anexos de Unidad 2.
- **Resultado.** Se reutilizó [README.md](../README.md) como punto de entrada y [[10-Evaluacion-2]] como plan de la etapa. Se corrigió el estado de disponibilidad de la pauta y se relacionaron los anexos con requisitos, arquitectura, validación, riesgos y dossier. El Anexo 19 remite a U2_A05 para viabilidad y riesgos. La actividad específica queda pendiente de ubicar.
- **Por qué y para qué.** Se separó lo que ya respalda el diagnóstico, lo que debemos producir en ES2 y lo que corresponde a una defensa o piloto futuro. La guía [[00-Contexto-para-IA]] incorpora un prompt detallado y un formato común de captura de datos para retomar el trabajo.
- **Siguiente paso.** Completar la primera versión de la matriz del Anexo 11. Usar R01, R02 y R07 para enlazar el plano, el levantamiento de señales y los escenarios de prueba con sus criterios y responsables.

### REG-D4-009 · 2026-11-10 · Incorporación del insumo de gestión de riesgos

- **Aporte y evidencia.** Joaquín incorporó el [Manual Ciclo Gestion de Riesgos.pdf](../Evidencias/M7/Insumos/01-Gestion-de-riesgos/Manual%20Ciclo%20Gestion%20de%20Riesgos.pdf). Se verificó su presencia en el repositorio y se cotejó su función con la [Pauta U2_A06](../Evidencias/M7/Unidad-2/00-Evaluacion/U2_Evaluacion.pdf), p. 5, donde figura como Insumo CMDIC N.º 35.
- **Estado.** Localización y referencia en la pauta verificadas. La revisión directa del PDF y la identificación de su versión quedan pendientes. La pauta menciona aparte la planilla institucional de matriz.
- **Por qué y para qué.** El insumo dará contexto metodológico para justificar los controles, responsables y evidencias de los riesgos que introduce cada configuración del D4. Se indexó en [[20-Referencias-de-modulos]] y se dejó el cierre en PEND-11.
- **Siguiente paso.** Leer el manual, registrar sus páginas y criterios aplicables, verificar disponibilidad de la planilla y relacionar esos criterios con escenarios concretos de montaje, pérdida de datos y operación degradada.

### REG-D4-010 · 2026-11-10 · Trazabilidad de cada actualización

- **Aporte y evidencia.** Joaquín solicitó que cada cambio se registre. Se formalizó la regla en [AGENTS.md](../AGENTS.md) y [[12-Bitacora]]. Cada cambio autorizado en GitHub debe llevar su entrada en la misma actualización, con archivos afectados, por qué, evidencia, consecuencia y siguiente paso.
- **Uso.** Permite auditar qué cambió entre sesiones y retomar el trabajo desde su fuente.

### REG-D4-011 · 2026-11-10 · Borrador v0.1 del Anexo 11

- **Archivos.** [[06-Requisitos]] y [[10-Evaluacion-2]].
- **Evidencia y resultado.** Se cruzó el [Anexo 11](../Evidencias/M7/Unidad-2/02-Anexos/06_M7_Anexo_11_Matriz_de_requisitos_CTX_V01.docx) con R01–R07 y las causas del diagnóstico. Se prepararon sus cuatro tablas de trabajo con criterios, métodos, interfaces y una regla de prioridad preliminar.
- **Por qué y para qué.** La aceptación necesita evidencias comparables y responsables concretos. Se diferenció qué se puede evaluar documentalmente, qué se puede simular y qué requiere comprobación física.
- **Siguiente paso.** Confirmar tolerancias de zona, definición de fase de tiempo, ruta de señal y criterio de datos inválidos.

### REG-D4-012 · 2026-11-10 · Revisión documental de interfaces DeltaV

- **Archivos.** [[08-Arquitectura-DeltaV]].
- **Evidencia y resultado.** [SAG](https://sag.ind.br/produtos/radares/ky-ray-1d/) publica TCP/IP, UDP y PROFINET. Emerson documenta [PROFINET en PK](https://www.emerson.com/is/content/emerson/es/systems-and-software/deltav-distributed-control-system-dcs/product-data-sheets/documents/deltav-pk-controller.pdf) integrado desde v15.FP1 y otros protocolos en su [tarjeta EIOC](https://www.emerson.com/is/content/emerson/en/systems-and-software/deltav-distributed-control-system-dcs/product-data-sheets/documents/deltav-ethernet-io-card.pdf). La [entrada analógica CHARM](https://www.emerson.com/is/content/emerson/en/systems-and-software/deltav-distributed-control-system-dcs/product-data-sheets/documents/deltav-electronic-marshalling.pdf) admite 4–20 mA con las condiciones de su ficha.
- **Por qué y para qué.** Los nombres de interfaz y la disponibilidad de I/O no confirman compatibilidad. El hardware instalado y el método de transmitir validez deciden si hay conexión directa, conversión o necesidad de evaluar otra variante.
- **Siguiente paso.** Solicitar hardware, versión, protocolo y ruta autorizados a DCS, y documentación de posición, validez y vigencia al proveedor.

### REG-D4-013 · 2026-11-10 · Prueba de escritorio de datos congelados

- **Archivos.** [[09-Validacion]].
- **Evidencia y resultado.** Siete casos sintéticos en JavaScript. Seis coincidieron con lo esperado. Una lectura antigua aceptada tras volver a fecharla dejó en evidencia una limitación de la regla simple de antigüedad.
- **Aprendizaje y uso.** Una posición constante puede ser correcta con nuevas adquisiciones. Un mensaje nuevo puede transportar una medición antigua. Enlazar R07 con marca de adquisición o contador comprobable y repetir con evidencia representativa.
- **Estado.** Prueba de escritorio, con parámetros sintéticos. La lógica y los resultados de faena siguen por validar.

### REG-D4-014 · 2026-11-10 · Revisión de los once pendientes

- **Archivos.** [[19-Registro-de-pendientes]].
- **Evidencia y resultado.** Se revisaron PEND-01 a PEND-11. Cada uno tiene estado y evidencia de cierre. Se distinguieron geometría, integración y desempeño de las verificaciones de operación, docencia y riesgos.
- **Siguiente paso.** Priorizar plano acotado y recorrido real, inventario DCS y evidencia del proveedor. Completar en paralelo la secuencia de operación y el paquete académico. La lectura directa del manual institucional sigue pendiente.

### REG-D4-015 · 2026-11-10 · Auditoría integral y registro sin correcciones

- **Aporte y archivos.** Joaquín solicitó que toda IA revise la propuesta y los respaldos, y que deje constancia de posibles correcciones. Se actualizó [AGENTS.md](../AGENTS.md), [[00-Contexto-para-IA]] y esta bitácora. Se creó [[25-Registro-de-hallazgos-de-revision]] para identificar el alcance de revisión y sus observaciones.
- **Regla y uso.** Cada IA debe inventariar y verificar la propuesta completa, explicitar la cobertura y registrar posibles errores con evidencia e impacto. El material revisado se conserva intacto durante la auditoría. El equipo decide si corresponde una corrección en un encargo separado.
- **Primera pasada.** AUD-D4-001 verificó 331 destinos de enlaces internos y reprodujo la frecuencia y 160 valores de 16 escenarios sobre CSV derivados. REV-D4-001 registra una revisión de vigencia en EST-01. La auditoría integral de contenido sigue parcial y los bloques restantes se indican en el registro.

### REG-D4-016 · 2026-11-10 · Auditoría de originales y cobertura explícita

- **Encargo.** Joaquín solicitó revisar lo recopilado, investigar ampliamente y mejorar la matriz. Se aplicó la regla de auditar sin corregir los originales.
- **Base y archivos.** Commit f012d9bfb6aac21b22fab6c44c9cc438e31b92b9; 86 archivos. Nuevos [inventario CSV](../Analisis/D4/Inventario-revision-2026-11-10.csv) y [revisión integral](../Estudios/00-Revision-integral-y-brechas-2026-11-10.md); ampliación de [[25-Registro-de-hallazgos-de-revision]] con AUD-D4-002 y REV-D4-002–007.
- **Método y evidencia.** Se recuperaron 32 Markdown, cinco CSV y script; se extrajeron 18 DOCX/XLSX con CRC y se inspeccionaron las 14 imágenes. Recuento independiente desde F03/F04: 792/781/11 filas, 78 cambios; 488 eventos, 451 tramos, 37 repetidos y mediana FUNCIONANDO 18,991 s. Dos libros históricos tienen el mismo SHA. La tabla de cobertura distingue comprobación numérica de lectura y de inventario.
- **Aprendizaje y consecuencia.** Se sostienen conteos principales de la revisión v1. El tag sigue sin identificar. Se registraron discrepancias de configuración radar, principio WCS, presupuesto, descarte óptico, causalidad y alcance de meta temporal.
- **Estado y límites.** Auditoría parcial. Manual, dossier binario, presentación y videos sin lectura directa completa; cuatro PDF U2 con lectura previa referenciada y revisión directa actual pendiente. No se ejecutó Node --check ni prueba física. Originales conservados.
- **Siguiente paso.** Completar acceso pendiente y obtener evidencia de los responsables antes de cerrar hallazgos o autorizar correcciones.

### REG-D4-017 · 2026-11-10 · Catálogo técnico y precios trazables

- **Archivos.** Nuevo [catálogo](../Estudios/EST-01-Catalogo-y-precios-2026-11-10.md); vínculo en [[04-Evidencias-y-fuentes]].
- **Evidencia.** WEB26-01–32: fabricantes, publicaciones comerciales y referencias públicas. PR-01–13 separan precio, moneda, condición y alcance. Algunas referencias solo tienen precio por consulta. Se identifica timeout de reapertura en PR-08 y su contraste europeo.
- **Resultado calculado.** Par Symeo nuevo USD 19.034; configuración HF con módulo/cabezal/35 tags USD 5.296. VEGA publicado EUR 4.474,80 por unidad. Radio por par ilustrativo GBP 708. Todos son componentes parciales, con cantidades y exclusiones visibles.
- **Por qué y para qué.** Permite solicitar cotizaciones comparables y evitar usar un precio de sensor como presupuesto instalado. No se hizo conversión de monedas ni se inventó cotización de SAG/Indurad.
- **Estado.** Investigación documental; sin contactos, ofertas recibidas ni compras.
- **Siguiente paso.** BOM completo y respuesta técnica por SKU y montaje; PEND-06/12/13.

### REG-D4-018 · 2026-11-10 · Matriz de trabajo v02 por configuración

- **Archivos.** Nueva [matriz v02](../Estudios/EST-01-Matriz-de-soluciones-D4-v02.md); ampliación de [[07-Alternativas]]. La matriz histórica y fuentes ES1 se mantienen.
- **Qué cambió y por qué.** Trece escenarios/configuraciones, incluidos continuidad, variantes pasivas/activas, uno/dos VEGA, encoder, HF/UHF, código móvil, sensores fijos, WCS óptico y cinta magnética. Se usan 71,84 m nominales y montajes teóricos 100,20/107,64 m, sujetos a confirmación.
- **Método.** Filtros G1–G6 antes de puntuar, costos incompletos señalados, propuesta de pesos que suma 100 % y NC cuando falta evidencia. Pruebas diferenciadas por principio y fallo.
- **Consecuencia.** La prioridad es obtener evidencia de radares fijos con reflector, contrastar par activo y estudiar encoder disponible; las soluciones discretas dependen del objetivo que acepte Operaciones. No hay ganador, horas de montaje acreditadas ni mejora de faena demostrada.
- **Siguiente paso.** Levantar geometría, interfaz y criterio funcional; luego aplicar filtros y ensayo representativo. No trasladar puntajes históricos como resultados comerciales.

### REG-D4-019 · 2026-11-10 · Red de aprendizaje y preguntas de cierre

- **Archivos.** [Revisión integral y brechas](../Estudios/00-Revision-integral-y-brechas-2026-11-10.md), [mapa de estudios](../Estudios/00-Mapa-de-estudios.md), [[19-Registro-de-pendientes]], [README](../README.md) e índices enlazados en REG-D4-017/018.
- **Resultado.** Se conservan EST-01–07 y se proponen EST-08–12 para ambiente, salud/riesgos, OT, compras/ciclo de vida y trazabilidad. Veintiséis preguntas con destinatario, propósito, evidencia y decisión. Se añaden PEND-12 RF, PEND-13 presupuesto, PEND-14 criterios funcionales y PEND-15 arquitectura OT; PEND-01–11 permanecen abiertos.
- **Aprendizaje.** Explicaciones de rango/carrera, precisión de cadena, latencia, cuadratura, lectura localizada, disponibilidad e impacto por supuestos. El plan conecta trabajo con anexos 11/13/14/15/16/19 y distingue ejemplos docentes de datos D4.
- **Uso con otras IA.** Cada aporte debe identificar base, fuente, categoría, cálculo, consecuencia y próxima verificación; las discrepancias se remiten a REV. Cada cambio conserva su REG.
- **Siguiente paso.** Resolver paquete de definición, registrar tiempos y solicitar especificaciones/BOM. Preparar material de consulta; su envío no se ha realizado.
- **Control documental de esta actualización.** Once archivos preparados, cuatro nuevos y siete ampliados. Se comprobaron 168 destinos de enlaces internos en los Markdown resultantes, sin destinos faltantes; subtotales de componentes y suma de pesos recalculados. No hay ediciones dentro de Evidencias ni cambios del script o CSV técnicos previos.
