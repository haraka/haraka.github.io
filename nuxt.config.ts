export default defineNuxtConfig({
  extends: ['docus'],

  site: {
    url: 'https://haraka.github.io',
    name: 'Haraka',
  },

  content: {
    build: {
      // Keep mixed-case URLs like /core/Outbound that external docs link to
      pathMeta: { slugifyOptions: { lower: false } },
    },
  },

  hooks: {
    // Docus renders the frontmatter title as the page header. Most pages are
    // synced from plugin READMEs that open with their own H1, so drop it here
    // rather than in the source files.
    'content:file:afterParse'({ content }) {
      const body = content.body as { type?: string, value?: unknown[][] } | undefined
      if (body?.type === 'minimark' && body.value?.[0]?.[0] === 'h1') body.value.shift()
    },
  },

  nitro: {
    prerender: {
      // Haraka itself links to https://haraka.github.io/barelf/ and the
      // public/*.html stubs redirect to trailing-slash URLs.
      autoSubfolderIndex: true,
      routes: [
        '/barelf',
        '/plugins/asn',
        '/plugins/data.signatures',
        '/plugins/elasticsearch',
        '/plugins/fcrdns',
        '/plugins/geoip',
        '/plugins/headers',
        '/plugins/helo.checks',
        '/plugins/p0f',
        '/plugins/rcpt_to.ldap',
        '/plugins/rcpt_to.routes',
        '/plugins/syslog',
        '/plugins/uribl',
      ],
    },
  },

  compatibilityDate: '2026-11-11',
})
