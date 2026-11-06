# Arquitetura e decisões — versão 0.2

## Estrutura

O projeto permanece estático para reduzir custos de implantação e facilitar avaliação em escolas. Não há framework ou build step obrigatórios.

- `index.html`: navegação, sem dados embutidos.
- `src/app.js`: controlador da interface que carrega os JSON por HTTP e atualiza o DOM.
- `src/model.js`: funções puras de ordenação e filtragem da linha do tempo, índice, contexto nacional e validação de referências.
- `dados/piloto.json`: cadastro curado de estados, marcos, roteiros e fatos históricos nacionais.
- `dados/relacoes.json`: pares direcionados de marcos ligados por uma categoria interpretativa, com pergunta para cada etapa, evidência e marcação do caráter documentado/comparativo.

## Modelo da relação

Campos: `id`, `fromEvent`, `toEvent`, `type`, `title`, `summary`, `evidence`, `q2`, `qm`, `documented`. O `type` é um de: `crítica`, `disputa`, `ruptura`, `diálogo`, `continuidade`. Ambos os eventos precisam existir em `piloto.json`.

A direção é uma orientação de leitura **cronológica**, não a prova de influência literária. `documented` sinaliza relações respaldadas por marcos históricos e bibliografia; não substitui notas com referências completas.

## Requisitos editoriais

- Diferenciar publicação, composição, apresentação e recepção de uma obra.
- Distinguir nascimento, atuação e circulação territorial.
- Evitar narrativas teleológicas em que um movimento simplesmente supera o anterior.
- Registrar vozes indígenas, negras, femininas e populares como parte constitutiva da literatura.
- Indicar quando uma conexão é hipótese de comparação e quando é uma relação histórica documentada.
- Referenciar fontes consultáveis por marco e revisar documentos de direitos autorais antes de reproduzir trechos.

## Próximos incrementos

1. Revisão histórica especializada dos 26 marcos e das 13 relações.
2. Arquivo GeoJSON estadual versionado, para funcionar sem depender de serviço externo.
3. Persistência opcional e consentida das atividades escolares.
4. Testes E2E de navegação e acessibilidade com leitor de tela, alto contraste e dispositivos móveis.
5. Ferramenta de curadoria com fluxo de revisão, versionamento e novas UFs.
6. Publicação controlada da aplicação estática e estratégia de avaliação pedagógica.

Executar: `python -m http.server 8000` dentro de `atlas-vivo`. Testar: `npm test`.
