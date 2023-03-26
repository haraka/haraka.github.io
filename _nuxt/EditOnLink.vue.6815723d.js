import{f as v,h as u,v as c,I as y,B as w}from"./entry.40f52ef6.js";const q=v({props:{owner:{type:String,default:()=>{var e,t;return(t=(e=u())==null?void 0:e.docus.github)==null?void 0:t.owner},required:!1},repo:{type:String,default:()=>{var e,t;return(t=(e=u())==null?void 0:e.docus.github)==null?void 0:t.repo},required:!1},branch:{type:String,default:()=>{var e,t;return(t=(e=u())==null?void 0:e.docus.github)==null?void 0:t.branch},required:!1},dir:{type:String,default:()=>{var e,t;return(t=(e=u())==null?void 0:e.docus.github)==null?void 0:t.dir},required:!1},source:{type:String,required:!1,default:void 0},page:{type:Object,required:!1,default:void 0},contentDir:{type:String,required:!1,default:()=>{var e,t;return((t=(e=u())==null?void 0:e.docus.github)==null?void 0:t.dir)||"content"}},edit:{type:Boolean,required:!1,default:()=>{var e,t;return(t=(e=u())==null?void 0:e.docus.github)==null?void 0:t.edit}}},setup(e){if(!e.owner||!e.repo||!e.branch)throw new Error("If you want to use `GithubLink` component, you must specify: `owner`, `repo` and `branch`.");const t=c(()=>{var s,h;let{repo:r,owner:i,branch:d,contentDir:f}=e,l="";if((h=(s=u())==null?void 0:s.public)!=null&&h.content){let n;const{sources:b}=u().public.content;for(const g in b||[])if(e.page._id.startsWith(g)){n=b[g];break}(n==null?void 0:n.driver)==="github"&&(r=n.repo||e.repo||"",i=n.owner||e.owner||"",d=n.branch||e.branch||"main",f=n.dir||e.contentDir||"",l=n.prefix||"")}return{repo:r,owner:i,branch:d,contentDir:f,prefix:l}}),a=c(()=>y("https://github.com",`${t.value.owner}/${t.value.repo}`)),o=c(()=>{var i;const r=[];return(i=e==null?void 0:e.page)!=null&&i._path?(t.value.contentDir&&r.push(t.value.contentDir),r.push(e.page._file.substring(t.value.prefix.length)),r):(e.dir&&r.push(e.dir),e.source&&r.push(e.source),r)});return{url:c(()=>{var i;const r=[a.value];return e.edit?r.push("edit"):r.push("tree"),r.push(((i=t==null?void 0:t.value)==null?void 0:i.branch)||"",...o.value),r.filter(Boolean).join("/")})}},render(e){var o;const{url:t}=e,a=w();return(o=a==null?void 0:a.default)==null?void 0:o.call(a,{url:t})}});export{q as _};
