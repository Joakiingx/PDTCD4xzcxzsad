# Arquitectura de integración a DeltaV

El diseño estudia cómo llevar a Sala de Control una indicación de zona o posición con validez identificable. F05 documenta I/O disponibles en Sala Eléctrica y ausencia de hilos de reserva en el festón. Durante la visita se informó de una instalación inalámbrica en curso cerca del tripper y se sugirió evaluar su posible uso. La ruta de señal para D4 está por definir. [Acta y registro de visita](13-Ficha-y-acta.md)

| Elemento | Decisión o antecedente pendiente |
| --- | --- |
| Medición | Criterio de llegada y calidad de lectura, etiquetas o puntos de medición según la alternativa y referencias físicas de zona. |
| Interfaz | Modelo, alimentación, protocolo o salida, tipo de I/O y ruta aplicable. Confirmar estado y uso de la instalación inalámbrica con Mantención y DCS. |
| DCS | Interpretación del dato recibido, indicación de zona, vigencia y calidad. La conversión de distancia aplica si el diseño adopta una medición de distancia. |
| Estado degradado | Detección de señal perdida, inválida o congelada. Validar indicación y contingencia con Operaciones. |
| Traslación | Obtener permisivos y enclavamientos vigentes. Definir con DCS cualquier alcance de mando. |

[[05-Evidencia-visual|Entorno físico]] · [[06-Requisitos|Requisitos]] · [[07-Alternativas|Selección]] · [[09-Validacion|Pruebas]]

## Lectura del esquema histórico FIG-04

El dibujo propone `ZT-025`, blanco triédrico de acero 316L, cableado en bandeja y una cadena con iRPU, 4–20 mA y una fuente de 24 VDC. Muestra en HMI posición, zona y confirmación remota. Todo ello pertenece al concepto ES1. El canal AI, la señal disponible del modelo, la fuente, el rango, la identificación del instrumento y los puntos de montaje requieren verificación antes de comprometer la ingeniería.

## Contraste documental de interfaces · 2026-11-10

Esta comparación orienta PEND-04 y R02/R07. Describe capacidades publicadas. La versión, el equipo, las licencias y la red del sitio siguen por identificar.

| Ruta | Qué está documentado | Qué falta para aplicarla en D4 |
| --- | --- | --- |
| Radar SAG KY-RAY 1D.01.01 → enlace de datos | SAG publica TCP/IP, UDP y PROFINET en su ficha web. Esa lista carece de un mapa de datos y de confirmación de una salida 4–20 mA o un servidor Modbus TCP. [SAG, datos técnicos](https://sag.ind.br/produtos/radares/ky-ray-1d/) | Solicitar manual de comunicaciones, variante, rol, GSDML si aplica, datos de distancia/calidad, unidad, escala, origen de tiempo y tratamiento de fallas. TCP/IP identifica una pila de comunicación. La compatibilidad requiere un protocolo de aplicación y roles comunes. |
| PROFINET → controlador DeltaV PK | Emerson documenta el rol de controlador PROFINET para PK integrado a DeltaV desde v15.FP1, con condiciones de la configuración. [Emerson, PK Controller, sección PROFINET](https://www.emerson.com/is/content/emerson/es/systems-and-software/deltav-distributed-control-system-dcs/product-data-sheets/documents/deltav-pk-controller.pdf) | Confirmar que ese hardware, versión, configuración y red están disponibles y autorizados en Puerto Patache. Validar con DCS el archivo de descripción y el modo degradado. |
| Modbus TCP u otro protocolo habilitado → DeltaV EIOC | La ficha EIOC enumera Modbus TCP, EtherNet/IP, IEC 61850 MMS, OPC UA y una modalidad de integración de tags EtherNet/IP. Requiere el protocolo y licenciamiento correspondientes. [Emerson, Ethernet I/O Card, págs. 2, 4–5](https://www.emerson.com/is/content/emerson/en/systems-and-software/deltav-distributed-control-system-dcs/product-data-sheets/documents/deltav-ethernet-io-card.pdf) | Para usar la EIOC con SAG, demostrar coincidencia de protocolo o dimensionar una pasarela autorizada y validarla. Confirmar presencia y configuración de la tarjeta. |
| 4–20 mA → entrada analógica DeltaV | Emerson documenta AI 4–20 mA en el CHARM correspondiente, con opciones HART según equipo y montaje. [Emerson, Electronic Marshalling, p. 14](https://www.emerson.com/is/content/emerson/en/systems-and-software/deltav-distributed-control-system-dcs/product-data-sheets/documents/deltav-electronic-marshalling.pdf) | Confirmar salida analógica real, modelo y canal AI. Definir escalado, alimentación y cómo conservar la indicación de validez o detectar degradación. |

### Qué pedir en PEND-04

**DCS.** ¿Qué modelo y versión de controlador, módulo o canal podemos usar? ¿Qué protocolo y rol están habilitados? ¿Qué tipo de conexión, ruta y diagnóstico permite el sitio?

**Proveedor.** ¿Qué documentación de interfaz corresponde al modelo ofertado? ¿Cómo publica posición, validez y actualización de medición? ¿El tiempo o contador es de una adquisición nueva, o solo de un mensaje transmitido?

**Aprendizaje.** Un conector, una tarjeta disponible y un protocolo publicado son evidencias de cosas distintas. La compatibilidad se comprueba a ambos extremos, y la prueba debe demostrar que los datos conservan su calidad y su significado hasta Sala de Control. REG-D4-012 en [[12-Bitacora]].
