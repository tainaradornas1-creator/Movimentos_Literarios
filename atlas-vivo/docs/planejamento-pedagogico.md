# ATLAS VIVO DA LITERATURA BRASILEIRA

**Planejamento pedagógico, curatorial e tecnológico — versão piloto 0.1**  
**Público:** Ensino Fundamental II e Ensino Médio  
**Uso:** exploração autônoma e mediação docente  
**Territórios iniciais:** Minas Gerais, Rio de Janeiro e Pernambuco  
**Data do planejamento:** 6 de novembro de 2026

## Sumário executivo

O Atlas Vivo da Literatura Brasileira é uma proposta de ambiente digital de investigação. O mapa dos estados funciona como entrada para linhas do tempo interpretativas. Cada linha combina obras, movimentos literários, contextos históricos, questões sociais e relações de ruptura, apropriação ou permanência. O estudante não recebe uma narrativa de “superação” linear entre escolas: encontra perguntas sobre **quem representa o Brasil, quem tem direito à autoria e por que determinadas obras se tornam clássicas**.

O piloto navegável acompanha este planejamento. Tem **25 marcos comentados**, distribuídos por **Minas Gerais (8), Rio de Janeiro (7) e Pernambuco (10)**, **quatro roteiros de investigação**, filtros temáticos, dois níveis de pergunta, um modo de mediação docente e um campo para hipóteses com exportação local. A base de dados é fornecida em JSON separado; o HTML também contém sua própria cópia, para abertura simples.

**Pergunta orientadora:** *Como a literatura brasileira construiu, transformou e contestou as diferentes ideias de Brasil?*

## 1. Princípios que não devem ser negociados

1. **A literatura não começa automaticamente em 1500.** A escrita dos colonizadores é uma fonte relevante, mas não deve apagar narrativas, conhecimentos e tradições orais dos povos originários, nem as práticas culturais africanas e afro-brasileiras que compõem a história dos territórios.
2. **Um estado não “possui” seus autores.** O vínculo geográfico pode ser nascimento, residência, atuação, tema da obra, publicação ou recepção. Manuel Bandeira, por exemplo, liga Recife, Rio de Janeiro e São Paulo por percursos diferentes; Graça Graúna nasceu no Rio Grande do Norte, mas desenvolveu atuação acadêmica e cultural em Pernambuco.
3. **Uma escola literária não é uma gaveta fechada.** Em Cláudio Manuel da Costa, traços barrocos e árcades coexistem; Bandeira ironiza normas parnasianas usando recursos da própria tradição; Machado de Assis ultrapassa classificações simplificadoras.
4. **Interpretação não é fato isolado.** Datas de publicação, locais e documentos devem ser verificáveis. Afirmações como “a obra critica a elite” constituem hipóteses de leitura que precisam ser confrontadas com o texto.
5. **Autoria e representação são questões centrais.** Estudar a figura do indígena no Romantismo não substitui estudar autores indígenas. Discutir escravidão na ficção do século XIX não substitui dar centralidade a escritores negros de diferentes períodos.
6. **Racismo e exclusão exigem tratamento histórico.** Machado de Assis deve ser estudado como intelectual negro de notável invenção formal, inserido numa sociedade escravista e racista; não como uma história simplificada de exceção individual.
7. **As fronteiras do mapa são atuais.** Os recortes político-administrativos não correspondem automaticamente às capitanias e outras divisões dos séculos anteriores.

## 2. Objetivos de aprendizagem por etapa

| Competência | Fundamental II | Ensino Médio |
|---|---|---|
| Tempo e território | Organizar acontecimentos, localizar lugares e reconhecer mudanças | Relacionar contextos e discutir cronologias, circulação e mudanças de fronteira |
| Linguagem e forma | Identificar narrador, imagens, rimas, registros e diferenças entre textos | Analisar ironia, paródia, oralidade, polifonia, intertextualidade e escolhas estéticas |
| História e sociedade | Reconhecer desigualdades, silenciamentos e perspectivas | Examinar colonialismo, racismo, gênero, classe, cânone, instituições e recepção |
| Identidade literária | Formular hipóteses sobre o que significa ser “brasileiro” | Confrontar modelos de nacionalidade literária com evidências e crítica |
| Autonomia | Registrar descobertas e justificar comparações simples | Produzir teses interpretativas, contrastar fontes e revisar argumentos |

