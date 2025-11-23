import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "md",

  title: "Crush Docs",
  description: "Docs for setting up Crush agents with MCP and LSP",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "docs", link: "/getting-started" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        link: "/getting-started",
      },
      {
        text: "Specific MCPs",
        items: [
          { text: "Context7", link: "/mcps/context7.md" },
          // { text: "MS Playwright", link: "/mcps/ms-playwright-readme.md" },
          // { text: "Storybook", link: "/mcps/storybook-readme.md" },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
