import n from"./ContentQuery.afa9994f.js";import{f as c,B as l,C as r}from"./entry.40f52ef6.js";import"./asyncData.cf303417.js";const f=(u,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),_=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=l(),{path:p,query:a}=u,m={...a||{},path:p||(a==null?void 0:a.path)||"/"};return r(n,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>f("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):f("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):f("not-found",e==null?void 0:e.data)}})}});export{_ as default};
