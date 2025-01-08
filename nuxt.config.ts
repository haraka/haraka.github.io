export default defineNuxtConfig({
 extends: '@nuxt-themes/docus',

 nitro: {
   prerender: {
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

 compatibilityDate: '2025-01-07',
})