O trabalho favorece uma abordagem integrada de Língua Portuguesa, História, Geografia e Arte. A adequação da linguagem e das fontes deve respeitar a faixa etária e o projeto pedagógico da escola. A legislação de referência é o art. 26-A da LDB, com redação dada pela Lei nº 11.645/2008, que prevê o estudo de história e cultura afro-brasileira e indígena no Ensino Fundamental e Médio.

## 3. Experiência e arquitetura da ferramenta

**Fluxo básico do estudante:** escolher estado → filtrar acontecimentos → abrir marco → examinar obra, contexto e conflito → seguir conexão com outro marco → responder a uma pergunta → exportar hipótese.

**Modo de exploração autônoma:** apresenta textos introdutórios concisos, seleção por estado, perguntas diferenciadas para as duas etapas e anotações exportáveis. Não é preciso criar conta no piloto.

**Modo de mediação docente:** mostra um encaminhamento breve para debate, comparação de interpretações e exigência de evidências. Em uma versão de produção, o professor deverá conseguir selecionar um roteiro, definir uma duração, disponibilizar materiais licenciados e projetar a linha do tempo em tela cheia.

**Camadas de conteúdo:**

- **Literária:** autor, obra, gênero, estilo, movimento e procedimento estético;
- **Histórico-social:** colonização, escravidão, independência, abolição, pós-abolição, desigualdades, direitos e movimentos culturais;
- **Crítica:** ruptura, continuidade, diálogo, ironia, contestação e revisão de cânones;
- **Geográfica:** vínculo com o território, circulação e relações interestaduais;
- **Investigativa:** pergunta, hipóteses, fontes e propostas de confronto de textos.

**Funcionalidades do piloto já implementadas:** mapa do Brasil com 27 unidades federativas selecionáveis (três com conteúdo), pontos de seleção utilizáveis sem internet, tentativa de carregar contornos estaduais com conexão, linha do tempo por estado, filtros, perguntas adaptadas ao nível, mediação, navegação entre conexões, quatro roteiros e anotações exportáveis em TXT.

**Ainda não implementado:** dupla trilha histórica e literária visível em paralelo; editor de conteúdos para professores; busca textual; grafo de relações desenhado com arestas; trechos integrais licenciados; acessibilidade validada com usuários; perfis e persistência de dados; conteúdo dos demais 23 estados e do Distrito Federal.

## 4. Curadoria: Minas Gerais

| Data | Marco | Tensão de leitura |
|---|---|---|
| 1768 | *Obras*, Cláudio Manuel da Costa | O Arcadismo se afirma, mas convive com a herança barroca; o pastoralismo contrasta com uma sociedade mineradora e escravista. |
| 1789 | Conjuração Mineira | Ideias de liberdade e repressão colonial não equivalem à emancipação de todos os grupos sociais. |
| 1839 | Publicação de *Vila Rica* | O poema estava pronto em 1773; estudar a diferença entre composição e recepção. |
| 1930 | *Alguma poesia*, Carlos Drummond de Andrade | A liberdade modernista se amplia pela ironia e pelo cotidiano. |
| 1956 | *Grande Sertão: Veredas*, Guimarães Rosa | Oralidade, invenção vocabular e sertão enfrentam a oposição simples entre regional e universal. |
| 1976 | *Bagagem*, Adélia Prado | Cotidiano e perspectiva feminina ganham força sem exigir rompimento total com a tradição. |
| 2003 | *Ponciá Vicêncio*, Conceição Evaristo | A escrevivência desloca o centro narrativo para memória, ancestralidade, raça e gênero. |
| 2019 | *Ideias para adiar o fim do mundo*, Ailton Krenak | O ensaio indígena contesta modelos hegemônicos de desenvolvimento e humanidade. |

**Pergunta do percurso:** Como a escrita mineira passa da representação idealizada da paisagem para a invenção de linguagem e a multiplicidade contemporânea de sujeitos que narram?

## 5. Curadoria: Rio de Janeiro

