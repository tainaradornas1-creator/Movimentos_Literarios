# Fluxo de implementação controlada

1. **Ler:** `AGENTS.md`, `docs/PROJECT.md`, `docs/STATUS.md`, `atlas-vivo/docs/PLANO_CORRECOES_0.2.1.md` e os arquivos do escopo, verificando o SHA real da branch.
2. **Delimitar:** descrever comportamento atual, correção, critérios de aceite, risco e rollback. Não misturar correções com novas funcionalidades.
3. **Branch:** para a estabilização, partir de `feature/atlas-vivo-piloto-mg-rj-pe` e escrever em `fix/atlas-vivo-estabilizacao-0.2.1`. A branch Pages não deve receber mudanças até autorização.
4. **Validar em camadas:** testes puros de modelo/dados; sintaxe JS; testes de integração; revisão de UI e acessibilidade real em desktop/mobile. Registrar quando um nível NÃO puder ser executado.
5. **Revisão:** abrir PR para a branch do piloto; deixar em rascunho até aceite explícito. CI verde não substitui revisão pedagógica.
6. **Publicação:** GitHub Pages, `main`, mudanças de hospedagem, permissões, integrações, credenciais, banco, analytics ou armazenamento de alunos exigem autorização específica e etapa própria de avaliação.
7. **Proteção de dados:** usar apenas dados fictícios; hipóteses de alunos permanecem na aba e são exportadas explicitamente; sem servidor nem telemetria no piloto.
8. **Registro:** atualizar `docs/STATUS.md`, issue #2 e PR com arquivos, commits, testes reproduzíveis, evidências e limitações. Não reescrever o histórico nem forçar push.
