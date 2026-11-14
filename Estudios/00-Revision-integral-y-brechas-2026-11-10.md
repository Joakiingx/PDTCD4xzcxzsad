# Revisión integral, aprendizaje y brechas · D4
**Corte:** 10-11-2026. **Base:** commit f012d9bfb6aac21b22fab6c44c9cc438e31b92b9 del repositorio D4. **Revisor:** asistente IA a solicitud de Joaquín. **Registros:** AUD-D4-002 y REG-D4-016–019. **Estado:** revisión documental amplia, todavía parcial por fuentes sin lectura directa y verificaciones de terreno pendientes.

Este documento registra la revisión del 10-11-2026. El estado actualizado de la visita, el plano y la reevaluación de alternativas se consulta en el [README](../README.md).

## 1. Para qué sirve esta ronda

Dejar una base que Joaquín y Kevin puedan comprender, explicar y reutilizar con otras IA. Cada conclusión debe mostrar qué evidencia la sostiene, qué supuesto usa, qué decisión permite y qué dato podría cambiarla. La prioridad es transformar la documentación disponible en requisitos, configuraciones y pruebas defendibles para ES2 y para un futuro proyecto de título.

Productos de esta ronda:
- [Matriz de soluciones v02](EST-01-Matriz-de-soluciones-D4-v02.md): 13 escenarios/configuraciones incluyendo continuidad actual, variantes de radar, encoder, RFID, identificación discreta y rieles.
- [Catálogo y precios](EST-01-Catalogo-y-precios-2026-11-10.md): 12 fichas de estudio, 32 referencias identificadas, condiciones de precios y subtotales reproducibles.
- [Inventario de revisión](../Analisis/D4/Inventario-revision-2026-11-10.csv): los 86 archivos de la base, con ruta, SHA, tamaño y cobertura por archivo. Es una instantánea anterior a los nuevos documentos.
- [Hallazgos](../Notas/25-Registro-de-hallazgos-de-revision.md): discrepancias por revisar, sin corregir fuentes históricas.
- Este plan: ramas, vacíos, preguntas concretas y entregables.

## 2. Qué se pudo revisar y qué queda abierto

El árbol base contiene 86 archivos: 32 Markdown, 20 Office, 5 PDF, 14 imágenes, 3 videos, 5 CSV, un script, un archivo de configuración y cinco marcadores de carpeta. El inventario por tipo acredita presencia; la tabla siguiente limita lo que acredita cada revisión.

