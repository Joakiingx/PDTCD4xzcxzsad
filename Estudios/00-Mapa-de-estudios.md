# Mapa de estudios del Desafío D4

La Evaluación 2 debe transformar el diagnóstico del Módulo 7 en una propuesta verificable de monitoreo de posición. Este índice conserva lo que ya se aprendió, las decisiones pendientes y las pruebas que podrían cambiar la propuesta.

| ID | Pregunta | Entregable y criterio de cierre | Dependencia o estado |
| --- | --- | --- | --- |
| EST-01 | ¿Qué arquitectura cubre el recorrido real sin usar hilos libres del festón? | Comparación por configuración y verificación del rango mínimo y máximo, geometría y punto de montaje. Cierra cuando existe una arquitectura viable con evidencia de cobertura y otra de respaldo documentada o descartada con motivo. | Revisión documental inicial hecha. Pendiente plano, terreno y fichas de la configuración. [[EST-01-Posicionamiento-y-cobertura]] |
| EST-02 | ¿Qué necesita ver y confirmar Sala de Control? | Secuencia actual y propuesta con responsable por paso, estados de HMI y definición de los instantes que delimitan la meta de menos de 2 min. | Puede comenzar en paralelo. Depende de Operaciones y PEND-03/PEND-05. |
| EST-03 | ¿Cómo llega a DeltaV la posición con su calidad? | Diagrama de señales, interfaz elegida, origen de alimentación, estado válido, pérdida de datos y comportamiento al reiniciar. Cierra con revisión de DCS sobre el hardware disponible. | Depende de PEND-04 y de las configuraciones de EST-01. |
| EST-04 | ¿Cómo se comprueban cobertura, zona correcta y recuperación de señal? | Matriz requisito–prueba–evidencia. Ensayo de lógica y propuesta de prueba representativa en terreno con referencias independientes. | Protocolo preliminar posible en paralelo. Criterios finales dependen de EST-01–03. |
| EST-05 | ¿Qué exige el montaje dentro de la ventana de 12 h? | Secuencia de actividades, tareas previas, recursos, duraciones justificadas, contingencias y entrega a Operaciones. | Depende del montaje y de la ruta de canalización de la alternativa. |
| EST-06 | ¿Cuánto tiempo se ahorra y qué impacto se puede defender? | Línea base complementaria con marcas por fase y, si está disponible, transferencia efectiva. Comparación con la propuesta y estimación de costo por componentes. | Parte del diagnóstico está reproducida. Impacto real depende de PEND-05. |
| EST-07 | ¿Cómo se presenta y defiende la selección? | Matriz de argumentos, evidencia de respaldo y preguntas de comisión. Integrar pauta oficial cuando esté disponible. | Puede prepararse durante el estudio. Cierra cuando se dispone de la pauta y la propuesta consolidada. |

## Orden de trabajo

Levantar geometría y alternativas, y describir la maniobra con Operaciones en paralelo. Continuar con la interfaz de DeltaV, criterios de aceptación y montaje cuando haya configuraciones concretas. Consolidar costo, impacto y defensa con los resultados.

- [[EST-01-Levantamiento-y-consulta-tecnica]] contiene la ficha lista para completar con E&I, DCS y proveedores.
- [[06-Requisitos]] reúne los requisitos R01–R07. [[19-Registro-de-pendientes]] identifica los datos todavía abiertos.
- [[10-Evaluacion-2]] conserva los productos de la etapa. [[11-Defensa-ES3]] conserva la preparación del comité.

## Cómo registrar un estudio para futuras sesiones

Identifica la pregunta, el requisito que afecta y la decisión que habilita. Distingue antecedentes de faena, datos de fabricante, inferencias, resultados de prueba y tareas pendientes. Conserva la fuente exacta con página o sección, y señala qué parte se reproduce desde archivos del proyecto. Registra por separado la conclusión actual, la evidencia que podría cambiarla y la próxima verificación. Actualiza [[12-Bitacora]] cuando el equipo adopte una decisión.
