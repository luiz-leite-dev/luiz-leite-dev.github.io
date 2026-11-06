---
title: "Matriz CSD na prática"
description: "Como transformar opiniões em decisões melhores de software."
pubDatetime: 2026-11-06T12:00:00Z
featured: true
tags:
  - design-thinking
  - ux
  - user-experience
  - experiencia-do-usuario
  - discovery
  - gestao-de-produtos
  - software-engineering
  - engenharia-de-software
---

# Matriz CSD na prática: como transformar opiniões em decisões melhores de software

A Matriz CSD é uma ferramenta simples — três colunas, muita conversa e zero burocracia — que ajuda times de software a separar **o que sabem**, **o que acham que sabem** e **o que ainda precisam descobrir** antes de escrever requisitos, desenhar telas ou iniciar o desenvolvimento. [repositorio.enap.gov](https://repositorio.enap.gov.br/bitstream/1/6703/4/Matriz%20CSD.pdf)

Ela é especialmente útil no início de uma feature, de um produto ou de uma descoberta de problema. Em vez de discutir por horas “qual seria a melhor solução”, o time organiza o conhecimento disponível e define quais incertezas merecem investigação primeiro. [nngroup](https://www.nngroup.com/articles/csd-matrix/)

> **CSD** significa **Certezas, Suposições e Dúvidas**.  
> A ideia central é: não trate uma hipótese como fato, e não deixe uma dúvida importante sem dono.

A ferramenta foi criada no Brasil pela Livework São Paulo, por Tennyson Pinheiro, Luis Alt e equipe, e é frequentemente associada ao Design Thinking e ao design de serviços.  Apesar da origem fora do mundo estritamente técnico, ela se encaixa muito bem em equipes ágeis, de produto e de engenharia. [repositorio.enap.gov](https://repositorio.enap.gov.br/server/api/core/bitstreams/6a968a6c-d74c-4f8e-a54e-ce4b180184b0/content)

## Por que usar CSD em software?

Times de software costumam avançar rápido — e, às vezes, avançam rápido **na direção errada**. Uma pessoa diz: “o cliente quer um dashboard”; outra responde: “mas ele quer mesmo é exportar para Excel”; uma terceira afirma: “isso é só falta de treinamento”.

A Matriz CSD torna esse tipo de conversa visível.

Em vez de decidir com base na pessoa mais sênior, mais falante ou mais apressada, o time classifica afirmações em três categorias:

| Categoria | Pergunta-chave | Exemplo |
|---|---|---|
| **Certezas** | O que já temos evidência para afirmar? | “O relatório atual leva 8 minutos para ser gerado, segundo logs e reclamações dos usuários.” |
| **Suposições** | O que acreditamos, mas ainda não validamos? | “Se adicionarmos filtros salvos, os analistas usarão o relatório com mais frequência.” |
| **Dúvidas** | O que precisamos descobrir antes de decidir? | “Quais campos os analistas realmente usam ao exportar dados?” |

A matriz organiza fatos, histórias, hipóteses e perguntas, ajudando o time a direcionar a pesquisa e a promover alinhamento coletivo. [repositorio.enap.gov](https://repositorio.enap.gov.br/bitstream/1/6703/4/Matriz%20CSD.pdf)

## Quando usar a Matriz CSD

A CSD é mais valiosa quando existe incerteza — e, em software, incerteza costuma ser abundante.

Use-a em situações como:

- Início de um novo produto ou módulo.
- Descoberta de uma feature grande ou de alto risco.
- Reclamações recorrentes de usuários sem causa clara.
- Migração de sistema, replataformação ou redesign.
- Definição de requisitos antes de uma sprint ou release.
- Decisões sobre priorização do backlog.
- Investigação de quedas de conversão, adoção, retenção ou performance.
- Alinhamento entre produto, design, engenharia, negócio e suporte.

Ela também funciona bem quando um projeto já está em andamento, mas o time percebe que está construindo com base em premissas não verificadas. [repositorio.enap.gov](https://repositorio.enap.gov.br/bitstream/1/6703/4/Matriz%20CSD.pdf)

## O formato básico

A estrutura é deliberadamente simples:

|         Certezas         |      Suposições     |            Dúvidas           |
|--------------------------|---------------------|------------------------------|
| Fatos, dados, evidências | Hipóteses e crenças | Perguntas ainda sem resposta |

Cada item deve ser curto, específico e, sempre que possível, atribuído a uma fonte ou a um responsável por validação.

Por exemplo, para uma funcionalidade de **exportação de relatórios**:

| Certezas | Suposições | Dúvidas |
|---|---|---|
| Usuários exportam dados para Excel. | Exportar em CSV resolverá a maior parte dos casos. | Quais formatos são realmente necessários? |
| O relatório atual demora mais de 5 minutos. | O gargalo está na consulta ao banco. | Onde exatamente está a lentidão? |
| O time de suporte recebe reclamações sobre filtros. | Filtros salvos reduzirão retrabalho. | Quais combinações de filtros são mais usadas? |
| Não há limite definido para exportações. | Um limite de 10 mil linhas será aceitável. | Qual volume os usuários exportam por mês? |

Perceba: uma **certeza** não é “todo mundo sabe que...”. É algo apoiado por dados, observação, documentação ou evidência concreta. A ENAP define certezas como dados e histórias conhecidos, suposições como hipóteses e dúvidas como perguntas. [repositorio.enap.gov](https://repositorio.enap.gov.br/bitstream/1/6703/4/Matriz%20CSD.pdf)

## Passo a passo prático

### 1. Defina o problema em uma frase

Comece com um escopo pequeno e claro. Evite “melhorar a experiência do usuário”; prefira uma afirmação mais delimitada.

**Exemplo ruim:**

> Melhorar o app de vendas.

**Exemplo melhor:**

> Reduzir o tempo que vendedores externos levam para registrar uma visita a um cliente.

A definição do problema orienta quais certezas, suposições e dúvidas fazem sentido incluir.

### 2. Reúna o time certo

Convide pessoas que conhecem partes diferentes do problema:

- Product Owner ou Product Manager.
- Designer de produto/UX.
- Desenvolvedores.
- QA.
- Analista de negócios ou analista de requisitos.
- Pessoa de suporte ou atendimento.
- Usuário ou representante do negócio, quando possível.

A matriz funciona melhor como exercício colaborativo: ela expõe diferenças de percepção antes que elas virem retrabalho. [nngroup](https://www.nngroup.com/articles/csd-matrix/)

### 3. Faça uma chuva de ideias sem julgamento

Dê de 10 a 20 minutos para que cada pessoa escreva post-its — físicos ou digitais — respondendo a estas perguntas:

- O que sabemos?
- O que achamos que sabemos?
- O que não sabemos?
- O que precisaríamos perguntar aos usuários?
- Quais dados já temos?
- Quais riscos podem inviabilizar a solução?

Não discuta ainda se algo é verdade. O objetivo inicial é externalizar o conhecimento implícito do grupo.

### 4. Classifique os post-its

Para cada item, pergunte:

- **É fato comprovado?** Vá para **Certezas**.
- **É uma crença ou hipótese?** Vá para **Suposições**.
- **É uma pergunta aberta?** Vá para **Dúvidas**.

Se houver divergência, isso é ótimo: normalmente indica uma suposição ou uma dúvida que precisa de investigação.

### 5. Agrupe e priorize

Agrupe itens parecidos e destaque os que têm maior impacto no produto, maior risco técnico ou maior incerteza.

Uma pergunta útil é:

> Se estivermos errados nesta suposição, quanto tempo, dinheiro ou esforço perderemos?

Suposições com alto impacto e alta incerteza devem virar prioridade de pesquisa, protótipo ou experimento.

### 6. Transforme dúvidas em plano de ação

Cada dúvida importante deve receber um próximo passo:

| Dúvida | Próximo passo | Responsável | Prazo |
|---|---|---|---|
| Quais filtros os analistas mais usam? | Analisar eventos de uso no produto | Analista de dados | 3 dias |
| O fluxo de aprovação é compreendido? | Entrevistar 5 aprovadores | UX Research | 1 semana |
| A API atual suporta paginação eficiente? | Fazer spike técnico | Backend | 2 dias |
| O usuário prefere PDF ou Excel? | Testar protótipo com 6 usuários | Design | 1 semana |

Assim, a CSD deixa de ser uma “dinâmica bonita” e passa a orientar decisões reais de backlog, discovery e engenharia.

## Exemplo completo: feature de notificações

Imagine que um time de e-commerce recebeu a demanda:

> Os clientes estão perdendo promoções. Vamos criar notificações push.

Antes de estimar e desenvolver, o time monta a Matriz CSD.

### Certezas

- A base possui 250 mil usuários ativos nos últimos 30 dias.
- 18% dos usuários abriram e-mails promocionais no último mês.
- O app já possui permissão para notificações em 61% dos dispositivos ativos.
- A campanha anterior gerou 2,4% de conversão por e-mail.
- O time de marketing precisa enviar campanhas segmentadas por categoria de produto.

### Suposições

- Notificações push aumentarão a taxa de abertura em relação ao e-mail.
- Usuários aceitarão notificações se elas forem relevantes e limitadas.
- Enviar no máximo duas notificações por semana evitará desativações.
- Segmentação por categoria melhorará a conversão.
- Um desconto precisa ser exibido na notificação para gerar clique.

### Dúvidas

- Quantos usuários desativariam notificações após receber mensagens frequentes?
- Quais categorias de produto têm maior propensão a conversão por push?
- Existe restrição legal ou de consentimento para determinados tipos de mensagem?
- O backend atual suporta envio segmentado em tempo hábil?
- Qual é o horário de maior engajamento dos diferentes perfis de cliente?
- A notificação deve levar à página do produto, ao carrinho ou a uma landing page?

### Decisões geradas

Com essa matriz, o time pode concluir que **não** deve começar construindo toda a infraestrutura de push. Primeiro, pode:

1. Analisar dados de engajamento por segmento.
2. Entrevistar clientes que desativaram comunicações.
3. Fazer um protótipo do centro de preferências de notificação.
4. Criar um experimento com uma campanha pequena e mensurável.
5. Validar limites técnicos e legais antes de escalar.

Isso é o valor real da CSD: ela evita que o time trate uma suposição cara como se fosse uma certeza.

## Exemplo técnico: integração com pagamento

A Matriz CSD não serve apenas para UX. Ela também é excelente para decisões técnicas e de arquitetura.

Suponha que o produto precise integrar um novo meio de pagamento.

| Certezas | Suposições | Dúvidas |
|---|---|---|
| O gateway atual cobra 3,99% por transação. | O novo gateway reduzirá o custo em pelo menos 20%. | Qual é o custo real por faixa de volume? |
| 12% das transações falham por cartão recusado. | A nova solução melhorará a taxa de aprovação. | Quais motivos de recusa predominam? |
| O sistema atual suporta webhooks. | Webhooks serão suficientes para conciliação. | Quais eventos o provedor realmente envia? |
| O time tem experiência com integrações REST. | A integração levará duas sprints. | Quais casos extremos exigem tratamento especial? |

Aqui, as **dúvidas** podem virar *spikes técnicos*, testes em ambiente de sandbox, análise de logs ou prova de conceito. Já as **suposições** podem virar critérios de aceitação e métricas de sucesso.

Por exemplo:

- **Suposição:** “A nova gateway reduzirá falhas de pagamento.”  
- **Critério de validação:** “Em um piloto de 30 dias, a taxa de aprovação deve aumentar de 88% para pelo menos 92%, sem aumento relevante de chargebacks.”

Isso transforma uma opinião em um critério verificável.

## Erros comuns

### Confundir opinião com certeza

“Os usuários querem um botão de compartilhar” não é certeza. É, no máximo, uma suposição — a menos que exista evidência de pesquisa, dados de uso ou demanda recorrente.

### Criar uma matriz gigante

Uma CSD com 120 post-its geralmente indica que o escopo está largo demais. Prefira recortar por problema, persona, jornada ou feature.

### Deixar dúvidas sem dono

Uma dúvida sem responsável e prazo tende a virar uma suposição perigosa durante o desenvolvimento.

### Usar a CSD como relatório

A matriz não é um documento para arquivar. Ela deve evoluir conforme o time aprende.

### Pular a validação

O objetivo não é preencher três colunas. É decidir **o que validar primeiro** e como validar.

## Como conectar CSD ao backlog

Depois da oficina, transforme os achados em itens acionáveis:

- **Dúvidas críticas** viram entrevistas, análise de dados, testes de usabilidade ou spikes técnicos.
- **Suposições de produto** viram hipóteses com métrica, público-alvo e experimento.
- **Suposições técnicas** viram provas de conceito, estimativas ou investigação de arquitetura.
- **Certezas** viram restrições, requisitos, critérios de aceitação ou decisões de escopo.
- **Riscos identificados** viram itens de mitigação no backlog.

Um bom formato de item de backlog pode ser:

```text
Como analista de operações,
quero exportar relatórios filtrados em CSV,
para que eu possa analisar indicadores sem depender do suporte.

Critério de aceitação:
- Permitir exportar até 10 mil registros por arquivo.
- Manter os filtros aplicados na tela.
- Notificar o usuário caso a exportação falhe.
- Concluir a exportação de 10 mil registros em até 30 segundos.
```

Antes disso, porém, vale confirmar se “CSV” é realmente o formato mais útil — afinal, essa pode ser apenas uma suposição herdada de um requisito antigo.

## Um roteiro de 90 minutos

Para times que querem experimentar sem transformar a prática em burocracia:

1. **10 minutos:** apresente o problema e o objetivo da sessão.
2. **15 minutos:** cada pessoa escreve certezas, suposições e dúvidas.
3. **20 minutos:** agrupem e classifiquem os post-its.
4. **20 minutos:** discutam divergências e riscos.
5. **15 minutos:** priorizem as dúvidas e suposições mais críticas.
6. **10 minutos:** definam próximos passos, responsáveis e prazos.

O resultado deve caber em uma página, um quadro no Miro/FigJam ou uma tabela simples. A simplicidade é justamente uma das razões pelas quais a ferramenta é tão difundida. 

A Matriz CSD não promete eliminar incerteza — isso seria mentira. O que ela faz é algo mais útil: obriga o time a reconhecer a incerteza, nomeá-la e decidir conscientemente qual incerteza vale a pena investigar antes de transformá-la em código.

**Agora me conte: sua empresa já usa Matriz CSD?**

Compartilhe sua opinião nos comentários!

---

## Referências para aprofundar

- **ENAP — Matriz CSD:** material oficial brasileiro que define a ferramenta como mapeamento de certezas, suposições e dúvidas para orientar pesquisa e colaboração. [https://repositorio.enap.gov.br/bitstream/1/6703/4/Matriz%20CSD.pdf](https://repositorio.enap.gov.br/bitstream/1/6703/4/Matriz%20CSD.pdf)

  [https://repositorio.enap.gov.br/server/api/core/bitstreams/6a968a6c-d74c-4f8e-a54e-ce4b180184b0/content](https://repositorio.enap.gov.br/server/api/core/bitstreams/6a968a6c-d74c-4f8e-a54e-ce4b180184b0/content)

- **Nielsen Norman Group — CSD Matrix:** artigo que apresenta a origem da técnica na Livework São Paulo e propõe templates de aplicação.
  [https://www.nngroup.com/articles/csd-matrix/](https://www.nngroup.com/articles/csd-matrix/)

- **Alura — Matriz CSD: visualizando a dimensão dos problemas:** boa introdução voltada a times de produto e desenvolvimento.  
 [https://www.alura.com.br/artigos/matriz-csd-visualizando-dimensao-dos-problemas](https://www.alura.com.br/artigos/matriz-csd-visualizando-dimensao-dos-problemas)

- **AEVO — Matriz CSD: aprenda como utilizar em seus projetos:** conteúdo sobre uso da ferramenta para iniciar ou reorganizar projetos.  
  [https://blog.aevo.com.br/matriz-csd/](https://blog.aevo.com.br/matriz-csd/)

- **FM2S — Matriz CSD: o que é, como aplicar e exemplos práticos:** material com foco em organização de informações antes da tomada de decisão.   
  [https://www.fm2s.com.br/blog/matriz-csd](https://www.fm2s.com.br/blog/matriz-csd)

- **Venngage — Matriz CSD: saiba o que é e como usar no seu negócio:** visão acessível sobre o uso da matriz para clarear dúvidas antes de uma ação.   
  [https://pt.venngage.com/blog/matriz-csd/](https://pt.venngage.com/blog/matriz-csd/)

- **VentureHub — Matriz CSD:** ferramenta e contexto de uso para planejamento e alinhamento de projetos.   
  [https://venturehub.se/tools/matriz-csd-ferramenta/](https://venturehub.se/tools/matriz-csd-ferramenta/)

- **Catarinas Design — Case product design:** exemplo aplicado de uso da matriz em um projeto de redesign de sistema da área de saúde.  
  [https://catarinasdesign.com.br/case-product-design-redesenhando-um-sistema-da-area-de-saude/](https://catarinasdesign.com.br/case-product-design-redesenhando-um-sistema-da-area-de-saude/)