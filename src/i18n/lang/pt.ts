import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Início",
    posts: "Posts",
    tags: "Tags",
    about: "Sobre",
    archives: "Arquivos",
    search: "Busca",
  },
  post: {
    publishedAt: "Publicado em",
    updatedAt: "Atualizado em",
    sharePostIntro: "Compartilhe este post:",
    sharePostOn: "Compartilhe este post em {{platform}}",
    sharePostViaEmail: "Compartilhe este post via email",
    tagLabel: "Tags",
    backToTop: "Voltar ao topo",
    goBack: "Voltar",
    editPage: "Editar página",
    previousPost: "Post anterior",
    nextPost: "Próximo post",
  },
  pagination: {
    prev: "Anterior",
    next: "Próximo",
    page: "Página",
  },
  home: {
    socialLinks: "Links sociais",
    featured: "Em destaque",
    recentPosts: "Posts recentes",
    allPosts: "Todos os posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos os direitos reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos os artigos com a tag",

    tagsTitle: "Tags",
    tagsDesc: "Todas as tags usadas em posts.",

    postsTitle: "Posts",
    postsDesc: "Todos os artigos postados.",

    archivesTitle: "Arquivos",
    archivesDesc: "Todos os artigos arquivados.",

    searchTitle: "Busca",
    searchDesc: "Buscar qualquer artigo...",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir o menu",
    closeMenu: "Fechar o menu",
    toggleTheme: "Alterar o tema",
    searchPlaceholder: "Buscar posts...",
    noResults: "Nenhum resultado encontrado",
    goToPreviousPage: "Ir para a página anterior",
    goToNextPage: "Ir para a próxima página",
  },
  notFound: {
    title: "404 Not Found - Página não encontrada",
    message: "Página não encontrada",
    goHome: "Voltar para o início",
  },
} satisfies UIStrings;