| Data | Marco | Tensão de leitura |
|---|---|---|
| 1873 | *Instinto de nacionalidade*, Machado de Assis | A nacionalidade literária não se reduz à paisagem brasileira: investigar as escolhas estéticas e o ponto de vista. |
| 1881 | *Memórias Póstumas de Brás Cubas*, Machado de Assis | Um narrador de elite, irônico e não confiável, desorganiza convenções românticas. |
| 1897 | Instalação da Academia Brasileira de Letras | O que é valorizado como cânone? Quem tinha acesso às instituições? |
| 1909 | *Recordações do Escrivão Isaías Caminha*, Lima Barreto | Racismo e imprensa na Primeira República; diálogo e diferenças com Machado, sem inventar uma rivalidade direta. |
| 1915 | *Triste Fim de Policarpo Quaresma*, Lima Barreto (livro) | O nacionalismo se torna tema de sátira; a primeira circulação ocorreu em folhetins, em 1911. |
| 1982 | *A teus pés*, Ana Cristina Cesar | Carta, diário e intimidade tornam-se procedimentos poéticos e questionam o autobiográfico. |
| 2004 | *Metade Cara, Metade Máscara*, Eliane Potiguara | A autoria indígena e feminina confronta visões coloniais, deslocamento e apagamento histórico. |

**Pergunta do percurso:** O que muda quando a literatura deixa de celebrar uma identidade nacional única e passa a investigar contradições, instituições e diferentes lugares de enunciação?

## 6. Curadoria: Pernambuco

| Data | Marco | Tensão de leitura |
|---|---|---|
| 1601 | *Prosopopeia*, atribuída a Bento Teixeira | Poema colonial ligado à capitania; questionar o uso do rótulo “origem da literatura brasileira”. |
| 1909 | Redes de edição de cordel no Recife | A literatura popular impressa desafia hierarquias entre publicação erudita, feira, oralidade e impressão. |
| 1919 | *Os Sapos*, Manuel Bandeira, em *Carnaval* | A paródia do Parnasianismo usa formas tradicionais para criticá-las. |
| 1922 | Recitação de *Os Sapos* na Semana de Arte Moderna | O poema de autor pernambucano circula em São Paulo, onde é recitado por Ronald de Carvalho. |
| 1936 | Frente Negra Pernambucana e Centro de Cultura Afro-Brasileira | A produção negra também se organiza coletivamente em instituições culturais. |
| 1944 | *Poemas d’uma vida simples*, Solano Trindade | Compromisso social, ritmo e cultura negra rediscutem a noção de valor literário. |
| 1950 | *O Cão sem Plumas*, João Cabral de Melo Neto | O Rio Capibaribe se torna imagem literária e problema social. |
| 1954–1955 | Composição de *Morte e Vida Severina* | A forma dramática e o trajeto do retirante articulam poesia, desigualdade e migração; publicação em livro em 1956. |
| 1970 | Movimento Armorial, no Recife | O projeto de arte erudita fundada em culturas populares levanta debates sobre autenticidade e tradição. |
| 1999 | *Canto Mestizo*, Graça Graúna | Autora potiguara nascida no RN e atuante em PE; a autoria indígena questiona a fixação do indígena no passado. |

**Pergunta do percurso:** Quem determina a fronteira entre literatura erudita e popular, e como o Nordeste responde às tentativas de definir uma arte autenticamente brasileira?

## 7. A linha do tempo nacional como contraponto

A versão final terá duas trilhas temporais sincronizadas: **marcos literários do estado** e **acontecimentos da história brasileira**, com conexões visíveis entre ambas. O piloto possui os pontos nacionais em sua base de dados, mas ainda não os representa como uma faixa paralela.

Marcos iniciais a considerar: tradições orais e conhecimentos indígenas anteriores a 1500; colonização e escrita europeia desde 1500; Independência (1822); abolição legal da escravidão (1888); repercussões da Semana de 1922; e legislação curricular de 2008. Todos precisarão ser contextualizados para não produzir a ideia de que a cultura muda numa única data.

## 8. Matriz de conflitos e relações entre obras

