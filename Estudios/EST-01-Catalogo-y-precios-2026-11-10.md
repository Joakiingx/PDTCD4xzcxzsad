# Catálogo técnico y referencias de precio · D4
Fecha de consulta: **10-11-2026**. Revisión documental para ES2. Equipo: Joaquín Pinto y Kevin Leal. Registro: REG-D4-017. Es una recopilación de publicaciones, sin solicitudes enviadas ni compras.

## Cómo usar este catálogo

Comparar la **configuración completa** de [la matriz v02](EST-01-Matriz-de-soluciones-D4-v02.md), con el recorrido y montaje reales. El mayor rango de una familia no identifica el rango del modelo comprado. Un precio unitario no representa el costo de una solución integrada. Las páginas comerciales pueden mostrar valores indexados o cambiar al cotizar; la fecha de consulta no constituye confirmación de stock, plazo, garantía ni venta a Chile.

Las especificaciones se toman de fabricantes. Los vendedores respaldan sus propias publicaciones de precio. Se conservan USD, EUR y GBP por separado; falta cotización en Chile y tipo de cambio con fecha si después se normaliza a CLP. Impuestos, flete, importación y alcances no expresos se consideran **pendientes**, sin suponer que están incluidos.

## 1. Instrumentos y límites de aplicación

