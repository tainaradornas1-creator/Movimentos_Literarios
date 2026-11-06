# Atlas Vivo da Literatura Brasileira

Plataforma de investigação literária para **Ensino Fundamental II e Ensino Médio**, com exploração autônoma e mediação docente. Piloto: Minas Gerais, Rio de Janeiro e Pernambuco.

## Executar

A aplicação usa módulos ES e carrega dados por `fetch`; **não basta abrir index.html com file://**. Sirva a pasta por HTTP:

```sh
cd atlas-vivo
python -m http.server 8000
```

Abra **http://localhost:8000/**. Node 20+ é usado apenas para os testes, não para executar a interface.

## Testar

```sh
cd atlas-vivo
npm test
```

O conjunto usa o test runner nativo do Node; não há dependências npm a instalar. O GitHub Actions executa os testes em pull requests e mudanças relevantes.

## Organização

- `index.html`: estrutura visual acessível e responsiva;
- `src/styles.css`: estilos da interface;
- `src/app.js`: interação com mapa, cronologias, filtros e exportação de hipóteses;
- `src/model.js`: filtragem, indexação, contexto histórico e validação testável;
- `dados/piloto.json`: **26 marcos** (MG 8, RJ 8, PE 10), 27 estados cadastrados e quatro roteiros;
- `dados/relacoes.json`: **13 relações tipadas** entre marcos literários;
- `docs/planejamento-pedagogico.md`: planejamento inicial;
- `docs/arquitetura.md`: arquitetura, decisões e etapas seguintes;
- `tests/model.test.js`: testes automatizados de integridade editorial.

## Experiência de aprendizagem

Escolha o estado no mapa ou menu. Veja **duas cronologias em paralelo**: a territorial e o contexto nacional. O painel **Rupturas, críticas e diálogos** liga visualmente dois marcos (com anos e estados) e permite filtrar por crítica, disputa, ruptura, diálogo e continuidade. Cada conexão traz evidências e uma questão investigativa adaptada ao Fundamental II ou ao Ensino Médio.

Para o professor, há modo de mediação. Para o aluno, registro e exportação local de reflexões em TXT — não há conta, banco de dados ou coleta de respostas.

## Cuidados e limites

O piloto é uma **seleção curatorial**, não um repertório exaustivo. O estado pode refletir nascimento, produção, circulação ou tema. Fronteiras estaduais atuais não equivalem às antigas capitanias. As conexões assinaladas como interpretativas não demonstram influência direta entre autores.

O confronto **Olavo Bilac / Manuel Bandeira** exige nuance: “Os Sapos” ironiza especialmente os tiques e epígonos do Parnasianismo, não necessariamente o movimento inteiro. O marco de Bilac traz fontes da ABL e da UFSC.

As fontes, a representatividade de cada território, os direitos autorais e a acessibilidade devem continuar sendo revisados antes do uso curricular em produção.

**Versão 0.2 — piloto em desenvolvimento.**