| Relação | Pergunta que ela permite investigar |
|---|---|
| *Prosopopeia* (PE, 1601) ↔ *Instinto de nacionalidade* (RJ, 1873) | Um texto precisa ter estilo “nacional” para ser brasileiro? |
| Cláudio Manuel da Costa (MG, 1768) ↔ Bandeira (PE, 1919) | Que elementos da tradição continuam vivos dentro da crítica à tradição? |
| *Os Sapos* (PE, 1919) ↔ Drummond (MG, 1930) | O modernismo é um acontecimento único ou uma transformação com muitas linguagens? |
| Machado (RJ, 1881) ↔ Lima Barreto (RJ, 1909) | Como duas vozes negras e duas formas de ironia abordam as hierarquias brasileiras? |
| Solano Trindade (PE, 1944) ↔ Conceição Evaristo (MG, 2003) | Como poesia de denúncia e escrevivência reorganizam perspectivas sobre raça, memória e autoria? |
| João Cabral (PE, 1955) ↔ Guimarães Rosa (MG, 1956) | Há apenas um modo de criar linguagem para falar do sertão? |
| Eliane Potiguara (RJ, 2004) ↔ Graça Graúna (PE, 1999) ↔ Ailton Krenak (MG, 2019) | O que muda quando povos originários são autores contemporâneos e não figuras idealizadas do passado? |

O termo **conflito** deve ser usado com precisão. Algumas relações representam antagonismo textual demonstrável (como a sátira de Bandeira ao Parnasianismo); outras são **comparações pedagógicas** entre obras de períodos distintos, sem implicar que os autores se tenham enfrentado diretamente. A base editorial futura deve registrar essa distinção.

## 9. Quatro roteiros investigativos disponíveis

1. **Quem pode definir o Brasil?** *Prosopopeia* → Machado (1873) → Graça Graúna → Eliane Potiguara → Ailton Krenak. Produto: mapa argumentativo com diferentes critérios de brasilidade.
2. **Quando a poesia desafia a poesia.** Cláudio Manuel → *Os Sapos* → Semana de 1922 → Drummond → Ana Cristina Cesar. Produto: comentário comparativo sobre permanência e ruptura.
3. **Cânone, raça e sociedade.** Machado → Academia Brasileira de Letras → Lima Barreto → Solano Trindade → Conceição Evaristo. Produto: debate documentado sobre reconhecimento, autoria e instituições.
4. **Sertões de muitas linguagens.** *O Cão sem Plumas* → *Morte e Vida Severina* → *Grande Sertão: Veredas*. Produto: comparação de recursos poéticos e narrativos.

## 10. Sequências didáticas de aplicação

### Fundamental II — aula investigativa de 50 minutos

| Tempo | Ação | Evidência de aprendizagem |
|---|---|---|
| 5 min | Apresentar a pergunta: “O que torna uma obra brasileira?” | Hipótese inicial oral ou escrita |
| 10 min | Selecionar PE e observar *Os Sapos* e o episódio de 1922 | Identificação de autor, ano, local e circulação |
| 15 min | Comparar a ideia de forma rigorosa com a paródia de Bandeira (fragmentos escolhidos pelo professor) | Uma semelhança e uma diferença justificadas |
| 12 min | Seguir conexão até Drummond ou até uma obra de autoria indígena contemporânea | Reconhecimento de continuidade ou deslocamento |
| 8 min | Registrar hipótese no Atlas e exportar | Resposta escrita com evidência textual |

### Ensino Médio — aula investigativa de 50 minutos

| Tempo | Ação | Evidência de aprendizagem |
|---|---|---|
| 5 min | Debate inicial: “Quando começa a literatura brasileira?” | Formulação de critérios concorrentes |
| 12 min | Confrontar *Prosopopeia* e o ensaio de Machado de 1873 | Distinção entre tema, autoria, forma e nacionalidade |
| 18 min | Em grupos, comparar Machado/Lima ou autoria indígena/representação indianista | Duas interpretações acompanhadas de evidências |
| 10 min | Plenária: canonicidade, apagamentos, continuidades | Síntese que reconheça tensões e limites |
| 5 min | Exportar uma tese revisada e uma dúvida para pesquisa | Autorrevisão argumentativa |

### Projetos de aprofundamento

**Projeto 1 — O cânone sob investigação:** cada grupo identifica um autor frequentemente destacado e outro menos presente em materiais didáticos; compara condições de produção, recepção e procedimentos literários, evitando reduzir o segundo a um “complemento representativo”.

**Projeto 2 — Cartografia dos deslocamentos:** os grupos reconstroem trajetórias interestaduais de textos, autores, editoras e recepções, diferenciando lugar de nascimento de lugar de circulação.

A escolha dos excertos requer verificação de domínio público, licenças ou autorização do titular. O piloto não reproduz integralmente obras protegidas por direitos autorais.

## 11. Avaliação formativa

