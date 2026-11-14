# EST-01 Posicionamiento y cobertura del tripper

Estado documental preliminar. Revisión del 9 de noviembre de 2026. Para los antecedentes de visita, el plano y la reevaluación de RFID y radar, consultar [Alternativas](../Notas/07-Alternativas.md) y [Evidencia visual](../Notas/05-Evidencia-visual.md). La geometría del montaje y el desempeño en Puerto Patache requieren verificación. Alcance base de monitoreo y confirmación remota. Cualquier mando se define por separado con DCS y Operaciones.

## Pregunta y criterio de decisión

¿Qué configuración puede obtener posición o identificar de forma inequívoca la zona de descarga a lo largo del recorrido operativo, sin usar hilos de reserva del festón, y entregar datos válidos a DeltaV?

La nave tiene aproximadamente 200 m según el acta F02. Esa cifra orienta la búsqueda. La distancia mínima y máxima desde la cara del sensor hasta el blanco deben calcularse con el plano y los puntos de montaje. El recuento de 78 cambios horarios y los saltos de hasta 25 zonas ayudan a justificar la cobertura. Para convertir zonas en metros se requieren las cotas reales. [[13-Ficha-y-acta]] · [[15-Estadistica-de-zonas]] · [[19-Registro-de-pendientes]]

## Configuraciones examinadas

