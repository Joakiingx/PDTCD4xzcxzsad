# Matriz de soluciones D4 · v02
**Fecha:** 10-11-2026. **Estado:** comparación documental de trabajo para ES2; selección e implementación pendientes. **Autorización:** solicitud de Joaquín de ampliar investigación y mejorar la matriz. Registro REG-D4-018.

**Contexto de vigencia.** La lista corta de la sección 6 registra la prioridad de investigación del 10-11-2026. Para el trabajo actual, la reevaluación de RFID y radar depende del criterio de confirmación que se acuerde con Operaciones. Las distancias de montaje de la sección 2 son cálculos geométricos condicionados. [Alternativas en revisión](../Notas/07-Alternativas.md)

Esta matriz se usa junto al [catálogo y precios](EST-01-Catalogo-y-precios-2026-11-10.md), que identifica fabricantes, vendedores, condiciones y fuentes WEB26. Conserva como antecedente la [matriz histórica ES1](../Notas/21-Matriz-historica-de-alternativas.md). Los documentos, Excel y figuras originales permanecen intactos. Las observaciones a ese material están en [hallazgos](../Notas/25-Registro-de-hallazgos-de-revision.md).

## 1. Decisión que debemos preparar

Escoger una configuración que permita a Sala de Control conocer y confirmar la ubicación del tripper con calidad identificable. El alcance base es **monitoreo y confirmación**. Agregar mando remoto, automatizar traslación o modificar permisivos requiere definición independiente de Operaciones y DCS.

La comparación debe responder, para cada candidato: ¿cubre el recorrido y las zonas acordadas?, ¿cómo entrega un dato vigente a DeltaV?, ¿cómo se alimenta?, ¿qué falla puede producir una zona aparente incorrecta?, ¿cómo se monta y prueba dentro de la ventana?, ¿qué costo y mantenimiento tiene el sistema completo?

Ningún equipo queda seleccionado únicamente por esta revisión. Se propone una lista corta de investigación y las pruebas que permitirán ordenarla con evidencia.

## 2. Bases actuales, origen y límites