| Código | Modelo o configuración documental | Datos que aporta el fabricante | Interpretación para D4 y cierre pendiente |
| --- | --- | --- | --- |
| TEC-01 | SAG KY-RAY 1D.01.01 | Primario reflexivo, reflector recomendado; hasta 150 m, 61 GHz, hasta ±2,5 cm, 20 Hz; 9–36 VDC, 7 W, IP65; Ethernet TCP/IP, UDP y PROFINET. WEB26-01. | Cubre aritméticamente los montajes teóricos de 100,20/107,64 m. Obtener rango cercano, reflector, calidad de eco, variante Chile y confirmación con polvo húmedo. IP65 debe contrastarse con exigencias E&I; no atribuirle IP67. |
| TEC-02 | Indurad iLDR-H, variante de largo alcance por definir | La ficha de familia identifica H como largo alcance; catálogo 2024 clasifica H en >100 m, M en 50 m y C en 10 m. WEB26-02/03. | Solicitar configuración H y reflector para la geometría D4, con margen y diagnóstico. “>100 m” no acredita por sí solo 107,64 m con cualquier blanco. Precio y unidad de procesamiento pendientes. |
| TEC-03 | Dos Symeo LPR-1DHP-291 activos, modo secundario | Dos unidades se miden mutuamente; hasta 300 m según modo y región. La ficha distingue primario con reflector, típicamente 50 m, y diversidad con cuatro unidades. IP67, alimentación DC. WEB26-04/05. | Alternativa de alcance documentado a profundizar. Necesita alimentación de la unidad móvil y configuración regional. No presupuestar una sola unidad con reflector para 200 m. |
| TEC-04 | VEGAPULS 6X, variante exacta por confirmar | Instrumento de nivel de líquidos/sólidos, rango de familia hasta 120 m; hay electrónica 4–20 mA/HART y distintas antenas/configuraciones. WEB26-06. | El uso horizontal sobre reflector móvil necesita aceptación del fabricante y ensayo. El margen nominal desde eje 18 sería 12,36 m; no es margen de eco demostrado. Un segundo equipo exige justificar cobertura, redundancia o diagnóstico. |
| TEC-05 | Allen-Bradley 845H-SJDL26CMY2 de bodega | La foto aportada muestra incremental, 500 pulsos/vuelta, 8–24 VDC. Catálogo histórico y ficha comercial del modelo permiten identificarlo. WEB26-08/09. | Disponibilidad, estado, pinout y acople siguen abiertos. La familia 847 reemplaza la 845H según Rockwell; no se ha identificado sustituto equivalente exacto. No conectar una salida diferencial directamente a cualquier DI. |
| TEC-06 | RFID HF Turck: TBEN-S2-2RFID-4DXP + TN-Q80-H1147 + TW-R50-M-B128 | Módulo BL ident de dos canales HF/UHF con Ethernet multiprotocolo. Cabezal HF de 13,56 MHz; alcance máximo publicado de 146 mm depende del tag. Tag HF apto para montaje metálico según condiciones. WEB26-10/12/14. | Confirmación localizada de zona; diseñar separación y orientación reales de cada pareja cabezal–tag. El máximo del lector no se transfiere automáticamente al tag escogido. Requiere alimentación y comunicación del carro. |
| TEC-07 | RFID UHF Turck TN-UHF-Q300-NA-CDS | Variante UHF NA con controlador e interfaces Ethernet industriales. WEB26-16. | No mezclar tags HF con este lector. Confirmar variante autorizable en Chile, tag UHF para metal, zona de lectura, lecturas cruzadas y pasos a velocidad real. Precio del lector no incluye 35 tags. |
| TEC-08 | Turck NI10-M18-AP6X-H1141 | Inductivo M18, PNP normalmente abierto, 10–30 VDC, distancia nominal 10 mm, IP67. La ficha exige considerar blanco y factores de corrección. WEB26-18. | Útil para referencia, código de zona o sensores fijos. Los 10 mm son distancia al blanco metálico, no alcance de seguimiento del carro. Diseñar holgura, vibración, soportes y acumulación. |
| TEC-09 | Turck TBEN-S2-8DIP | Ocho entradas PNP y Ethernet multiprotocolo; IP65/IP67/IP69K según ficha. WEB26-20. | Ejemplo para leer seis bits o agrupar sensores fijos. No asumir contador rápido A/B apto para encoder a partir de la existencia de DI. La compatibilidad con DeltaV requiere inventario y protocolo efectivo. |
| TEC-10 | Pepperl+Fuchs WCS3B-LS221 + riel WCS3 | Sistema absoluto **fotoeléctrico**: cabezal en U lee riel perforado, pasos de 0,8 mm para WCS3; familia hasta 314,5 m. Interfaz depende del cabezal/módulo, manual WEB26-21/22. | El alcance de riel no es problema aritmético para 71,84 m. Suciedad del sistema óptico, alineación, soportación, lector móvil y tiempo de montaje deben comprobarse. No confundir RS485 físico con Modbus disponible. |
| TEC-11 | SIKO MSK1000 + cinta MB100/1 | Sistema **magnético incremental**, salida diferencial LD/RS422, IP67. Separación de lectura ≤0,4 mm y ≤0,2 mm con referencia RB, según variante. WEB26-25. | Ejemplo real de tecnología magnética separada de WCS. Requiere referencia, contador, comunicación móvil y soporte de cinta. Cotizar longitud útil continua y comprobar tolerancias mecánicas, sin asumir precisión micrométrica sobre todo el recorrido. |
| TEC-12 | HMS Anybus Wireless Bolt AWB2030-B | Puente de Ethernet industrial por radio; la ficha especifica alimentación y protección. WEB26-26. | Accesorio para arquitecturas móviles, sujeto a cobertura, compatibilidad OT y regulación. Transportar Ethernet no convierte un protocolo de aplicación a otro ni aporta por sí solo calidad temporal. |

### Aprendizajes para distinguir tecnologías

Un radar primario mide el retorno de un blanco; un secundario intercambia con otra unidad activa. Por eso cambian el número de equipos, alimentación y precio. En RFID se identifica una referencia; la lectura debe asociarse a una zona, orientación y condición de movimiento. Un encoder incremental cuenta movimiento relativo y necesita restablecer o contrastar su referencia. Un riel absoluto entrega un código de lugar al leerlo, pero su principio físico puede ser óptico. Estas diferencias determinan los fallos que hay que ensayar.

El polvo ambiental y el polvo depositado son condiciones distintas. Además de atenuación se deben estudiar adherencia de concentrado húmedo, agua sobre antenas, corrosión, vibración y obstáculos metálicos. El grado IP del gabinete no demuestra exactitud de posición ni disponibilidad en esa aplicación.

## 2. Precios publicados y alcance exacto

Formato numérico español. Cantidad base: una unidad, salvo indicación. Los montos son referencias comerciales consultadas; no son ofertas aceptadas por CMDIC.

