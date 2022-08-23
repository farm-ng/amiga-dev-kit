// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Farm-ng Developers',
  tagline: 'Robots are cool',
  url: 'https://farm-ng.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/farm-ng_favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'farm-ng', // Usually your GitHub org/user name.
  projectName: 'amiga-dev-kit', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/farm-ng/amiga-dev-kit/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/farm-ng/amiga-dev-kit/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Amiga SDK',
        logo: {
          alt: 'Amiga Logo',
          src: 'img/farm-ng_favicon.png',
        },
        items: [
          {
            label: 'Docs',
            type: 'doc',
            docId: 'what-is-adk',
            position: 'left',
          },
          //{
          //  label: 'API',
          //  type: 'doc',
          //  position: 'left',
          //  docId: 'api',
          //},
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            label: 'Contribute',
            type: 'doc',
            docId: 'contribute',
            position: 'left',
          },
          {
            href: 'https://www.youtube.com/channel/UCczyy8tyLbqxjtLE1_8YW3w',
            label: 'YouTube',
            position: 'right',
          },
          {
            href: 'https://github.com/farm-ng/amiga-dev-kit',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/getting-started',
              },
              //{
              //  label: 'API Reference',
              //  to: '/docs/api',
              //},
              {
                label: 'Contribute',
                to: '/docs/contribute',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              //{
              //  label: 'Stack Overflow',
              //  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              //},
              {
                label: 'Discord',
                href: 'https://discord.gg/pdpkBaq2dR',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/farm-ng/amiga-dev-kit',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Farm-ng, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
