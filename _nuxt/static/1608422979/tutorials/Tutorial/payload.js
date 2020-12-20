__NUXT_JSONP__("/tutorials/Tutorial", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{document:{slug:"Tutorial",title:"Writing Haraka Plugins",position:16,category:"Tutorials",toc:[{id:t,depth:q,text:u},{id:v,depth:q,text:w},{id:x,depth:q,text:y},{id:z,depth:q,text:A},{id:B,depth:q,text:C},{id:D,depth:q,text:E}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Part of the joy of using Haraka as your main mail server is having a strong\nplugin based system which means you control all aspects of how your mail is\nprocessed, accepted, and delivered."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Of course in order to control this you may at some point need to edit some\nsort of plugin file of your own to customise how things work. The good news\nis that writing plugins in Haraka is simple, even for novice coders. You\njust need a little knowledge of Javascript (and maybe some understanding of\nNode.js) and the world is your oyster."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This tutorial will run through a simple plugin which allows you to have\nemail addresses that expire in a short period of time. This is handy if you\nwant a "},{type:b,tag:"em",props:{},children:[{type:a,value:"disposable email address"}]},{type:a,value:" to use to sign up for a web site that you\ndon't wish to continually receive communication from."}]},{type:a,value:c},{type:b,tag:r,props:{id:t},children:[{type:b,tag:k,props:{href:"#the-design",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In order to make this simple, we are going to simply let you have tagged\nemail addresses such as "},{type:b,tag:e,props:{},children:[{type:a,value:"user-20120515@domain.com"}]},{type:a,value:" which will expire on the\n15th May, 2012. Haraka will then check the email has yet to expire, and\nreject mails to that address after the expiry date. If the address hasn't\nexpired yet it will re-write the address to "},{type:b,tag:e,props:{},children:[{type:a,value:"user@domain.com"}]},{type:a,value:" before onward\ndelivery."}]},{type:a,value:c},{type:b,tag:r,props:{id:v},children:[{type:b,tag:k,props:{href:"#what-you-will-need",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Node.js and npm"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"Haraka"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"A text editor"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:b,tag:k,props:{href:"http:\u002F\u002Fjetmore.org\u002Fjohn\u002Fcode\u002Fswaks\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"swaks"}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:"A screwdriver"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:x},children:[{type:b,tag:k,props:{href:"#getting-started",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First install Haraka via npm if you haven't already:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ sudo npm -g install Haraka\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now we can create our project directory to get started with:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ haraka -i \u002Fpath\u002Fto\u002Fnew_project\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Make sure you use a directory that doesn't exist for your project."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next, let's create a new plugin:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ haraka -c \u002Fpath\u002Fto\u002Fnew_project -p rcpt_to.disposable\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This should output a bunch of information about files it has created:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Plugin rcpt_to.disposable created\nNow edit javascript in:    \u002Fpath\u002Fto\u002Fnew_project\u002Fplugins\u002Frcpt_to.disposable.js\nAdd the plugin to config:  \u002Fpath\u002Fto\u002Fnew_project\u002Fconfig\u002Fplugins\nAnd edit documentation in: \u002Fpath\u002Fto\u002Fnew_project\u002Fdocs\u002Fplugins\u002Frcpt_to.disposable.md\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So let's do the second part now - load up the "},{type:b,tag:e,props:{},children:[{type:a,value:"config\u002Fplugins"}]},{type:a,value:" file and lets\nset this up to test things. Comment out most of the plugins, except for\n"},{type:b,tag:e,props:{},children:[{type:a,value:F}]},{type:a,value:" and add in our new plugin, and change the queue\nplugin to "},{type:b,tag:e,props:{},children:[{type:a,value:"test_queue"}]},{type:a,value:". The final file should look like this:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"# default list of plugins\n\n# block mails from known bad hosts (see config\u002Fdnsbl.zones for the DNS zones queried)\n#dnsbl\n\n# allow bad mail signatures from the config\u002Fdata.signatures file.\n#data.signatures\n\n# block mail from some known bad HELOs - see config\u002Fhelo.checks.ini for configuration\n#helo.checks\n\n# block mail from known bad email addresses you put in config\u002Fmail_from.blocklist\n#mail_from.blocklist\n\n# Only accept mail where the MAIL FROM domain is resolvable to an MX record\n#mail_from.is_resolvable\n\n# Allow dated tagged addresses\nrcpt_to.disposable\n\n# Only accept mail for your personal list of hosts\nrcpt_to.in_host_list\n\n# Queue mail via qmail-queue\n#queue\u002Fqmail-queue\n\ntest_queue\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Remember that the ordering here is important - our new plugin has to come\nbefore "},{type:b,tag:e,props:{},children:[{type:a,value:F}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now fire up your favourite editor and put the following into\nthe "},{type:b,tag:e,props:{},children:[{type:a,value:"plugins\u002Frcpt_to.disposable.js"}]},{type:a,value:" file:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"exports.hook_rcpt = function (next, connection, params) {\n    var rcpt = params[0];\n    this.loginfo(\"Got recipient: \" + rcpt);\n    next();\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All we are doing here is logging the fact that we got the recipient."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check this works. You'll need two terminal windows. In window 1:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ echo LOGDEBUG \u003E config\u002Floglevel\n$ echo myserver.com \u003E\u003E config\u002Fhost_list\n$ sudo haraka -c \u002Fpath\u002Fto\u002Fnew_project\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And in window 2:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ swaks -h domain.com -t booya@myserver.com -f somewhere@example.com \\\n  -s localhost -p 25\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the logs you should see:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"[INFO] [rcpt_to.disposable] Got recipient: \u003Cbooya@myserver.com\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Which indicates everything is working. You should also have a file\n"},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Ftmp\u002Fmail.eml"}]},{type:a,value:" containing the email that swaks sent."}]},{type:a,value:c},{type:b,tag:r,props:{id:z},children:[{type:b,tag:k,props:{href:"#parsing-out-the-date",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now lets check for emails with an expire date in them and turn them into\n"},{type:b,tag:e,props:{},children:[{type:a,value:"Date"}]},{type:a,value:" objects. Edit your plugin file as follows:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"exports.hook_rcpt = function (next, connection, params) {\n    var rcpt = params[0];\n    this.loginfo(\"Got recipient: \" + rcpt);\n    \n    \u002F\u002F Check user matches regex 'user-YYYYMMDD':\n    var match = \u002F^(.*)-(\\d{4})(\\d{2})(\\d{2})$\u002F.exec(rcpt.user);\n    if (!match) {\n        return next();\n    }\n    \n    \u002F\u002F get date - note Date constructor takes month-1 (i.e. Dec == 11).\n    var expiry_date = new Date(match[2], match[3]-1, match[4]);\n    \n    this.loginfo(\"Email expires on: \" + expiry_date);\n    \n    next();\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Start haraka again and pass it the following email via swaks:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ swaks -h domain.com -t booya-20120101@myserver.com \\\n  -f somewhere@example.com -s localhost -p 25\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And you should see now in the logs:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"[INFO] [rcpt_to.disposable] Got recipient: \u003Cbooya-20120101@myserver.com\u003E\n[INFO] [rcpt_to.disposable] Email expires on: Sun, 01 Jan 2012 05:00:00 GMT\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The exact time may vary depending on your timezone, but it should be obvious\nwe now have a date object, which we can now compare to the current date."}]},{type:a,value:c},{type:b,tag:r,props:{id:B},children:[{type:b,tag:k,props:{href:"#rejecting-expired-emails",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The next edit we have to do is to add in code to compare to the current date\nand reject expired emails. Again, this is very simple:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"exports.hook_rcpt = function (next, connection, params) {\n    var rcpt = params[0];\n    this.loginfo(\"Got recipient: \" + rcpt);\n\n    \u002F\u002F Check user matches regex 'user-YYYYMMDD':\n    var match = \u002F^(.*)-(\\d{4})(\\d{2})(\\d{2})$\u002F.exec(rcpt.user);\n    if (!match) {\n        return next();\n    }\n\n    \u002F\u002F get date - note Date constructor takes month-1 (i.e. Dec == 11).\n    var expiry_date = new Date(match[2], match[3]-1, match[4]);\n\n    this.loginfo(\"Email expires on: \" + expiry_date);\n    \n    var today = new Date();\n    \n    if (expiry_date \u003C today) {\n        \u002F\u002F If we get here, the email address has expired\n        return next(DENY, \"Expired email address\");\n    }\n    \n    next();\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And we can easily check that with swaks (remember to restart Haraka):"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ swaks -h foo.com -t booya-20110101@haraka.local -f somewhere@example.com \\\n  -s localhost -p 25\n=== Trying localhost:25...\n=== Connected to localhost.\n\u003C-  220 sergeant.org ESMTP Haraka 0.3 ready\n -\u003E EHLO foo.com\n\u003C-  250-Haraka says hi Unknown [127.0.0.1]\n\u003C-  250-PIPELINING\n\u003C-  250-8BITMIME\n\u003C-  250 SIZE 500000\n -\u003E MAIL FROM:\u003Csomewhere@example.com\u003E\n\u003C-  250 From address is OK\n -\u003E RCPT TO:\u003Cbooya-20110101@haraka.local\u003E\n\u003C** 550 Expired email address\n -\u003E QUIT\n\u003C-  221 closing connection. Have a jolly good day.\n=== Connection closed with remote host.\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now we need to do one more thing..."}]},{type:a,value:c},{type:b,tag:r,props:{id:D},children:[{type:b,tag:k,props:{href:"#fixing-up-unexpired-emails",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The last thing we need to do, is if we have an email that isn't expired, we\nneed to normalise it back to the real email address, because wherever we\ndeliver this to is unlikely to recognise these new email addresses."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here's how our final plugin will look:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"exports.hook_rcpt = function (next, connection, params) {\n    var rcpt = params[0];\n    this.loginfo(\"Got recipient: \" + rcpt);\n\n    \u002F\u002F Check user matches regex 'user-YYYYMMDD':\n    var match = \u002F^(.*)-(\\d{4})(\\d{2})(\\d{2})$\u002F.exec(rcpt.user);\n    if (!match) {\n        return next();\n    }\n\n    \u002F\u002F get date - note Date constructor takes month-1 (i.e. Dec == 11).\n    var expiry_date = new Date(match[2], match[3]-1, match[4]);\n\n    this.loginfo(\"Email expires on: \" + expiry_date);\n\n    var today = new Date();\n\n    if (expiry_date \u003C today) {\n        \u002F\u002F If we get here, the email address has expired\n        return next(DENY, \"Expired email address\");\n    }\n    \n    \u002F\u002F now get rid of the extension:\n    rcpt.user = match[1];\n    this.loginfo(\"Email address now: \" + rcpt);\n    \n    next();\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And when we test this with an unexpired address via swaks:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"$ swaks -h foo.com -t booya-20120101@haraka.local \\\n  -f somewhere@example.com -s localhost -p 25\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We get in the logs:"}]},{type:a,value:c},{type:b,tag:f,props:{className:[g]},children:[{type:b,tag:h,props:{className:[i,j]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"[INFO] [rcpt_to.disposable] Got recipient: \u003Cbooya-20120101@haraka.local\u003E\n[INFO] [rcpt_to.disposable] Email expires on: Sun Jan 01 2012 00:00:00 GMT-0500 (EST)\n[INFO] [rcpt_to.disposable] Email address now: \u003Cbooya@haraka.local\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Which indicates that we have successfully modified the email address."}]},{type:a,value:c},{type:b,tag:"h1",props:{id:"further-reading"},children:[{type:b,tag:k,props:{href:"#further-reading",ariaHidden:l,tabIndex:m},children:[{type:b,tag:n,props:{className:[o,p]},children:[]}]},{type:a,value:"Further Reading"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are many more features of the Haraka API to explore, including access\nto the body of the email and the headers, access to the HELO string, and\nimplementing ESMTP extensions, among many others."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are two good places to read up on these. Firstly is the documentation\nin the Haraka \"docs\" directory. Start with the "},{type:b,tag:e,props:{},children:[{type:a,value:"Plugins.md"}]},{type:a,value:" file, and work\nyour way through the API from there."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The second place is simply reading the source code for the plugins themselves.\nThe plugins that Haraka ships with use almost all parts of the API and so\nshould give you a good starting point if you want to implement a particular\npiece of functionality. Even the most complicated plugins are under 200 lines\nof code, so don't be intimidated by them! The simplest one is a mere 5 lines\nof code."}]}]},dir:"\u002Fen\u002Ftutorials",path:"\u002Fen\u002Ftutorials\u002FTutorial",extension:".md",createdAt:G,updatedAt:G,to:"\u002Ftutorials\u002FTutorial"},prev:{slug:"Transaction",title:"Transaction Object",to:"\u002Fcore\u002FTransaction"},next:{slug:"Plugins",title:"Haraka Plugins",to:"\u002Ftutorials\u002FPlugins"}}],fetch:[],mutations:[]}}("text","element","\n","p","code","div","nuxt-content-highlight","pre","language-text","line-numbers","a","true",-1,"span","icon","icon-link",2,"h2","li","the-design","The Design","what-you-will-need","What You Will Need","getting-started","Getting Started","parsing-out-the-date","Parsing Out The Date","rejecting-expired-emails","Rejecting Expired Emails","fixing-up-unexpired-emails","Fixing Up Unexpired Emails","rcpt_to.in_host_list","2020-12-20T00:08:08.864Z")));