| Conjunto enumerado | Método de esta ronda | Resultado y límite |
| --- | --- | --- |
| Los 32 Markdown de la base, enumerados en CSV | Recuperación de texto; contraste temático de diagnóstico, fuentes, auditoría, requisitos, arquitectura, pendientes, ES2 y alternativas | Se enlazan resultados históricos y requisitos abiertos. No se da por comprobada una afirmación solo por repetirse en una nota. Enlaces nuevos se revisan antes de guardar. |
| Ficha original D4 XLSX; Acta; Anexo 2; Nota de disponibilidad; análisis de línea base; memoria Word; Anexo 9; registro de equipo D3 | Extracción de XML de DOCX/XLSX con comprobación CRC de entradas; lectura de contenido textual | La ficha y el acta respaldan declaraciones, no medición de tiempos al segundo. Se cotejaron restricciones y referencias. La extracción no verifica maquetación ni imágenes incrustadas. |
| F03 Posición Tripper.xlsx y F04 320CV025_1 Funcionamiento de correa.xlsx | Lectura directa de celdas originales y recuento independiente en JavaScript | Se confirman conteos clave de la revisión v1; detalles en sección 3. La identidad del tag y convención horaria siguen abiertas. |
| Datos_Trabajados_y_Series_Depuradas_D4.xlsx y Memoria_Calculo_Impacto_TPH_y_Linea_Base.xlsx | Extracción de cinco hojas por libro y comparación de identificador Git | Son copias de contenido idéntico. Cifras históricas se comparan con datos y revisión v1, no se modifican. CRC verifica integridad de extracción; no acredita fórmulas recalculadas en Excel. |
| Cinco CSV de Revision_D4_v1 y recalcular-datos.mjs | Recuperación de texto y lectura de reglas; contraste con recuentos originales y auditoría previa | Se conserva la verificación AUD-D4-001 de 160 valores de 16 escenarios. Esta ronda añade contraste original F03/F04. El comando Node --check no se ejecutó de nuevo en el entorno local. |
| Seis DOCX U2: anexos 11, 13, 14, 15, 16 y 19 | Extracción y lectura de texto/tablas | Confirman estructura de requisitos, arquitectura, interfaces, escenario, protocolo y dossier. Sus casos y tablas simulados no describen automáticamente Puerto Patache. |
| Cuatro PDF U2: Evaluación y Actividad1/2/3 | Presencia y rutas actuales; contraste con notas de la lectura académica anterior | La pauta y actividades ya están resumidas en 10-Evaluacion-2. En esta ronda no se repite extracción integral del binario PDF ni se verifica su maquetación. Lectura directa actual pendiente en inventario. |
| Cuatro figuras: mapa causal, línea base, flujo actual y arquitectura radar | Inspección visual directa y contraste con cifras/documentación | El gráfico de zonas concuerda con horas y saltos históricos. La arquitectura tiene especificaciones e interfaces conceptuales por revisar. Ver REV-D4-002/003. |
| Nueve fotos: Encoder, Encoder 2, Stockpile 2 y seis WhatsApp Image | Inspección visual directa | Se observan transmisión mecánica, un componente sin placa legible, polvo depositado, canalizaciones, escaleras y estructuras. No identifica modelo del componente instalado, concentración de arsénico, temperatura, disponibilidad de bornes o alineación de radar. |
| planos tripper.png | Inspección directa de imagen pequeña y contraste con recortes aportados en conversación/REG-D4-005 | La imagen versionada tiene resolución limitada. La carrera de 71,84 m se apoya en los recortes de mayor resolución y lectura registrada; falta plano vigente con cajetín. |
| Dossier ES1 DOCX y presentación PPTX | Archivo localizado y tamaño/hash identificados; contraste con transcripción del dossier entregada por Joaquín | La descarga binaria completa no estuvo disponible por esta vía. No se certifica que la transcripción sea idéntica al binario actual ni que las diapositivas estén actualizadas. |
| Manual Ciclo Gestion de Riesgos.pdf y tres videos | Inventario, tamaño y acceso intentado | Contenido sin lectura/reproducción directa por la vía disponible. Manual, versión y aplicación institucional permanecen en PEND-11. Videos y presentación requieren otra sesión con acceso efectivo. |
| .gitignore y cinco marcadores | Solo inventario | Fuera del contraste técnico; no equivalen a información de ingeniería. |

En total se extrajeron 18 archivos Office de menos de 1 MB. Los otros dos Office, el manual de 4 MB y los videos requieren una ruta de lectura efectiva. La restricción de acceso no demuestra una falla del archivo. No se afirma que toda la propuesta esté validada.

## 3. Lo que se volvió a comprobar en los originales

| Dato | Resultado reproducido | Interpretación correcta |
| --- | --- | --- |
| F03: filas horarias | 792, con 781 zonas válidas y 11 faltantes | La cobertura temporal y los faltantes deben acompañar toda cifra. |
| Cambios observados | 78; 37 de una zona, 21 de 2–9, 20 de 10 o más | Son diferencias entre observaciones horarias consecutivas válidas; no captura todos los movimientos intra-hora ni permite asignar metros sin plano. |
| Frecuencia | 78/33 = 2,363636… cambios por jornada de muestra | Usar fracción exacta en cálculo y redondear al comunicar. El supuesto de 33 jornadas conserva el día incompleto. |
| Fecha anómala | Valor Excel 46336 = 10-11-2026 en filas 603–626 | La asignación al 10-10-2026 es supuesto por secuencia; no una fecha confirmada. Ya registrada en DAT-02. |
| F04: entradas y tramos | 488 entradas; 451 tramos después de unir estados repetidos; 37 repeticiones | Un registro repetido no equivale a un arranque nuevo. |
| FUNCIONANDO | 224 tramos completos; mediana 18,991 s, máximo 854,318 s | Semántica del equipo pendiente. Hay 48 tramos completos de 120 s o más: la meta de <2 min para toda maniobra requiere delimitar fases y contrastar velocidad/tag. |
| Duración del log | 722,7915 h entre primera y última marca | Usar intervalo efectivo para porcentajes; distinguir período de calendario. |
| Dos libros de trabajo | Mismo SHA de contenido | No son dos comprobaciones independientes ni aportan series adicionales distintas. |
| Figura de zonas | Sectores 357 + 284 + 140 = 781 h; salto 37 + 21 + 20 = 78 | Coincide con el resumen histórico de horas y saltos. Las horas son observaciones de ubicación; no horas de descarga demostradas. |

