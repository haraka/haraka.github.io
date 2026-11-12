export default defineAppConfig({
  seo: {
    title: 'Haraka',
    description: 'Haraka is an open source SMTP server written entirely in JavaScript for Node.js.',
  },
  header: {
    title: 'Haraka',
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Haraka',
      class: 'h-8',
    },
  },
  github: {
    url: 'https://github.com/haraka/haraka.github.io',
    branch: 'master',
  },
  toc: {
    bottom: {
      links: [
        {
          icon: 'i-simple-icons-github',
          label: 'Haraka on GitHub',
          to: 'https://github.com/haraka/Haraka',
          target: '_blank',
        },
      ],
    },
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate',
    },
  },
})