| ID precio | Artículo, vendedor y fuente | Precio y moneda | Estado publicado y alcance |
| --- | --- | --- | --- |
| PR-01 | Symeo LPR-1DHP-291, Radwell, WEB26-07 | **USD 9.517,00** por equipo “New Product” | Sensor unitario. La misma página separa USD 7.233 sin uso en embalaje original, USD 6.282 sin uso en embalaje Radwell y USD 5.711 reacondicionado. No mezclar condiciones para comparar nuevas adquisiciones. Configuración, licencias y garantía OEM por confirmar. |
| PR-02 | VEGAPULS 6X, RS Países Bajos, stock 267-2986, WEB26-17 | **EUR 4.474,80** por unidad, sin IVA local | Código publicado PS6X.2SWXATXAAAOXHARXXXXXS. Es una variante comercial concreta. No confirma aplicación horizontal, configuración final ni precio de VEGA Chile. |
| PR-03 | 845H-SJDL26CMY2, Next Day Automation, WEB26-09 | **USD 1.150,00** | Excedente sin uso. El vendedor declara que no es distribuidor autorizado y la garantía de fabricante puede no aplicar. No se toma como precio de encoder actual nuevo en canal OEM. |
| PR-04 | TBEN-S2-2RFID-4DXP, TSI Solutions, WEB26-11 | **USD 1.129,90** | Módulo, sin cabezal, tags ni radioenlace. |
| PR-05 | TN-Q80-H1147, Powermatic, WEB26-13 | **USD 774,60** | Cabezal, anunciado nuevo sellado; publicación indica pedido pendiente. No garantiza entrega antes de ES2. |
| PR-06 | TW-R50-M-B128, Automation Distribution, WEB26-15 | **USD 96,90** por tag | Tag HF individual. Se debe validar combinación, ambiente, montaje metálico y existencia de 35 puntos autorizados. |
| PR-07 | TN-UHF-Q300-NA-CDS, Powermatic, WEB26-19 | **USD 3.647,40** | Lector UHF NA anunciado nuevo sellado. Sin tags seleccionados, aprobación regional ni integración DCS. |
| PR-08 | NI10-M18-AP6X-H1141, TSI Solutions, WEB26-28 | **USD 148,00** | Precio recuperado en resultado indexado; la reapertura devolvió timeout. Referencia de confianza menor, **reconfirmar antes de presupuestar**. Farnell Italia muestra **EUR 140,15 sin IVA**, WEB26-29, como contraste en otra moneda; no se suman ambos. |
| PR-09 | TBEN-S2-8DIP, tienda Turck México, WEB26-20 | **USD 406,41** | Precio de lista publicado, sin envío/manipulación. No implica disponibilidad de canales de este tipo en Puerto Patache. |
| PR-10 | WCS3B-LS221, DigiKey, WEB26-23 | **USD 2.601,98** | Solo cabezal; no incluye riel, montaje, módulo de interfaz ni radioenlace. |
| PR-11 | WCS3-CS70-M1-S000000-L007000, DigiKey, WEB26-24 | **USD 280,90** | Un tramo de riel de 7 m con código de pedido definido. No usar este artículo repetido como lista de materiales de un recorrido absoluto continuo. |
| PR-12 | AWB2030-B, LC Automation, WEB26-27 | **GBP 354,00** sin IVA local | Un puente. Dos unidades serían GBP 708,00 si la arquitectura necesita ese par. Sin encuesta RF, configuración y montaje. |
| PR-13 | SAG KY-RAY e Indurad largo alcance; SIKO y cinta a longitud D4 | **Cotización pendiente** | No se encontró precio público suficientemente verificable para la configuración requerida. No se rellena el vacío con importaciones antiguas o precios de otro modelo. |

### Subtotales reproducibles: únicamente componentes identificados

