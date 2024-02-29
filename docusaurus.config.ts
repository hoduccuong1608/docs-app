import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/docs.png",
  plugins: ["docusaurus-plugin-sass"],

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.

  // onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["en", "vi"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/lib/styles/main.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docs.png",
    navbar: {
      title: "LGO",
      logo: {
        alt: "Logo",
        src: "img/docs.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docusaurusSidebar",
          position: "left",
          label: "Docusaurus",
        },
        {
          type: "docSidebar",
          sidebarId: "codingSidebar",
          position: "left",
          label: "Coding",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "reactSidebar",
        //   position: "left",
        //   label: "React",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "angularSidebar",
        //   position: "left",
        //   label: "Angular",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "vueSidebar",
        //   position: "left",
        //   label: "Vue",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "dockerSidebar",
        //   position: "left",
        //   label: "Docker",
        // },
        // {
        //   type: "docSidebar",
        //   sidebarId: "linuxSidebar",
        //   position: "left",
        //   label: "Linux",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/hoduccuong1608",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["java"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
