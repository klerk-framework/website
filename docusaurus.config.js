// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Klerk Framework',
  tagline: 'A Kotlin framework for your data',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://klerkframework.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'klerk-framework', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          feedOptions: {
            type: 'rss',
            title: 'Klerk framework',
            language: 'en',
            limit: 20,
          },
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/KlerkLogo2.png',
      navbar: {
        title: 'Klerk',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: 'pathname:///apidoc/index.html', label: 'API Reference', position: 'left', target: '_blank',},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/plugins', label: 'Plugins', position: 'left'},
          {to: '/commercial-licence', label: 'Commercial licence', position: 'left'},
          {
            href: 'https://github.com/klerk-framework/klerk',
            label: 'GitHub',
            position: 'right',
          },
          {to: 'https://klerkframework.dev/blog/rss.xml', position: 'right', label: 'RSS'},
        ],
      },
      footer: {
        style: 'dark',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
