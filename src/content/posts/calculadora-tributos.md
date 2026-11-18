---
title: "Calculadora de Tributos"
description: "Como incorporar o motor de cálculo alinhado às regras oficiais."
pubDatetime: 2026-12-17T10:00:00Z
featured: false
tags:
  - tributos
  - impostos
  - receita
  - receita-federal
  - fiscal
  - open-source
  - governo
---

# A Receita Federal abriu o código da Calculadora de Tributos: o que isso significa para quem desenvolve sistemas fiscais

A Receita Federal publicou, pela primeira vez, um projeto oficial de software em repositório público do GitHub: a **Calculadora de Tributos**, desenvolvida em conjunto com o Serpro e disponibilizada sob licença **MIT**. A iniciativa reúne as regras de cálculo da CBS e de outros tributos da Reforma Tributária do Consumo, permitindo que desenvolvedores e empresas integrem aos seus sistemas a mesma lógica usada pela administração tributária. [1]

Na prática, isso é uma boa notícia para quem constrói ERPs, emissores de documentos fiscais, plataformas de faturamento, sistemas contábeis e integrações de compliance. Em vez de interpretar isoladamente regras fiscais complexas, o time pode incorporar um motor de cálculo alinhado às regras oficiais, com memória de cálculo e fundamentação legal integradas. [1][2]

## Os três repositórios

A Receita disponibilizou três projetos públicos:

