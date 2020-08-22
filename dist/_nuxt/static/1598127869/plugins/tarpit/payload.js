__NUXT_JSONP__("/plugins/tarpit", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{document:{title:t,position:75,category:"Plugins",toc:[{id:u,depth:e,text:v},{id:w,depth:e,text:x},{id:y,depth:e,text:z},{id:A,depth:e,text:B}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"This plugin is designed to introduce deliberate delays on the response\nof every hook in order to slow down a connection.  It has no\nconfiguration and is designed to be used only by other plugins."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It must be loaded early in config\u002Fplugins (e.g. before any plugins\nthat accept recipients or that return OK) but must be loaded "},{type:b,tag:m,props:{},children:[{type:a,value:"after"}]},{type:a,value:"\nany plugins that wish to use it."}]},{type:a,value:c},{type:b,tag:f,props:{id:u},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#usage",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To use this plugin in another plugin set:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"connection.notes.tarpit = \u003Cseconds to delay\u003E;\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"or"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"connection.transaction.notes.tarpit = \u003Cseconds to delay\u003E;\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{id:w},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#configuration",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The configuration file for tarpit is config\u002Ftarpit.ini."}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:"li",props:{},children:[{type:a,value:"hooks_to_delay - a list of hooks to delay at. This setting can be used to\noverride the default list in the plugin. For example, if you notice that\nmalware is disconnecting after delaying rcpt_ok, you can remove just that\nhook from the list:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"hooks_to_delay=connect,helo,ehlo,mail,rcpt,data,data_post,queue,unrecognized_command,vrfy,noop,rset,quit"}]},{type:a,value:c},{type:b,tag:f,props:{id:y},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#plugin-timeout",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"config\u002Ftarpit.timeout (Default: 0)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All Haraka plugins can configure a "},{type:b,tag:m,props:{},children:[{type:a,value:"name"}]},{type:a,value:".timeout file. The timeout specifies\nhow long Haraka lets the plugin do nothing before it times out. When zero,\nthere is no timeout. When non-zero and "},{type:b,tag:m,props:{},children:[{type:a,value:C}]},{type:a,value:" is longer than\ntarpit.timeout (default: 1s), you'll get errors like this in your log files:"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"[core] Plugin tarpit timed out on hook rcpt - make sure it calls the callback\n[core] Plugin tarpit timed out on hook quit - make sure it calls the callback\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The solution is to set the contents of config\u002Ftarpit.timeout to zero or\n"},{type:b,tag:"strong",props:{},children:[{type:a,value:C}]},{type:a,value:" + 1."}]},{type:a,value:c},{type:b,tag:f,props:{id:A},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#logging",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When tarpitting a command it will log 'tarpitting response for Ns' to\nthe INFO facility where N is the number of seconds."}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Ftarpit",extension:".md",slug:t,createdAt:"2020-08-22T20:17:10.585Z",updatedAt:"2020-08-22T14:05:17.737Z",to:"\u002Fplugins\u002Ftarpit"},prev:{title:"Status",slug:"status",to:"\u002Fplugins\u002Fstatus"},next:{title:D,slug:D,to:"\u002Fplugins\u002Fredis"}}],fetch:[],mutations:[]}}("text","element","\n","p",2,"h2","a","true",-1,"span","icon","icon-link","em","div","nuxt-content-highlight","pre","language-text","line-numbers","code","tarpit","usage","Usage","configuration","Configuration","plugin-timeout","Plugin Timeout","logging","Logging","seconds to delay","redis")));