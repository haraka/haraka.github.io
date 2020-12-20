__NUXT_JSONP__("/plugins/queue/quarantine", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{document:{slug:o,title:o,position:29,category:"Plugins",toc:[{id:G,depth:H,text:I},{id:J,depth:H,text:K}],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:a,value:"This plugin will save a message (in message\u002Frfc822 format) to a specified\ndirectory, which will be created automatically if it does not already exist,\na dated sub-folder is also added to the end of the path specified in YYYYMMDD\nformat."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"It is designed to be used by other plugins which request the message be\nquarantined by setting a connection or transaction note that this plugin\nchecks."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"NOTE: this plugin simply saves a copy of the message.  It does not reject or\ndiscard the message and relies on another plugin to perform this function."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"It uses the 'queue' hook, so that it runs after all the 'data_post' plugins\nand should be listed in 'config\u002Fplugins' to run before your queue hooks that\nperform actual deliveries."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"To ensure that only completely written files are present in the quarantine,\nthe files are written to a temporary directory first and then hardlinked to\nthe final destination before the temporary file is deleted."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The temporary directory is 'quarantine_path\u002Ftmp' which defaults to:\n\u002Fvar\u002Fspool\u002Fharaka\u002Fquarantine\u002Ftmp."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Upon start-up, any files present in the temporary directory are deleted\nsyncronously prior to any messages being accepted."}]},{type:a,value:f},{type:b,tag:L,props:{id:G},children:[{type:b,tag:M,props:{ariaHidden:x,href:"#configuration",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This plugin looks for 'quarantine.ini' in the config directory."}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:"li",props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"quarantine_path                   (default: \u002Fvar\u002Fspool\u002Fharaka\u002Fquarantine)"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The default base path to save the quarantine files to.  It will be created\nif it does not already exist."}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:L,props:{id:J},children:[{type:b,tag:M,props:{ariaHidden:x,href:"#usage",tabIndex:N},children:[{type:b,tag:c,props:{className:[O,P]},children:[]}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"If you wish to keep a copy of the message in your plugin, simply either:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"or"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:x}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"e.g."}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"would save the message to '\u002Fvar\u002Fspool\u002Fquarantine\u002Fharaka\u002FYYYYMMDD\u002FUUID' where\nYYYMMDD and UUID are expanded to current date and transaction UUID."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"and"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'corpus'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"would save the message to '\u002Fvar\u002Fspool\u002Fquarantine\u002Fharaka\u002Fcorpus\u002FYYYYMMDD\u002FUUID'."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Note: you can specify 'corpus\u002Ffoo' or 'corpus\u002Ffoo\u002Fbar' and the directories will\nbe automatically created.  Do not add any leading or trailing slashes."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"By default - after the message is quarantined, the plugin will tell Haraka to\ncontinue to the next plugin.  You can specify a different action like DENY or\nOK and supply an optional message using the following notes:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'Message quarantined'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'Message rejected'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"If you don't want to supply a specific message back to the client you can\nalso just specify a return code:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:u,props:{},children:[{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f}]}]}]}]},dir:"\u002Fen\u002Fplugins\u002Fqueue",path:"\u002Fen\u002Fplugins\u002Fqueue\u002Fquarantine",extension:".md",createdAt:W,updatedAt:W,to:"\u002Fplugins\u002Fqueue\u002Fquarantine"},prev:{slug:"qmail-queue",title:"queue\u002Fqmail-queue",to:"\u002Fplugins\u002Fqueue\u002Fqmail-queue"},next:{slug:"rabbitmq",title:"queue\u002Frabbitmq",to:"\u002Fplugins\u002Fqueue\u002Frabbitmq"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ","p",".","property-access","operator","notes","=",";","quarantine","div","nuxt-content-highlight","pre","language-javascript","line-numbers","code","connection","string","true","[","|","]","quarantine_action","constant","number","1","transaction","configuration",2,"Configuration","usage","Usage","h2","a",-1,"icon","icon-link","boolean","'sub\u002Fdirectory\u002Fpath'","OK",",","\nconnection","DENY","2020-12-20T00:08:08.864Z")));