| Base | Valor / estado | Consecuencia |
| --- | --- | --- |
| Edificio de ambos stockpiles | Aproximadamente 200 m, declarado en acta | Es contexto de nave; no usarlo automáticamente como carrera de este carro. |
| Carrera dibujada | 71,84 m, cota TRAVEL del plano compartido; lectura registrada en REG-D4-005 | Dimensionamiento provisional. Confirmar cajetín, revisión, carro, límites actuales y correspondencia con Z1–Z35. |
| Cadena longitudinal dibujada | 28,36 + 71,84 + 35,80 = 136,00 m | Permite comparar dos ubicaciones teóricas de radar, sin convertirlas en puntos aprobados. |
| Radar en eje 1 / eje 18 | Distancia teórica al blanco 28,36–100,20 m / 35,80–107,64 m | Válido solo si sensor y blanco siguen la geometría longitudinal asumida, sin desplazamientos, altura relativa ni obstrucciones. |
| Zonas en la comparación del 10-11-2026 | Códigos Z1–Z35 de F03, con 23 observados | Las cantidades de 35 etiquetas o referencias son escenarios de esta versión. Para dimensionar cada tripper, cotejar los códigos de F03 con la elevación y el conteo del equipo. [Plano y conteo](../Notas/05-Evidencia-visual.md#plano-mostrado-en-la-primera-reunión) |
| Festón | Sin hilos de reserva, F05 declarado | Cada configuración debe mostrar ruta de señal y energía autorizables. |
| I/O | Disponibles en Sala Eléctrica, F05; tipo y protocolo abiertos | No asumir tarjeta AI, contador A/B, gateway o PROFINET instalados. |
| Energía | 110 VAC declarados, ubicación por confirmar | Un equipo de 24 VDC exige fuente y protección; una unidad móvil exige alimentación móvil comprobada. |
| Ventana | 12 h mensuales, declarada | Incluir montaje, bloqueo, configuración, pruebas, restitución y contingencia en la intervención. |
| Entorno | Polvo de concentrado, humedad, calor; falla láser previa declarada | Especificar condiciones representativas y fallos; ningún principio físico se declara absolutamente inmune. |
| Meta | <2 min y cero ingresos rutinarios para verificar, por acordar fases y excepciones | Medir fases comparables. Menor tiempo de lectura del sensor no demuestra menor tiempo total de maniobra. |

## 3. Filtros antes de puntuar

“Documental” significa que una ficha respalda la capacidad nominal; sigue pendiente comprobar el montaje. “Condicional” exige una evidencia concreta. “No acreditado” significa que no hay base para dar el filtro por cumplido. No sustituir ausencia de información por puntaje medio.

| Filtro | Relación | Evidencia mínima |
| --- | --- | --- |
| G1 · Cobertura y significado | R01 | Extremos y zonas reales, distancia mínima/máxima o referencias completas, tratamiento de tránsito y fronteras. |
| G2 · Ambiente | R04 | Modelo y protección apropiados, prueba representativa con polvo y depósitos, obstáculos, vibración y limpieza. |
| G3 · Ruta sin hilos spare | R03 | Esquema completo de alimentación y señal, incluyendo todo elemento móvil. |
| G4 · Integración y calidad | R02/R07 | Hardware/protocolo/rol efectivo, posición o zona, diagnóstico y mecanismo de antigüedad desde adquisición. |
| G5 · Instalación y restitución | R05 | Duraciones justificadas y precedencias dentro de la ventana; tareas previas autorizables y contingencia. |
| G6 · Confirmación operacional | R06 | Secuencia aceptada, tolerancia, responsable y comportamiento ante datos inválidos. |

Si el equipo exige posición continua durante traslación, una identificación puntual de zona no supera G1 por sí sola. Si acepta confirmación en puntos y un estado de tránsito explícito, esas alternativas pueden seguir en evaluación. Esa decisión funcional debe preceder al ranking.

## 4. Comparación de configuraciones completas

Todos los precios se identifican como publicación o subtotal incompleto. La cantidad de 35 referencias se conserva como escenario hasta levantar el mapa y las necesidades reales.

| ID | Configuración | Qué entrega y ruta conceptual | Cobertura / beneficio defendible | Riesgo o condición que decide |
| --- | --- | --- | --- | --- |
| C00 | Continuidad del método presencial | Radio, verificación visual y registro actual | Referencia operacional para comparar. No resuelve ausencia de medición remota. | Espera declarada y exposición deben medirse; sirve como escenario base, sin mejora acreditada. |
| C01 | SAG KY-RAY fijo + reflector pasivo | Posición continua desde punto fijo; Ethernet hasta interfaz autorizada | Rango nominal 150 m cubre ambos montajes teóricos. No necesita energía de instrumentación en el reflector. | Alcance con blanco elegido, IP65, ecos, polvo húmedo, integración y soporte local. Cotización pendiente. |
| C02 | Indurad iLDR-H configurado + reflector + procesamiento según oferta | Radar primario fijo; arquitectura del proveedor hasta DCS | Mantiene la ventaja de infraestructura fija si la configuración ofertada la acredita. | Rango con blanco y todos los componentes por especificar. No utilizar iLDR-C como sustituto largo alcance. |
| C03 | Dos Symeo LPR-1DHP-291 activos | Unidad fija + unidad móvil; dato desde unidad fija a DCS | Distancia nominal del modo secundario es suficiente, condicionada por región/configuración. | Energía móvil, línea de vista, funciones efectivamente incluidas, RF Chile y costo de dos equipos. |
| C04 | Un VEGAPULS 6X fijo + reflector, aplicación especial | Distancia por lazo 4–20 mA/HART si la variante y DCS lo permiten | 120 m nominales superan las distancias teóricas. Posible ruta fija analógica. | Es un radar de nivel; fabricante debe aceptar seguimiento horizontal móvil, tasa, eco seleccionado y comportamiento de fallo. |
| C04B | Dos VEGAPULS 6X desde extremos opuestos | Dos lazos y lógica de coherencia/traspaso | Posible diversidad o cobertura de obstáculos, por demostrar. La cota actual no obliga por sí sola a duplicar. | Justificar segundo equipo, solape, valores discordantes, falla común y costo. Dos lecturas no crean automáticamente un sistema de seguridad. |
| C05 | Encoder 845H disponible + referencias + contador compatible + enlace móvil | Posición incremental reconstruida; lectura A/B cercana al encoder y envío de posición/estado | Puede aprovechar equipo de bodega y facilitar banco de pruebas. | Salud del encoder, pinout, acople, relación de transmisión, patinaje, homing tras pérdida de energía, alimentación y contador; radio o portadora aún sin validar. |
| C06 | RFID HF: cabezal móvil + tags fijos + módulo + comunicación | Identidad de referencia al pasar; confirmación localizada | Evita integración de velocidad/patinaje para reconocer una referencia inequívoca. | Holgura de lectura, metal, fijación, velocidad, tags ambiguos y estado entre referencias. No confundir última zona leída con posición actual. |
| C07 | RFID UHF: lector móvil + tags UHF apropiados + comunicación | Identificación de tags con área de lectura diseñada | Permite estudiar mayor separación mecánica que HF, sujeto a combinación concreta. | Lecturas simultáneas o anticipadas, metal/agua, polarización y normativa de la variante NA. No ha quedado definido el tag. |
| C08 | Seis inductivos móviles + placas codificadas + DI + comunicación | Hasta 64 combinaciones teóricas para 35 identificadores | Código localizado sin depender de pulsos acumulados. | Lectura parcial durante transición puede formar un código válido incorrecto; falta habilitación de lectura, enclavamiento temporal y estado de tránsito. Alimentación/enlace móvil pendientes. |
| C09 | Sensores inductivos fijos por referencia + blanco pasivo en carro + rutas fijas | Señales discretas desde puntos fijos a DI locales/fijas | **Alternativa agregada:** prescinde de instrumentación alimentada en carro y de nuevos hilos móviles. | Muchos soportes, cables y canales. Diseñar longitud de blanco y cobertura: un punto de detección no identifica todo el intervalo entre zonas. Costo/montaje por levantar. |
| C10 | WCS3B + riel absoluto continuo + interfaz + enlace móvil | Código absoluto del riel, sin acumular giro de rueda | Longitud de familia suficiente; no depende de patinaje. | Principio fotoeléctrico, limpieza, alineación y soporte del riel. Cabezal móvil requiere energía y transmisión; 12 h no acreditadas. |
| C11 | SIKO MSK1000 + cinta magnética + referencia + contador + enlace | Posición incremental sobre cinta, sin rueda de medición | Familia magnética separada de WCS; útil para estudiar medición lineal guiada. | Holguras submilimétricas según variante, cinta larga y soportación, referencias y protección mecánica; cotización y montaje abiertos. |

### 4.1 Estado actual de filtros

D = base documental nominal; C = condicional/pendiente; N = no cumple el objetivo base. D nunca significa validación de faena.

| ID | G1 | G2 | G3 | G4 | G5 | G6 | Acción que habilita continuar |
| --- | --- | --- | --- | --- | --- | --- | --- |
| C00 | N | C | D | N | D | N | Medir operación actual para comparación. |
| C01 | D | C | D | C | C | C | Plano de montaje + aceptación del proveedor + inventario DCS. |
| C02 | C | C | C | C | C | C | Oferta técnica completa de variante largo alcance. |
| C03 | D | C | C | C | C | C | Confirmar energía móvil y par activo/región/interfaces. |
| C04 | D | C | D | C | C | C | Ensayo y aceptación de uso horizontal; la D solo cubre aritmética nominal de rango. |
| C04B | D | C | D | C | C | C | Justificar necesidad y lógica de dos equipos, además de C04. |
| C05 | C | C | C | C | C | C | Banco del encoder y estudio de acople/contador/transmisión. |
| C06 | C | C | C | C | C | C | Acordar aceptación de lectura localizada y ensayar holgura/velocidad. |
| C07 | C | C | C | C | C | C | Elegir tag y variante regional, medir lecturas cruzadas. |
| C08 | C | C | C | C | C | C | Diseñar captura válida, transiciones y alimentación móvil. |
| C09 | C | C | D | C | C | C | Levantar cantidad de puntos, cables, cobertura y DI. |
| C10 | D | C | C | C | C | C | Probar limpieza/alineación y cotizar riel de código continuo. |
| C11 | C | C | C | C | C | C | Verificar cinta/holgura en recorrido y adquisición de pulsos. |

La ruta fija de C01/C04/C09 respalda conceptualmente G3; su canalización real sigue requiriendo levantamiento. En C09 G1 depende de si se exige cobertura continua o confirmación en posiciones discretas.

### 4.2 Costos comparables disponibles

Ver PR-01–PR-13 en el catálogo para condición, fuente y límites.

| Candidato | Referencia de adquisición parcial | Componentes decisivos que faltan |
| --- | --- | --- |
| C01 / C02 | Cotización pendiente | Radar, blanco, procesamiento, interfaces, soporte y servicio. |
| C03 | USD 19.034,00, dos unidades nuevas publicadas | Configuración/funciones, energía móvil, accesorios e integración. |
| C04 / C04B | EUR 4.474,80 / 8.949,60 | Variante y aplicación aceptadas, lazos y pruebas. |
| C05 | USD 1.150,00 para referencia de encoder excedente; reutilización por confirmar | Contador, acople, sensores de referencia, fuentes, enlace y comprobación del equipo. |
| C06 | USD 5.296,00, módulo + cabezal + 35 tags HF | Radio, potencia, soportes, cableado y DCS. |
| C07 | USD 3.647,40, solo lector UHF | Tags UHF, referencias, comunicaciones y configuración regional. |
| C08 | USD 1.294,41, seis sensores y un DI; precio de sensores por reconfirmar | Placas, habilitación de lectura, alimentación y enlace. |
| C09 | USD 7.212,05, 35 sensores y cinco DI ilustrativos; sensores por reconfirmar | Cableado fijo, red, soportes, fuentes; cantidades pueden cambiar con DI existentes. |
| C10 | USD 2.601,98, solo cabezal | Riel continuo, soportes, módulos, energía y enlace. |
| C11 | Cotización pendiente | Sensor, cinta y referencias, contador, mecánica y enlace. |

No ordenar esta tabla por monto como si representara CAPEX equivalente. No reutilizar USD 2.500–6.500 del expediente como rango confirmado del proyecto: algunas publicaciones exceden ese rango solo en sensores.

## 5. Configuraciones que no acreditan el montaje de extremo estudiado

| Referencia | Motivo documental | Cómo podría reconsiderarse |
| --- | --- | --- |
| Indurad iLDR-C del esquema ES1 | El catálogo lo clasifica en 10 m, muy inferior al extremo lejano teórico | Variante H especificada; o arquitectura totalmente distinta con alcance y zona demostrados. |
| Symeo 291 único en modo primario | Alrededor de 50 m típicos con reflector; no acredita 100,20/107,64 m | Otra ubicación o variante respaldada por OEM, o pasar a configuración activa C03. |
| Cualquier instrumento comercial de 40–50 m desde estos extremos | Cobertura nominal insuficiente | Rediseño de ubicación y cobertura total, con prueba de zonas de transición. |
| WCS o cinta descartados solo por “200 m y 24–36 h” | Longitud y tiempo históricos no son demostración de imposibilidad para la carrera leída actual | Revisar metrado, preparación y secuencia. No afirmar que caben en 12 h hasta justificarlo. |

La falla de un láser anterior documenta una experiencia de faena. No demuestra que todo sensor óptico protegido sea imposible. Si se estudia alguno, debe justificar protección y mantenimiento frente a esa experiencia. WCS se examina con su principio real y una trayectoria óptica distinta de un telémetro a larga distancia.

## 6. Lista corta recomendada para la próxima investigación

Prioridad provisional registrada el 10-11-2026. El enfoque actual se consulta en [Alternativas](../Notas/07-Alternativas.md).

1. **C01 y C02: consulta técnica de medición fija con reflector.** Es la ruta con menor dependencia de energía y transmisión de datos en el carro. SAG aporta una ficha numérica concreta; Indurad debe responder con variante largo alcance y configuración completa. Estudiar ambos permite comparar servicio, interfaces y costo con el mismo caso.
2. **C03: alternativa activa de contraste.** Mantenerla como referencia de alcance y robustez de intercambio entre unidades; resolver potencia móvil y oferta del par antes de considerarla económicamente viable.
3. **C05: banco de aprendizaje con el encoder disponible.** Revisar estado y señal, sin asumir que queda seleccionado para planta. El ensayo puede enseñar cuadratura, escala, referencia y pérdida de conteo con menor compromiso de compra.
4. **C06 y C09 si Operaciones acepta confirmación discreta.** Comparar lectura HF localizada y sensores fijos con infraestructura estática. Esta decisión puede simplificar el objetivo, pero debe quedar escrita.
5. **C04: consulta específica a VEGA.** Mantener como hipótesis ensayable por la ruta analógica; no defenderla como equivalente probado a un radar de posicionamiento industrial.
6. **C07/C08/C10/C11: reserva documentada.** Reabrir si el levantamiento favorece sus condiciones o las primeras opciones no superan filtros. Conservar razones de descarte y condiciones de reconsideración.

Esta es una prioridad de obtención de evidencia, no un ganador técnico o una instrucción de compra.

## 7. Método de evaluación a acordar antes de asignar números

Propuesta de pesos para discusión con el equipo. Se aplican solo a candidatos que superen filtros excluyentes con evidencia suficiente.

| Criterio | Peso propuesto | Qué debe respaldar la nota |
| --- | --- | --- |
| Cobertura y calidad funcional | 25 % | Error y zona correcta, fronteras, latencia y dato vigente con criterio acordado. |
| Desempeño ambiental | 20 % | Ensayo representativo y mantenimiento previsto bajo polvo, depósitos y humedad. |
| Integración y diagnóstico | 15 % | Ruta efectiva a DeltaV, calidad y recuperación de datos; complejidad de conversión. |
| Montaje y restitución | 15 % | Plan y duraciones justificadas, pruebas, contingencia y cumplimiento de ventana. |
| Mantenimiento y soporte | 10 % | Acceso, limpieza, repuestos, vida de producto, soporte regional y tiempo de recuperación. |
| Costo instalado y de ciclo de vida | 10 % | BOM comparable y cotización, costos recurrentes y supuestos de período. |
| Calidad y cierre de evidencia | 5 % | Especificaciones de variante, respaldo reproducible y límites declarados. |
| Total | **100 %** | Pesos pendientes de aprobación del equipo. |

Escala sugerida 1–5: 1 cumple con dificultades importantes; 3 cumple con evidencia suficiente; 5 supera el criterio con ventaja demostrada. “NC” = evidencia insuficiente; no se reemplaza por 3. Si hay NC en un filtro o criterio esencial, no emitir ranking final. Guardar fuente y justificación por celda; verificar si una modificación razonable de pesos cambia al primero y explicar la sensibilidad.

Los porcentajes 80–92 % de mejora y las duraciones 3–36 h de la matriz histórica no se trasladan como desempeño de modelos comerciales. Son supuestos históricos por revisar, según DAT-12. Cualquier reducción de espera se calcula desde tiempos comparables del proceso.

## 8. Pruebas que diferencian las opciones

| Prueba propuesta | Candidatos | Evidencia que produce |
| --- | --- | --- |
| Distancia y eco en extremos, centro y obstáculos | C01–C04B | Lectura contra referencia independiente, calidad, pérdidas y recuperación; condiciones y montaje fotografiados/autorizados. |
| Trayecto dinámico corto y largo, incluyendo fronteras | Todos | Error dinámico, tasa/latencia total, zona de transición e identificación correcta. |
| Pérdida y retorno de alimentación; reinicio en una posición distinta | Todos | Comportamiento al volver, necesidad de homing y criterio que restablece dato válido. |
| Pérdida de eco/tag/pulsos o cable de señal | Según principio | Respuesta visible y registrable; no confirmar con dato inválido. |
| Mensajes nuevos con medición congelada | Configuraciones con gateway o red | Vigencia desde adquisición, secuencia/contador y edad; enlaza el caso V07 que falló en escritorio. |
| Polvo depositado, humedad y desalineación representativas | Todos | Límite de desempeño y limpieza necesaria. Diseñar ensayo con E&I y prevención, sin generar exposición para probar. |
| Lecturas simultáneas, tránsito y cambio de sentido | RFID y codificación discreta | Evitar identificación anticipada o código parcial válido. |
| Contraste de giro y posición física | C05 | Error por patinaje, holgura, relación mecánica y efectividad de recalibración. |
| Coherencia entre dos lecturas discordantes | C04B | Regla explícita de degradación y diagnóstico; no promediar una lectura buena con una mala sin criterio. |
| Ensayo del plan de intervención en papel y banco | Todos | Precedencias, recursos, pruebas y restitución dentro de ventana; diferenciar estimación de ejecución real. |

Registrar antes de cada prueba requisito, criterio, método, instrumentos, versión y quién revisa. La simulación acredita únicamente las condiciones representadas; no acredita el comportamiento físico del sensor ni disponibilidad mensual.

## 9. Qué falta para seleccionar

Primero cerrar **PEND-01** (geometría, zonas y tolerancia), **PEND-04** (I/O y energía), **PEND-06** (configuración/ensayo) y **PEND-12/13/14** (RF, presupuesto y criterio operativo). En paralelo registrar tiempos por fase y estado de transferencia, PEND-05. Las preguntas precisas y el orden de trabajo están en [revisión integral y brechas](00-Revision-integral-y-brechas-2026-11-10.md).

[Requisitos](../Notas/06-Requisitos.md) · [Arquitectura](../Notas/08-Arquitectura-DeltaV.md) · [Validación](../Notas/09-Validacion.md) · [ES2](../Notas/10-Evaluacion-2.md) · [Bitácora](../Notas/12-Bitacora.md)