Critérios a observar na produção do estudante (níveis sugeridos: inicial, em desenvolvimento, consistente e aprofundado):

- **Precisão histórica:** situa corretamente obra, contexto, data e tipo de vínculo com o território.
- **Leitura literária:** identifica procedimentos específicos de linguagem e explica seus efeitos.
- **Construção de relações:** distingue ruptura explícita, permanência, releitura e comparação interpretativa.
- **Consciência social:** trata raça, gênero, classe e colonialismo com historicidade, sem generalizações simplistas.
- **Argumentação e fontes:** justifica hipóteses com evidências e reconhece limites das interpretações.

O sucesso do Atlas não deve ser medido somente por cliques ou tempo de tela. Indicadores educacionais mais relevantes são a qualidade das conexões construídas, o uso de evidências e a capacidade de rever hipóteses.

## 12. Modelo de dados e regras editoriais

Na versão de produção, o ideal é separar as entidades **Autor**, **Obra**, **Marco**, **Movimento**, **Lugar**, **Fonte**, **Atividade**, **Contexto** e **Relação**. O mesmo autor poderá relacionar-se com vários estados por vínculos diferentes.

Campos mínimos de um marco: `id`, `data_inicio`, `data_fim`, `tipo_data` (composição/publicação/recepção/fato histórico), `autor_id`, `obra_id`, `unidades_federativas[]`, `tipo_vinculo_geo`, `tipo_marco`, `movimentos[]`, `sintese`, `contexto_historico`, `proposta_de_ruptura`, `permanencias`, `questao_fundamental_II`, `questao_ensino_medio`, `fontes[]`, `status_revisao`.

Campos mínimos de uma relação: `origem`, `destino`, `categoria` (paródia, crítica documentada, influência, permanência, circulação, comparação pedagógica), `justificativa`, `referencia_comprobatória`, `grau_de_confianca`.

**Condições para publicar um marco:** conferir a fonte primária quando possível; usar fonte bibliográfica ou acervo idôneo para datas; distinguir fato de interpretação; verificar associação territorial; revisar linguagem racial e identitária; examinar representação regional e de gênero; escolher trecho e direitos de uso; submeter à revisão pedagógica.

## 13. Proposta de desenvolvimento por etapas

| Etapa | Entregável | Critério de aceite |
|---|---|---|
| 1. Validação pedagógica | Teste do piloto com professores de ambas as etapas | Perguntas compreensíveis, relações úteis, ausência de simplificações graves |
| 2. Revisão de conteúdo | Base de MG, RJ e PE auditada por especialista | Fontes, datas, vínculo territorial e texto revisados |
| 3. Mapa e cronologia | Mapa com limites estaduais embutidos e dupla trilha histórico-literária | Funcional sem conexão, acessível por teclado e leitor de tela |
| 4. Núcleo de investigação | Cartões de conexão com justificativa e trechos licenciados | Diferença clara entre crítica comprovada e comparação sugerida |
| 5. Ferramentas docentes | Roteiros customizáveis, exportação de atividades e projeção | Professores conseguem usar sem criar contas de estudantes |
| 6. Ampliação territorial | Expansão gradual às demais unidades federativas | Padrão de curadoria e revisão mantido em todos os estados |
| 7. Testes e lançamento | Avaliação com turmas, desempenho, acessibilidade e privacidade | Correções realizadas antes de uso institucional |

A ordem evita o risco de produzir um mapa visualmente completo, mas pedagogicamente superficial. Não se recomenda preencher os estados por quantidade de nomes sem critérios de representatividade e qualidade de fontes.

## 14. Acessibilidade, privacidade e direitos

**Acessibilidade:** metas de contraste, navegação por teclado, rótulos descritivos, alternativa textual para mapas, ausência de dependência exclusiva de cor, opção de movimento reduzido, boa leitura em celular e verificação por pessoas que usam tecnologias assistivas. Adotar WCAG 2.2 nível AA como meta de produto, com testes reais.

**Privacidade:** no piloto não há cadastro, envio de respostas ou telemetria; a anotação fica na sessão do navegador e pode ser exportada manualmente. Se a escola futuramente coletar dados de estudantes, deverá definir finalidade, minimização, retenção, segurança, perfis de acesso e base legal, à luz da LGPD e das normas pertinentes à proteção de crianças e adolescentes.

