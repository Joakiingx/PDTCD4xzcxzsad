# Operación actual

Según la ficha D4, Sala de Control coordina con el operador de terreno cuando requiere cambiar de zona. El operador se desplaza a la parte superior del stockpile, verifica visualmente la posición y confirma o ejecuta el cambio. La ficha reporta 10–15 minutos por movimiento y describe el traslado como componente relevante de esa espera.

La contraparte informó que el control existente usa Emerson DeltaV. La espera declarada, el movimiento físico del carro y la confirmación efectiva de zona deben poder distinguirse mediante marcas de tiempo comparables.

## Lo que falta levantar

- Quién autoriza y quién ejecuta cada paso.
- Cuándo se detiene o reduce la transferencia de concentrado durante la maniobra.
- Señales que delimitan solicitud, autorización, inicio de traslación, llegada y confirmación.
- Actuación vigente cuando falla la verificación y procedimiento para contingencias.

[[01-Desafio-D4|Desafío]] · [[05-Evidencia-visual|Evidencia visual]] · [[08-Arquitectura-DeltaV|Integración]] · [[09-Validacion|Pruebas]]

## Actores y decisiones

| Actor | Qué debe validar |
| --- | --- |
| Tutora y Mantención E&I | Alcance técnico, datos de terreno, factibilidad de instalación y mantenibilidad. |
| Operador en terreno | Secuencia real de traslado y verificación, señalización física y condiciones de acceso. |
| Sala de Control y Operaciones | Secuencia de cambio, criterios de pantalla, confirmación de zona y contingencias. |
| Especialista DCS | Significado de tags, tarjetas disponibles, permisivos y compatibilidad de la integración. |
| Joaquín y Kevin | Trazabilidad, alcance de la propuesta, consolidación de alternativas y evidencia de validación. |

[[13-Ficha-y-acta]] · [[18-Diagnostico-causal-y-riesgos]] · [[19-Registro-de-pendientes]]
