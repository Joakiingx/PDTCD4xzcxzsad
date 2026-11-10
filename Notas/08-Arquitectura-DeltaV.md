# Arquitectura de integración a DeltaV

Concepto en estudio. El sistema mide el carro desde terreno, entrega una señal por una ruta fija a Sala Eléctrica y presenta posición, zona y calidad en Sala de Control. El equipo y la interfaz se definen en conjunto.

| Elemento | Decisión o antecedente pendiente |
| --- | --- |
| Medición | Cotas extrema a extrema, referencia cero, tolerancia por zona y calidad de la lectura. |
| Interfaz | Modelo, alimentación, protocolo o salida, tipo de I/O y ruta de canalización. |
| DCS | Conversión distancia a zona, sello de tiempo, calidad y estado en pantalla. |
| Estado degradado | Detección de señal perdida, inválida o congelada. Validar indicación y contingencia con Operaciones. |
| Traslación | Obtener permisivos y enclavamientos vigentes. Definir con DCS cualquier alcance de mando. |

[[05-Evidencia-visual|Entorno físico]] · [[06-Requisitos|Requisitos]] · [[07-Alternativas|Selección]] · [[09-Validacion|Pruebas]]

## Lectura del esquema histórico FIG-04

El dibujo propone `ZT-025`, blanco triédrico de acero 316L, cableado en bandeja y una cadena con iRPU, 4–20 mA y una fuente de 24 VDC. Muestra en HMI posición, zona y confirmación remota. Todo ello pertenece al concepto ES1. El canal AI, la señal disponible del modelo, la fuente, el rango, la identificación del instrumento y los puntos de montaje requieren verificación antes de comprometer la ingeniería.
