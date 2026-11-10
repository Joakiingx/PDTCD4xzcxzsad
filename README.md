# Proyecto de título D4

Joaquín Pinto y Kevin Leal · Programa INACAP–Collahuasi · Módulo 7

## Qué problema estamos resolviendo

El carro tripper de la correa 320CV025 distribuye concentrado entre zonas de descarga en Puerto Patache. Sala de Control depende de una verificación presencial para confirmar la zona. La propuesta busca llevar información válida de posición o zona a Emerson DeltaV para **monitorear y confirmar a distancia**. El alcance base es de supervisión. Un eventual mando y sus permisivos quedan sujetos a acuerdo con Operaciones y DCS. [Desafío](Notas/01-Desafio-D4.md) · [Operación actual](Notas/02-Operacion-actual.md)

## Qué tenemos, qué haremos y qué viene después

| Momento | Estado y próximo resultado | Dónde seguir |
| --- | --- | --- |
| **Ya tenemos · Diagnóstico ES1** | Expediente histórico, ficha, acta, registros originales y auditoría reproducible. La serie horaria permite identificar 78 cambios observados durante un período de 33 jornadas. Los 10–15 minutos por maniobra son un antecedente declarado. | [Expediente ES1](Notas/14-Expediente-ES1.md) · [Auditoría](Notas/24-Auditoria-de-datos-D4.md) |
| **Ya tenemos · Punto de partida ES2** | Pauta U2_A06, tres actividades formativas localizadas, seis anexos de apoyo, manual de riesgos incorporado y estudios iniciales. El plano aporta 71,84 m de carrera nominal dibujada. Las configuraciones estudiadas y el encoder de bodega son candidatos. | [Plan ES2](Notas/10-Evaluacion-2.md) · [Mapa de estudios](Estudios/00-Mapa-de-estudios.md) · [Bitácora](Notas/12-Bitacora.md) |
| **Haremos ahora · Diseño y validación académica** | Convertir el diagnóstico en requisitos verificables, comparar familias y la continuidad sin intervención, definir arquitectura y modo degradado, documentar validación, riesgos, recursos y plan. Quedan por levantar zonas y geometría efectiva, secuencia de operación, señales y canal disponible en DeltaV. | [Entregables y secuencia de ES2](Notas/10-Evaluacion-2.md) · [Verificaciones pendientes](Notas/19-Registro-de-pendientes.md) |
| **Haremos después · Defensa y factibilidad** | Consolidar una decisión defendible por ambos integrantes. Si se autoriza avanzar hacia un piloto o implementación, verificar el montaje, el desempeño en terreno y la integración antes de comprometer operación. | [Preparación de defensa](Notas/11-Defensa-ES3.md) · [Validación](Notas/09-Validacion.md) |

## Dónde encontrar cada parte

| Necesito… | Abro… |
| --- | --- |
| Retomar el proyecto con una IA | [Guía y prompt detallado](Notas/00-Contexto-para-IA.md) y [reglas de trabajo](AGENTS.md). |
| Ver qué aprendimos y qué cambió | [Bitácora](Notas/12-Bitacora.md). |
| Ver insumos y respaldos | [Índice de evidencias](Notas/04-Evidencias-y-fuentes.md), [referencias del programa](Notas/20-Referencias-de-modulos.md) y [carpetas del M7](Evidencias/M7/). |
| Reproducir cálculos y gráficos | [Auditoría](Notas/24-Auditoria-de-datos-D4.md), [script de recálculo](Analisis/D4/recalcular-datos.mjs) y [memoria de impacto](Notas/17-Memoria-de-impacto.md). |
| Investigar una decisión de ingeniería | [Mapa de estudios](Estudios/00-Mapa-de-estudios.md), [requisitos](Notas/06-Requisitos.md), [alternativas](Notas/07-Alternativas.md) y [arquitectura DeltaV](Notas/08-Arquitectura-DeltaV.md). |
| Preparar la evaluación | [Plan de ES2](Notas/10-Evaluacion-2.md), [pauta U2_A06](Evidencias/M7/Unidad-2/00-Evaluacion/U2_Evaluacion.pdf) y [carpetas de Unidad 2](Evidencias/M7/Unidad-2/). |

La bitácora conserva el historial. Los pendientes indican qué falta verificar. El plan ES2 define el trabajo de la etapa. Para sincronizar la bóveda y consultar respaldos locales, abre la [guía de Obsidian y GitHub](Notas/22-Configuracion-Obsidian-y-GitHub.md).
