__NUXT_JSONP__("/plugins/dnswl", (function(a,b,c,d,e,f,g,h,i,j,k,l){return {data:[{document:{slug:f,title:f,position:51,category:"Plugins",toc:[{id:g,depth:2,text:h}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"This plugin looks up the connecting IP address in an IP whitelist.\nIf the host is listed, then the plugin will return OK for all hooks\nup to hook_data."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"IMPORTANT!  The order of plugins in config\u002Fplugins is important when\nthis plugin is used.  It should be listed "},{type:b,tag:"em",props:{},children:[{type:a,value:"before"}]},{type:a,value:" any plugins that\nyou wish to skip, but after any plugins that accept recipients."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:g},children:[{type:b,tag:"a",props:{ariaHidden:"true",href:"#configuration",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This plugins uses the following files:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"dnswl.zones - Contains a list of zones to query, one per line."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"dnswl.ini - INI format with options described below:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"zones"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A comma or semi-colon list of zones to query.  It will be merged with\nany lists in dnswl.zones."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"periodic_checks"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If enabled, this will check all the zones every n minutes.\nThe minimum value that will be accepted here is 5.  Any value less\nthan 5 will cause the checks to be run at start-up only."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The checks confirm that the list is responding and that it is not\nlisting the world.  If any errors are detected, then the zone is\ndisabled and will be re-checked on the next test.  If a zone\nsubsequently starts working correctly then it will be re-enabled."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"enable_stats"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To use this feature you must have installed the 'redis' module and\nhave a redis server running."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When enabled, this will record several list statistics to redis."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It will track the total number of queries (TOTAL) and the average\nresponse time (AVG_RT) and the return type (e.g. LISTED or ERROR)\nto a redis hash where the key is 'dns-list-stat:zone' and the hash\nfield is the response type."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It will also track the positive response overlap between the lists\nin another redis hash where the key is 'dns-list-overlap:zone' and\nthe hash field is the other list names."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:"\n  "},{type:b,tag:"pre",props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"redis 127.0.0.1:6379\u003E hgetall dns-list-stat:zen.spamhaus.org\n  1) \"TOTAL\"\n  2) \"23\"\n  3) \"ENOTFOUND\"\n  4) \"11\"\n  5) \"LISTED\"\n  6) \"12\"\n  7) \"AVG_RT\"\n  8) \"45.5\"\n  redis 127.0.0.1:6379\u003E hgetall dns-list-overlap:zen.spamhaus.org\n  1) \"b.barracudacentral.org\"\n  2) \"1\"\n  3) \"bl.spamcop.net\"\n  4) \"1\"\n  5) \"TOTAL\"\n  6) \"1\"\n  "}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"stats_redis_host"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the form of "},{type:b,tag:i,props:{},children:[{type:a,value:"host:port"}]},{type:a,value:" this option allows you to specify a different\nhost on which redis runs."}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fplugins",path:"\u002Fen\u002Fplugins\u002Fdnswl",extension:".md",createdAt:j,updatedAt:j,to:"\u002Fplugins\u002Fdnswl"},prev:{slug:k,title:k,to:"\u002Fplugins\u002Fdnsbl"},next:{slug:l,title:l,to:"\u002Fplugins\u002Fearly_talker"}}],fetch:[],mutations:[]}}("text","element","\n","p","li","dnswl","configuration","Configuration","code","2020-12-20T00:08:08.864Z","dnsbl","early_talker")));