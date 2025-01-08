export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  nitro: {
    prerender: {
      routes: [
        '/barelf',
        '/plugins/asn',
        '/plugins/fcrdns',
        '/plugins/geoip',
        '/plugins/p0f',
        '/plugins/headers',
        '/plugins/data.signatures',
        '/plugins/uribl',
        '/plugins/helo.checks',
        '/plugins/elasticsearch',
        '/plugins/syslog',
        '/plugins/rcpt_to.ldap',
        '/plugins/rcpt_to.routes',
      ],
    },
  },
})
