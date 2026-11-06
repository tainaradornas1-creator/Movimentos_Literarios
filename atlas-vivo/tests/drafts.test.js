import test from 'node:test';
import assert from 'node:assert/strict';
import { createDraftStore } from '../src/drafts.js';

test('mantem hipotese ao alternar marcos, simulando navegacao dentro da mesma aba', () => {
  const drafts = createDraftStore();
  drafts.set('mg1768', 'Primeira ideia: forma e contexto');
  drafts.set('pe1919', 'Leitura de Os Sapos');
  assert.equal(drafts.get('mg1768'), 'Primeira ideia: forma e contexto');
  assert.equal(drafts.get('pe1919'), 'Leitura de Os Sapos');
});

test('atualiza o rascunho sem exigir botao de confirmar, incluindo nova linha e texto vazio', () => {
  const drafts = createDraftStore();
  drafts.set('rj1881', 'linha 1\nlinha 2');
  assert.equal(drafts.get('rj1881'), 'linha 1\nlinha 2');
  drafts.set('rj1881', '');
  assert.equal(drafts.get('rj1881'), '');
});

test('exportacao fornece copia independente e nao conserva dados entre abas', () => {
  const a = createDraftStore(), b = createDraftStore();
  a.set('mg1930', 'Reflexao do estudante');
  const exported = a.entries();
  exported.push(['outra', 'texto']);
  assert.deepEqual(a.entries(), [['mg1930','Reflexao do estudante']]);
  assert.equal(b.get('mg1930'), '');
});

test('nao aceita identificadores vazios nem conteudo nao textual', () => {
  const draft = createDraftStore();
  assert.throws(() => draft.set('', 'texto'), TypeError);
  assert.throws(() => draft.set('rj1881', null), TypeError);
});
