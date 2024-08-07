// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

async function createConfig() {
	/** @type {import('@docusaurus/types').Config} */
	return {
		title: 'Farm-ng Developers',
		tagline: 'Robots are cool',
		url: 'https://amiga.farm-ng.com',
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

    // Enable mermaid
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],

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
					googleAnalytics: {
						trackingID: 'UA-235819376-1',
						anonymizeIP: true,
					},
				}),
			],
		],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				announcementBar: {
					id: 'join_discourse',
					content:
						'Join Farm-ng Discourse forum 🤖 🚜 <a target="_blank" rel="noopener noreferrer" href="https://discourse.farm-ng.com/"> Announcements, Q&A, share codes or ideas.</a>.',
					backgroundColor: '#20232a',
					textColor: '#fff',
					isCloseable: false,
				},
				navbar: {
					title: 'Amiga Docs',
					logo: {
						alt: 'Amiga Logo',
						src: 'img/farm-ng_favicon.png',
					},
					items: [
						{
							label: 'User Manual',
							type: 'doc',
							docId: 'amiga_quick_start/amiga-quick-start',
							position: 'left',
						},
						{
							label: 'Developers',
							type: 'doc',
							docId: 'concepts/concepts-index',
							position: 'left',
						},
						{
							label: 'Reference',
							type: 'doc',
							docId: 'hardware-tools/recommended-tools',
							position: 'left',
						},
						{
							label: 'Examples',
							type: 'doc',
							docId: 'examples/examples-index',
							position: 'left',
						},

						//   {
						//     label: 'Contribute',
						//     type: 'doc',
						//     docId: 'contribute/contribute-website',
						//     position: 'left',
						//   },
						//   {
						//     to: '/blog',
						//     label: 'Blog',
						//     position: 'left'
						//   },
						{
							to: 'https://discourse.farm-ng.com/',
							label: 'Discourse',
							position: 'left',
						},
						{
							label: 'Support',
							type: 'doc',
							docId: 'support/support',
							position: 'left'
						},
						{
							to: 'https://farm-ng.com/products/la-maquina-amiga',
							label: 'Shop',
							position: 'left'
						},
						{
							href: 'https://www.youtube.com/channel/UCczyy8tyLbqxjtLE1_8YW3w',
							position: 'right',
							className: 'header-youtube-link',
							'aria-label': 'Youtube',
						},
						{
							href: 'https://github.com/farm-ng',
							position: 'right',
							className: 'header-github-link',
							'aria-label': 'GitHub repository',
						},
					],
				},
				algolia: {
					apiKey: '49fc2907454ef96c42acc0c2315a0718',
					indexName: 'farm_dev',
					appId: 'EWY2LBZNZX',
				},
				footer: {
					style: 'dark',
					links: [
						{
							title: 'Documentation',
							items: [
								{
									label: 'Contribute',
									to: '/docs/contribute/contribute-website',
								},
							],
						},
						{
							title: 'Community',
							items: [
								{
									to: 'https://discourse.farm-ng.com/',
									label: 'Discourse',
									position: 'left',
								},
								//{
								//  label: 'Stack Overflow',
								//  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
								//},
								// {
								//   label: 'Twitter',
								//   href: 'https://twitter.com/docusaurus',
								// },
							],
						}, {
							title: 'Farm-ng',
							items: [
								{
									label: 'farm-ng-amiga',
									href: 'https://github.com/farm-ng/farm-ng-amiga'

								},
								{
									label: 'farm-ng-core',
									href: 'https://farm-ng.github.io/farm-ng-core/',
								},
								{
									label: 'farm-ng-amiga-ros-bridge',
									href: 'https://github.com/farm-ng/amiga-ros-bridge-v1',
								},
								//{
								//  label: 'Stack Overflow',
								//  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
								//},
								// {
								//   label: 'Twitter',
								//   href: 'https://twitter.com/docusaurus',
								// },
							],
						},
						{
							title: 'Sister projects',
							items: [
								{
									label: 'Kornia',
									href: 'https://github.com/kornia',
								},
								{
									label: 'Pangolin',
									href: 'https://github.com/stevenlovegrove/Pangolin',
								},
								{
									label: 'Sophus',
									href: 'https://strasdat.github.io/Sophus/latest/',
								},
							],
						},
						{
							title: 'More',
							items: [
								{
									label: 'GitHub',
									href: 'https://github.com/farm-ng',
								},
								{
									label: 'License',
									href: 'https://github.com/farm-ng/amiga-dev-kit/blob/main/LICENSE',
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} Farm-ng, Inc. Built with Docusaurus.`,
				},
				prism: {
					theme: lightTheme,
					darkTheme: darkTheme,
				},
			}),
	}
}

module.exports = createConfig();
