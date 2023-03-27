import { defineConfig } from "vitepress";
import nav from "./themes/nav";
import sidebar from "./themes/sidebar";

export default defineConfig({
  title: "Blog",
  description: "A Roven`s blog",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    ...nav,
    ...sidebar,

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>',
    },

    algolia: {
      appId: "",
      apiKey: "",
      indexName: "",
    },
  },
  markdown: {
    // lineNumbers: true, // 行号显示
  },
});
