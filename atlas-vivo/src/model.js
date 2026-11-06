const TYPES=new Set(['crítica','ruptura','disputa','diálogo','continuidade']);
export const eventIndex=data=>new Map(data.events.map(e=>[e.id,e]));
export function eventsForState(data,uf,filter='Todos'){
 return data.events.filter(e=>e.uf===uf&&(filter==='Todos'||e.tags.includes(filter))).sort((a,b)=>a.year-b.year||a.id.localeCompare(b.id));
}
export function relationshipsForState(data,relations,uf,type='Todas'){
 const index=eventIndex(data),order={'crítica':0,'disputa':1,'ruptura':2,'diálogo':3,'continuidade':4};
 return relations.filter(r=>(type==='Todas'||r.type===type)&&(index.get(r.fromEvent)?.uf===uf||index.get(r.toEvent)?.uf===uf))
  .sort((a,b)=>order[a.type]-order[b.type]||index.get(a.fromEvent).year-index.get(b.fromEvent).year||a.id.localeCompare(b.id));
}
export function closestNationalMark(national,year){
 if(!national.length)return -1;
 const chronological=national.map((m,i)=>({i,year:Number.parseInt(m.year,10)})).filter(m=>Number.isFinite(m.year)).sort((a,b)=>a.year-b.year);
 const prior=chronological.filter(m=>m.year<=year);return prior.length?prior[prior.length-1].i:0;
}
/**
 * Confere o contrato minimo dos JSONs antes de a interface acessar atributos.
 * Erros sao mensagens legiveis; nenhuma informacao e enviada a servidores.
 */
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const webUrl = value => {
  if (!nonempty(value)) return false;
  try {
    const url = new URL(value);
    return (url.protocol === 'https:' || url.protocol === 'http:') && nonempty(url.hostname);
  } catch {
    return false;
  }
};
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);