El tratamiento completo de permanencias, tramos de borde, cruce exploratorio y escenarios sigue en [auditoría de datos](../Notas/24-Auditoria-de-datos-D4.md). No se corrigieron ni regeneraron archivos originales durante esta ronda.

### Impacto operacional: ejemplo para poder defenderlo

Si se usa un caudal constante Q y se supone interrupción total de transferencia durante toda la espera:
- Tonelaje diferido por maniobra = Q [t/h] × espera [min] / 60.
- Tiempo de espera por jornada = (78/33) × espera.
- Capacidad potencial recuperable por jornada = Q × (espera base − espera propuesta) / 60 × 78/33.

Con 200 t/h y 10 min resultan 33,33 t por maniobra y 78,79 t por jornada. Con 350 t/h y 15 min, 87,50 t y 206,82 t. El extremo de 400 t/h y 15 min da 236,36 t por jornada. Son escenarios sujetos a la hipótesis de interrupción, no pérdidas productivas medidas.

A exactamente 2 min, la reducción calculada es 80,0–86,7 % al comparar bases de 10–15 min. A 1,5 min, 85,0–90,0 %. Ninguna de esas cifras demuestra todavía que se cumpla <2 min en planta. Una nueva señal puede ahorrar verificación y caminata sin aumentar la velocidad del carro.

## 4. Ramas que necesitamos completar

Los identificadores EST-01–07 se conservan. EST-08–12 son ampliaciones propuestas de la red de aprendizaje.

| Rama | Qué tenemos | Qué falta y por qué importa | Producto / prueba de cierre |
| --- | --- | --- | --- |
| EST-01 · Metrología y cobertura | Plano parcial, carrera leída y matriz v02 | Plano vigente, zonas, referencia, tolerancia y posiciones sensor/blanco | Plano de cobertura, presupuesto de error y ficha por montaje. |
| EST-02 · Operación y HMI | Secuencia general de comunicación y espera | Roles, solicitud/inicio/fin, tránsito, lectura inválida y confirmación discreta o continua | Flujo acordado, tabla de estados y boceto HMI que ambos puedan explicar. |
| EST-03 · Integración DeltaV | I/O declaradas y revisión documental PK/EIOC/AI | Inventario real, protocolo/rol, licencias, bornes, energía y red | Anexo 13 y 14, mapa señal desde adquisición hasta HMI con diagnóstico. |
| EST-04 · Validación | Anexos 15/16 y ensayo sintético V07 | Criterios, referencia independiente, fallos, ambiente y datos reales | Protocolo antes de ensayar, resultados y límites del entorno representado. |
| EST-05 · Montaje y comisionamiento | Ventana de 12 h declarada | Metrado, ruta crítica, acceso, bloqueos, trabajos previos y contingencia | Plan por actividades con responsable/duración justificada; prueba de restitución. |
| EST-06 · Línea base e impacto | F03/F04, derivados auditados y fórmulas | Tag, hora, fases e interrupción efectiva; denominador de disponibilidad | Maniobras representativas registradas y escenarios explícitos actualizados cuando se autorice. |
| EST-07 · Dossier y defensa | Pauta y plantillas U2; diagnóstico ES1 | Criterios completos, U2_A05 y fecha; guion de decisión y limitaciones | Dossier consistente, evidencia cruzada y defensa de ambos integrantes. |
| EST-08 · Ambiente y mantenibilidad | Fotos y falla láser declarada | Depósitos, humedad, vibración, temperatura, corrosión, limpieza y accesos | Perfil ambiental por ubicación y plan de mantenimiento con frecuencia justificada. |
| EST-09 · Riesgos y salud ocupacional | Manual localizado, riesgos actuales descritos | Lectura del manual y plantilla, evaluación de nuevos riesgos y mediciones ocupacionales | Registro de riesgos y controles conforme al formato confirmado; no asignar niveles institucionales inventados. |
| EST-10 · Comunicaciones y OT | Protocolos candidatos, referencia pública NIST | Política CMDIC, segmentación, puertos, respaldo, credenciales, sincronización, RF y homologación | Flujo de datos permitido, pruebas de pérdida/recuperación y revisión DCS/OT. |
| EST-11 · Costos, compras y ciclo de vida | Precios públicos y lista de faltantes | Cotización comparable, entrega a Chile, servicio, garantía, repuestos y costos recurrentes | BOM por candidato, presupuesto completo por moneda y comparación de mantenimiento. |
| EST-12 · Trazabilidad y aprendizaje compartido | AGENTS, bitácora, fuentes, hallazgos y GitHub/Obsidian | Control de revisión de documentos, aportes concurrentes y explicaciones transferibles | Cada conclusión enlazada a fuente/cálculo/prueba; cada cambio con REG y revisión de compañero. |

