# Registro de verificaciones y decisiones pendientes

| ID | Qué obtener o decidir | Fuente o contraparte | Para qué se necesita |
| --- | --- | --- | --- |
| PEND-01 | Planta acotada Z1–Z35, extremos operativos y secciones. La elevación aporta 71,84 m de carrera nominal en REG-D4-005. | E&I y Operaciones. Verificar el plano vigente y su aplicación en terreno. | Cobertura, referencias y conversión a zona. |
| PEND-02 | Identificación de la señal 320CV0251RUN y equipo que la origina. | DCS y Operaciones. | Interpretación de F04 y cruce con F03. |
| PEND-03 | Filosofía de control, secuencia y permisivos actuales. | DCS. Solicitado por tutora el 23-10-2026. | Acotar confirmación y eventual mando. |
| PEND-04 | Tipo de I/O libre, alimentación exacta, bornes y canalización. | E&I y DCS. | Elegir señal, alimentación y ruta fija compatibles. |
| PEND-05 | Medición antes de la propuesta. | Sala de Control y operador en terreno. | Separar caminata, verificación, traslación, confirmación y efecto sobre el flujo. |
| PEND-06 | Desempeño de la configuración candidata con alcance real y diagnóstico de calidad. | Proveedor y E&I. | Revisar requisitos excluyentes y validar selección. |
| PEND-07 | Identificar carro y componente rotulado encoder en las imágenes. | Mantención E&I. | Ubicación de montaje y compatibilidad de alternativas. |
| PEND-08 | Pauta U2_A06 disponible. Verificar actividad U2_A05, fecha de entrega y pauta, modalidad y fecha de la evaluación posterior. | Docencia INACAP–Collahuasi. | Completar viabilidad y riesgos de ES2 y programar entrega y defensa. |
| PEND-09 | Acordar material audiovisual autorizado para presentación. | Equipo y contraparte. | Seleccionar imágenes para el comité. |
| PEND-10 | Confirmar convención horaria y fecha anómala de la planilla. | Operaciones y fuente de F03. | Correlaciones temporales defendibles. |
| PEND-11 | Revisar contenido y versión del Manual de Ciclo de Gestión de Riesgos, y obtener la planilla institucional de matriz que menciona la pauta. | Manual incorporado en Insumos. Verificar con Docencia y contraparte el formato y su vigencia. | Aplicar criterios, controles y escalamiento con la referencia correcta. |

## Ronda de estudio · 2026-11-10

**Bloqueantes de selección.** PEND-01, PEND-04 y PEND-06. **Bloqueantes para confirmar operación e impacto.** PEND-02, PEND-03, PEND-05 y PEND-10. PEND-07 condiciona la alternativa encoder. PEND-08, PEND-09 y PEND-11 condicionan productos, material autorizado o metodología. Estos grupos ordenan el trabajo de esta ronda.

| ID | Avance y estado | Evidencia concreta que permitiría avanzar o cerrar |
| --- | --- | --- |
| PEND-01 | Carrera nominal leída. Geometría operativa abierta. | Plano vigente con cajetín, referencia cero, extremos, planta de zonas y cotas sensor–blanco por montaje. E&I y Operaciones. |
| PEND-02 | El plano contiene un identificador semejante al tag. La semántica del estado sigue abierta. | Nombre del módulo y definición de `320CV0251RUN`, más un evento de maniobra identificado por Operaciones. DCS. |
| PEND-03 | Se separaron monitoreo, confirmación y mando. Falta la secuencia vigente. | Secuencia autorizada y descripción de permisivos, responsables y contingencia. DCS y Operaciones. |
| PEND-04 | Contraste documental de rutas analógica y de datos en [[08-Arquitectura-DeltaV]]. | Modelo, versión, protocolo y rol habilitados, canal, bornes, alimentación y ruta. DCS y E&I. |
| PEND-05 | Método de comparación por fase definido. Falta medición comparable. | Una maniobra corta y una larga con marcas de solicitud, autorización, movimiento, confirmación y dato de flujo o detención si existe. Operaciones. |
| PEND-06 | Filtro nominal de alcance y prueba conceptual V07. Falta comprobar configuración completa. | Confirmación del blanco, alcance por montaje, diagnóstico, integración, prueba representativa y cotización con componentes. Proveedor y E&I. |
| PEND-07 | Identificado el modelo en la foto de bodega. El componente instalado sigue abierto. | Placa y eje acoplado del componente instalado. Por separado, condición, conector y disponibilidad del Allen-Bradley de bodega. E&I. |
| PEND-08 | Pauta U2_A06 disponible y Anexo 19 relaciona U2_A05 con viabilidad y riesgos. | Copia de U2_A05 y confirmación de fecha de entrega. Pauta y modalidad de evaluación posterior cuando corresponda. Docencia. |
| PEND-09 | Inventario visual disponible. Material autorizado para defensa por acordar. | Lista de imágenes y planos aprobados para mostrar y restricciones de circulación aplicables. Equipo y contraparte. |
| PEND-10 | Supuesto de fecha y tratamiento del registro horario documentados en la auditoría. | Confirmación de fecha civil, hora efectiva de registro y significado de la marca. Operaciones o responsable de F03. |
| PEND-11 | Manual localizado. La pauta identifica su rol y distingue la planilla institucional. | PDF legible con versión y secciones aplicables, más copia autorizada de la planilla o confirmación de cómo usar el formato académico. Docencia y contraparte. |

Al cerrar un pendiente, registra la fecha, quién entregó la evidencia, el identificador de la fuente y qué afirmaciones o decisiones pasan a otro estado. Usa [[12-Bitacora]] para acuerdos y [[10-Evaluacion-2]] para productos y plazos.
