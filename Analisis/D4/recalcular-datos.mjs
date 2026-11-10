import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { inflateRawSync } from "node:zlib";

function decodeEntities(value) {
  const named = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };
  return value.replace(/&(#x[0-9a-f]+|#[0-9]+|amp|lt|gt|quot|apos);/gi, (_, name) => {
    if (name.startsWith("#x")) return String.fromCodePoint(Number.parseInt(name.slice(2), 16));
    if (name.startsWith("#")) return String.fromCodePoint(Number(name.slice(1)));
    return named[name];
  });
}

// Office Open XML almacena las hojas en un ZIP estándar. Solo se leen las
// partes XML de los dos libros originales del D4.
function openZip(bytes, decode) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const u16 = offset => view.getUint16(offset, true);
  const u32 = offset => view.getUint32(offset, true);
  const limit = Math.max(0, bytes.length - 65557);
  let end = bytes.length - 22;
  while (end >= limit && u32(end) !== 0x06054b50) end--;
  if (end < limit) throw new Error("No se encontró el directorio ZIP");

  const entries = new Map();
  let offset = u32(end + 16);
  for (let i = 0; i < u16(end + 10); i++) {
    if (u32(offset) !== 0x02014b50) throw new Error("Entrada ZIP inválida");
    const nameLength = u16(offset + 28);
    const extraLength = u16(offset + 30);
    const commentLength = u16(offset + 32);
    const name = decode(bytes.subarray(offset + 46, offset + 46 + nameLength));
    const localOffset = u32(offset + 42);
    const start = localOffset + 30 + u16(localOffset + 26) + u16(localOffset + 28);
    entries.set(name, { method: u16(offset + 10), size: u32(offset + 20), rawSize: u32(offset + 24), start });
    offset += 46 + nameLength + extraLength + commentLength;
  }

  return {
    names: [...entries.keys()],
    get(name) {
      const item = entries.get(name);
      if (!item) throw new Error("Falta " + name + " en el libro");
      const packed = bytes.subarray(item.start, item.start + item.size);
      if (item.method !== 0 && item.method !== 8) throw new Error("Compresión ZIP no compatible");
      const raw = item.method === 8 ? inflateRawSync(packed) : packed;
      if (raw.length !== item.rawSize) throw new Error("Tamaño XML inesperado en " + name);
      return decode(raw);
    }
  };
}


