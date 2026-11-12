import { cp } from 'node:fs/promises'
import { join } from 'node:path'

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
    // Pages advertise their markdown twin at /<path>.md, which a server
    // rewrites to /raw/<path>.md. GitHub Pages can't rewrite, so copy instead.
    'nitro:init'(nitro) {
      nitro.hooks.hook('prerender:done', async () => {
        const { publicDir } = nitro.options.output
        await cp(join(publicDir, 'raw'), publicDir, { recursive: true })
      })
    },
  },

  nitro: {
    prerender: {
      // Haraka itself links to https://haraka.github.io/barelf/ and the
      // public/*.html stubs redirect to trailing-slash URLs.
      autoSubfolderIndex: true,
      routes: [
        '/barelf',
        // The crawler treats a dot in the last segment as a file extension
        // and skips these pages and their markdown twins.
        '/plugins/data.signatures',
        '/plugins/rcpt_to.in_host_list',
        '/raw/plugins/data.signatures.md',
        '/raw/plugins/rcpt_to.in_host_list.md',
      ],
    },
  },

  compatibilityDate: '2026-11-11',
})
