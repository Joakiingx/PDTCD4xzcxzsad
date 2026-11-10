# Registro de cobertura y hallazgos de revisión · D4

Este registro documenta las auditorías del proyecto. Los [pendientes](19-Registro-de-pendientes.md) conservan las verificaciones técnicas y académicas abiertas. La [bitácora](12-Bitacora.md) conserva las sesiones y sus efectos. Aquí se registra qué material revisó cada IA y qué observaciones remite al equipo.

## Cómo registrar una auditoría

1. Asigna `AUD-D4-NNN`. Identifica fecha, revisor, commit o copia de la bóveda, carpeta inventariada y alcance. Identifica además las fuentes locales autorizadas y externas citadas que deban cotejarse.
2. Registra cada archivo o conjunto enumerado, versión, comprobación, resultado, limitaciones y fecha. Usa estados **verificado en el alcance descrito**, **hallazgo abierto**, **pendiente de revisar** o **acceso pendiente**. Distingue materiales vigentes, históricos y simulados.
3. Abarca como mínimo los bloques siguientes. Vuelve a contrastar los elementos relacionados cuando se agregue una nueva evidencia o versión.

| Bloque | Qué comprobar |
| --- | --- |
| Diagnóstico y fuentes | Correspondencia entre afirmación y evidencia, origen, fecha, versión y diferencia entre dato observado, declarado y supuesto. |
| Datos, scripts y cálculos | Reproducción de fórmulas y resultados, filas, faltantes, filtros, redondeo, unidades, períodos y separación de escenarios respecto de medición real. |
| Figuras, planos y gráficos | Legibilidad, origen, revisión, escala o unidad, ejes, leyendas, coherencia con tablas y diferencia entre cotas, estimaciones y geometría confirmada. |
| Avances, descubrimientos y alternativas | Validez de las nuevas evidencias, trazabilidad, vigencia de fichas, modelo y configuración, límites de los hallazgos y compatibilidad con la condición de faena. |
| Propuesta de ingeniería | Coherencia entre alcance, requisitos, selección, interfaces, arquitectura, riesgos, continuidad, costos y mantenimiento. |
| Evaluación y validación | Cobertura de pauta y anexos, cadena causa → requisito → criterio → prueba → evidencia, resultados obtenidos y límites de prueba. |
| Integridad documental | Originales y derivados identificables, enlaces, diferencias entre versiones y contradicciones entre notas, dossier, planillas y presentación. |

## Cómo registrar un posible cambio sin aplicarlo

Asigna `REV-D4-NNN` y anota fecha, auditoría relacionada, archivo y ubicación exacta, afirmación actual, evidencia de contraste, motivo, posible efecto, verificación necesaria y estado. Si otra fuente sostiene una lectura distinta, consérvala y explica la discrepancia. Los estados de hallazgo son **por revisar**, **en revisión por el equipo** y **cerrado por el equipo con evidencia**. Cerrar requiere anotar quién decidió, cuándo y con qué respaldo. Durante la auditoría escribe las observaciones aquí y en la bitácora. Conserva intactas las fuentes y el trabajo revisado.

## AUD-D4-001 · 2026-11-10 · Primera pasada parcial

Revisión asistida por IA sobre la [versión base de GitHub](https://github.com/Joakiingx/proyecto-titulo-d4/tree/c04874b4e3fc1268c30bddcf69d23394046f66a8). Inventario de 85 archivos versionados, incluidos cinco marcadores de carpeta. El inventario acredita presencia. Las comprobaciones realizadas se describen abajo.

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

Revisión asistida por IA solicitada por Joaquín. Base [f012d9b](https://github.com/Joakiingx/proyecto-titulo-d4/tree/f012d9bfb6aac21b22fab6c44c9cc438e31b92b9). Se inventariaron 86 archivos con SHA/tamaño. El [CSV por archivo](../Analisis/D4/Inventario-revision-2026-11-10.csv) y la [revisión integral](../Estudios/00-Revision-integral-y-brechas-2026-11-10.md) delimitan cobertura. La auditoría integral permanece **parcial**.

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
