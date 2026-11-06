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
export function validateAtlas(data,relations){
 const errors=[];
 if(!data||!Array.isArray(data.events)||!Array.isArray(data.states)||!Array.isArray(data.routes)||!Array.isArray(data.national))return ['Base literária incompleta'];
 if(!Array.isArray(relations))return ['Relações inválidas'];
 const ufs=new Set(data.states.map(s=>s.uf)),ids=new Set();
 for(const e of data.events){if(ids.has(e.id))errors.push('ID duplicado: '+e.id);ids.add(e.id);
  if(!ufs.has(e.uf))errors.push('Estado desconhecido: '+e.id);
  if(!Number.isInteger(e.year))errors.push('Ano inválido: '+e.id);
  if(!Array.isArray(e.source)||!e.source.length)errors.push('Evento sem fonte: '+e.id);
  for(const id of e.connections||[])if(!data.events.some(x=>x.id===id))errors.push('Conexão ausente: '+e.id+' -> '+id);
 }
 const rids=new Set();
 for(const r of relations){if(rids.has(r.id))errors.push('Relação duplicada: '+r.id);rids.add(r.id);
  if(!ids.has(r.fromEvent)||!ids.has(r.toEvent))errors.push('Extremidade inexistente: '+r.id);
  if(!TYPES.has(r.type))errors.push('Tipo de relação inválido: '+r.id);
  if(r.fromEvent===r.toEvent)errors.push('Relação reflexiva: '+r.id);
  if(!r.title||!r.summary||!r.evidence||!r.q2||!r.qm)errors.push('Relação incompleta: '+r.id);
 }
 for(const route of data.routes)for(const id of route.ids)if(!ids.has(id))errors.push('Roteiro com marco ausente: '+route.id+' -> '+id);
 return errors;
}