| Configuración de cálculo | Fórmula | Subtotal publicado | Lo que impide tratarlo como costo instalado |
| --- | --- | --- | --- |
| Dos Symeo nuevos | 2 × USD 9.517 | **USD 19.034,00** | Alimentaciones, soportes, conectores, variante/funciones, integración, instalación y pruebas. |
| Dos Symeo reacondicionados | 2 × USD 5.711 | **USD 11.422,00** | Condición distinta al caso anterior, vida útil y aceptación de compra pendientes; mismas exclusiones de sistema. |
| Un VEGA / dos VEGA | 1 o 2 × EUR 4.474,80 | **EUR 4.474,80 / 8.949,60** | Aplicación no comprobada, soportes, lazo, protección, parametrización y pruebas. |
| HF: módulo + un cabezal + 35 tags | 1.129,90 + 774,60 + 35 × 96,90, en USD | **USD 5.296,00** | Radio, fuentes, cables, 35 soportes, instalación, integración y repuestos. 35 es escenario de diseño, no cantidad levantada. |
| Código de seis bits: seis inductivos + un módulo DI | 6 × 148 + 406,41, en USD | **USD 1.294,41** | PR-08 por reconfirmar; faltan placas, referencia de lectura válida, eventual séptimo sensor, alimentación y comunicación móvil. |
| 35 sensores fijos + cinco módulos de ocho DI | 35 × 148 + 5 × 406,41, en USD | **USD 7.212,05** | PR-08 por reconfirmar; canalización, cables largos, fuentes, red y montaje. El agrupamiento en cinco módulos es ilustrativo, puede cambiar o aprovechar DI existentes verificadas. |
| Radioenlace de dos Bolt | 2 × GBP 354 | **GBP 708,00** | Se mantiene separado de subtotales USD; cantidad y arquitectura por definir. |

**Por qué no multiplicar once rieles de 7 m:** el manual WCS indica fabricación por pedido y comienzo en posición cero salvo otro pedido. Repetir tramos con el mismo código inicial puede repetir posiciones. Se debe cotizar continuidad de codificación, longitud, uniones, dilatación y soportes para el recorrido definitivo. El precio de 7 m sirve para conocer la unidad comercial, sin extrapolar un sistema instalable.

## 3. Presupuesto que todavía se debe construir

Para cada candidato usar una lista de materiales con código completo, cantidad, condición, moneda, fuente y fecha. Separar:
1. Instrumento, blanco o referencias, procesador, contador o gateway y licencias.
2. Soportes, protección ambiental y anticorrosiva, gabinete, conectores y repuestos.
3. Fuentes y protecciones eléctricas, tierra, cables y canalizaciones.
4. Red o lazo de señal, puertos y licencias DeltaV, integración y pantalla.
5. Ingeniería, montaje, bloqueo y acceso, pruebas y restitución.
6. Logística, impuestos según modalidad de compra, garantía, servicio y plazo.

Modelo propuesto: costo inicial instalado = suministros + logística + ingeniería + montaje + integración + pruebas. Costo de ciclo de vida = costo inicial + mantenimientos y repuestos del período acordado. No asignar porcentaje de contingencia sin explicar incertidumbres y método. No convertir capacidad diferida a beneficio financiero con un precio del cobre; el concentrado pertenece a un proceso comercial que no se ha modelado.

Para compras con encoder de bodega, separar “adquisición evitada del componente disponible” de la adaptación e integración. Aun si el equipo autoriza su uso sin compra, faltan ensayo, acople, receptor, referencias y transmisión.

## 4. Registro de fuentes consultadas

La fecha de acceso de todas las filas es 10-11-2026. La versión del documento se explicita si está disponible. “Página” se refiere al PDF; “sección” a la publicación web. Se conserva el enlace externo para permitir la revisión de otra IA.