function workbook(unzip,decode){
 const workbookXml = unzip.get("xl/workbook.xml");
 if (/<workbookPr\b[^>]*\bdate1904="(?:1|true)"/.test(workbookXml)) throw new Error("Sistema de fechas 1904 sin regla");
 const attrs=s=>Object.fromEntries([...s.matchAll(/([\w:.-]+)="([^"]*)"/g)].map(m=>[m[1],decode(m[2])]));
 const shared=unzip.names.includes("xl/sharedStrings.xml")?[...unzip.get("xl/sharedStrings.xml").matchAll(/<si\b[^>]*>([\s\S]*?)<\/si>/g)].map(m=>[...m[1].matchAll(/<t(?:\s[^>]*)?>([^<]*)<\/t>/g)].map(t=>decode(t[1])).join("")):[];
 const links=Object.fromEntries([...unzip.get("xl/_rels/workbook.xml.rels").matchAll(/<Relationship\s([^>]*?)\/>/g)].map(m=>attrs(m[1])).map(a=>[a.Id,a.Target.replace(/^\/?xl\//,"").replace(/^\//,"")]));
 const names=[...workbookXml.matchAll(/<sheet\s([^>]*?)\/>/g)].map(m=>attrs(m[1]));
 return Object.fromEntries(names.map(a=>{
  const x=unzip.get("xl/"+links[a["r:id"]]);
  const rows=[...x.matchAll(/<row\b([^>]*?)(?:\/>|>([\s\S]*?)<\/row>)/g)].map(m=>{
   const row={r:Number(attrs(m[1]).r),cells:{}};
   for(const cell of (m[2]??"").matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)){
    const c=attrs(cell[1]),tag=cell[2]??"";
    const raw=/<v(?:\s[^>]*)?>([^<]*)<\/v>/.exec(tag)?.[1];
    const f=/<f(?:\s[^>]*)?>([^<]*)<\/f>/.exec(tag)?.[1];
    const inline=[...tag.matchAll(/<t(?:\s[^>]*)?>([^<]*)<\/t>/g)].map(t=>decode(t[1])).join("");
    const v=c.t==="s"?shared[Number(raw)]:c.t==="inlineStr"?inline:raw===undefined?null:c.t==="str"||c.t==="e"?decode(raw):Number(raw);
    row.cells[c.r.replace(/\d+$/,"")]=f===undefined?v:{v,f:decode(f)};
   }
   return row;
  });
  return [a.name,rows];
 }));
}


const DAY_MS = 86_400_000;
const HOUR_MS = 3_600_000;
const EXCEL_EPOCH = Date.UTC(1899, 11, 30);
const STATES = ["DETENIDO", "FUNCIONANDO", "I/O Timeout"];

const dateISO = serial => new Date(EXCEL_EPOCH + serial * DAY_MS).toISOString().slice(0, 10);
const timestamp = ms => new Date(ms).toISOString().slice(0, 23).replace("T", " ");
const seconds = ms => ms / 1000;
const fraction = (n, d) => d === 0 ? null : n / d;
const total = xs => xs.reduce((sum, x) => sum + x, 0);
const same = (a, b) => Math.abs(a - b) < 1e-8;

function ensure(ok, message) {
  if (!ok) throw new Error(message);
}

function median(values) {
  if (values.length === 0) return null;
  const a = [...values].sort((x, y) => x - y);
  return (a[Math.floor((a.length - 1) / 2)] + a[Math.floor(a.length / 2)]) / 2;
}

function sourceRows(rows, first, source) {
  const data = rows.filter(({ r, cells }) => r >= first && Object.values(cells).some(v => v !== null && v !== ""));
  for (const { r, cells: { A, B } } of data) {
    ensure(Number.isInteger(A) && Number.isFinite(B), source + " fila " + r + " sin fecha u hora numérica");
  }
  ensure(data.length > 0, source + " sin datos");
  return data;
}

function zoneSeries(rows) {
  const raw = sourceRows(rows, 3, "F03");
  ensure(raw.length % 24 === 0, "F03 no contiene jornadas completas de 24 posiciones");
  const firstDay = raw[0].cells.A;
  const entries = [];
  let dwellId = 0;
  for (const [i, { r, cells: { A, B, C = null } }] of raw.entries()) {
    const prev = entries.at(-1);
    const day = firstDay + Math.floor(i / 24);
    const hourFromStart = 7 + i % 24;
    ensure(same(B * 24, hourFromStart), "F03 hora Excel fuera de secuencia en fila " + r);
    const correction = A !== day;
    if (correction) {
      ensure(r >= 603 && r <= 626 && dateISO(A) === "2026-11-10" && dateISO(day) === "2026-10-10",
        "F03 fecha inesperada en fila " + r);
    }
    const valid = Number.isInteger(C) && C >= 1 && C <= 35;
    const empty = C === null || C === "";
    ensure(valid || empty || C === "-", "F03 zona inesperada en fila " + r);
    const zone = valid ? C : null;
    const comparable = valid && prev?.zone != null;
    const change = comparable ? Number(prev.zone !== zone) : null;
    if (valid && (!comparable || change === 1)) dwellId++;
    entries.push({
      row: r,
      rawDate: A,
      rawHour: B,
      rawZone: C,
      day,
      ts: EXCEL_EPOCH + day * DAY_MS + Math.round(B * DAY_MS),
      zone,
      validity: valid ? "valida" : empty ? "vacia" : "guion",
      correction,
      comparable,
      change,
      jump: change === 1 ? Math.abs(zone - prev.zone) : null,
      dwell: valid ? dwellId : null
    });
  }
  return entries;
}

function eventSeries(rows) {
  const raw = sourceRows(rows, 2, "F04");
  const entries = raw.map(({ r, cells: { A, B, C } }) => {
    ensure(B >= 0 && B < 1 && STATES.includes(C), "F04 hora o estado inesperado en fila " + r);
    return { row: r, rawDate: A, rawHour: B, state: C, ts: EXCEL_EPOCH + A * DAY_MS + Math.round(B * DAY_MS) };
  }).sort((a, b) => a.ts - b.ts || a.row - b.row);
  const spans = [];
  for (const [i, entry] of entries.entries()) {
    const prev = entries[i - 1];
    const next = entries[i + 1];
    ensure(!prev || entry.ts > prev.ts, "F04 contiene marcas duplicadas");
    entry.type = i === 0 ? "inicio" : entry.state === prev.state ? "repeticion" : "transicion";
    entry.next = next?.ts ?? null;
    entry.duration = next ? next.ts - entry.ts : null;
    if (entry.type !== "repeticion") {
      const span = { state: entry.state, start: entry.ts, firstRow: entry.row, count: 0, left: i === 0 };
      if (spans.length) spans.at(-1).end = entry.ts;
      spans.push(span);
    }
    spans.at(-1).count++;
    entry.span = spans.length;
  }
  spans.at(-1).end = entries.at(-1).ts;
  for (const [i, span] of spans.entries()) {
    span.id = i + 1;
    span.right = i === spans.length - 1;
    span.duration = span.end - span.start;
  }
  return { entries, spans };
}

function crossSeries(zones, events) {
  const first = events[0].ts;
  const last = events.at(-1).ts;
  let cursor = 0;
  for (const z of zones) {
    const start = z.ts - HOUR_MS;
    while (cursor < events.length && events[cursor].ts < start) cursor++;
    let n = 0;
    let transitions = 0;
    let starts = 0;
    while (cursor < events.length && events[cursor].ts < z.ts) {
      const e = events[cursor++];
      n++;
      if (e.type === "transicion") {
        transitions++;
        if (e.state === "FUNCIONANDO") starts++;
      }
    }
    z.covered = start >= first && z.ts <= last;
    z.events = z.covered ? n : null;
    z.transitions = z.covered ? transitions : null;
    z.starts = z.covered ? starts : null;
  }
}

function summary(zones, events, spans) {
  const valid = zones.filter(z => z.zone !== null);
  const changed = zones.filter(z => z.change === 1);
  const days = [...new Set(zones.map(z => z.day))];
  const dwell = new Map();
  for (const z of valid) dwell.set(z.dwell, (dwell.get(z.dwell) ?? 0) + 1);
  const dwells = [...dwell.values()];
  const daily = days.map(day => {
    const rows = zones.filter(z => z.day === day);
    return { day, valid: rows.filter(z => z.zone !== null).length, missing: rows.filter(z => z.zone === null).length,
      comparable: rows.filter(z => z.comparable).length, changes: rows.filter(z => z.change === 1).length };
  });
  const hourly = Array.from({ length: 24 }, (_, hour) =>
    changed.filter(z => new Date(z.ts).getUTCHours() === hour).length);
  const zoneCounts = Array.from({ length: 35 }, (_, i) => valid.filter(z => z.zone === i + 1).length);
  const jumps = Array.from({ length: 34 }, (_, i) => changed.filter(z => z.jump === i + 1).length);
  const duration = events.at(-1).ts - events[0].ts;
  const stops = spans.filter(s => s.state === "DETENIDO" && !s.left && !s.right);
  const running = spans.filter(s => s.state === "FUNCIONANDO" && !s.left && !s.right);
  const states = STATES.map(state => {
    const rows = events.filter(e => e.state === state);
    const groups = spans.filter(s => s.state === state);
    const observed = total(groups.map(s => s.duration));
    return { state, records: rows.length, repetitions: rows.filter(e => e.type === "repeticion").length,
      spans: groups.length, completeSpans: groups.filter(s => !s.left && !s.right).length,
      intervals: rows.filter(e => e.duration !== null).length, observed, share: fraction(observed, duration) };
  });
  const comparisons = zones.filter(z => z.comparable && z.covered);
  const subset = rows => ({ n: rows.length, events: rows.filter(z => z.events > 0).length,
    transitions: rows.filter(z => z.transitions > 0).length, starts: rows.filter(z => z.starts > 0).length });
  const cross = {
    eligible: subset(comparisons),
    changed: subset(comparisons.filter(z => z.change === 1)),
    unchanged: subset(comparisons.filter(z => z.change === 0)),
    changesOut: changed.filter(z => !z.covered).length,
    invalidInside: zones.filter(z => z.covered && !z.comparable).length
  };
  const inMinutes = (groups, min, max) => groups.filter(s => s.duration >= min * 60_000 && s.duration <= max * 60_000).length;
  return {
    slots: zones.length, valid: valid.length, missing: zones.length - valid.length,
    blank: zones.filter(z => z.validity === "vacia").length,
    dashes: zones.filter(z => z.validity === "guion").length,
    dateCorrections: zones.filter(z => z.correction).length,
    comparisons: zones.filter(z => z.comparable).length, changes: changed.length, days: days.length,
    frequency: changed.length / days.length, activeDays: daily.filter(d => d.changes > 0).length,
    dailyMedian: median(daily.map(d => d.changes)), dailyMax: Math.max(...daily.map(d => d.changes)),
    hourlyActive: hourly.filter(n => n > 0).length, dwellCount: dwells.length, dwellMedian: median(dwells),
    dwellMin: Math.min(...dwells), dwellMax: Math.max(...dwells),
    zonesObserved: zoneCounts.filter(n => n > 0).length, maxJump: Math.max(...changed.map(z => z.jump)),
    daily, hourly, zoneCounts, jumps,
    logRecords: events.length, logDuration: duration, logStart: events[0].ts, logEnd: events.at(-1).ts,
    logIntervals: events.filter(e => e.duration !== null).length,
    logSpans: spans.length, logRepetitions: events.filter(e => e.type === "repeticion").length,
    logStarts: events.filter(e => e.type === "transicion" && e.state === "FUNCIONANDO").length,
    states, stopMedian: median(stops.map(s => s.duration)), stopMax: Math.max(...stops.map(s => s.duration)),
    stopOver3h30: stops.filter(s => s.duration > 3.5 * HOUR_MS).length,
    stop2to15: inMinutes(stops, 2, 15), stop10to15: inMinutes(stops, 10, 15),
    runningMedian: median(running.map(s => s.duration)), runningMax: Math.max(...running.map(s => s.duration)),
    timeoutStart: spans.find(s => s.state === "I/O Timeout")?.start ?? null,
    cross
  };
}

function validate(zones, events, spans, m) {
  ensure(m.valid + m.missing === m.slots && m.blank + m.dashes === m.missing, "F03 faltantes no reconcilian");
  ensure(total(m.zoneCounts) === m.valid && total(m.daily.map(d => d.valid)) === m.valid, "F03 zonificación no reconcilia");
  ensure(total(m.jumps) === m.changes && total(m.hourly) === m.changes && total(m.daily.map(d => d.changes)) === m.changes, "F03 cambios no reconcilian");
  ensure(total(m.states.map(s => s.records)) === events.length, "F04 conteo de estados no reconcilia");
  ensure(total(spans.map(s => s.count)) === events.length && spans.length + m.logRepetitions === events.length, "F04 tramos no reconcilian");
  ensure(total(spans.map(s => s.duration)) === m.logDuration && total(events.map(e => e.duration ?? 0)) === m.logDuration,
    "F04 tiempos observados no reconcilian");
  ensure(m.cross.changed.n + m.cross.changesOut === m.changes, "No reconcilian los cambios dentro y fuera de ventana");
  for (const k of ["n", "events", "transitions", "starts"]) {
    ensure(m.cross.changed[k] + m.cross.unchanged[k] === m.cross.eligible[k], "Cruce no reconcilia en " + k);
  }
  ensure(new Set(zones.map(z => z.row)).size === zones.length && new Set(events.map(e => e.row)).size === events.length,
    "Hay filas de origen duplicadas");
}

function impact(frequency) {
  const rates = [[200, "nominal_min_declarado"], [275, "punto_medio_supuesto"], [350, "nominal_max_declarado"], [400, "pico_declarado"]];
  const cases = [];
  for (const [flow, source] of rates) {
    for (const before of [10, 15]) {
      for (const after of [2, 1.5]) {
        const savings = before - after;
        const perMove = flow * before / 60;
        const afterPerMove = flow * after / 60;
        cases.push({ flow, source, before, after, savings, reduction: savings / before, frequency,
          beforeDailyMinutes: before * frequency, afterDailyMinutes: after * frequency,
          savedDailyMinutes: savings * frequency, perMove, afterPerMove, daily: perMove * frequency,
          afterDaily: afterPerMove * frequency, recovered: flow * savings * frequency / 60 });
      }
    }
  }
  return cases;
}

function audit(f03, f04) {
  const zones = zoneSeries(f03);
  const { entries: events, spans } = eventSeries(f04);
  crossSeries(zones, events);
  const metrics = summary(zones, events, spans);
  validate(zones, events, spans, metrics);
  return { zones, events, spans, metrics, scenarios: impact(metrics.frequency) };
}


const BASE = "Evidencias/M7/Propuesta de solución M7";
const WORKED = BASE + "/03 Datos trabajados/Revision_D4_v1";
const CALCS = BASE + "/04 Calculos/Revision_D4_v1";

function csvCell(value) {
  if (value == null) return "";
  const s = String(value);
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function csv(header, rows) {
  return [header, ...rows].map(row => row.map(csvCell).join(",")).join("\n") + "\n";
}

function roundNumber(value, places = 9) {
  return Number(value.toFixed(places));
}

function summaryRows(m) {
  const out = [];
  const add = (table, key, indicator, value, unit, basis) => out.push([table, key, indicator, value, unit, basis]);
  const f03 = [
    ["registros", m.slots, "filas"],
    ["jornadas", m.days, "jornadas de 07:00 a 06:00"],
    ["zona_valida", m.valid, "filas"],
    ["sin_zona", m.missing, "filas"],
    ["sin_zona_guion", m.dashes, "filas"],
    ["sin_zona_vacia", m.blank, "filas"],
    ["fecha_jornada_ajustada", m.dateCorrections, "filas"],
    ["pares_evaluables", m.comparisons, "pares"],
    ["pares_no_evaluables", m.slots - 1 - m.comparisons, "pares"],
    ["cambios", m.changes, "cambios observados"],
    ["frecuencia", roundNumber(m.frequency), "cambios por jornada"],
    ["jornadas_con_cambios", m.activeDays, "jornadas"],
    ["mediana_cambios_por_jornada", m.dailyMedian, "cambios"],
    ["max_cambios_por_jornada", m.dailyMax, "cambios"],
    ["horas_reloj_con_cambios", m.hourlyActive, "horas de 24"],
    ["zonas_observadas", m.zonesObserved, "zonas"],
    ["zonas_sin_observacion", 35 - m.zonesObserved, "zonas"],
    ["salto_maximo", m.maxJump, "zonas"],
    ["tramos_de_zona_observados", m.dwellCount, "tramos"],
    ["permanencia_observada_mediana", m.dwellMedian, "horas"],
    ["permanencia_observada_minima", m.dwellMin, "horas"],
    ["permanencia_observada_maxima", m.dwellMax, "horas"]
  ];
  for (const [name, value, unit] of f03) add("F03_global", "", name, value, unit, "F03 con huecos conservados");
  for (const row of m.daily) {
    const key = dateISO(row.day);
    add("F03_jornada", key, "zona_valida", row.valid, "horas", "24 por jornada");
    add("F03_jornada", key, "sin_zona", row.missing, "horas", "24 por jornada");
    add("F03_jornada", key, "pares_evaluables", row.comparable, "pares", "Asignados al instante posterior");
    add("F03_jornada", key, "cambios", row.changes, "cambios", "Asignados al instante posterior");
  }
  for (const [i, n] of m.hourly.entries()) add("F03_hora", String(i).padStart(2, "0") + ":00", "cambios", n, "cambios", "Hora civil de la observacion posterior");
  for (const [i, n] of m.zoneCounts.entries()) {
    add("F03_zona", "Z" + (i + 1), "observaciones", n, "horas observadas", m.valid + " con zona valida");
    add("F03_zona", "Z" + (i + 1), "proporcion", roundNumber(n / m.valid), "fraccion", "Horas con zona valida");
  }
  for (const [i, n] of m.jumps.entries()) add("F03_salto", String(i + 1), "cambios", n, "cambios", "Diferencia absoluta de numero de zona");
  for (const [name, min, max] of [["bajo", 6, 13], ["medio", 15, 24], ["alto", 31, 35]]) {
    const n = total(m.zoneCounts.slice(min - 1, max));
    add("F03_sector", name, "observaciones", n, "horas observadas", "Z" + min + " a Z" + max + " agrupadas en ES1");
    add("F03_sector", name, "proporcion", roundNumber(n / m.valid), "fraccion", "Horas con zona valida");
  }
  for (const [key, lo, hi] of [["una_zona", 1, 1], ["dos_a_nueve", 2, 9], ["diez_o_mas", 10, 34]]) {
    const n = total(m.jumps.slice(lo - 1, hi));
    add("F03_magnitud", key, "cambios", n, "cambios", "F03");
    add("F03_magnitud", key, "proporcion", roundNumber(n / m.changes), "fraccion", "Cambios observados");
  }
  const f04 = [
    ["inicio", timestamp(m.logStart), "marca civil", "F04"],
    ["fin", timestamp(m.logEnd), "marca civil", "F04"],
    ["registros", m.logRecords, "filas", "F04"],
    ["intervalos_con_duracion", m.logIntervals, "intervalos", "El ultimo registro no tiene marca posterior"],
    ["tiempo_total", seconds(m.logDuration), "s", "Diferencia entre primera y ultima marca"],
    ["tramos", m.logSpans, "tramos", "Estados iguales adyacentes agrupados"],
    ["repeticiones", m.logRepetitions, "filas", "Estados iguales adyacentes"],
    ["entradas_a_FUNCIONANDO", m.logStarts, "transiciones", "Identidad del equipo pendiente"],
    ["mediana_tramo_FUNCIONANDO", seconds(m.runningMedian), "s", "Tramos completos"],
    ["max_tramo_FUNCIONANDO", seconds(m.runningMax), "s", "Tramos completos"],
    ["mediana_tramo_DETENIDO", seconds(m.stopMedian), "s", "Tramos completos"],
    ["max_tramo_DETENIDO", seconds(m.stopMax), "s", "Tramos completos"],
    ["tramos_DETENIDO_mayores_a_3h30", m.stopOver3h30, "tramos", "Tramos completos"],
    ["tramos_DETENIDO_entre_2_y_15_min", m.stop2to15, "tramos", "Tramos completos; limites inclusivos"],
    ["tramos_DETENIDO_entre_10_y_15_min", m.stop10to15, "tramos", "Tramos completos; limites inclusivos"],
    ["inicio_timeout", m.timeoutStart === null ? null : timestamp(m.timeoutStart), "marca civil", "F04"]
  ];
  for (const [name, value, unit, basis] of f04) add("F04_global", "", name, value, unit, basis);
  for (const s of m.states) {
    add("F04_estado", s.state, "registros", s.records, "filas", "Incluye repeticiones");
    add("F04_estado", s.state, "repeticiones", s.repetitions, "filas", "Mismo estado anterior");
    add("F04_estado", s.state, "intervalos", s.intervals, "intervalos", "Hasta el siguiente registro");
    add("F04_estado", s.state, "tramos_observados", s.spans, "tramos", "Incluye extremos censurados");
    add("F04_estado", s.state, "tramos_completos", s.completeSpans, "tramos", "Ambas fronteras observadas");
    add("F04_estado", s.state, "duracion_observada", seconds(s.observed), "s", "Incluye duracion observada en extremos");
    add("F04_estado", s.state, "fraccion_observada", roundNumber(s.share), "fraccion", "Duracion total del log");
  }
  const populations = [["pares_evaluables", m.cross.eligible], ["con_cambio_zona", m.cross.changed], ["sin_cambio_zona", m.cross.unchanged]];
  for (const [key, v] of populations) {
    add("Cruce_F03_F04", key, "ventanas", v.n, "ventanas", "Hora previa completa y par F03 valido");
    for (const [metric, count] of [["con_registro_F04", v.events], ["con_transicion_F04", v.transitions], ["con_entrada_a_FUNCIONANDO", v.starts]]) {
      add("Cruce_F03_F04", key, metric, count, "ventanas", "Ventanas del subconjunto");
      add("Cruce_F03_F04", key, metric + "_proporcion", roundNumber(count / v.n), "fraccion", "Ventanas del subconjunto");
    }
  }
  add("Cruce_F03_F04", "", "cambios_fuera_de_cobertura_completa", m.cross.changesOut, "cambios", "F03");
  add("Cruce_F03_F04", "", "ventanas_cubiertas_con_par_F03_no_evaluable", m.cross.invalidInside, "ventanas", "Hueco F03");
  return out;
}

function renderOutputs({ zones, events, spans, metrics, scenarios }) {
  const zoneHeaders = ["fila_excel", "fecha_jornada_original", "hora_excel_dias", "zona_original", "fecha_jornada_analisis",
    "marca_civil", "zona_analisis", "calidad_zona", "fecha_ajustada_por_secuencia", "par_previo_evaluable",
    "cambio_observado", "salto_en_zonas", "tramo_zona_id", "ventana_F04_completa", "registros_F04_hora_previa",
    "transiciones_F04_hora_previa", "entradas_FUNCIONANDO_hora_previa"];
  const zoneRows = zones.map(z => [z.row, dateISO(z.rawDate), z.rawHour, z.rawZone, dateISO(z.day),
    timestamp(z.ts), z.zone, z.validity, Number(z.correction), Number(z.comparable), z.change, z.jump, z.dwell,
    Number(z.covered), z.events, z.transitions, z.starts]);
  const eventHeaders = ["fila_excel", "fecha_original", "hora_excel_dias", "marca_civil", "estado_original",
    "tipo_registro", "marca_siguiente", "intervalo_observado_s", "tramo_id"];
  const eventRows = events.map(e => [e.row, dateISO(e.rawDate), e.rawHour, timestamp(e.ts), e.state, e.type,
    e.next === null ? null : timestamp(e.next), e.duration === null ? null : seconds(e.duration), e.span]);
  const spanHeaders = ["tramo_id", "estado", "fila_excel_inicio", "inicio_observado", "fin_observado",
    "duracion_observada_s", "registros_agrupados", "inicio_previo_a_muestra_posible", "fin_posterior_a_muestra_posible", "tramo_completo"];
  const spanRows = spans.map(s => [s.id, s.state, s.firstRow, timestamp(s.start), timestamp(s.end), seconds(s.duration), s.count,
    Number(s.left), Number(s.right), Number(!s.left && !s.right)]);
  const impactHeaders = ["caudal_t_h", "origen_caudal", "duracion_base_min", "duracion_escenario_min", "ahorro_min_cambio",
    "reduccion_fraccion", "cambios_observados", "jornadas", "frecuencia_cambios_jornada", "tiempo_base_min_jornada",
    "tiempo_escenario_min_jornada", "ahorro_min_jornada", "diferido_base_t_cambio", "diferido_escenario_t_cambio",
    "recuperable_t_cambio", "diferido_base_t_jornada", "diferido_escenario_t_jornada",
    "capacidad_recuperable_t_jornada", "supuesto_interrupcion"];
  const impactRows = scenarios.map(c => [c.flow, c.source, c.before, c.after, c.savings, roundNumber(c.reduction),
    metrics.changes, metrics.days, roundNumber(c.frequency), roundNumber(c.beforeDailyMinutes),
    roundNumber(c.afterDailyMinutes), roundNumber(c.savedDailyMinutes), roundNumber(c.perMove),
    roundNumber(c.afterPerMove), roundNumber(c.flow * c.savings / 60), roundNumber(c.daily),
    roundNumber(c.afterDaily), roundNumber(c.recovered), "interrupcion_total_durante_la_espera"]);
  return {
    [WORKED + "/posicion_tripper_depurada.csv"]: csv(zoneHeaders, zoneRows),
    [WORKED + "/estados_320CV0251RUN_depurados.csv"]: csv(eventHeaders, eventRows),
    [WORKED + "/tramos_320CV0251RUN.csv"]: csv(spanHeaders, spanRows),
    [WORKED + "/resumen_linea_base.csv"]: csv(["tabla", "grupo", "indicador", "valor", "unidad", "base"], summaryRows(metrics)),
    [CALCS + "/escenarios_impacto.csv"]: csv(impactHeaders, impactRows)
  };
}


function main(repo, args, decode) {
  if (args.length && (args.length !== 1 || args[0] !== "--check")) {
    throw new Error("Uso: node Analisis/D4/recalcular-datos.mjs [--check]");
  }
  const checkOnly = args[0] === "--check";
  const readBook = file => workbook(openZip(readFileSync(resolve(repo, file)), decode), decodeEntities);
  const position = readBook(BASE + "/02 Datos originales/Posición Tripper.xlsx").Sheet1;
  const states = readBook(BASE + "/02 Datos originales/320CV025_1 Funcionamiento de correa.xlsx")["320CV0251RUN"];
  ensure(position && states, "No se encontraron las hojas originales F03/F04");
  const data = audit(position, states);

  for (const [path, content] of Object.entries(renderOutputs(data))) {
    const fullPath = resolve(repo, path);
    if (checkOnly) {
      const actual = readFileSync(fullPath, "utf8").replace(/\r\n/g, "\n");
      ensure(actual === content, "Salida distinta del recálculo: " + path);
    } else {
      mkdirSync(dirname(fullPath), { recursive: true });
      writeFileSync(fullPath, content, "utf8");
    }
  }
  console.log("F03: " + data.metrics.slots + " filas, " + data.metrics.changes + " cambios observados");
  console.log("F04: " + data.metrics.logRecords + " registros, " + data.metrics.logSpans + " tramos");
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const decoder = new TextDecoder("utf-8", { fatal: true });
main(root, process.argv.slice(2), bytes => decoder.decode(bytes));