### Lo que conviene estudiar ahora, incluso sin respuesta de faena

- Diferencia entre precisión, resolución, repetibilidad y error total de la cadena.
- Radar primario/secundario, RCS del blanco (capacidad de devolver energía), ancho de haz, eco múltiple y oclusión.
- Frecuencia de actualización del sensor frente a latencia total hasta la pantalla.
- Encoder incremental: A/B para sentido, pulsos por vuelta, cuadratura, referencia y pérdida de conteo.
- RFID HF frente a UHF: distancia, metal, orientación y selectividad de zona.
- Codificación discreta: códigos inválidos, lectura parcial y captura habilitada.
- Lazo analógico frente a comunicación digital: diagnóstico, escalamiento y evidencia de adquisición nueva.
- Planificación de intervención y prueba de retorno al servicio.
- Comparación económica por configuración y condiciones de compra.
- Diseño de ensayo: criterio previo, evidencia independiente, repetibilidad y límites de generalización.

## 5. Explicaciones para Joaquín y Kevin

### 5.1 ¿Por qué el rango del sensor no es la carrera?

La carrera describe cuánto se desplaza el carro. La distancia medida incluye la separación del sensor respecto al extremo cercano. En el montaje longitudinal ideal desde eje 18, 35,80 + 71,84 = 107,64 m. Un sensor de 100 m no acredita llegar al extremo, aunque la carrera sea menor. En 3D también hay diferencia de altura y desplazamiento transversal; hay que medir la distancia real sensor–blanco.

Para 120 m de rango nominal, 120 − 107,64 = 12,36 m de reserva aritmética. Esa resta no garantiza lectura: el retorno depende del blanco, alineación, suciedad y ecos. La prueba debe verificar todo el trayecto.

### 5.2 ¿Por qué la resolución de catálogo no es el error final?

La indicación pasa por sensor, montaje, referencia, conversión, transmisión y escalamiento. Sus errores no desaparecen porque el sensor muestre milímetros. Ejemplo didáctico: una entrada cuya exactitud fuera 0,1 % del span aportaría 0,001 × 71,84 m = 0,07184 m, es decir 71,84 mm, antes de los otros términos. Si el span fuera 200 m, ese término sería 200 mm. Es un ejemplo condicionado, no una característica confirmada de la tarjeta de Patache. La ficha CHARM citada en 08-Arquitectura-DeltaV debe cotejarse con el modelo real y sus condiciones.

Para un límite de zona, proponer margen de guarda según error total y dinámica. No sumar especificaciones de resolución como si fueran incertidumbres; escoger un método conservador o estadístico con supuestos explicados.

### 5.3 ¿Por qué la velocidad y la antigüedad importan?

Si una posición llega tarde, el carro puede haber avanzado. Ejemplo sintético: 0,5 m/s × 0,2 s = 0,10 m de desplazamiento durante el retraso. Velocidad y latencia no están medidas en faena; se muestran para entender por qué pedirlas. El tiempo de viaje del mensaje y la edad de la medición son magnitudes distintas.

En V07 ya se observó que fechar otra vez una medición antigua puede hacerla parecer nueva. Hay que pedir marca de adquisición, contador o mecanismo equivalente y ensayar toda la cadena. El valor constante puede ser correcto cuando el carro está quieto y el sensor sigue adquiriendo.

### 5.4 ¿Por qué el encoder no se conecta a cualquier entrada digital?

Frecuencia del canal A = pulsos/vuelta × vueltas/minuto / 60. Ejemplo de banco: 500 × 30/60 = 250 Hz. Un contador que usa cuatro flancos procesa 1.000 flancos/s en ese caso. El receptor debe soportar niveles eléctricos, diferencial, cuadratura y frecuencia con margen; el módulo DI estudiado para inductivos no se acepta automáticamente como contador de encoder. Después se necesita la relación mecánica para convertir pulsos a metros.

