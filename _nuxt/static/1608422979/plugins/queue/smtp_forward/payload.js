__NUXT_JSONP__("/plugins/queue/smtp_forward", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:[{document:{slug:"smtp_forward",title:"queue\u002Fsmtp_forward",position:33,category:"Plugins",toc:[{id:n,depth:2,text:o}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"This plugin delivers to another mail server. This is a common setup when you\nwant to have a mail server with a solid pedigree of outbound delivery to\nother hosts, and inbound delivery to users."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In comparison to "},{type:b,tag:f,props:{},children:[{type:a,value:p}]},{type:a,value:", this plugin waits until queue time to\nattempt the ongoing connection. This can be a benefit in reducing connections\nto your inbound mail server when you have content filtering (such as\nspamassassin) enabled. A possible downside is that it also delays recipient\nvalidation that the ongoing mail server may provide until queue time."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:n},children:[{type:b,tag:g,props:{href:"#configuration",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"smtp_forward.ini"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Configuration is stored in this file in the following keys:"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"enable_outbound=[true]"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"SMTP forward outbound messages (set to false to enable Haraka's separate\nOutbound mail routing (MX based delivery))."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"host=HOST"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The host to connect to."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"port=PORT"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The port to connect to. Default: 25"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"connect_timeout=SECONDS"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The maximum amount of time to wait when creating a new connection\nto the host.  Default: 30 seconds."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"timeout=SECONDS"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The amount of seconds to let a backend connection live idle in the\nconnection pool.  This should always be less than the global plugin\ntimeout, which should in turn be less than the connection timeout."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"max_connections=NUMBER"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Maximum number of connections at any given time. Default: 1000"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"enable_tls=[true]"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enable TLS with the forward host (if supported). TLS uses options\nfrom the tls plugin. If key and cert are provided in the the outbound section of the tls plugin,\nthat certificate will be used as a TLS Client Certificate."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This option controls the use of TLS via "},{type:b,tag:f,props:{},children:[{type:a,value:"STARTTLS"}]},{type:a,value:". This plugin does not work with\nSMTP over TLS."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"auth_type=[plain|login]"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enable PLAIN or LOGIN SMTP AUTH.  This is required to enable AUTH."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"auth_user=USERNAME"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"SMTP AUTH username to use."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"auth_pass=PASSWORD"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"SMTP AUTH password to use."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"queue"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Which queue plugin to use. Default: undefined. The default bahavior is to\nuse smtp_forward for inbound connections and outbound for relaying\nconnections. This option is used for complex mail routes."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"check_sender=false"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Requires that sender domains defined in smtp_forward.ini (see Per-Domain below) have relaying privileges. This is a form of spoof prevention and assumes that any mail clients have relaying or AUTH privileges. This is usually the case."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"check_recipient=false"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By default, Haraka accepts no emails until a recipient plugin has been configured to accept mails for a domain. The simplest common case is the in_host_list plugin with a list of domains in config\u002Fhost_list. An alternative is to set "},{type:b,tag:f,props:{},children:[{type:a,value:"check_recipient=true"}]},{type:a,value:" and list each domain in a definition block in smtp_forward.ini (see Per-Domain Configuration). An example for two domains:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"[example.com]\n[example.net]"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:"per-domain-configuration"},children:[{type:b,tag:g,props:{href:"#per-domain-configuration",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"Per-Domain Configuration"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"More specific forward routes for domains can be defined. The domain is\nchosen based on the value of the "},{type:b,tag:f,props:{},children:[{type:a,value:m}]},{type:a,value:" config variable."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:f,props:{},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:f,props:{},children:[{type:a,value:"rcpt_to"}]},{type:a,value:" (the default), more specific\nroutes are only honored for SMTP connections with a single recipient or SMTP\nconnections where every recipient host is identical."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s},{type:b,tag:f,props:{},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:f,props:{},children:[{type:a,value:"mail_from"}]},{type:a,value:", the domain of the MAIL FROM\naddress is used."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"enable_outbound can be set or unset on a per-domain level to enable or disable\nforwarding for specific domains."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"# default SMTP host\nhost=1.2.3.4\n# auth_type=plain\n# auth_user=user\n# auth_user=pass\n\n[example1.com]\nhost=1.2.3.5\n# auth_type=plain\n# auth_user=user\n# auth_pass=pass\n\n[example2.com]\nhost=1.2.3.5\n\n[example3.com]\nhost=1.2.3.6\n\n[example4.com]\nenable\\_outbound=false\n"}]}]}]},{type:a,value:c},{type:b,tag:r,props:{id:"split-host-forward-routing"},children:[{type:b,tag:g,props:{href:"#split-host-forward-routing",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"Split host forward routing"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When an incoming email transaction has multiple recipients with different forward routes,  recipients to subsequent forward routes are deferred. Example: an incoming email transaction has recipients "},{type:b,tag:g,props:{href:"mailto:user@example1.com"},children:[{type:a,value:"user@example1.com"}]},{type:a,value:", "},{type:b,tag:g,props:{href:"mailto:user@example2.com"},children:[{type:a,value:"user@example2.com"}]},{type:a,value:", and "},{type:b,tag:g,props:{href:"mailto:user@example3.com"},children:[{type:a,value:"user@example3.com"}]},{type:a,value:". The first two messages will be accepted (they share the same forward destination) and the latter one will be deferred. It will arrive in a future delivery attempt by the remote."}]}]},dir:"\u002Fen\u002Fplugins\u002Fqueue",path:"\u002Fen\u002Fplugins\u002Fqueue\u002Fsmtp_forward",extension:".md",createdAt:u,updatedAt:u,to:"\u002Fplugins\u002Fqueue\u002Fsmtp_forward"},prev:{slug:"smtp_bridge",title:"queue\u002Fsmtp_bridge",to:"\u002Fplugins\u002Fqueue\u002Fsmtp_bridge"},next:{slug:"smtp_proxy",title:p,to:"\u002Fplugins\u002Fqueue\u002Fsmtp_proxy"}}],fetch:[],mutations:[]}}("text","element","\n","p","li","code","a","true",-1,"span","icon","icon-link","domain_selector","configuration","Configuration","queue\u002Fsmtp_proxy","ul","h1","When "," is set to ","2020-12-20T00:08:08.864Z")));