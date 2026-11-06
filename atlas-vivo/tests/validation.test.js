import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateAtlas } from '../src/model.js';

const DATA = JSON.parse(readFileSync(new URL('../dados/piloto.json', import.meta.url), 'utf8'));
const REL = JSON.parse(readFileSync(new URL('../dados/relacoes.json', import.meta.url), 'utf8'));
const clone = value => structuredClone(value);
const errorsFrom = (editData = () => {}, editRel = () => {}) => {
  const data = clone(DATA), relations = clone(REL);
  editData(data); editRel(relations);
  return validateAtlas(data, relations);
};

test('base original de 26 marcos e 13 relacoes e valida', () => {
  assert.equal(DATA.events.length, 26);
  assert.equal(REL.length, 13);
  assert.deepEqual(validateAtlas(DATA, REL), []);
});

test('marcos sem tags ou sem conexoes sao rejeitados sem crash', () => {
  assert.ok(errorsFrom(d => { delete d.events[0].tags; }).some(e => e.includes('Tags inválidas')));
  assert.ok(errorsFrom(d => { delete d.events[0].connections; }).some(e => e.includes('Conexões inválidas')));
});

test('campos obrigatorios, ano e fontes inconsistentes sao rejeitados', () => {
  assert.ok(errorsFrom(d => { d.events[0].summary = ' '; }).some(e => e.includes('summary')));
  assert.ok(errorsFrom(d => { d.events[0].year = '1601'; }).some(e => e.includes('Ano inválido')));
  assert.ok(errorsFrom(d => { d.events[0].source[0].url = 'javascript:alert(1)'; }).some(e => e.includes('Fonte inválida')));
  assert.ok(errorsFrom(d => { d.events[0].source = []; }).some(e => e.includes('Fontes ausentes')));
});

test('duplicidades, UF inexistente e totais de estados sao detectados', () => {
  assert.ok(errorsFrom(d => { d.states.push(clone(d.states[0])); }).some(e => e.includes('UF duplicada')));
  assert.ok(errorsFrom(d => { d.events[0].uf = 'ZZ'; }).some(e => e.includes('UF não cadastrada')));
  assert.ok(errorsFrom(d => { d.stats.MG = 400; }).some(e => e.includes('Total de marcos')));
});

test('roteiros com paradas ausentes ou repetidas sao rejeitados', () => {
  assert.ok(errorsFrom(d => { d.routes[0].ids.push('evento-nao-existe'); }).some(e => e.includes('Roteiro com marco inexistente')));
  assert.ok(errorsFrom(d => { d.routes[0].ids.push(d.routes[0].ids[0]); }).some(e => e.includes('Parada duplicada')));
});

test('relacoes com campos faltantes, pontas ausentes e tipo invalido sao rejeitadas', () => {
  assert.ok(errorsFrom(undefined, r => { r[0].fromEvent = 'x'; }).some(e => e.includes('Extremidade inexistente')));
  assert.ok(errorsFrom(undefined, r => { r[0].type = 'somente-certo'; }).some(e => e.includes('Tipo de relação inválido')));
  assert.ok(errorsFrom(undefined, r => { delete r[0].q2; }).some(e => e.includes('Campo q2')));
  assert.ok(errorsFrom(undefined, r => { delete r[0].documented; }).some(e => e.includes('Estado documental')));
});

test('registros malformados nao interrompem a validacao', () => {
  assert.ok(errorsFrom(d => { d.events[0] = null; }).some(e => e.includes('Marco inválido')));
  assert.ok(errorsFrom(d => { d.states[0] = null; }).some(e => e.includes('Estado invalido')));
  assert.ok(errorsFrom(undefined, r => { r[0] = null; }).some(e => e.includes('Relação inválida')));
});
