# Hallazgos de revisión del D4

Registra aquí una discrepancia importante que requiera seguimiento. Indica dato, ubicación, respaldo, corrección o próxima verificación. Para el trabajo vigente, actualiza la nota del tema si su evidencia permite resolverlo. Usa la [bitácora](12-Bitacora.md) para resumir el cambio y el [registro de pendientes](19-Registro-de-pendientes.md) para las confirmaciones abiertas.

## AUD-D4-001 · 2026-11-10 · Primera pasada parcial

Revisión asistida por IA sobre la [versión base de GitHub](https://github.com/Joakiingx/PDTCD4xzcxzsad/tree/c04874b4e3fc1268c30bddcf69d23394046f66a8). Inventario de 85 archivos versionados, incluidos cinco marcadores de carpeta. El inventario acredita presencia. Las comprobaciones realizadas se describen abajo.

| Alcance exacto | Comprobación | Resultado |
| --- | --- | --- |
| Los 31 archivos Markdown de la versión base | Se contrastaron 331 destinos de enlaces internos Markdown y Obsidian con el árbol del repositorio. | Los destinos revisados existen. El contenido, las anclas internas y las fuentes externas requieren verificación según el bloque. |
| `posicion_tripper_depurada.csv` y `escenarios_impacto.csv`, revisión D4 v1 | Desde el CSV depurado se volvieron a contar pares horarios consecutivos con zona válida y cambios. Se recalcularon diez valores por escenario con 78/33, caudales y minutos de sus filas. | 792 filas, 781 válidas, 11 faltantes, 779 pares evaluables y 78 cambios en 33 jornadas. Coinciden 160 valores de los 16 escenarios con tolerancia numérica de 10⁻⁸. Comprobación sobre CSV derivados. |
| EST-01 y REG-D4-005 | Se contrastó la vigencia de la referencia de alcance utilizada en la explicación del estudio. | REV-D4-001 abierto para revisión del equipo. |
| Resto del contenido | Incluye revisión directa de originales, figuras, anexos, cálculos restantes, diseño completo y fuentes externas asociadas. | Pendiente en AUD-D4-001. Este registro complementa las revisiones históricas. La auditoría integral sigue abierta. |

## Hallazgos

| ID | Estado | Ubicación y evidencia | Por qué importa y qué debe revisar el equipo |
| --- | --- | --- | --- |
| REV-D4-001 · 2026-11-10 · AUD-D4-001 | Por revisar · Vigencia de una referencia | [EST-01, Comprobación preliminar de alcance](../Estudios/EST-01-Posicionamiento-y-cobertura.md) ilustra una carrera de 200 m y 3 m de separación. [Bitácora, REG-D4-005](12-Bitacora.md) documenta una carrera nominal dibujada de 71,84 m y dos distancias teóricas de montaje. | El caso de 200 m está marcado como ilustrativo. Antes de reutilizarlo para dimensionar o defender la propuesta, el equipo debe decidir si añade la referencia vigente y confirma las distancias de montaje. El texto original queda disponible para cotejo. |

## AUD-D4-002 · 2026-11-10 · Contraste de originales, figuras y configuraciones

Revisión asistida por IA solicitada por Joaquín. Base [f012d9b](https://github.com/Joakiingx/PDTCD4xzcxzsad/tree/f012d9bfb6aac21b22fab6c44c9cc438e31b92b9). Se inventariaron 86 archivos con SHA/tamaño. El [CSV por archivo](../Analisis/D4/Inventario-revision-2026-11-10.csv) y la [revisión integral](../Estudios/00-Revision-integral-y-brechas-2026-11-10.md) delimitan cobertura. La auditoría integral permanece **parcial**.

| Bloque | Comprobación efectiva | Resultado y límite |
| --- | --- | --- |
| Texto | Recuperación de los 32 Markdown, cinco CSV y script; contraste de bloques de ingeniería | Se conserva la diferencia entre datos, declaraciones, simulaciones y decisiones abiertas. No se certifican todas las fuentes por repetirse en notas. |
| Originales Office | Extracción de 18 DOCX/XLSX con CRC y lectura de texto/celdas, incluidos seis anexos U2 | Integridad de extracción comprobada; maquetación, imágenes incrustadas y recálculo Excel no verificados. Dos Office grandes sin lectura binaria completa. |
| F03 | Recuento independiente desde celdas originales | 792 filas; 781 válidas; 11 faltantes; 78 cambios, 37 de una zona. Confirma fecha original 10-11-2026 de filas 603–626; la fecha de análisis sigue siendo supuesto DAT-02. |
| F04 | Agrupación de estados consecutivos desde originales | 488 registros, 451 tramos y 37 repeticiones; 224 FUNCIONANDO completos, mediana 18,991 s, máximo 854,318 s y 48 ≥120 s. Tag por identificar. |
| Libros y figuras | Mismo SHA en dos libros históricos; inspección de cuatro figuras y nueve fotos | Gráfico de zonas/saltos concuerda con 781 h y 78 cambios. Arquitectura requiere revisión por modelo/interfaz. Fotos no identifican placa del componente instalado ni miden ambiente. |
| Plano | Inspección de imagen pequeña y cotejo con REG-D4-005/recortes aportados | Carrera nominal leída 71,84 m; falta documento vigente con cajetín y recorrido operativo. REV-D4-001 sigue abierto. |
| Externas | Fabricantes, ofertas comerciales y referencias públicas, WEB26-01–32 | Configuraciones y precios se registran con límites; las publicaciones no equivalen a oferta ni ensayo D4. |
| Acceso o revisión pendiente | Manual de riesgos, dossier binario, PPTX y tres videos; lectura actual de cuatro PDF U2 | Rutas exactas en inventario. El dossier también tiene transcripción aportada y las pautas tienen lectura previa resumida; eso no acredita identidad o lectura actual completa. |
| Validación | Lectura de reglas del script y de V07 histórico | No se ejecutó Node --check en esta ronda ni se hizo prueba física. V07 sigue siendo escritorio: seis casos conformes y uno que revela pérdida de trazabilidad de antigüedad al volver a fechar. |

Las observaciones siguientes se dejan **por revisar**. La solicitud actual autoriza una nueva matriz de trabajo y registros de investigación; los materiales históricos auditados se conservaron intactos.

### Hallazgos añadidos por AUD-D4-002

| ID / estado | Ubicación y afirmación examinada | Evidencia de contraste | Impacto, verificación y siguiente paso |
| --- | --- | --- | --- |
| REV-D4-002 · Por revisar | Evidencias/M7/Propuesta de solución M7/05 Figuras/diagrama_arquitectura_radar.png: combina iLDR-C/Symeo, reflector pasivo, 200 m, unidad de procesamiento y AI disponibles | Catálogo Indurad WEB26-03, tabla C/M/H; modos Symeo WEB26-04/05; F05 declara I/O sin especificar AI; REG-D4-005 lee 71,84 m de carrera | El esquema no acredita una configuración comprable. El equipo debe revisar variante, cantidad de unidades, blanco, geometría y ruta de interfaz; solicitar inventario DCS y aceptación OEM antes de elaborar otra figura. No se modifica la figura original. |
| REV-D4-003 · Por revisar | Matriz histórica y referencias a riel “magnético/inductivo tipo WCS” | Manual Pepperl+Fuchs WEB26-21, página impresa 11: lectura fotoeléctrica; ficha SIKO WEB26-25 aporta ejemplo magnético incremental distinto | Cambia la evaluación de suciedad, alineación, referencias e interfaz. Separar tecnologías en la matriz de trabajo está autorizado y se hizo en v02; una corrección de ES1 requiere revisión del equipo. |
| REV-D4-004 · Por revisar | Costos/tiempos/puntajes históricos y rango USD 2.500–6.500 como orientación; DAT-12 ya advierte falta de respaldo | PR-01: un Symeo nuevo publicado USD 9.517; par USD 19.034 solo sensores. Otras publicaciones son subconjuntos y distintas monedas | No comparar subtotales con CAPEX instalado ni reutilizar tiempos de montaje sin plan. Obtener BOM y cotizaciones equivalentes PEND-13. Esta ronda amplía evidencia para DAT-12, sin cerrar el hallazgo histórico. |
| REV-D4-005 · Por revisar | Dossier transcrito, secciones 2.2/5.3: descarte absoluto de sensores ópticos y lenguaje de inmunidad | Ficha original F01, celda E21, condiciona ópticos/láser a protección o compensación; fallo previo declarado sin modelo/configuración documentados | La falla previa sostiene una restricción importante y un ensayo exigente; no acredita imposibilidad de toda variante ni inmunidad absoluta de microondas. Pedir antecedente del intento fallido y prueba de polvo/depósitos. Conservar transcripción y original. |
| REV-D4-006 · Por revisar | Dossier transcrito 5.1: el festón sin spare y selección del láser se presentan como causas raíz establecidas | F05 acredita restricción actual de cableado; no documenta por sí mismo la historia causal de por qué no se implementó otra medición. F01 declara falla, sin análisis del modelo y condiciones | Distinguir causa observada, hipótesis causal y restricción de diseño evita sobredeterminar la solución. Pedir relato/registro de intento anterior, montaje, falla y decisiones posteriores. |
| REV-D4-007 · Por revisar | Meta <2 min por maniobra y apoyo en microciclos F04 de ~18 s | Recuento original: 48/224 tramos completos FUNCIONANDO duran al menos 120 s; semántica del tag y relación maniobra–tramo pendientes | Si el tag fuera traslación y la meta incluyera todo el movimiento, hay casos por explicar. No refuta la meta sin identificar el tag, ni prueba que un sensor reduzca velocidad mecánica. Delimitar fase, medir trayecto y confirmar PEND-02/05/14. |

No se cerró ningún REV por esta actualización. Para cada cierre conservar responsable, decisión y evidencia. Ver [matriz v02](../Estudios/EST-01-Matriz-de-soluciones-D4-v02.md), [catálogo](../Estudios/EST-01-Catalogo-y-precios-2026-11-10.md) y REG-D4-016–019.

## AUD-D4-003 · Revisión de trazabilidad del 13-11-2026

Base [4358538](https://github.com/Joakiingx/PDTCD4xzcxzsad/tree/4358538e063b3c791c46045d492de0f744aaf655). Se localizaron 90 archivos y se recorrieron 35 notas Markdown para identificar afirmaciones, repeticiones y referencias. Se leyó la ficha y el acta, se revisó texto o celdas de 14 documentos adicionales y se contrastaron la elevación versionada y la captura ampliada. El recálculo desde F03/F04 reprodujo los cinco CSV analíticos, comparando el contenido con finales de línea normalizados. La lámina de zonas, el minuto de la descarga, los binarios de dossier y presentación, los PDF, los videos y la comprobación de cada ficha comercial quedan fuera del cierre de esta ronda.

| Afirmación revisada | Corrección aplicada a las notas de trabajo | Qué queda por confirmar |
| --- | --- | --- |
| Plano tratado como ausente. Uso de 200 m como ejemplo de carrera y de 71,84 m como cota de referencia. REV-D4-001/002. | Se identificó la elevación disponible como F07. Se retiró del estudio el ejemplo de 200 m como carrera y se documentó «71840 TRAVEL» con su condición de unidades. Las posiciones de montaje de la matriz v02 quedan identificadas como cálculos condicionados. La estimación visual anterior del ancho de base se conserva en el historial como estimación. | Lámina del PPT con zonas, unidades, revisión, extremos operativos y geometría de montaje. |
| Ruta fija, prioridad del radar y cobertura durante todo el recorrido como orientación activa. | Se registró la declaración verbal de instalación inalámbrica y la reevaluación de RFID y radar. R01 y arquitectura muestran por separado la necesidad operativa y la ruta que falta comprobar. | Criterio de llegada/tránsito con Operaciones y disponibilidad de la instalación con Mantención y DCS. |
| Fecha de visita y acción observada sin referencia en el resumen vigente. | Se registró el 01-11-2026 y la observación de una descarga como relato del equipo. Las fechas en nombres de archivos se usan para localizarlos. | Archivo, foto o marca de video que permita cotejar la acción. |
| Reutilización de 78 cambios como maniobras, de estados RUN como traslación o de tonelaje calculado como pérdida. DAT-05/08/10/11 y REV-D4-007. | Se recalcó la base y se explicitó que F03 cuenta diferencias horarias y F04 describe estados de una señal. Los tiempos declarados y el cálculo de capacidad diferida mantienen sus fuentes y condiciones. | Identidad del tag, marcas de una maniobra real, interrupción efectiva del flujo y confirmación de la fecha anómala de F03. |
| Puntajes, horas y costos de ES1 y configuraciones comerciales preliminares. REV-D4-002/003/004. | Las notas vigentes remiten a esos valores como antecedentes fechados. Comparar propuestas a partir de requisitos y evidencia aplicable antes de puntuar. | Configuraciones exactas, prueba, cotización y plan de montaje. |
| URL y visibilidad anteriores, y pauta ES2 marcada como pendiente en la revisión histórica. | Se actualizó la guía de acceso al repo público y la referencia a U2_A06 disponible. | Permiso de difusión para cualquier nuevo respaldo y pendientes académicos de PEND-08. |

La bitácora [REG-D4-020](12-Bitacora.md#reg-d4-020--2026-11-13--trazabilidad-de-la-visita-y-base-del-diseño) registra los cambios. Los hallazgos que dependen de terreno permanecen abiertos.

## AUD-D4-004 · Revisión de organización y evidencias del 13-11-2026

Base `c5fa009`, rama propuesta de trazabilidad sobre `4358538`. Se inventariaron los 90 archivos de esa base y se revisaron las 35 notas Markdown como conjunto de trabajo. El script reprocesó F03/F04 y comprobó los cinco CSV derivados con `node Analisis/D4/recalcular-datos.mjs --check`.

| Grupo | Resultado y límite |
| --- | --- |
| Office | Comprobación de integridad ZIP de 14 DOCX, cinco XLSX y un PPTX. Lectura del texto del dossier y de las siete láminas de ES1, además de extracción del resto de los DOCX y revisión de hojas de los libros. [Correcciones para ES2](14-Expediente-ES1.md#correcciones-para-reutilizar-la-es1-en-es2). |
| Pauta y manual | Se extrajo texto de los cinco PDF. Se contrastaron los identificadores U2_A02–04 y U2_A06. Se localizaron en el manual las secciones de fases, evaluación y controles. Falta confirmar la versión aplicable y obtener la planilla institucional. [Referencias](20-Referencias-de-modulos.md). |
| Imágenes y videos | Se revisaron las imágenes y los medios del PPT histórico en vistas reducidas. Se decodificaron los tres videos y se examinaron fotogramas muestreados. El archivo y momento exacto de la descarga y la lámina con el rotulado de zonas quedan por identificar. [Evidencia visual](05-Evidencia-visual.md). |
| Catálogo y matriz | Se revisó cómo se utiliza el estudio fechado en las notas activas. Las fichas y precios conservan el alcance de su consulta anterior. Confirmar variante, oferta y condiciones antes de incorporarlas a una decisión nueva. [Alternativas](07-Alternativas.md). |
| Instrucciones coincidentes | AGENTS.md y la guía repetían la auditoría integral al incorporar una IA y derivaban la corrección de un hallazgo a otro encargo. La guía pasa a ubicar archivos y AGENTS.md describe cómo revisar y corregir según lo solicitado. Los pendientes repetidos se integran en sus IDs vigentes. |

**Actualización del 14-11-2026.** Joaquín identificó la elevación F07 como la lámina de referencia que usa el equipo. El cotejo abierto es entre códigos de registro, referencias numeradas y extremos de cada tripper. [Plano y conteo](05-Evidencia-visual.md#plano-mostrado-en-la-primera-reunión)
