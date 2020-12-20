__NUXT_JSONP__("/plugins/queue/smtp_proxy", (function(a,b,c,d,e,f,g,h,i,j){return {data:[{document:{slug:"smtp_proxy",title:"queue\u002Fsmtp_proxy",position:34,category:"Plugins",toc:[{id:g,depth:2,text:h}],body:{type:"root",children:[{type:c,tag:d,props:{},children:[{type:a,value:"This plugin delivers to another mail server. This is a common setup when you\nwant to have a mail server with a solid pedigree of outbound delivery to\nother hosts, and inbound delivery to users."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"In comparison to "},{type:c,tag:"code",props:{},children:[{type:a,value:i}]},{type:a,value:", this plugin makes a connection at\nMAIL FROM time to the ongoing SMTP server. This can be a benefit in that\nyou get any SMTP-time filtering that the ongoing server provides, in\nparticular one important facility to some setups is recipient filtering.\nHowever be aware that other than connect and HELO-time filtering, you will\nhave as many connections to your ongoing SMTP server as you have to Haraka."}]},{type:a,value:b},{type:c,tag:"h2",props:{id:g},children:[{type:c,tag:"a",props:{ariaHidden:"true",href:"#configuration",tabIndex:-1},children:[{type:c,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:h}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"smtp_proxy.ini"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Configuration is stored in this file in the following keys:"}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"enable_outbound=[true]"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"SMTP proxy outbound messages (set to false to enable Haraka's\nseparate Outbound mail routing (MX based delivery))."}]},{type:a,value:b},{type:c,tag:f,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"host=HOST"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The host to connect to."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"port=PORT"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The port to connect to."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"connect_timeout=SECONDS"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The maximum amount of time to wait when creating a new connection\nto the host.  Default if unspecified is 30 seconds."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"timeout=SECONDS"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The amount of seconds to let a backend connection live idle in the\nproxy pool.  This should always be less than the global plugin timeout,\nwhich should in turn be less than the connection timeout."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"max_connections=NUMBER"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Maximum number of connections to create at any given time."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"enable_tls=[true|yes|1]"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Enable TLS with the forward host (if supported). TLS uses options from\nthe tls plugin."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"auth_type=[plain|login]"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Enable PLAIN or LOGIN SMTP AUTH.  This is required to enable AUTH."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"auth_user=USERNAME"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"SMTP AUTH username to use."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"auth_pass=PASSWORD"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"SMTP AUTH password to use."}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b}]}]},dir:"\u002Fen\u002Fplugins\u002Fqueue",path:"\u002Fen\u002Fplugins\u002Fqueue\u002Fsmtp_proxy",extension:".md",createdAt:j,updatedAt:j,to:"\u002Fplugins\u002Fqueue\u002Fsmtp_proxy"},prev:{slug:"smtp_forward",title:i,to:"\u002Fplugins\u002Fqueue\u002Fsmtp_forward"},next:{slug:"access",title:"access - ACLs",to:"\u002Fplugins\u002Faccess"}}],fetch:[],mutations:[]}}("text","\n","element","p","li","ul","configuration","Configuration","queue\u002Fsmtp_forward","2020-12-20T00:08:08.864Z")));