| Repositório                                                                                              | O que faz                                                                                                                                                               | Casos de uso principais                                                        |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`calculadora-rtc-regime-regular`](https://github.com/ReceitaFederal/calculadora-rtc-regime-regular)     | API REST para calcular CBS, IBS e Imposto Seletivo no regime geral; consulta tabelas oficiais e gera/valida grupos de tributação de documentos fiscais eletrônicos. [2] | ERP, e-commerce, emissor de NF-e/NFC-e, NFS-e, conciliação fiscal e compliance |
| [`calculadora-rtc-simples-nacional`](https://github.com/ReceitaFederal/calculadora-rtc-simples-nacional) | API REST para calcular CBS e IBS nas operações de optantes do Simples Nacional. [3]                                                                                     | Sistemas de gestão para MEI, ME, EPP e contadores                              |
| [`calculadora-rtc-gerador-danfse`](https://github.com/ReceitaFederal/calculadora-rtc-gerador-danfse)     | Serviço HTTP escrito em Go que gera o DANFSe em PDF a partir do XML de uma NFS-e. [4]                                                                                   | Portal do cliente, área logada, emissão de notas e arquivamento de documentos  |

A publicação foi formalizada pela Portaria Cotec nº 342, de 12 de novembro de 2026, e o código é distribuído sob licença MIT. [1]

## Antes de integrar: entenda o motor

A Calculadora de Tributos é um **motor de cálculo com conteúdo normativo embutido**. Ela identifica alíquotas — própria, de referência ou nacionalmente uniforme —, aplica reduções, produz memória de cálculo, identifica o regime tributário e a base legal, e valida classificações como NCM e NBS. [5][6]

Isso não elimina a responsabilidade fiscal da empresa, do contador ou do desenvolvedor. O que muda é que a lógica de cálculo passa a ser auditável, versionada e reutilizável — um grande avanço para reduzir divergências entre sistemas, contadores e Fisco. [1][7]

## Regime regular: o coração da integração

O repositório `calculadora-rtc-regime-regular` é uma API REST em Java/Spring Boot. Ele calcula CBS, IBS e Imposto Seletivo, expõe dados abertos, gera XML e valida documentos fiscais eletrônicos. [2]

### Como executar localmente

O projeto exige **Java 21 ou superior** e usa Maven Wrapper, SQLite e Flyway. Antes de iniciar a API, é obrigatório gerar o banco de dados local. [2]

```bash
git clone [https://github.com/ReceitaFederal/calculadora-rtc-regime-regular.git](https://github.com/ReceitaFederal/calculadora-rtc-regime-regular.git)
cd calculadora-rtc-regime-regular

mkdir -p ./calculadora/db

./mvnw flyway:migrate \
  -Dflyway.configFiles=./flyway/flyway-pro.conf \
  --batch-mode --errors

./mvnw spring-boot:run -Dspring-boot.run.profiles=offline
```

No Windows, substitua `./mvnw` por `mvnw.cmd` e ajuste os caminhos com barras invertidas. A aplicação ficará disponível em `http://localhost:8080/api`, e a documentação interativa no Swagger em `http://localhost:8080/api/swagger-ui.html`. [2]

### Cenário real: venda de um produto

Imagine um e-commerce que vende um produto físico e precisa calcular os tributos antes de emitir a NF-e. O sistema pode chamar o endpoint de cálculo do regime geral e receber o resultado com a memória de cálculo.

O endpoint principal é:

```http
POST /api/calculadora/regime-geral
```

Ele realiza o cálculo da operação inteira e falha no primeiro erro encontrado. Para cenários de carga, conciliação ou processamento em lote, existe também:

```http
POST /api/calculadora/observabilidade/regime-geral
```

Nesse modo, os erros são reportados por item, sem interromper o processamento dos demais. [2]

### Exemplo em JavaScript

```javascript
// Node.js 18+ — usa fetch nativo

const API_BASE = "http://localhost:8080/api/calculadora";

async function calcularTributosRegimeRegular(payload) {
  const response = await fetch(`${API_BASE}/regime-geral`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const erro = await response.text();
    throw new Error(
      `Falha no cálculo tributário: ${response.status} — ${erro}`
    );
  }

  return response.json();
}

// Estrutura ilustrativa: confira sempre o schema no Swagger
// e o arquivo docs/exemplos.md do repositório antes de usar em produção.
const pedido = {
  // Preencha conforme o contrato da API exposto no Swagger.
};

const resultado = await calcularTributosRegimeRegular(pedido);

console.log(JSON.stringify(resultado, null, 2));
```

> **Importante:** os campos exatos do payload devem ser conferidos no Swagger da sua versão instalada e em `docs/exemplos.md`. A estrutura fiscal pode evoluir conforme novas versões da base normativa e da API. [2][8]

### O que dá para consultar

Além do cálculo, a API expõe recursos de dados abertos muito úteis para alimentar telas, cadastros e validações:

- Situações tributárias de CBS e IBS.
- Classificações tributárias (`cClassTrib`).
- Fundamentações legais.
- NCM e NBS.
- Alíquotas de referência da União, dos estados e dos municípios. [2]

Um exemplo prático: antes de permitir que o usuário cadastre um produto, o sistema pode consultar o NCM e exibir a fundamentação legal associada. Isso reduz erros de enquadramento e cria uma experiência mais transparente para o time fiscal. [2][6]

### Geração e validação de XML

Para quem desenvolve emissor de documentos fiscais, dois recursos chamam atenção:

```http
POST /api/calculadora/xml/generate?tipo=nfe
POST /api/calculadora/xml/validate?tipo=nfe&subtipo=grupo
```

O primeiro gera o XML a partir do resultado do cálculo; o segundo valida um grupo ou uma nota contra o XSD. [2]

Em um cenário real, o fluxo pode ser:

1. O ERP monta a operação comercial.
2. A Calculadora calcula os tributos.
3. O sistema gera o XML do documento fiscal.
4. O serviço valida o XML contra o XSD.
5. Somente depois o documento segue para autorização.

Essa sequência ajuda a transformar conformidade em parte do fluxo de emissão, e não em uma etapa manual posterior. [6][7]

## Simples Nacional: cálculo para quem opta pelo regime

O repositório `calculadora-rtc-simples-nacional` atende especificamente às operações de contribuintes optantes pelo Simples Nacional, calculando CBS e IBS. [3]

### Como executar

O processo é parecido com o do regime regular, mas o serviço usa a porta `8082`:

```bash
git clone [https://github.com/ReceitaFederal/calculadora-rtc-simples-nacional.git](https://github.com/ReceitaFederal/calculadora-rtc-simples-nacional.git)
cd calculadora-rtc-simples-nacional

mkdir -p ./calculadora/db

./mvnw flyway:migrate \
  -Dflyway.configFiles=./flyway/flyway-pro.conf \
  --batch-mode --errors

./mvnw spring-boot:run -Dspring-boot.run.profiles=offline
```

A documentação fica em:

```text
http://localhost:8082/api/swagger-ui.html
```

[3]

### Cenário real: consultoria para pequenas empresas

Suponha uma plataforma de gestão para prestadores de serviço que atendem microempresas optantes pelo Simples Nacional. O sistema pode consultar as atividades vigentes em uma data, filtrar por anexo, tipo de documento e `cClassTrib`, e usar essas informações para orientar o cálculo. [3]

```http
GET /api/calculadora/simples-nacional/atividades?data=2026-11-17
```

Também é possível consultar uma atividade específica pelo código:

```http
GET /api/calculadora/simples-nacional/atividades/{codigo}?data=2026-11-17
```

[3]

### Exemplo em JavaScript

```javascript
const API_BASE = "http://localhost:8082/api";

async function listarAtividadesSimplesNacional(data) {
  const url = new URL(`${API_BASE}/calculadora/simples-nacional/atividades`);
  url.searchParams.set("data", data);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Não foi possível consultar as atividades: ${response.status}`
    );
  }

  return response.json();
}

