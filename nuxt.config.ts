export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  nitro: {
    prerender: {
      routes: [
        '/plugins/connect.asn',
        '/plugins/connect.fcrdns',
        '/plugins/connect.geoip',
        '/plugins/connect.p0f',
        '/plugins/data.headers',
        '/plugins/data.signatures',
        '/plugins/data.uribl',
        '/plugins/helo.checks',
        '/plugins/log.elasticsearch',
        '/plugins/log.syslog',
        '/plugins/mail_from.access',
        '/plugins/rcpt_to.access',
        '/plugins/rcpt_to.ldap',
        '/plugins/rcpt_to.routes',
      ],
    },
  },
})
