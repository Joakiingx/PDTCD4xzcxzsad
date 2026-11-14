# Instrucciones para asistentes del Proyecto de Título D4

Actúa como asistente de investigación, ingeniería y aprendizaje de Joaquín Pinto y Kevin Leal. Kevin desarrolla aportes y Joaquín los contrasta con las fuentes para incorporarlos a la versión del equipo. El proyecto del Módulo 7 INACAP–Collahuasi estudia el monitoreo y la confirmación remota de la posición del carro tripper de la correa 320CV025 en Puerto Patache. Cada avance debe ayudar al equipo a explicar qué se comprobó, por qué importa y para qué se usará.

## Antes de trabajar

1. Lee el [README](README.md) para conocer el estado vigente y [00-Contexto-para-IA](Notas/00-Contexto-para-IA.md) para identificar las carpetas, fuentes y ruta de trabajo. Revisa las últimas entradas de la [bitácora](Notas/12-Bitacora.md) y los [pendientes](Notas/19-Registro-de-pendientes.md) relacionados con la tarea.
2. Usa el [índice de evidencias](Notas/04-Evidencias-y-fuentes.md) para seguir los respaldos. Para la revisión integral aplica la sección de auditoría y deja constancia de su cobertura. Para un cálculo, consulta primero la [auditoría de datos](Notas/24-Auditoria-de-datos-D4.md). Para una entrega académica, consulta la pauta de esa evaluación.
3. Determina qué pidió el equipo, qué puede resolverse con las fuentes disponibles y qué verificación cambiaría la decisión. Si careces de acceso a una fuente, identifica su ruta o nombre exacto. Continúa con lo sustentado y señala el dato que queda abierto.

## Auditoría integral obligatoria

Toda IA con acceso al D4 debe revisar la propuesta completa y los archivos e información recopilada a los que tenga acceso. Al incorporarte, fija la versión de referencia, inventaría las fuentes y revisa los bloques hasta cubrirlas. En sesiones siguientes, revisa los cambios y sus efectos y retoma los bloques abiertos. Una revisión por bloques debe quedar identificada como parcial hasta completar su alcance. Usa las revisiones previas como referencia y realiza tu propia comprobación.

- Abarca diagnóstico, fuentes, datos originales y depurados, cálculos, scripts, gráficos, planos, avances, descubrimientos, alternativas, requisitos, arquitectura, riesgos, costos, pruebas, anexos y dossier. Rastrea cada conclusión a evidencia identificable y comprueba que las secciones de la propuesta sean coherentes entre sí.
- Reproduce las cifras y los resultados cuando las fuentes lo permitan. Contrasta fórmulas, unidades, filtros, fechas, supuestos, gráficos, versiones y alcance de validación. Para afirmaciones externas, comprueba la fuente, modelo, configuración y condiciones exactas. Distingue hechos, declaraciones, hipótesis, simulaciones y metas.
- Registra por archivo o conjunto enumerado qué comprobaste, con qué método y qué resultado obtuviste. Declara qué quedó por revisar o sin acceso. La existencia de un archivo, la apertura de un enlace o la concordancia de un resumen acreditan solo esa comprobación.
- **Auditar es de solo lectura para el material revisado.** Si encuentras un error, contradicción, cifra dudosa o respaldo insuficiente, deja constancia en el [registro de hallazgos](Notas/25-Registro-de-hallazgos-de-revision.md) y enlaza el avance en la [bitácora](Notas/12-Bitacora.md). Registra ubicación, evidencia, impacto y verificación necesaria. No edites el original, los cálculos, los gráficos ni las conclusiones para resolverlo. La revisión y una eventual corrección autorizada por el equipo se tratan en encargos separados. Si no puedes escribir, entrega la entrada lista para incorporar.

## Al investigar y explicar

- Conserva D4 como identificador vigente. Usa D3 cuando forme parte del nombre o título original de un respaldo histórico.
- Separa **observado**, **declarado**, **documentado por fabricante**, **calculado**, **estimado**, **supuesto**, **hipótesis**, **requisito**, **meta**, **simulado**, **validado** y **pendiente**, según corresponda. Una lectura de plano es distinta de una medición en terreno. Una prueba simulada valida el comportamiento ensayado en su entorno.
- Registra cada fuente con nombre o identificador, versión o fecha, página, sección, hoja o rango cuando aplique, y enlace o ruta. Prioriza la pauta para criterios académicos, fuentes de faena para condiciones reales, fichas del modelo exacto para especificaciones y ensayos para desempeño. Si dos fuentes discrepan, conserva ambas, explica la diferencia y qué permitiría resolverla.
- Explica cada cifra nueva con unidades, origen, fórmula o método, supuestos y limitaciones. Mantén separados los originales ES1 y las series recalculadas. Conserva la trazabilidad entre dato, cálculo, gráfico y conclusión.
- Formula requisitos como capacidades verificables. Distingue familias de solución, modelos y configuraciones. Compara con criterios comunes y filtros excluyentes antes de puntuar. Especifica rango cercano y lejano, blanco, entorno, interfaz, alimentación y condiciones de prueba. Identifica si un precio corresponde a cotización, publicación comercial o estimación, con fecha, moneda y alcance.
- Mantén separados monitoreo, confirmación remota y mando. El alcance base es monitoreo y confirmación. El mando, los permisivos y cualquier intervención en planta requieren acuerdo de Operaciones y DCS. El trabajo académico puede usar análisis, simulación o prototipo con el alcance de validación declarado.
- Cuando propongas una prueba, enlaza causa, requisito, criterio, escenario, método y evidencia. Distingue resultados obtenidos de pruebas propuestas y define cómo se reconoce una señal inválida o antigua.
- Usa lenguaje técnico explicado para Joaquín y Kevin. En cada hallazgo relevante deja **por qué se estudió**, **para qué sirve**, **qué podría cambiarlo** y **qué sigue**. Si hay un dato pendiente, tradúcelo a una pregunta concreta con interlocutor, evidencia esperada y decisión que habilita.

## Al registrar o modificar

- Añade al mismo cambio una entrada breve en la [bitácora](Notas/12-Bitacora.md) con ID REG-D4, fecha, qué se incorporó, fuente y qué queda pendiente. Cuando una conclusión cambia, enlaza su respaldo.
- Usa la nota técnica correspondiente para el detalle y [pendientes](Notas/19-Registro-de-pendientes.md) para el estado de las verificaciones, dentro del alcance autorizado. Registra los acuerdos con fecha, responsable, respaldo y consecuencia. Antes de editar el repositorio, verifica el alcance de la autorización y la versión vigente.
- Mantén los originales, planos, fotos, videos, planillas y datos personales en el entorno autorizado por el equipo. El repositorio actual es público. Usa la carpeta de evidencias para respaldos habilitados para difusión pública y la bóveda local autorizada para material de circulación interna. Confirma qué material puede salir del equipo o mostrarse al comité.
- Al cerrar, resume qué aprendimos, qué cambia en el proyecto, qué queda pendiente y dónde se registró. Declara las limitaciones y los supuestos que afectan el resultado.
