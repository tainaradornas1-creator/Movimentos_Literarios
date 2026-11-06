/**
 * Armazena hipoteses somente na memoria da aba atual.
 * Nao utiliza localStorage, cookies, backend ou chamadas de rede.
 * O estudante deve exportar em TXT para manter as reflexoes apos fechar a aba.
 */
export function createDraftStore() {
  const entries = new Map();
  return {
    /** Substitui o rascunho de um marco sem afetar os demais. */
    set(eventId, text) {
      if (typeof eventId !== 'string' || !eventId.trim()) {
        throw new TypeError('Identificador do marco invalido');
      }
      if (typeof text !== 'string') {
        throw new TypeError('A hipotese deve ser texto');
      }
      entries.set(eventId, text);
    },
    /** Retorna string vazia quando o marco ainda nao tem rascunho. */
    get(eventId) {
      return entries.get(eventId) ?? '';
    },
    /** Fornece copia isolada para a exportacao, preservando ordem de insercao. */
    entries() {
      return Array.from(entries.entries());
    }
  };
}
