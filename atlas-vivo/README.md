# Atlas Vivo da Literatura Brasileira

Protótipo de uma plataforma de investigação literária para o Ensino Fundamental II e o Ensino Médio, com exploração autônoma e mediação docente.

## Como experimentar

Abra [index.html](./index.html) no navegador. A interface e os dados do piloto estão incorporados ao HTML para funcionar sem um servidor de aplicação. O contorno geográfico pode usar conexão à internet; se estiver indisponível, há seleção dos estados por pontos e por menu.

Para servir localmente (opcional), a partir da pasta `atlas-vivo`:

```sh
python -m http.server 8000
```

Então visite `http://localhost:8000`.

## Conteúdo piloto

- **MG:** 8 marcos
- **RJ:** 7 marcos
- **PE:** 10 marcos
- **4 roteiros investigativos:** identidade literária; conflitos de forma; cânone, raça e sociedade; sertões e linguagem.
- **27 unidades federativas selecionáveis**, com apenas MG, RJ e PE já curadas.
- Filtros por tema; questões diferenciadas por etapa; mediação docente; registro e exportação de hipóteses.

## Arquivos

- `index.html`: interface navegável e dados incorporados.
- `dados/piloto.json`: base estruturada para evolução da aplicação.
- `docs/planejamento-pedagogico.md`: objetivos, princípios de curadoria, marcos, percursos, requisitos e roadmap.

## Cuidados editoriais

A obra pode relacionar-se a diversos estados por nascimento, residência, produção, circulação ou tema, sem atribuição exclusiva. O atlas distingue dados históricos verificáveis de hipóteses interpretativas. Uma escola literária não é tratada como substituta linear de outra. As fontes citadas nos marcos devem passar por revisão editorial contínua.

## Situação do projeto

**Versão 0.1 — piloto.** Sem contas de usuários nem armazenamento remoto de anotações. Dados do JSON e do HTML são duplicados intencionalmente neste piloto e precisam ser unificados em uma futura arquitetura. São prioridades: testes automatizados versionados; acessibilidade; linha do tempo nacional e estadual em paralelo; validação das fontes; expansão da curadoria; criação de um grafo explícito de conflitos; e licenciamento de trechos de obras.

O conteúdo e o protótipo estão em revisão, não constituem um recurso curricular homologado.