### 5.5 ¿Por qué saber el tag no equivale a saber la posición actual?

Una referencia RFID o una placa confirma una ubicación cuando se lee bajo condiciones definidas. Después de abandonar la referencia, mostrar la última zona como vigente podría ser engañoso. Definir “en zona”, “en tránsito”, “sin referencia válida” y “dato antiguo”. Estos estados deben aparecer en el diseño y en las pruebas.

### 5.6 ¿Por qué 99 % de disponibilidad necesita una ventana?

Con 30 días completos, 1 % equivaldría a 7,2 h; con una ventana de 12 h, a 7,2 min. El mismo porcentaje puede describir realidades distintas. Definir tiempo exigido de servicio, qué cuenta como señal válida, exclusiones y período. Una prueba breve no acredita por sí sola disponibilidad mensual.

## 6. Preguntas para solicitar evidencia

Se registran en texto, listas para revisar con la tutora y especialistas. No se ha enviado ningún mensaje. En cada respuesta conservar fecha, responsable, respaldo y consecuencia.

| ID / destinatario | Pregunta precisa | Por qué se pregunta / evidencia esperada / decisión |
| --- | --- | --- |
| Q01 · Daniela/E&I | ¿Podemos obtener el plano vigente con cajetín, revisión y planta de Z1–Z35, indicando si los 71,84 m de TRAVEL corresponden al carro y recorrido actuales? | Evita dimensionar con la longitud de nave. PDF/CAD autorizado y recorrido identificado; cierra parte de PEND-01. |
| Q02 · Operaciones | ¿Dónde comienzan y terminan las zonas y cuál es la desviación máxima admisible para confirmar una descarga? | Se necesita tolerancia real, sin suponer zonas iguales. Tabla de límites y regla de frontera. |
| Q03 · Operaciones/DCS | ¿Se exige posición continua durante el traslado o basta confirmar puntos de descarga mostrando tránsito entre ellos? | Define si RFID/discretos pueden satisfacer R01. Acuerdo funcional escrito, PEND-14. |
| Q04 · E&I | ¿Qué lugares fijos y puntos del carro permiten montar sensor y blanco, con distancias mínima/máxima y obstáculos de todo el trayecto? | Croquis medido y accesos; decide radar fijo y montaje. |
| Q05 · DCS | ¿Qué equipo físico y lógica originan 320CV0251RUN? ¿Pueden aportar un evento identificado de traslado y su registro? | Semántica F04; evita interpretar estados de otro motor. PEND-02. |
| Q06 · Operaciones | ¿Los 10–15 min incluyen caminar, autorización, mover, detener y confirmar? ¿Podemos registrar estas marcas en una maniobra corta y una larga? | Permite comparar fases equivalentes y evaluar <2 min. PEND-05. |
| Q07 · Operaciones | ¿La transferencia de concentrado se interrumpe durante toda esa espera, parte de ella o continúa? ¿Existe tendencia de caudal o estado asociado? | Distingue capacidad potencial de impacto observado; dato de flujo sincronizado. |
| Q08 · DCS | ¿Qué controlador, versión DeltaV, tarjetas/CHARM y protocolos/roles están realmente disponibles, con canales y licencias autorizables? | Inventario efectivo, no lista genérica de capacidades del fabricante. PEND-04. |
| Q09 · E&I | ¿Dónde están las alimentaciones disponibles fija y móvil, su tensión medida, capacidad, protecciones y punto autorizado de conexión? | No asumir 110 VAC sobre el carro. Permite fuente fija, unidad activa o lectura móvil. |
| Q10 · DCS/Operaciones | ¿Cuál es la secuencia vigente de traslado, quién la ejecuta y qué debe ocurrir si se pierde o discrepa la posición? | Filosofía de operación y modo degradado, sin ampliar mando por inferencia. PEND-03. |
| Q11 · E&I | ¿El Allen-Bradley de bodega está disponible y autorizado para prueba? ¿Podemos obtener pinout, conector, prueba de salud y fotos de placa del componente instalado? | Distingue dos equipos. Habilita banco y estudio mecánico de C05. PEND-07. |
| Q12 · Operaciones | ¿Velocidad máxima, aceleración, tiempo de frenado y repetibilidad del carro en trayectos cortos/largos? | Parámetros para error dinámico, referencias y meta temporal. Registro o ficha con origen. |
| Q13 · E&I/Prevención | ¿Temperatura, agua/condensación, depósitos, vibración, corrosión y limpieza exigidas en los puntos candidatos? ¿Existe clasificación de área aplicable? | El IP y materiales deben corresponder al lugar real. No deducir clasificación por contener arsénico. |
| Q14 · Prevención/Higiene | ¿Qué mediciones y procedimiento de exposición corresponden a esta tarea y cómo se valoran los riesgos de acceso y mantenimiento? | Ingresos evitados no son una dosis medida. Evidencia autorizada y criterios de control. |
| Q15 · E&I/Mantenimiento | ¿Qué tareas previas se pueden realizar con operación y cuánto tiempo de la ventana queda disponible para montaje, prueba y retorno? | Plan justificable de 12 h, con bloqueo/acceso según procedimiento vigente. |
| Q16 · DCS/OT | ¿Qué redes, puertos, protocolos, radioenlaces, accesos de proveedor, credenciales y respaldos se permiten para esta incorporación? | Completa Anexo 14 sin conectar redes por conveniencia. PEND-12/15. |
| Q17 · SAG/Indurad | ¿Qué modelo/configuración y reflector recomiendan para el rango medido, depósitos húmedos y estructura metálica, y qué garantía de desempeño/ensayo ofrecen? | Oferta técnica que explicite límites, diagnóstico y aplicación. PEND-06. |
| Q18 · Symeo/proveedor | ¿La oferta incluye dos unidades habilitadas para secundario, variante regional, interfaces y accesorios? ¿Cuál es la alimentación móvil necesaria? | Confirma cantidad y alcance del costo C03, sin usar rango de otro modo. |
| Q19 · VEGA | ¿Aceptan por escrito el uso horizontal con reflector móvil a las distancias D4, con tasa, pérdida de eco y diagnóstico especificados? | Determina si C04 puede pasar de hipótesis a candidato con prueba. |
| Q20 · Turck/proveedor | ¿Qué pareja cabezal/tag y montaje aseguran lectura inequívoca en metal y a la velocidad requerida, y cómo se detecta salida de zona o lectura cruzada? | Selección HF/UHF y protocolo de prueba con el tag exacto. |
| Q21 · Pepperl+Fuchs/SIKO | ¿Pueden cotizar recorrido útil completo, codificación/referencia, soportes y tolerancias, y demostrar montaje/limpieza apropiados? | Evita extrapolar tramos idénticos o clasificar WCS como magnético. |
| Q22 · Proveedores/importador | ¿El SKU, banda, potencia y modo ofertados cumplen los requisitos de uso/importación en Chile y qué documento lo acredita? | CE/FCC no resuelven por sí solos PEND-12. Revisar SUBTEL y expediente del equipo. |
| Q23 · Todos los proveedores | ¿Cuál es el costo y plazo por código/cantidad, condición, moneda, impuestos, entrega a Chile, garantía, soporte, licencias, puesta en marcha y repuestos? | Presupuesto comparable C01–C11; PEND-13. |
| Q24 · Operaciones/DCS | ¿Qué latencia, tiempo sin adquisición y ventana de disponibilidad son aceptables, y cómo se autoriza confirmar tras una recuperación? | Criterio R07 con magnitudes y fallos ensayables; PEND-14. |
| Q25 · Docencia | ¿Podemos acceder a U2_A05, confirmar entrega/modalidad y obtener la planilla institucional de riesgos o su formato autorizado? | Completa evaluación, evita inventar metodología institucional; PEND-08/11. |
| Q26 · Equipo/contraparte | ¿Qué fotos, plano y datos se autorizan para comité y colaboración, y qué respaldo de mayor resolución podemos usar? | PEND-09 y continuidad de fuentes. No implica permiso de publicación abierta. |

