# Luiz Leite — Blog de Engenharia de Software

Blog pessoal e portfólio técnico de **Luiz Leite**, com artigos sobre engenharia de software, análise de negócios, requisitos, arquitetura e desenvolvimento de software.

🔗 **Acesse o blog:** <https://luiz-leite-dev.github.io/>

## Sobre

Este projeto reúne conteúdos sobre a ponte entre negócio, pessoas e tecnologia: como transformar problemas reais em requisitos claros, decisões de arquitetura conscientes e software sustentável.

Os principais temas incluem:

- Engenharia de software
- Análise e gestão de requisitos
- Arquitetura de software
- Boas práticas de desenvolvimento
- Qualidade, testes e automação
- Aprendizados de projetos reais

## Stack

- [Astro](https://astro.build/)
- [AstroPaper](https://github.com/satnaing/astro-paper)
- [Markdown](https://www.markdownguide.org/) e [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pagefind](https://pagefind.app/) para busca interna
- [GitHub Pages](https://pages.github.com/) para hospedagem
- [GitHub Actions](https://github.com/features/actions) para build e deploy automáticos

## Estrutura do projeto

```text
.
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens, ícones e estilos
│   ├── components/          # Componentes Astro reutilizáveis
│   ├── content/
│   │   └── posts/           # Artigos do blog em Markdown/MDX
│   ├── layouts/             # Layouts base das páginas
│   ├── pages/               # Páginas e rotas do site
│   ├── styles/              # Estilos globais
│   └── config.ts            # Configurações do blog
└── .github/workflows/       # Pipeline de build e deploy
```

## Criando um novo artigo

Crie um arquivo Markdown em `src/content/posts/`:

```bash
src/content/posts/nome-do-artigo.md
```

Use o seguinte frontmatter como base:

```yaml
***
title: "Título do artigo"
description: "Descrição curta e clara do conteúdo."
pubDatetime: 2026-10-31T12:00:00Z
timezone: "America/Sao_Paulo"
tags:
  - engenharia-de-software
  - arquitetura
draft: false
***
```

> **Observação:** o campo `pubDatetime` usa horário UTC quando termina com `Z`. Para Curitiba (UTC-3), `12:00:00Z` corresponde a `09:00` no horário local.

## Executando localmente

Pré-requisitos:

- Node.js 22 ou superior
- npm

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:4321
```

## Build de produção

```bash
npm run build
npm run preview
```

O comando de build gera o site em `dist/` e indexa o conteúdo com o Pagefind para habilitar a busca interna.

## Deploy

O site é publicado automaticamente no GitHub Pages sempre que há um push na branch `main`.

O pipeline realiza:

1. Instalação das dependências;
2. Verificação e build do Astro;
3. Indexação do conteúdo com Pagefind;
4. Publicação do resultado no GitHub Pages.

## Licença

O conteúdo dos artigos está licenciado sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), salvo indicação contrária.

O código deste site é baseado no tema [AstroPaper](https://github.com/satnaing/astro-paper).