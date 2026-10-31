import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://luiz-leite-dev.github.io",
    title: "Luiz Leite Dev",
    description: "Portfólio e artigos sobre Engenharia de Sofware por Luiz Carlos de Souza Leite.",
    author: "Luiz Carlos de Souza Leite",
    profile: "https://www.linkedin.com/in/luizleitedev/",
    ogImage: "default-og.jpg",
    lang: "pt",
    timezone: "America/Sao_Paulo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/luiz-leite-dev" },
    { name: "x",        url: "https://x.com/luizleitedev" },
    { name: "linkedin", url: "https://www.linkedin.com/in/luizleitedev/" },
    { name: "mail",     url: "mailto:luiz.leite.dev@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