export function validateAtlas(data, relations) {
  const errors = [];
  if (!record(data) || !Array.isArray(data.states) || !Array.isArray(data.events) ||
      !Array.isArray(data.routes) || !Array.isArray(data.national) || !record(data.stats)) {
    return ['Base literaria incompleta: states, events, routes, national ou stats ausente'];
  }
  if (!Array.isArray(relations)) return ['Relações inválidas: esperado array'];

  const stateCodes = new Set(), eventIds = new Set(), routeIds = new Set(), relIds = new Set();
  const counts = new Map();

  // Os estados devem ser validos para o mapa, o menu e os totais da cronologia.
  for (const state of data.states) {
    if (!record(state)) { errors.push('Estado invalido: esperado objeto'); continue; }
    const uf = state.uf;
    if (!nonempty(uf) || !/^[A-Z]{2}$/.test(uf)) errors.push('UF inválida: ' + String(uf));
    if (stateCodes.has(uf)) errors.push('UF duplicada: ' + String(uf));
    stateCodes.add(uf);
    if (!nonempty(state.name)) errors.push('Nome do estado ausente: ' + String(uf));
    if (!Number.isFinite(state.lat) || state.lat < -90 || state.lat > 90 ||
        !Number.isFinite(state.lon) || state.lon < -180 || state.lon > 180) {
      errors.push('Coordenadas inválidas do estado: ' + String(uf));
    }
    if (typeof state.ready !== 'boolean') errors.push('Disponibilidade inválida: ' + String(uf));
  }

  // Primeira passagem: coletar IDs para validar conexoes independentemente da ordem.
  for (const event of data.events) {
    if (!record(event)) { errors.push('Marco inválido: esperado objeto'); continue; }
    if (!nonempty(event.id)) errors.push('Identificador ausente em marco literário');
    if (eventIds.has(event.id)) errors.push('Marco duplicado: ' + String(event.id));
    eventIds.add(event.id);
  }

  for (const event of data.events) {
    if (!record(event)) continue;
    const id = String(event.id);
    if (!stateCodes.has(event.uf)) errors.push('UF não cadastrada em marco: ' + id);
    if (!Number.isInteger(event.year)) errors.push('Ano inválido em marco: ' + id);
    for (const key of ['yearLabel','title','author','work','period','kind','place',
                       'summary','rupture','society','q2','qm']) {
      if (!nonempty(event[key])) errors.push('Campo obrigatório ' + key + ' ausente em marco: ' + id);
    }
    if (!Array.isArray(event.tags) || !event.tags.length ||
        event.tags.some(tag => !nonempty(tag))) {
      errors.push('Tags inválidas em marco: ' + id);
    }
    if (!Array.isArray(event.connections)) {
      errors.push('Conexões inválidas em marco: ' + id);
    } else {
      const seen = new Set();
      for (const linked of event.connections) {
        if (!nonempty(linked) || !eventIds.has(linked)) errors.push('Conexão inexistente: ' + id + ' -> ' + String(linked));
        if (seen.has(linked)) errors.push('Conexão duplicada: ' + id + ' -> ' + String(linked));
        if (linked === event.id) errors.push('Marco ligado a si mesmo: ' + id);
        seen.add(linked);
      }
    }
    if (!Array.isArray(event.source) || event.source.length === 0) {
      errors.push('Fontes ausentes em marco: ' + id);
    } else {
      for (const [index, source] of event.source.entries()) {
        if (!record(source) || !nonempty(source.label) || !webUrl(source.url)) {
          errors.push('Fonte inválida em marco: ' + id + ' (item ' + (index + 1) + ')');
        }
      }
    }
    counts.set(event.uf, (counts.get(event.uf) || 0) + 1);
  }

  for (const state of data.states) {
    if (!record(state) || !state.ready) continue;
    if (!Number.isInteger(data.stats[state.uf]) || data.stats[state.uf] !== (counts.get(state.uf) || 0)) {
      errors.push('Total de marcos inconsistente para ' + state.uf);
    }
  }
  for (const mark of data.national) {
    if (!record(mark) || !nonempty(mark.year) || !nonempty(mark.title) ||
        !nonempty(mark.text) || !nonempty(mark.kind)) {
      errors.push('Marco nacional incompleto');
    }
  }
  for (const route of data.routes) {
    if (!record(route)) { errors.push('Roteiro inválido: esperado objeto'); continue; }
    if (!nonempty(route.id)) errors.push('Roteiro sem identificador');
    if (routeIds.has(route.id)) errors.push('Roteiro duplicado: ' + String(route.id));
    routeIds.add(route.id);
    for (const key of ['title','subtitle','theme','question']) {
      if (!nonempty(route[key])) errors.push('Campo ' + key + ' ausente em roteiro: ' + String(route.id));
    }
    if (!Array.isArray(route.ids) || route.ids.length === 0) {
      errors.push('Roteiro sem paradas: ' + String(route.id));
    } else {
      const seen = new Set();
      for (const eventId of route.ids) {
        if (!eventIds.has(eventId)) errors.push('Roteiro com marco inexistente: ' + String(route.id) + ' -> ' + String(eventId));
        if (seen.has(eventId)) errors.push('Parada duplicada no roteiro: ' + String(route.id) + ' -> ' + String(eventId));
        seen.add(eventId);
      }
    }
  }

  for (const relation of relations) {
    if (!record(relation)) { errors.push('Relação inválida: esperado objeto'); continue; }
    if (!nonempty(relation.id)) errors.push('Relação sem identificador');
    if (relIds.has(relation.id)) errors.push('Relação duplicada: ' + String(relation.id));
    relIds.add(relation.id);
    if (!nonempty(relation.fromEvent) || !nonempty(relation.toEvent) ||
        !eventIds.has(relation.fromEvent) || !eventIds.has(relation.toEvent)) {
      errors.push('Extremidade inexistente em relação: ' + String(relation.id));
    }
    if (relation.fromEvent === relation.toEvent) errors.push('Relação reflexiva: ' + String(relation.id));
    if (!TYPES.has(relation.type)) errors.push('Tipo de relação inválido: ' + String(relation.id));
    if (typeof relation.documented !== 'boolean') errors.push('Estado documental inválido: ' + String(relation.id));
    for (const key of ['title','summary','evidence','q2','qm']) {
      if (!nonempty(relation[key])) errors.push('Campo ' + key + ' ausente em relação: ' + String(relation.id));
    }
  }
  return errors;
}
