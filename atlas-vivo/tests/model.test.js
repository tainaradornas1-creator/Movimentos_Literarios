import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {eventIndex,validateAtlas,eventsForState,relationshipsForState,closestNationalMark} from '../src/model.js';
const DATA=JSON.parse(readFileSync(new URL('../dados/piloto.json',import.meta.url),'utf8'));
const REL=JSON.parse(readFileSync(new URL('../dados/relacoes.json',import.meta.url),'utf8'));
test('referências de eventos, roteiros e relações são válidas',()=>assert.deepEqual(validateAtlas(DATA,REL),[]));
test('MG, RJ e PE totalizam 26 marcos e o Brasil tem 27 UFs',()=>{
 assert.equal(DATA.states.length,27);assert.equal(DATA.events.length,26);
 assert.deepEqual(['MG','RJ','PE'].map(uf=>eventsForState(DATA,uf).length),[8,8,10]);
});
test('filtro de temas preserva ordenação e não modifica dados',()=>{
 const ids=DATA.events.map(e=>e.id),mg=eventsForState(DATA,'MG');
 assert.ok(mg.every((e,i)=>i===0||e.year>=mg[i-1].year));
 assert.ok(eventsForState(DATA,'PE','Forma').every(e=>e.tags.includes('Forma')));
 assert.deepEqual(DATA.events.map(e=>e.id),ids);
});
test('relações permitem leitura cruzada do Parnasianismo e Modernismo',()=>{
 const r=REL.find(x=>x.id==='forma-bilac-bandeira');
 assert.equal(r.type,'crítica');assert.equal(r.toEvent,'pe1919');assert.equal(eventIndex(DATA).get(r.fromEvent).author,'Olavo Bilac');
 assert.ok(relationshipsForState(DATA,REL,'RJ','crítica').some(x=>x.id===r.id));
 for(const uf of ['MG','RJ','PE'])assert.ok(relationshipsForState(DATA,REL,uf).length>=3);
});
test('linha nacional posiciona acontecimentos no tempo',()=>{
 assert.equal(DATA.national[closestNationalMark(DATA.national,1888)].year,'1888');
 assert.equal(DATA.national[closestNationalMark(DATA.national,1956)].year,'1922');
 assert.equal(closestNationalMark(DATA.national,1400),0);
});
test('validação aponta referências ausentes',()=>{
 assert.ok(validateAtlas(DATA,[...REL,{...REL[0],id:'invalida',toEvent:'nao-existe'}]).some(x=>x.includes('Extremidade inexistente')));
});
