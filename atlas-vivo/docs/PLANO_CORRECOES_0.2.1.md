# Estabilização v0.2.1 — plano de correções por etapas

**Origem:** auditoria técnica de 06/11/2026. **Plano canônico e tarefas:** [GitHub issue #2](https://github.com/tainaradornas1-creator/Movimentos_Literarios/issues/2).  
**Escopo:** Atlas Vivo da Literatura Brasileira, piloto MG/RJ/PE, Ensino Fundamental II e Ensino Médio, uso autônomo e mediado.  
**Base:** branch `feature/atlas-vivo-piloto-mg-rj-pe`, commit `52b479a21e00508b8083c64a7596ae1c43dad379`.  
**Implementar em:** `fix/atlas-vivo-estabilizacao-0.2.1`. O Pages permanece apontado para a branch anterior.
**Autorização:** registro e execução por etapas solicitados em 06/11/2026 pelo responsável pelo repositório; **sem autorização de merge ou nova publicação**.

## Princípios e critérios transversais
- Não modificar arquitetura, stack, APIs, autenticação, banco de dados ou critérios pedagógicos sem consulta.
- Manter seleção de 27 UFs, com conteúdos de MG (8), RJ (8), PE (10), 13 relações e 4 roteiros.
- As perguntas diferenciam Fundamental II e Médio. Sem coleta ou transmissão de respostas de estudantes.
- Validação histórica/editorial é independente de êxito de testes técnicos.
- Todos os testes automatizados devem ficar reproduzíveis no GitHub; testes manuais/visuais devem ter resultado declarado.
- **Não executar merge, deploy ou mudança de configuração de produção sem autorização específica.**

## Etapas

### Etapa 0 — documentação e controle (pré-requisito)
**Problema:** ausência de governança do repositório, documentação desatualizada e branches semelhantes.  
**Ações:** criar AGENTS, PROJECT, STATUS, AI_WORKFLOW, este plano e issue #2. Registrar SHA/base e limites de publicação.  
**Aceite:** documentos versionados em branch independente, sem código de produção alterado.

### Etapa 1 — P0: perda de anotações
**Problema:** painel de detalhe substitui o elemento textarea sem capturar digitação, exceto no botão de guardar.  
**Ações:** salvar rascunho em memória ao digitar, preservar texto antes de substituir/ocultar a ficha, manter salvar e exportar TXT, esclarecer limite da sessão. Não usar storage persistente nem backend neste ciclo.  
**Teste:** escrever em marco A, trocar para B e retornar; alternar estado, filtro, nível, modo e roteiro; exportar rascunhos sem clicar em guardar.  
**Aceite:** texto íntegro durante a aba, sem novas requisições de dados do aluno.  
**Rollback:** reverter commit da etapa 1.

### Etapa 2 — P0: dados inválidos no navegador
**Problema:** validação atual deixa passar campos obrigatórios vazios, tags/conexões ausentes e formatos inconsistentes.  
**Ações:** validar estrutura, unicidade, UFs, anos, tags, vínculos, rotas, fontes, tipos e conteúdo; erro amigável no carregamento.  
**Teste:** base real passa; entradas alteradas propositalmente causam falha clara; CI executa testes.  
**Aceite:** sem falha silenciosa/erro de runtime devido a dados inválidos.  
**Rollback:** reverter commit da etapa 2.

### Etapa 3 — P1: sequência dos roteiros
**Problema:** iniciar apenas abre primeiro marco, sem navegação para as próximas paradas.  
**Ações:** controles anterior/próxima, indicador e conclusão por roteiro, preservando notas e navegação normal.  
**Teste:** percorrer os 4 roteiros, inclusive entre estados e em tela móvel.  
**Aceite:** completar roteiros com teclado e mouse, sem perder hipótese.  
**Rollback:** retorno ao modo livre da v0.2.

### Etapa 4 — P1: acessibilidade e mapa resiliente
**Problema:** alternâncias de modo sem estado `aria-pressed`; mapa requer GeoJSON remoto, acessibilidade necessita auditoria.  
**Ações:** estados acessíveis, foco visível, feedback de loading/erro/vazio; seleção textual; mapa local **somente após verificação de licença e fonte**.  
**Teste:** teclado, zoom, leitor de tela, resolução móvel e fallback sem rede.  
**Aceite:** tarefas essenciais possíveis sem mouse e em falha de mapa; documentar barreiras residuais.  
**Rollback:** preservar seletor textual da versão original.

### Etapa 5 — P1/P2: curadoria, fontes e documentação
**Problema:** `relacoes.json` não tem `source[]` dedicado; planejamento indica 25 marcos/v0.1.  
**Ações:** atribuir fontes verificáveis às 13 relações, distinguir fatos de comparações, revisão de representatividade territorial, direitos autorais e datas, alinhar documentação ao conteúdo.  
**Teste:** auditoria humana e testes editoriais; checagem de URLs e atribuição.  
**Aceite:** revisão pedagógica documentada por responsável, sem afirmar comprovação que não existe.  
**Rollback:** correções editoriais isoladas e rastreáveis.

### Etapa 6 — QA e revisão de publicação
**Ações:** testes unitários, integração, execução HTTP, teclado, mobile e acessibilidade; revisão CI/PR e riscos residuais.  
**Aceite:** PR revisado, resultados de testes anexados, autorização de merge/publicação registrada separadamente.

## Priorização e andamento
| Etapa | Prioridade | Estado inicial |
| --- | --- | --- |
| 0 — Governança | P0 | Concluída no registro deste plano |
| 1 — Rascunhos | P0 | Implementado e CI aprovado; E2E pendente na etapa 6 |
| 2 — Validação | P0 | Implementado; 17/17 testes de projeto aprovados no CI |
| 3 — Roteiros | P1 | A executar |
| 4 — Acessibilidade/geo | P1 | A executar |
| 5 — Editorial/docs | P1/P2 | A executar |
| 6 — QA final | P1 | A executar |

**Atualização (06/11/2026):** etapas 0, 1 e 2 implementadas em branch isolada; commits `63fe0452`, `c47b5c5d`, `f31fc43b`. CI [#42275003627](https://github.com/tainaradornas1-creator/Movimentos_Literarios/actions/runs/42275003627) aprovada com 17/17 testes, nenhum erro. Não foi realizado teste ponta a ponta no site público, que permanece na versão 0.2.

**Próximo incremento:** etapa 3 (roteiros guiados), com validação específica da experiência pedagógica, sem merge/deploy automático.