| ID | Fuente y ubicación | Uso y límite |
| --- | --- | --- |
| WEB26-01 | [SAG KY-RAY 1D.01.01](https://sag.ind.br/produtos/radares/ky-ray-1d/), Datos técnicos | Fabricante; límites y interfaces de TEC-01. Precio por consulta. |
| WEB26-02 | [Indurad, sensores 1D](https://indurad.com/sensors/1d-radar/), modelos | Fabricante; elegir variante, sin trasladar máximo de familia al C. |
| WEB26-03 | [Catálogo Indurad, 05-06-2024](https://indurad.com/wp-content/uploads/2024/06/ENG_2024-06-05-iSolution_DS_Brochure_WEB.pdf), página PDF 31, impresa 60–61 | Tabla C/M/H. No contiene oferta para D4. |
| WEB26-04 | [Symeo LPR-1DHP-291, ficha web](https://www.symeo.com/produkte/lpr-1dhp-291/), Primärradarmodus / Sekundärradarmodus | Fabricante; rangos dependen de modo, blanco y región. |
| WEB26-05 | [Symeo, documentación del producto](https://www.symeo.com/site/assets/files/3992/doc_edo_000519_0004_en_lpr-1dhp-291_product-documentation.pdf), modos primario, secundario y diversidad | Fabricante; revisar número de unidades y configuración en cotización. |
| WEB26-06 | [VEGA, VEGAPULS 6X](https://www.vega.com/es-es/productos/catalogo-de-productos/medicion-de-nivel/radar/vegapuls-6x), ficha y descargas | Fabricante; uso declarado de nivel, no prueba del carro horizontal. |
| WEB26-07 | [Radwell, LPR-1DHP-291](https://www.radwell.com/Buy/SYMEO/SYMEO/LPR-1DHP-291), Buying Options | Publicación comercial independiente. PR-01; separa condiciones. |
| WEB26-08 | [Rockwell, Bulletin 847](https://www.rockwellautomation.com/en-mde/products/hardware/motion-control/847-high-resolution.html), Overview | Fabricante; reemplazo de familia 845H, no equivalencia exacta de código. |
| WEB26-09 | [Next Day Automation, 845H-SJDL26CMY2](https://www.nextdayautomation.com/products/new-allen-bradley-845h-sjdl26cmy2-incremental-optical-encoder-500ppr-dld-8-24vdc), producto y condiciones | Vendedor; PR-03, excedente y características del artículo. Foto de bodega sigue siendo evidencia aparte. |
| WEB26-10 | [Turck TBEN-S2-2RFID-4DXP, 6814029](https://www.turck.us/en/product/6814029), Technical Data | Fabricante; módulo compatible con cabezales BL ident, no lector completo por sí solo. |
| WEB26-11 | [TSI, TBEN-S2-2RFID-4DXP](https://www.tsisolutions.us/itemdetail/TBEN-S2-2RFID-4DXP), precio | PR-04. |
| WEB26-12 | [Turck TN-Q80-H1147, 7030007](https://www.turck.us/en/product/7030007), Technical Data | Fabricante; alcance depende de combinación con tag. |
| WEB26-13 | [Powermatic, TN-Q80-H1147](https://www.powermatic.net/part/turck/tn-q80-h1147/1689531), precio y condición | PR-05. |
| WEB26-14 | [Turck TW-R50-M-B128, 7030209](https://www.turck.us/en/product/7030209), Technical Data | Fabricante; tag HF y condiciones de montaje. |
| WEB26-15 | [Automation Distribution, TW-R50-M-B128](https://automationdistribution.com/turck-tw-r50-m-b128-tag-hf-bl-ident/), precio | PR-06. |
| WEB26-16 | [Turck TN-UHF-Q300-NA-CDS, ficha](https://www.turck.us/datasheet/_us/edb_100000900_eng_us.pdf), versión regional e interfaces | Fabricante; versión NA pendiente de revisión para Chile. |
| WEB26-17 | [RS Países Bajos, 267-2986](https://nl.rs-online.com/web/p/level-sensors/2672986), precio y código | PR-02, EUR sin IVA local. |
| WEB26-18 | [Turck, ficha 4641291](https://www.turck.us/datasheet/_us/edb_4641291_eng_us.pdf), Electrical / Mechanical Data | Fabricante; distancia nominal y factores del inductivo. |
| WEB26-19 | [Powermatic, TN-UHF-Q300-NA-CDS](https://www.powermatic.net/part/turck/tn-uhf-q300-na-cds/1689529), precio | PR-07, lector sin tags. |
| WEB26-20 | [Turck México, TBEN-S2-8DIP, 6814073](https://shop.turck.com.mx/mx/es/shop/buses-de-campo/m%C3%B3dulo-de-e/s/6814073), ficha y precio de lista | Fabricante/tienda; PR-09. |
| WEB26-21 | [Pepperl+Fuchs, manual WCS](https://files.pepperl-fuchs.com/selector_files/navi/productInfo/doct/tdoct3786a_eng.pdf), Product Description, página impresa 11; diagnóstico de suciedad | Fabricante; principio óptico y riel por pedido con inicio cero salvo otra especificación. |
| WEB26-22 | [Pepperl+Fuchs, WCS3-CS70-M1](https://files.pepperl-fuchs.com/webcat/navi/productInfo/pds/184071_eng.pdf), ficha de riel | Fabricante; longitud, soporte y material de riel. |
| WEB26-23 | [DigiKey, WCS3B-LS221](https://www.digikey.com/en/products/detail/pepperl-fuchs-inc/WCS3B-LS221/22981780), precio | PR-10, cabezal solamente. |
| WEB26-24 | [DigiKey, riel 7 m](https://www.digikey.com/en/products/detail/pepperl-fuchs-inc/WCS3-CS70-M1-S000000-L007000/22974008), precio y código | PR-11; no representa trazado continuo D4. |
| WEB26-25 | [SIKO MSK1000, ficha 18-07-2025](https://www.siko-global.com/fileadmin/products/import/assets/PDB_MSK1000_ENG.PDF), páginas 1–4 | Fabricante; incremental, separación, señal y pedidos. Cinta larga por confirmar. |
| WEB26-26 | [HMS AWB2030-B, ficha](https://media.hms-networks.com/image/upload/v1747944689/Documents/Generated_Datasheets/Production/en/hms-AWB2030-B-en-Anybus-Wireless-Bolt---Ethernet-RJ45-PoE%C2%A0--Black-version.pdf), características | Fabricante; puente Ethernet/radio. |
| WEB26-27 | [LC Automation, AWB2030-B](https://www.lcautomation.com/Store/Category/1356/Product/AWB2030-B.aspx), precio | PR-12, GBP sin IVA local. |
| WEB26-28 | [TSI, NI10-M18-AP6X-H1141](https://www.tsisolutions.us/itemdetail/NI10-M18-AP6X-H1141), resultado indexado | PR-08 USD; reapertura con timeout, confirmar antes de presupuesto. |
| WEB26-29 | [Farnell Italia, NI10-M18-AP6X-H1141, 4337044](https://it.farnell.com/en-IT/turck/ni10-m18-ap6x-h1141/ind-prox-sensor-pnp-no-10mm-30v/dp/4337044), precio indexado | Contraste EUR 140,15 sin IVA. La apertura posterior también devolvió timeout. |
| WEB26-30 | [SUBTEL, equipos de alcance reducido](https://www.subtel.gob.cl/equipos-de-alcance-reducido/), requisitos | Organismo chileno; revisar cumplimiento para SKU y parámetros concretos, sin inferirlo de CE/FCC. |
| WEB26-31 | [NIST SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final), final | Referencia técnica OT. [Lista vigente](https://csrc.nist.gov/Projects/operational-technology-security/publications) distingue Rev. 4 borrador de septiembre 2026. No es la política interna CMDIC. |
| WEB26-32 | [BCN, DS 594](https://www.bcn.cl/leychile/navegar?idNorma=167766) | Referencia normativa de ambiente laboral. La extracción íntegra del articulado no fue accesible; confirmar texto vigente antes de aplicar artículos o límites. No sustituye mediciones de Higiene Industrial. |

No se descargaron ni archivaron ofertas firmadas. Para una decisión de compra se necesita cotización nominativa, versión/configuración, alcance y aceptación técnica. Para cada enlace que cambie, conservar evidencia autorizada de la oferta y registrar la nueva consulta sin sobrescribir la referencia histórica.

[Comparación v02](EST-01-Matriz-de-soluciones-D4-v02.md) · [Revisión y brechas](00-Revision-integral-y-brechas-2026-11-10.md) · [Pendientes](../Notas/19-Registro-de-pendientes.md) · [Bitácora](../Notas/12-Bitacora.md)