const atividades = await listarAtividadesSimplesNacional("2026-11-17");

console.log(atividades);
```

Para o cálculo, o endpoint indicado é:

```http
POST /api/calculadora/observabilidade/simples-nacional
```

Ele calcula com observabilidade: em vez de interromper todo o processamento no primeiro problema, retorna erros por item. Isso é especialmente útil em rotinas de importação de notas, fechamento mensal ou reprocessamento de documentos. [3]

### Diagnóstico de erros

Quando a API retorna um código como `VSN-001`, o sistema pode buscar a descrição oficial do erro:

```http
GET /api/calculadora/observabilidade/simples-nacional/erros?codigo=VSN-001
```

Isso permite criar mensagens mais úteis para o usuário final. Em vez de exibir apenas “erro de cálculo”, a interface pode orientar o usuário sobre o problema específico e facilitar o suporte. [3]

## DANFSe: do XML ao PDF

O terceiro repositório, `calculadora-rtc-gerador-danfse`, resolve uma necessidade bem concreta: transformar o XML de uma NFS-e em um **DANFSe em PDF**. Ele é escrito em Go, expõe um serviço HTTP e pode ser executado localmente ou em container Docker. [4]

### Como executar

Com Go instalado:

```bash
git clone [https://github.com/ReceitaFederal/calculadora-rtc-gerador-danfse.git](https://github.com/ReceitaFederal/calculadora-rtc-gerador-danfse.git)
cd calculadora-rtc-gerador-danfse

go run ./cmd/danfse
```

Ou, se você usa a ferramenta Task:

```bash
task run
```

Por padrão, o serviço sobe na porta `8080`. A documentação do Swagger fica em:

```text
http://localhost:8080/api/swagger-ui/index.html
```

[4]

### Cenário real: envio do documento ao cliente

Depois de autorizar uma NFS-e, uma empresa pode disponibilizar o PDF ao cliente por e-mail, área do cliente ou sistema de armazenamento. O serviço recebe o XML da nota e devolve o PDF gerado. [4]

```bash
curl -X POST "http://localhost:8080/api/danfse" \
  -H "Content-Type: application/xml" \
  --data-binary @/caminho/para/documento.xml \
  -o danfse.pdf
```

Para gerar o PDF sem o canhoto:

```bash
curl -X POST "http://localhost:8080/api/danfse?canhoto=false" \
  -H "Content-Type: application/xml" \
  --data-binary @/caminho/para/documento.xml \
  -o danfse.pdf
```

[4]

### Exemplo em JavaScript

```javascript
import { readFile, writeFile } from "node:fs/promises";

const DANFSE_URL = "http://localhost:8080/api/danfse";

async function gerarDanfse(caminhoXml, caminhoPdf, opcoes = {}) {
  const xml = await readFile(caminhoXml);

  const params = new URLSearchParams();

  if (opcoes.situacao !== undefined) {
    params.set("stc", String(opcoes.situacao));
  }

  if (opcoes.comCanhoto === false) {
    params.set("canhoto", "false");
  }

  const url = params.size ? `${DANFSE_URL}?${params}` : DANFSE_URL;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/xml",
    },
    body: xml,
  });

  if (!response.ok) {
    const mensagem = await response.text();
    throw new Error(`Falha ao gerar DANFSe: ${response.status} — ${mensagem}`);
  }

  const pdf = Buffer.from(await response.arrayBuffer());
  await writeFile(caminhoPdf, pdf);

  return caminhoPdf;
}