**Direitos autorais:** não assumir que obras modernas são de livre reprodução. Usar links para acervos, fragmentos sob licença adequada, obras em domínio público ou autorizações expressas. Preservar créditos de imagens, cartografia e textos.

**Representação responsável:** evitar homogeneizar povos indígenas ou experiências negras; consultar especialistas e, quando viável, autores, pesquisadoras e agentes culturais ligados aos grupos e regiões representados.

## 15. Próximas decisões pedagógicas

Antes da expansão nacional, devem ser resolvidos coletivamente os seguintes pontos: seleção de obras por série; nível de leitura exigido; extensão dos excertos; textos que exigem mediação para discussões de escravidão e violência; periodicidade de revisão da base; e uso do Atlas como apoio curricular, projeto interdisciplinar ou laboratório de pesquisa.

A hipótese central a testar com estudantes é simples: **a conexão entre textos e seus contextos produz aprendizagem mais profunda do que a memorização isolada de escolas, datas e características**.

## 16. Fontes principais da curadoria

- Biblioteca Nacional Digital. [Cláudio Manuel da Costa](https://bndigital.bn.gov.br/claudio-manoel-da-costa/), inclusive a diferença entre composição (1773) e publicação (1839) de *Vila Rica*.
- Biblioteca Nacional Digital. [Literatura colonial e *Prosopopeia*](https://bndigital.bn.gov.br/dossies/rede-da-memoria-virtual-brasileira/literatura/literatura-colonial/).
- Academia Brasileira de Letras. [Machado de Assis: biografia](https://www2.academia.org.br/academicos/machado-de-assis/biografia).
- Biblioteca Nacional Digital. [Machado e o texto de 1873](https://bndigital.bn.gov.br/dossies/gramaticas-e-dicionarios-do-portugues/linha-do-tempo/sobre-as-efemerides/1873-a-literatura-e-a-lingua-por-machado-de-assis/).
- Biblioteca Nacional Digital. [Lima Barreto: acervo](https://bndigital.bn.gov.br/artigos/colecoes-da-secao-de-manuscritos-lima-barreto/).
- Academia Brasileira de Letras. [Manuel Bandeira: biografia e *Os Sapos*](https://www2.academia.org.br/academicos/manuel-bandeira/biografia).
- Academia Brasileira de Letras. [João Cabral de Melo Neto](https://www.academia.org.br/academicos/joao-cabral-de-melo-neto/biografia) e [*Morte e Vida Severina*: composição](https://www2.academia.org.br/noticias/morte-e-vida-severina-70-anos-palestra-na-quinta-e-cultura-relembra-primeira-encenacao-da).
- Academia Brasileira de Letras. [Guimarães Rosa: biografia](https://www.academia.org.br/academicos/joao-guimaraes-rosa/biografia).
- Fundação Joaquim Nabuco. [Edição de cordel](https://pesquisaescolar.fundaj.gov.br/pt-br/artigo/edicao-de-cordel-no-brasil/) e [Movimento Armorial](https://pesquisaescolar.fundaj.gov.br/pt-br/artigo/movimento-armorial/).
- Itaú Cultural. [Conceição Evaristo e escrevivência](https://www.itaucultural.org.br/ocupacao/conceicao-evaristo/escrevivencia/).
- Instituto Moreira Salles. [Ana Cristina Cesar](https://ims.com.br/2017/06/01/sobre-ana-cristina-cesar/).
- Universidade de São Paulo. [Graça Graúna](https://www.iea.usp.br/pessoas/pasta-pessoag/graca-grauna).
- Museu Nacional dos Povos Indígenas. [Eliane Potiguara](https://pesquisa.museudoindio.gov.br/index.php/metade-cara-metade-mascara).
- Funai. [Ailton Krenak](https://www.gov.br/funai/pt-br/assuntos/noticias/2024/ailton-krenak-e-o-primeiro-indigena-a-se-tornar-2018imortal2019-da-academia-brasileira-de-letras).
- Câmara dos Deputados. [LDB atualizada, art. 26-A](https://www2.camara.leg.br/legin/fed/lei/1996/lei-9394-20-dezembro-1996-362578-normaatualizada-pl.html).

---

**Limitação deliberada do piloto:** ele demonstra as relações e o método, mas não deve ser confundido com uma história exaustiva das literaturas de cada estado. A expansão dependerá de curadoria territorial, revisão especializada e diversidade efetiva de autoria e gêneros.