export default defineAppConfig({
  docus: {
    title: 'Haraka',
    description: 'Haraka is an open source SMTP server written entirely in JavaScript for Node.js.',
    image: 'https://haraka.github.io/preview.png',
    socials: {
      github: 'haraka/Haraka',
    },
    aside: {
      level: 0,
      collapsed: true,
      exclude: []
    },
    github: {
      branch: 'master',
      repo: 'haraka.github.com',
      owner: 'haraka',
      edit: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      credits: {
        icon: '',
        text: 'Haraka is a project started by Matt Sergeant and is now maintained by the Haraka community.',
        href: 'https://haraka.github.io/',
      },
    }
  }
})