## 7. Cómo convertirlo en productos de ES2

| Producto | Base disponible | Próximo trabajo concreto | Evidencia de cierre |
| --- | --- | --- | --- |
| Anexo 11 · Requisitos | R01–R07 y borrador en 06-Requisitos | Completar tolerancias, latencia, fase de tiempo y disponibilidad; revisar origen y obligatoriedad | Cada requisito con criterio, método y recurso; aceptación o pendiente identificados. |
| Comparación de alternativas | Matriz v02 y catálogo | Aplicar filtros con evidencia real; acordar pesos antes de puntuar; comparar C00 | Ranking solo cuando no haya bloqueantes; razones y sensibilidad. |
| Anexo 13 · Arquitectura | Notas y esquema conceptual ES1 | Dibujar arquitectura de la configuración candidata separando existente/propuesto y energía/datos | Componentes por modelo/código; puntos e interfaces revisados por DCS cuando corresponda. |
| Anexo 14 · Interfaces/OT | Revisión documental, protocolos | Campos, escalamiento, rol, puertos, marcas y validez; controles de acceso/respaldo | Correspondencia señal de origen–destino–fallo–prueba. NIST es referencia complementaria, no política CMDIC. |
| Anexo 15 · Escenario | Plantilla y línea base | Definir un caso D4 propio con condiciones normales y límite; identificar simulación/prototipo/terreno | Condiciones y datos con fuente. El caso docente de invierno continental no es el clima de Patache. |
| Anexo 16 · Protocolo | Ensayo V07 y pruebas propuestas | Fijar criterio antes de ejecutar, referencia, versión y evidencia por fallo | Resultados trazables; discrepancias y nueva prueba con motivo. |
| Viabilidad y riesgos | Precios parciales, manual ubicado | Leer metodología, obtener U2_A05/plantilla, BOM y plan de intervención | Controles y responsables con evidencia, presupuesto sin omisiones ocultas. |
| Anexo 19 · Dossier | Plantilla de siete secciones y plan ES2 | Integrar productos consistentes; mantener supuestos transversales | Enlaces de causa a prueba, conclusiones limitadas por evidencia y revisión de ambos integrantes. |

