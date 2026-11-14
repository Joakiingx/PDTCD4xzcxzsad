# Desafío D4

La ficha F01 y el acta F02 describen la descarga de concentrado mediante el tripper de la correa 320CV025 en Puerto Patache. Según esos antecedentes, Sala de Control recurre a verificación presencial y el DCS Emerson DeltaV carece de una variable de posición en línea para el carro. [Fuentes F01 y F02](04-Evidencias-y-fuentes.md)

| Elemento | Estado |
| --- | --- |
| Síntoma | Espera y desplazamiento del operador para confirmar la zona de descarga, según F01. |
| Condición técnica | Falta de una variable de posición en línea en el DCS, declarada en F02. |
| Consecuencias reportadas | Demora operacional, indisponibilidad del operador para otras tareas y exposición durante sus ingresos de verificación, según F01. |
| Configuración de Puerto Patache | Según Joaquín (F08), existen dos trippers en recintos de igual medida, con distinto tonelaje de acopio. Los usos para embarcaciones y camiones se diferencian según el tripper. Falta asociar equipo, recinto, destino y tonelaje por stockpile. [Plano y conteo](05-Evidencia-visual.md#plano-mostrado-en-la-primera-reunión) |
| Alcance de ES2 | Caso de trabajo para un tripper y su recinto. El equipo toma como referencia aquel donde les mostraron el láser y propone que el diseño pueda adaptarse al segundo. La ficha y el acta mencionan la correa 320CV025. Queda por confirmar su correspondencia con el tripper del láser y con F03 y F04. [Alcance de trabajo](10-Evaluacion-2.md#alcance-de-trabajo) |
| Alcance funcional propuesto | Medición en línea y confirmación remota de zona. El mando se evalúa con DCS y Operaciones. |
| Equipo | Joaquín Pinto y Kevin Leal. Daniela Guerra Sepúlveda es la contraparte técnica de Mantención E&I. |

El dossier de diagnóstico ES1 v2.0 es el antecedente de trabajo. La evaluación concluyó en clases según el equipo.

[[02-Operacion-actual|Operación actual]] · [[03-Linea-base|Línea base]] · [[04-Evidencias-y-fuentes|Fuentes]] · [[06-Requisitos|Requisitos]] · [[10-Evaluacion-2|Evaluación 2]]