| Configuración y estado | Evidencia pública | Qué falta resolver para D4 |
| --- | --- | --- |
| **A · Radar fijo y blanco pasivo. En exploración.** Indurad iLDR-H-DN150 como referencia de consulta. | Indurad identifica el iLDR-H-DN150 como la variante industrial de largo alcance. La documentación pública distingue la gama compacta iLDR-C y remite a solicitar la ficha del modelo H. [Ficha web de Indurad](https://indurad.com/sensors/1d-radar/) · [Portafolio, tabla iLDR](https://indurad.com/wp-content/uploads/2024/06/ENG_2024-06-05-iSolution_DS_Brochure_WEB.pdf) | Obtener rango mínimo y máximo para el reflector especificado, desempeño en el eje real, diagrama de radiación, diagnóstico, procesador y salida de datos. La gama H es una pista comercial. La cobertura para este blanco y esta nave sigue abierta. |
| **B · Radar en modo secundario con dos unidades activas. Candidato a dimensionar.** Symeo LPR-1DHP-291 o LPR-1D24. | Symeo especifica para el 291 alrededor de 50 m típicos con reflector pasivo y hasta 300 m con dos unidades activas, según configuración. El LPR-1D24 mide entre dos sensores, documenta hasta 1.000 m bajo sus condiciones y permite leer los datos en la unidad fija. [Ficha 291, páginas 3–4](https://www.symeo.com/site/assets/files/5620/doc_dbl_000518_0005_symeo_datasheet_lpr-1dhp-291_24-3725-sym_240208_online.pdf) · [Producto LPR-1D24](https://www.symeo.com/en/products/lpr-1d24/) | Verificar distancia cercana y lejana, línea de vista, alimentación disponible y autorizada en el carro, ruta fija de salida e interfaz con DeltaV. La arquitectura cambia porque el elemento móvil requiere energía. |
| **C · Dos radares de nivel fijos, desde extremos opuestos. Requiere demostración específica.** Referencia histórica VEGAPULS 6X. | VEGA publica hasta 120 m para una familia destinada a medición continua de nivel. [Ficha VEGAPULS 6X](https://www.vega.com/api/sitecore/DocumentDownload/Handler?documentContainerId=1008138&documentGroupId=66414&fileExtension=pdf&languageId=6&softwareVersion=&version=21-01-2025) | Solicitar evidencia del seguimiento longitudinal de un blanco móvil. Dimensionar cobertura cerca de cada sensor, zonas solapadas, coherencia de ambos resultados y traspaso de medición. El rango de nivel es una referencia del producto. |
| **D · Encoder y referencias absolutas por zona. Alternativa de contraste.** | La matriz ES1 contempla encoder con recalibración, RFID y peineta inductiva. Como referencia separada, el WCS comercial de Pepperl+Fuchs usa lectura fotoeléctrica de un riel codificado y publica hasta 327 m o 314,5 m según versión. [Manual WCS, sección 4](https://files.pepperl-fuchs.com/webcat/navi/productInfo/doct/tdoct3786a_eng.pdf?v=20230403152657) | Confirmar el componente de las fotos, el principio de medición, el acople y la comunicación del carro. Separar identificación discreta de posición continua. Si se estudia riel codificado, declarar su principio específico y dimensionar montaje y mantenimiento. |

Los datos del fabricante describen configuraciones comerciales. Las condiciones de terreno, el tipo de blanco y la integración determinan el desempeño de la propuesta. Conserva los costos, puntajes y tiempos de ES1 como [antecedente histórico](../Notas/21-Matriz-historica-de-alternativas.md). La referencia WCS de esa matriz debe distinguirse de la familia magnética o inductiva que el equipo quería explorar.

## Comprobación preliminar de alcance

Para una instalación alineada con el riel, la distancia al blanco en el extremo lejano se obtiene sumando la distancia al extremo cercano y el recorrido. La cota «71840 TRAVEL» de la elevación da 71,84 m de carrera nominal dibujada bajo la interpretación indicada en F07. Para comparar alcances hace falta conocer los puntos reales del sensor y del blanco. Si la instalación incluye desfases laterales o de altura, la distancia se calcula a partir de las posiciones medidas. [Elevación y procedencia](../Notas/05-Evidencia-visual.md#plano-mostrado-en-la-primera-reunión)

La prueba de cobertura debe incluir extremos, obstáculos representativos y fronteras de zona. El margen por incertidumbre, la latencia y la tolerancia se fijan con las referencias de terreno y el criterio de Operaciones. Hasta acordarlos, una lectura cuyo intervalo de incertidumbre cruza una frontera de zona puede presentarse como indeterminada en el diseño conceptual. La lógica y la reacción operativa se deben validar en EST-03 y EST-04.

## Qué cambia la selección

| Filtro | Evidencia para cerrarlo |
| --- | --- |
| Cobertura del recorrido | Plano acotado, distancias de montaje, zona cercana, posibles oclusiones, configuración exacta y prueba representativa. |
| Zona correcta | Tabla de límites Z1–Z35, referencia independiente, error admisible y criterio para fronteras. |
| Festón y alimentación | Esquema de energía para toda unidad móvil y confirmación del punto de conexión disponible. |
| DeltaV | Señal y protocolo verificables, hardware instalado y forma de indicar calidad y antigüedad de datos. |
| Intervención | Actividades previas y en parada, ruta de montaje, pruebas y duración de intervención. |

**Puente hacia EST-03.** Un conector Ethernet por sí solo no define el protocolo de integración. La ficha de Emerson enumera los protocolos que admite su tarjeta EIOC. El acta D4 registra I/O disponibles en Sala Eléctrica. Falta identificar qué hardware y protocolo están realmente disponibles en Puerto Patache. [Ficha DeltaV EIOC](https://www.emerson.com/content/dam/emerson/it/systems-and-software/deltav-distributed-control-system-dcs/product-data-sheets/documents/deltav-ethernet-io-card.pdf)

## Resultado y próxima verificación

Las configuraciones de la tabla son referencias documentales de la revisión inicial. La comparación actual reevaluará RFID y radar tras acordar qué debe confirmar el operador. Cualquier configuración necesita geometría, alimentación, interfaz y evidencia de desempeño aplicables. Completar [[EST-01-Levantamiento-y-consulta-tecnica]] con E&I, DCS y Operaciones.

[[00-Mapa-de-estudios]] · [[06-Requisitos]] · [[07-Alternativas]] · [[08-Arquitectura-DeltaV]] · [[09-Validacion]]