Los anexos 13/14 contienen ejemplos simulados. El anexo 15 incluye un escenario docente y una base de referencia distinta. Su utilidad es metodológica; no deben convertirse en datos del D4. La plantilla 19 admite organizar siete secciones y tratar supuestos en una sección identificable; revisar la pauta completa al cerrar.

## 8. Secuencia recomendada sin inventar plazos

1. **Paquete de definición:** Q01–04, Q08–10 y Q24. Cierra geometría, objetivo funcional e interfaz.
2. **Paquete de evidencia operacional:** Q05–07 y Q12, más Q13–15 para entorno y montaje.
3. **Paquete de configuración y presupuesto:** entregar a proveedores un mismo caso de uso y obtener Q17–23. Preparar la consulta está autorizado; enviar mensajes requiere encargo explícito.
4. **Paquete de prueba:** completar anexos 15/16 con escenarios, criterio y referencia. Probar primero lógica y banco disponible; registrar qué no representa de faena.
5. **Paquete de diseño:** aplicar filtros, selección sustentada, arquitectura y riesgos. Si falta información decisiva, conservar alternativas y decisión condicional.
6. **Paquete de revisión de entrega:** ambos recorren requisitos, cálculo, fuente, figura y prueba; registran hallazgos y verifican versiones antes de consolidar dossier.

No hay respuesta de contraparte ni cotización nueva recibida en esta ronda. Las prioridades ordenan el trabajo; los responsables y fechas se acuerdan con Joaquín y Kevin.

## 9. Protocolo para la próxima IA

Leer AGENTS y 00-Contexto-para-IA, últimas entradas REG, pendientes y esta revisión. Fijar commit de partida; mirar qué cambió desde el inventario. Revisar cada bloque accesible y declarar acceso pendiente cuando corresponda. Un CRC, archivo descargado o enlace abierto no valida el contenido técnico.

Para cada dato nuevo completar: **qué sabemos → fuente exacta → categoría → cálculo si aplica → por qué importa → para qué se usará → qué podría cambiarlo → siguiente verificación**. Ante discrepancia del material auditado, registrar REV con ubicación/evidencia/impacto y conservarlo intacto. La solicitud actual autoriza la matriz y notas de investigación, sin ampliar a corrección de ES1 ni intervención de planta.

Mantener separados fuentes originales, derivados, estudio, resultados y entregables oficiales. Registrar cambios autorizados en la misma actualización de bitácora y verificar que una edición concurrente del compañero no se pierda. Al concluir, decir qué aprendimos, qué decisión habilita y qué permanece abierto.

[Contexto para IA](../Notas/00-Contexto-para-IA.md) · [Fuentes](../Notas/04-Evidencias-y-fuentes.md) · [Pendientes](../Notas/19-Registro-de-pendientes.md) · [Bitácora](../Notas/12-Bitacora.md)
