# Situação atual — Atlas Vivo

**Registro:** 06/11/2026. **Solicitação:** iniciar correção por etapas, autorizada pelo responsável pelo repositório na conversa com o ChatGPT. Escopo autorizado: registrar planejamento e implementar correções em branch separada. **Não foi concedida autorização para merge, publicação, mudanças de conta/serviços nem coleta de dados estudantis.**

## Linha de base
- `main`: `a3e70d32366fd7b44d6a5e33a15dfbebea850ee3`.
- PR do protótipo: [#1](https://github.com/tainaradornas1-creator/Movimentos_Literarios/pull/1), em rascunho.
- Branch Pages/base de trabalho: `feature/atlas-vivo-piloto-mg-rj-pe` @ `52b479a21e00508b8083c64a7596ae1c43dad379`.
- Versão do protótipo: 0.2.
- Auditoria: validação GitHub Actions e publicação Pages concluídas; defeitos e lacunas de garantia descritos no [issue #2](https://github.com/tainaradornas1-creator/Movimentos_Literarios/issues/2).

## Execução da estabilização 0.2.1
- [x] Etapa 0 — diagnóstico, controle de branch e plano registrado.
- [x] Etapa 1 — rascunhos salvos em memória ao digitar e nas transições; verificação unitária aprovada; teste E2E pendente na etapa 6.
- [x] Etapa 2 — validação estrutural dos JSONs e testes negativos aprovados no CI; regressão no navegador pendente na etapa 6.
- [ ] Etapa 3 — navegação guiada dos roteiros.
- [ ] Etapa 4 — acessibilidade e dados de mapa local.
- [ ] Etapa 5 — revisão curatorial/documental.
- [ ] Etapa 6 — QA no navegador real e revisão para eventual publicação.

## Evidências das etapas concluídas
- **Etapa 0** — `63fe0452e19c87a8e3472659ef6964f1d4961cd9`: documentos de contexto, plano e protocolo.
- **Etapa 1** — `c47b5c5d274afe9be33a3c921559c28bdf9abb57`: `src/drafts.js`, captura automática de rascunhos em `src/app.js` e quatro testes.
- **Etapa 2** — `f31fc43bd8432db5428a783973f3375fd49d0207`: `validateAtlas` reforçado, mensagem de erro amigável e sete novos testes.
- **CI das etapas 1 e 2** — [GitHub Actions #42275003627](https://github.com/tainaradornas1-creator/Movimentos_Literarios/actions/runs/42275003627): **17/17 testes Node passaram; falhas 0**.
- **PR de correções** — [#3](https://github.com/tainaradornas1-creator/Movimentos_Literarios/pull/3), em rascunho, base a branch piloto.

**Risco residual e limites:** os testes confirmam modelo e integridade, **não** substituem testes de navegação real, teclado/leitor de tela ou revisão editorial. O Pages continua na branch piloto; esta branch de correção não foi publicada.

**Regras para atualização:** marcar etapas apenas após mudança commitada, testes realmente executados e registro de limitações. Relatar bloqueios em vez de declarar conclusão presumida.
