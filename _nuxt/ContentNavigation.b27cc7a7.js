import{k as m,r as f,ag as P,ah as L,e as I,N as D,A as s,m as O,ai as R,d as e,_ as r,a8 as V,L as S,D as y,a4 as b,a9 as c,z as B,aj as x,x as N}from"./entry.e06f7e10.js";import"./ContentSlot.dabd636c.js";/* empty css                                                                                    *//* empty css                                                                                                *//* empty css                                                                                   */import"./EditOnLink.vue_vue_type_script_lang.0fa361fe.js";/* empty css                                                                                        */import"./ProseCodeInline.cd9d66b2.js";/* empty css                                                                               *//* empty css                                                                                      *//* empty css                                                                                      *//* empty css                                                                                 *//* empty css                                                                                         *//* empty css                                                                                *//* empty css                                                                                         *//* empty css                                                                                   *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                *//* empty css                                                                                     */import"./ProseTable.c9f9698b.js";import"./ProseTd.f487b215.js";import"./ProseTh.369d864f.js";import"./ProseThead.2c79b21e.js";import"./ProseTr.1619b4c5.js";/* empty css                                                                                 *//* empty css                                                                               *//* empty css                                                                                 *//* empty css                                                                  */import"./CodeGroup.vue_vue_type_style_index_0_scoped_a516578b_transformed_true_lang.86424734.js";/* empty css                                                                                  */import"./List.vue_vue_type_style_index_0_scoped_f4e70c29_transformed_true_lang.f627aad3.js";import"./NuxtImg.vue_vue_type_script_lang.4e222331.js";import"./Props.4d65c2f4.js";import"./TabsHeader.27e56d1b.js";/* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                     *//* empty css                                                                                        *//* empty css                                                                                   *//* empty css                                                                              *//* empty css                                                                                  *//* empty css                                                                    *//* empty css                                                                           */import"./ContentDoc.d61df2c8.js";import"./ContentList.b54f67d7.js";import"./ContentQuery.a49f6aa4.js";import"./ContentRenderer.59d469cf.js";import"./ContentRendererMarkdown.0fb71d19.js";import"./DocumentDrivenEmpty.4175bc35.js";import"./Markdown.141e17f2.js";import"./layout.caad6fa4.js";import"./ProseTbody.de57eae9.js";import"./_commonjsHelpers.726de751.js";const j=m({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const _=f(null),n=P();return L(u=>{if(!n.isHydrating)return o("error",u),_.value=u,!1}),()=>{var u,a;return _.value?(u=i.error)==null?void 0:u.call(i,{error:_}):(a=i.default)==null?void 0:a.call(i)}}}),z=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),M=m({name:"DevOnly",setup(t,i){return()=>null}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),q=m({name:"ServerPlaceholder",render(){return I("div")}}),C=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),H=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=$({duration:t.duration,throttle:t.throttle}),_=P();return _.hook("page:start",o.start),_.hook("page:finish",o.finish),D(()=>o.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function $(t){const i=f(0),o=f(!1),_=O(()=>1e4/t.duration);let n=null,u=null;function a(){p(),i.value=0,o.value=!0,t.throttle?u=setTimeout(v,t.throttle):v()}function h(){i.value=100,T()}function p(){clearInterval(n),clearTimeout(u),n=null,u=null}function A(g){i.value=Math.min(100,i.value+g)}function T(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function v(){n=setInterval(()=>{A(_.value)},100)}return{progress:i,isLoading:o,start:a,finish:h,clear:p}}const w=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),U=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,_)=>(R(()=>t({...U(o),..._.attrs},_)),()=>{var n,u;return i?(u=(n=_.slots).default)==null?void 0:u.call(n):null}),E={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},F=m({name:"NoScript",inheritAttrs:!1,props:{...E,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n;const o={...t},_=(((n=i.default)==null?void 0:n.call(i))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return _&&(o.children=_),{noscript:[o]}})}),G=m({name:"Link",inheritAttrs:!1,props:{...E,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),J=m({name:"Base",inheritAttrs:!1,props:{...E,href:String,target:String},setup:d(t=>({base:t}))}),K=m({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var _,n,u;return{title:((u=(n=(_=i.default)==null?void 0:_.call(i))==null?void 0:n[0])==null?void 0:u.children)||null}})}),Q=m({name:"Meta",inheritAttrs:!1,props:{...E,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),W=m({name:"Style",inheritAttrs:!1,props:{...E,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n,u,a;const o={...t},_=(a=(u=(n=i.default)==null?void 0:n.call(i))==null?void 0:u[0])==null?void 0:a.children;return _&&(o.children=_),{style:[o]}})}),X=m({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,_;return(_=(o=i.slots).default)==null?void 0:_.call(o)}}),Y=m({name:"Html",inheritAttrs:!1,props:{...E,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),Z=m({name:"Body",inheritAttrs:!1,props:{...E,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),l=Object.freeze(Object.defineProperty({__proto__:null,NoScript:F,Link:G,Base:J,Title:K,Meta:Q,Style:W,Head:X,Html:Y,Body:Z},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aQ),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aW),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aV),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aP),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aR),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aS),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./AppLayout.c43ff537.js"),["./AppLayout.c43ff537.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aI),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aT),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aK),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.0f469262.js"),["./DocumentDrivenNotFound.0f469262.js","./ButtonLink.131ffbd3.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ContentSlot.dabd636c.js","./ButtonLink.eec5f319.css","./DocumentDrivenNotFound.434430ce.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aO),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsAside.98d143d9.js"),["./DocsAside.98d143d9.js","./entry.e06f7e10.js","./entry.03ae1972.css","./DocsAside.307f4bb4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aL),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageBottom.c276b241.js"),["./DocsPageBottom.c276b241.js","./EditOnLink.vue_vue_type_script_lang.0fa361fe.js","./entry.e06f7e10.js","./entry.03ae1972.css","./DocsPageBottom.7dd428f5.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageContent.9e186439.js"),["./DocsPageContent.9e186439.js","./DocsAside.98d143d9.js","./entry.e06f7e10.js","./entry.03ae1972.css","./DocsAside.307f4bb4.css","./ProseCodeInline.cd9d66b2.js","./ProseCodeInline.5c292c0c.css","./Alert.0f18de1f.js","./ContentSlot.dabd636c.js","./Alert.4980d57b.css","./DocsPageBottom.c276b241.js","./EditOnLink.vue_vue_type_script_lang.0fa361fe.js","./DocsPageBottom.7dd428f5.css","./DocsPrevNext.26347478.js","./DocsPrevNext.ab4a6a73.css","./DocsToc.3406351f.js","./DocsTocLinks.b9f77dd5.js","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css","./DocsPageContent.dbe6327f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPrevNext.26347478.js"),["./DocsPrevNext.26347478.js","./entry.e06f7e10.js","./entry.03ae1972.css","./DocsPrevNext.ab4a6a73.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsToc.3406351f.js"),["./DocsToc.3406351f.js","./DocsTocLinks.b9f77dd5.js","./entry.e06f7e10.js","./entry.03ae1972.css","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsTocLinks.b9f77dd5.js"),["./DocsTocLinks.b9f77dd5.js","./entry.e06f7e10.js","./entry.03ae1972.css","./DocsTocLinks.2846f127.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./EditOnLink.40c16be9.js"),["./EditOnLink.40c16be9.js","./EditOnLink.vue_vue_type_script_lang.0fa361fe.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.f84585da.js"),["./ProseA.f84585da.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseA.c0b3282e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.437cac71.js"),["./ProseBlockquote.437cac71.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseBlockquote.8cd3c64f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.04a37c8d.js"),["./ProseCode.04a37c8d.js","./ProseCodeCopyButton.2e3e3e7b.js","./entry.e06f7e10.js","./entry.03ae1972.css","./index.f429ee2e.js","./ProseCode.bb401702.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.cd9d66b2.js"),["./ProseCodeInline.cd9d66b2.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseCodeInline.5c292c0c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.064fd6e5.js"),["./ProseEm.064fd6e5.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseEm.08155f3c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.db095b91.js"),["./ProseH1.db095b91.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseH1.713a018b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.2c9ef146.js"),["./ProseH2.2c9ef146.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseH2.c3733cfa.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.a7ae3130.js"),["./ProseH3.a7ae3130.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseH3.c20b07eb.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.fb24ed8f.js"),["./ProseH4.fb24ed8f.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseH4.99474624.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.98e85958.js"),["./ProseH5.98e85958.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseH5.fa6d9ad5.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.248e3469.js"),["./ProseH6.248e3469.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseH6.4a50fcaf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.7a92ab84.js"),["./ProseHr.7a92ab84.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseHr.7f3ea8bf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.d92a09b1.js"),["./ProseImg.d92a09b1.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseImg.1b12ee83.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.54e0840d.js"),["./ProseLi.54e0840d.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseLi.7005f7b9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.af8de666.js"),["./ProseOl.af8de666.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseOl.f18f1ab6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.5e957c4f.js"),["./ProseP.5e957c4f.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseP.8117fd4f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.a4849c1a.js"),["./ProseStrong.a4849c1a.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseStrong.22b57f6c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.c9f9698b.js"),["./ProseTable.c9f9698b.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseTable.cb863e95.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.de57eae9.js"),["./ProseTbody.de57eae9.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.f487b215.js"),["./ProseTd.f487b215.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseTd.8bba0d9d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.369d864f.js"),["./ProseTh.369d864f.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseTh.82079a3d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.2c79b21e.js"),["./ProseThead.2c79b21e.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseThead.8eca405b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.1619b4c5.js"),["./ProseTr.1619b4c5.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseTr.09362402.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.8dab5c14.js"),["./ProseUl.8dab5c14.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseUl.c24d887f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeCopyButton.2e3e3e7b.js"),["./ProseCodeCopyButton.2e3e3e7b.js","./entry.e06f7e10.js","./entry.03ae1972.css","./index.f429ee2e.js","./ProseCode.bb401702.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Alert.0f18de1f.js"),["./Alert.0f18de1f.js","./ContentSlot.dabd636c.js","./entry.e06f7e10.js","./entry.03ae1972.css","./Alert.4980d57b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Badge.4e00728b.js"),["./Badge.4e00728b.js","./ContentSlot.dabd636c.js","./entry.e06f7e10.js","./entry.03ae1972.css","./Badge.1b55ae19.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ButtonLink.131ffbd3.js"),["./ButtonLink.131ffbd3.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ContentSlot.dabd636c.js","./ButtonLink.eec5f319.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Callout.763491d9.js"),["./Callout.763491d9.js","./ContentSlot.dabd636c.js","./entry.e06f7e10.js","./entry.03ae1972.css","./Callout.09d7a57a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeBlock.b31cf203.js"),["./CodeBlock.b31cf203.js","./entry.e06f7e10.js","./entry.03ae1972.css","./CodeBlock.e4cadaca.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeGroup.61b29963.js"),["./CodeGroup.61b29963.js","./CodeGroup.vue_vue_type_style_index_0_scoped_a516578b_transformed_true_lang.86424734.js","./TabsHeader.27e56d1b.js","./entry.e06f7e10.js","./entry.03ae1972.css","./TabsHeader.fed4d9b4.css","./CodeGroup.142222ce.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aU),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CopyButton.1e64a189.js"),["./CopyButton.1e64a189.js","./entry.e06f7e10.js","./entry.03ae1972.css","./index.f429ee2e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Ellipsis.3253fb69.js"),["./Ellipsis.3253fb69.js","./entry.e06f7e10.js","./entry.03ae1972.css","./Ellipsis.cb474bc0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./List.f20e871e.js"),["./List.f20e871e.js","./List.vue_vue_type_style_index_0_scoped_f4e70c29_transformed_true_lang.f627aad3.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ContentSlot.dabd636c.js","./List.a65f0e81.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./NuxtImg.4e3d09f2.js"),["./NuxtImg.4e3d09f2.js","./NuxtImg.vue_vue_type_script_lang.4e222331.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Props.4d65c2f4.js"),["./Props.4d65c2f4.js","./ProseTh.369d864f.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseTh.82079a3d.css","./ProseTr.1619b4c5.js","./ProseTr.09362402.css","./ProseThead.2c79b21e.js","./ProseThead.8eca405b.css","./ProseCodeInline.cd9d66b2.js","./ProseCodeInline.5c292c0c.css","./ProseTd.f487b215.js","./ProseTd.8bba0d9d.css","./ProseTbody.de57eae9.js","./ProseTable.c9f9698b.js","./ProseTable.cb863e95.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Sandbox.4bb2be86.js"),["./Sandbox.4bb2be86.js","./TabsHeader.27e56d1b.js","./entry.e06f7e10.js","./entry.03ae1972.css","./TabsHeader.fed4d9b4.css","./Sandbox.171d9183.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./SourceLink.cd2818db.js"),["./SourceLink.cd2818db.js","./ProseP.5e957c4f.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ProseP.8117fd4f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./TabsHeader.27e56d1b.js"),["./TabsHeader.27e56d1b.js","./entry.e06f7e10.js","./entry.03ae1972.css","./TabsHeader.fed4d9b4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Terminal.79e86a94.js"),["./Terminal.79e86a94.js","./index.f429ee2e.js","./entry.e06f7e10.js","./entry.03ae1972.css","./Terminal.c60347f9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VideoPlayer.1715b9a3.js"),["./VideoPlayer.1715b9a3.js","./NuxtImg.vue_vue_type_script_lang.4e222331.js","./entry.e06f7e10.js","./entry.03ae1972.css","./VideoPlayer.e2296f21.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconCodeSandBox.f2d5714b.js"),["./IconCodeSandBox.f2d5714b.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconDocus.a50a3450.js"),["./IconDocus.a50a3450.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxt.b4b30743.js"),["./IconNuxt.b4b30743.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtContent.4ff27e33.js"),["./IconNuxtContent.4ff27e33.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtLabs.be6b7a3b.js"),["./IconNuxtLabs.be6b7a3b.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtStudio.197a2ae1.js"),["./IconNuxtStudio.197a2ae1.js","./entry.e06f7e10.js","./entry.03ae1972.css","./IconNuxtStudio.34390cd8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconStackBlitz.f1461bfc.js"),["./IconStackBlitz.f1461bfc.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconVueTelescope.c377787b.js"),["./IconVueTelescope.c377787b.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BlockHero.68d1b57e.js"),["./BlockHero.68d1b57e.js","./ContentSlot.dabd636c.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ButtonLink.131ffbd3.js","./ButtonLink.eec5f319.css","./Terminal.79e86a94.js","./index.f429ee2e.js","./Terminal.c60347f9.css","./BlockHero.3339d24a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Card.8e4b0bef.js"),["./Card.8e4b0bef.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ContentSlot.dabd636c.js","./Card.cefe153a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CardGrid.f616fbed.js"),["./CardGrid.f616fbed.js","./ContentSlot.dabd636c.js","./entry.e06f7e10.js","./entry.03ae1972.css","./CardGrid.0224782b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VoltaBoard.a7ece731.js"),["./VoltaBoard.a7ece731.js","./entry.e06f7e10.js","./entry.03ae1972.css","./VoltaBoard.db5da1f6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentPreviewMode.dcdd15fa.js"),["./ContentPreviewMode.dcdd15fa.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ContentPreviewMode.7e5d251b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.d61df2c8.js"),["./ContentDoc.d61df2c8.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ContentRenderer.59d469cf.js","./ContentRendererMarkdown.0fb71d19.js","./_commonjsHelpers.726de751.js","./ContentQuery.a49f6aa4.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.b54f67d7.js"),["./ContentList.b54f67d7.js","./ContentQuery.a49f6aa4.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.a49f6aa4.js"),["./ContentQuery.a49f6aa4.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.59d469cf.js"),["./ContentRenderer.59d469cf.js","./ContentRendererMarkdown.0fb71d19.js","./entry.e06f7e10.js","./entry.03ae1972.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.0fb71d19.js"),["./ContentRendererMarkdown.0fb71d19.js","./entry.e06f7e10.js","./entry.03ae1972.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.dabd636c.js"),["./ContentSlot.dabd636c.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.4175bc35.js"),["./DocumentDrivenEmpty.4175bc35.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.141e17f2.js"),["./Markdown.141e17f2.js","./ContentSlot.dabd636c.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.8f594d3a.js"),["./welcome.8f594d3a.js","./entry.e06f7e10.js","./entry.03ae1972.css","./ContentSlot.dabd636c.js","./EditOnLink.vue_vue_type_script_lang.0fa361fe.js","./ProseCodeInline.cd9d66b2.js","./ProseCodeInline.5c292c0c.css","./ProseTable.c9f9698b.js","./ProseTable.cb863e95.css","./ProseTd.f487b215.js","./ProseTd.8bba0d9d.css","./ProseTh.369d864f.js","./ProseTh.82079a3d.css","./ProseThead.2c79b21e.js","./ProseThead.8eca405b.css","./ProseTr.1619b4c5.js","./ProseTr.09362402.css","./CodeGroup.vue_vue_type_style_index_0_scoped_a516578b_transformed_true_lang.86424734.js","./TabsHeader.27e56d1b.js","./TabsHeader.fed4d9b4.css","./CodeGroup.142222ce.css","./List.vue_vue_type_style_index_0_scoped_f4e70c29_transformed_true_lang.f627aad3.js","./List.a65f0e81.css","./NuxtImg.vue_vue_type_script_lang.4e222331.js","./Props.4d65c2f4.js","./ProseTbody.de57eae9.js","./ContentDoc.d61df2c8.js","./ContentRenderer.59d469cf.js","./ContentRendererMarkdown.0fb71d19.js","./_commonjsHelpers.726de751.js","./ContentQuery.a49f6aa4.js","./ContentList.b54f67d7.js","./DocumentDrivenEmpty.4175bc35.js","./Markdown.141e17f2.js","./layout.caad6fa4.js","./ButtonLink.eec5f319.css","./DocumentDrivenNotFound.434430ce.css","./DocsAside.307f4bb4.css","./DocsPageBottom.7dd428f5.css","./Alert.4980d57b.css","./DocsPrevNext.ab4a6a73.css","./DocsTocLinks.2846f127.css","./DocsToc.6b8d2996.css","./DocsPageContent.dbe6327f.css","./ProseA.c0b3282e.css","./ProseBlockquote.8cd3c64f.css","./ProseCode.bb401702.css","./ProseEm.08155f3c.css","./ProseH1.713a018b.css","./ProseH2.c3733cfa.css","./ProseH3.c20b07eb.css","./ProseH4.99474624.css","./ProseH5.fa6d9ad5.css","./ProseH6.4a50fcaf.css","./ProseHr.7f3ea8bf.css","./ProseImg.1b12ee83.css","./ProseLi.7005f7b9.css","./ProseOl.f18f1ab6.css","./ProseP.8117fd4f.css","./ProseStrong.22b57f6c.css","./ProseUl.c24d887f.css","./Badge.1b55ae19.css","./Callout.09d7a57a.css","./CodeBlock.e4cadaca.css","./Ellipsis.cb474bc0.css","./Sandbox.171d9183.css","./Terminal.c60347f9.css","./VideoPlayer.e2296f21.css","./IconNuxtStudio.34390cd8.css","./BlockHero.3339d24a.css","./Card.cefe153a.css","./CardGrid.0224782b.css","./VoltaBoard.db5da1f6.css","./ContentPreviewMode.7e5d251b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./layout.caad6fa4.js"),["./layout.caad6fa4.js","./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aM),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>k),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>C),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aG),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aN),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aJ),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.e06f7e10.js").then(t=>t.aH),["./entry.e06f7e10.js","./entry.03ae1972.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Body));const tt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=V(t),o=O(()=>{var n;return typeof((n=i.value)==null?void 0:n.params)=="function"?i.value.params():i.value});if(!o.value&&S("dd-navigation").value){const{navigation:n}=y();return{navigation:n}}const{data:_}=await b(`content-navigation-${c(o.value)}`,()=>x(o.value));return{navigation:_}},render(t){const i=B(),{navigation:o}=t,_=a=>s(N,{to:a._path},()=>a.title),n=(a,h)=>s("ul",h?{"data-level":h}:null,a.map(p=>p.children?s("li",null,[_(p),n(p.children,h+1)]):s("li",null,_(p)))),u=a=>n(a,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):u(o)}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{tt as default};