await gerarDanfse("./nfs-e.xml", "./danfse.pdf", {
  comCanhoto: false,
});
```

### Situação da nota

O parâmetro `stc` informa a situação da nota:

| Valor | Situação    |
| ----: | ----------- |
|   `0` | Válida      |
|   `1` | Substituída |
|   `2` | Cancelada   |

[4]

Isso é útil para um portal de documentos: se a NFS-e foi cancelada, o sistema pode gerar uma versão visualmente distinta ou aplicar uma marca d’água antes de disponibilizá-la ao cliente. [4]

## Observabilidade e segurança

O gerador de DANFSe já traz recursos que merecem atenção de quem atua com arquitetura e operação de sistemas:

- Logs estruturados em JSON, emitidos no `stderr`.
- Identificador de requisição gerado pelo próprio servidor, por meio do `X-Request-ID`.
- Health checks de liveness e readiness em `/health/live` e `/health/ready`.
- Suporte opcional a OpenTelemetry via OTLP.
- Limite configurável para o tamanho do XML de entrada. [4]

Para uma arquitetura de produção, isso abre caminho para uma integração mais madura: o serviço pode rodar em container, expor probes para Kubernetes ou ECS, registrar logs correlacionáveis e ser monitorado por tracing distribuído. [4]

## Como escolher a arquitetura de integração

| Situação                                            | Recomendação prática                                                                                                                                        |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sistema emissor ou ERP com alto volume de operações | Integrar a Calculadora do regime regular como serviço interno, com cache controlado para dados de referência e testes automatizados das regras fiscais. [2] |
| Software de gestão para optantes do Simples         | Usar a API do Simples Nacional e tratar erros por item, especialmente em importações e reprocessamentos. [3]                                                |
| Portal do cliente ou área de documentos             | Manter o gerador de DANFSe como microsserviço isolado, com limites de tamanho, health checks e observabilidade. [4]                                         |
| Ambiente de homologação                             | Executar os serviços localmente ou em containers, versionar a base de dados e acompanhar mudanças nos repositórios. [2][3][4]                               |
| Ambiente produtivo                                  | Separar responsabilidades: cálculo, emissão, armazenamento, assinatura/autorização e disponibilização do PDF. [2][3][4]                                     |

## Pontos de atenção

- Confira sempre a versão do repositório, o `CHANGELOG.md`, o Swagger e os exemplos oficiais antes de levar o código para produção. [2][3][4]
- Não trate a Calculadora como substituta da análise fiscal: ela automatiza cálculos, mas decisões de enquadramento, obrigações acessórias e processos internos continuam exigindo validação especializada. [7][8]
- Proteja dados fiscais, restrinja o acesso aos serviços, registre auditoria e evite expor as APIs localmente sem autenticação e controle de rede.
- Acompanhe o roadmap dos repositórios: a própria Receita indica evoluções futuras, incluindo melhorias de interface, Simples Nacional, internação na Zona Franca de Manaus, Tax Free e inteligência artificial. [5]

A abertura do código pela Receita Federal é mais do que uma curiosidade técnica: é uma oportunidade rara de estudar como regras normativas podem ser transformadas em software executável, auditável e integrável.

## Referências

1. Receita Federal. **Receita Federal publica primeiro código-fonte aberto no GitHub e amplia transparência da Reforma Tributária**. Disponível em: <https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/receita-federal-publica-primeiro-codigo-fonte-aberto-no-github-e-amplia-transparencia-da-reforma-tributaria/>. Acesso em: 17 nov. 2026.

2. Receita Federal. **GitHub — ReceitaFederal/calculadora-rtc-regime-regular**. Disponível em: <https://github.com/ReceitaFederal/calculadora-rtc-regime-regular>. Acesso em: 17 nov. 2026.

3. Receita Federal. **GitHub — ReceitaFederal/calculadora-rtc-simples-nacional**. Disponível em: <https://github.com/ReceitaFederal/calculadora-rtc-simples-nacional>. Acesso em: 17 nov. 2026.

4. Receita Federal. **GitHub — ReceitaFederal/calculadora-rtc-gerador-danfse**. Disponível em: <https://github.com/ReceitaFederal/calculadora-rtc-gerador-danfse>. Acesso em: 17 nov. 2026.

5. Portal Gov.br. **Calculadora — apresentação sobre a Calculadora RTC v3**. Disponível em: <https://www.gov.br/nfse/pt-br/noticias/comite-gestor-da-nfs-e-realiza-primeira-reuniao-presencial-do-gt-empresas-em-sao-paulo/apresentacao-release-12-calculadora-rtc-v3.pdf>. Acesso em: 17 nov. 2026.

6. Receita Federal. **Documentação da Calculadora — Tributação sobre Consumo**. Disponível em: <https://piloto-cbs.tributos.gov.br/servico/calculadora-consumo/calculadora/documentacao>. Acesso em: 17 nov. 2026.

7. Receita Federal. **Material de apoio: Calculadora, motor oficial de cálculo**. Disponível em: <https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/reforma-tributaria-do-consumo/curso/material-de-apoio/5o-modulo-cfc-rfb-obrigacoes-acessorias-calculadora-motor-oficial-de-calculo-ariel-bonzan.pdf/@@download/file>. Acesso em: 17 nov. 2026.

8. Receita Federal. **FAQ do Piloto — Calculadora da Plataforma da CBS (v. 1.4)**. Disponível em: <https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/apresentacoes/reforma-tributaria-do-consumo/faq-calculadora-v1-4.pdf>. Acesso em: 17 nov. 2026.
