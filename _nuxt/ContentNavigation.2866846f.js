import{k as m,r as f,ag as P,ah as L,e as I,N as D,A as s,m as O,ai as R,d as e,_ as r,a8 as V,L as S,D as y,a4 as b,a9 as c,z as B,aj as x,x as N}from"./entry.4dab792c.js";import"./ContentSlot.59933c3c.js";/* empty css                                                                                    *//* empty css                                                                                                *//* empty css                                                                                   */import"./EditOnLink.vue_vue_type_script_lang.75ccd2cd.js";/* empty css                                                                                        */import"./ProseCodeInline.f50fdc75.js";/* empty css                                                                               *//* empty css                                                                                      *//* empty css                                                                                      *//* empty css                                                                                 *//* empty css                                                                                         *//* empty css                                                                                *//* empty css                                                                                         *//* empty css                                                                                   *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                 *//* empty css                                                                                 *//* empty css                                                                                *//* empty css                                                                                     */import"./ProseTable.e8659180.js";import"./ProseTd.7fbba072.js";import"./ProseTh.e3829f5f.js";import"./ProseThead.7f8b54c7.js";import"./ProseTr.a21a3d3b.js";/* empty css                                                                                 *//* empty css                                                                               *//* empty css                                                                                 *//* empty css                                                                  */import"./CodeGroup.vue_vue_type_style_index_0_scoped_5b9c3794_transformed_true_lang.cc6d8185.js";/* empty css                                                                                  */import"./List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.b2ea4158.js";import"./NuxtImg.vue_vue_type_script_lang.0074603e.js";import"./Props.c5cab125.js";import"./TabsHeader.2d4e7291.js";/* empty css                                                                                 *//* empty css                                                                                  *//* empty css                                                                                     *//* empty css                                                                                        *//* empty css                                                                                   *//* empty css                                                                              *//* empty css                                                                                  *//* empty css                                                                    */import"./ContentDoc.fb533656.js";import"./ContentList.f79aadef.js";import"./ContentQuery.1a43c399.js";import"./ContentRenderer.88ce88a2.js";import"./ContentRendererMarkdown.1debb5d0.js";import"./DocumentDrivenEmpty.c11887c9.js";import"./Markdown.390d71fe.js";import"./layout.fc0429a4.js";import"./ProseTbody.6ec5dce9.js";import"./_commonjsHelpers.726de751.js";const j=m({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const _=f(null),n=P();return L(u=>{if(!n.isHydrating)return o("error",u),_.value=u,!1}),()=>{var u,a;return _.value?(u=i.error)==null?void 0:u.call(i,{error:_}):(a=i.default)==null?void 0:a.call(i)}}}),z=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),M=m({name:"DevOnly",setup(t,i){return()=>null}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),C=m({name:"ServerPlaceholder",render(){return I("div")}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),H=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=$({duration:t.duration,throttle:t.throttle}),_=P();return _.hook("page:start",o.start),_.hook("page:finish",o.finish),D(()=>o.clear),()=>s("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function $(t){const i=f(0),o=f(!1),_=O(()=>1e4/t.duration);let n=null,u=null;function a(){p(),i.value=0,o.value=!0,t.throttle?u=setTimeout(v,t.throttle):v()}function h(){i.value=100,g()}function p(){clearInterval(n),clearTimeout(u),n=null,u=null}function A(T){i.value=Math.min(100,i.value+T)}function g(){p(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function v(){n=setInterval(()=>{A(_.value)},100)}return{progress:i,isLoading:o,start:a,finish:h,clear:p}}const w=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),U=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,_)=>(R(()=>t({...U(o),..._.attrs},_)),()=>{var n,u;return i?(u=(n=_.slots).default)==null?void 0:u.call(n):null}),E={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},F=m({name:"NoScript",inheritAttrs:!1,props:{...E,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n;const o={...t},_=(((n=i.default)==null?void 0:n.call(i))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return _&&(o.children=_),{noscript:[o]}})}),G=m({name:"Link",inheritAttrs:!1,props:{...E,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),J=m({name:"Base",inheritAttrs:!1,props:{...E,href:String,target:String},setup:d(t=>({base:t}))}),K=m({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var _,n,u;return{title:((u=(n=(_=i.default)==null?void 0:_.call(i))==null?void 0:n[0])==null?void 0:u.children)||null}})}),Q=m({name:"Meta",inheritAttrs:!1,props:{...E,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),W=m({name:"Style",inheritAttrs:!1,props:{...E,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var n,u,a;const o={...t},_=(a=(u=(n=i.default)==null?void 0:n.call(i))==null?void 0:u[0])==null?void 0:a.children;return _&&(o.children=_),{style:[o]}})}),X=m({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,_;return(_=(o=i.slots).default)==null?void 0:_.call(o)}}),Y=m({name:"Html",inheritAttrs:!1,props:{...E,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),Z=m({name:"Body",inheritAttrs:!1,props:{...E,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),l=Object.freeze(Object.defineProperty({__proto__:null,NoScript:F,Link:G,Base:J,Title:K,Meta:Q,Style:W,Head:X,Html:Y,Body:Z},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aM),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aS),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aR),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aL),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aN),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aO),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./AppLayout.85d8173e.js"),["./AppLayout.85d8173e.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aE),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aP),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aG),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.c4b69d43.js"),["./DocumentDrivenNotFound.c4b69d43.js","./ButtonLink.e508df12.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ContentSlot.59933c3c.js","./ButtonLink.e8938e49.css","./DocumentDrivenNotFound.2dc65275.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aK),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsAside.8029b576.js"),["./DocsAside.8029b576.js","./entry.4dab792c.js","./entry.1cdbd560.css","./DocsAside.6b3b1439.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aH),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageBottom.9f7a965b.js"),["./DocsPageBottom.9f7a965b.js","./EditOnLink.vue_vue_type_script_lang.75ccd2cd.js","./entry.4dab792c.js","./entry.1cdbd560.css","./DocsPageBottom.a5fe455d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPageContent.0f945653.js"),["./DocsPageContent.0f945653.js","./DocsAside.8029b576.js","./entry.4dab792c.js","./entry.1cdbd560.css","./DocsAside.6b3b1439.css","./ProseCodeInline.f50fdc75.js","./ProseCodeInline.8dac291c.css","./Alert.77e9f012.js","./ContentSlot.59933c3c.js","./Alert.d45fae81.css","./DocsPageBottom.9f7a965b.js","./EditOnLink.vue_vue_type_script_lang.75ccd2cd.js","./DocsPageBottom.a5fe455d.css","./DocsPrevNext.f97172ce.js","./DocsPrevNext.b9a7b8b1.css","./DocsToc.2a6e3b57.js","./DocsTocLinks.1e6bc6b7.js","./DocsTocLinks.fe29d1a5.css","./DocsToc.1acfa7f1.css","./DocsPageContent.5c3c6d93.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsPrevNext.f97172ce.js"),["./DocsPrevNext.f97172ce.js","./entry.4dab792c.js","./entry.1cdbd560.css","./DocsPrevNext.b9a7b8b1.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsToc.2a6e3b57.js"),["./DocsToc.2a6e3b57.js","./DocsTocLinks.1e6bc6b7.js","./entry.4dab792c.js","./entry.1cdbd560.css","./DocsTocLinks.fe29d1a5.css","./DocsToc.1acfa7f1.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocsTocLinks.1e6bc6b7.js"),["./DocsTocLinks.1e6bc6b7.js","./entry.4dab792c.js","./entry.1cdbd560.css","./DocsTocLinks.fe29d1a5.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./EditOnLink.488c366c.js"),["./EditOnLink.488c366c.js","./EditOnLink.vue_vue_type_script_lang.75ccd2cd.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.f3cb316f.js"),["./ProseA.f3cb316f.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseA.64ec70fd.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.7587a18e.js"),["./ProseBlockquote.7587a18e.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseBlockquote.29c52c64.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.68f7bb15.js"),["./ProseCode.68f7bb15.js","./ProseCodeCopyButton.437f868b.js","./entry.4dab792c.js","./entry.1cdbd560.css","./index.4fe56c70.js","./ProseCode.6f021032.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.f50fdc75.js"),["./ProseCodeInline.f50fdc75.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseCodeInline.8dac291c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.c8fe0d13.js"),["./ProseEm.c8fe0d13.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseEm.08155f3c.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.dc7a91da.js"),["./ProseH1.dc7a91da.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseH1.0d18c3ea.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.3751c1d8.js"),["./ProseH2.3751c1d8.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseH2.952dc7f8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.14b8562a.js"),["./ProseH3.14b8562a.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseH3.46398f99.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.ddbb8d70.js"),["./ProseH4.ddbb8d70.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseH4.d17f59ab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.9599b63c.js"),["./ProseH5.9599b63c.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseH5.64397514.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.7f21424e.js"),["./ProseH6.7f21424e.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseH6.f7eb2e7a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.66d0b102.js"),["./ProseHr.66d0b102.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseHr.7f3ea8bf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.849146a6.js"),["./ProseImg.849146a6.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseImg.1b12ee83.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.e7b4301d.js"),["./ProseLi.e7b4301d.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseLi.56d7d461.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.e2af42ee.js"),["./ProseOl.e2af42ee.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseOl.478963df.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.3ba9fd14.js"),["./ProseP.3ba9fd14.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseP.593226fa.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.ce574f4e.js"),["./ProseStrong.ce574f4e.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseStrong.c5091eab.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.e8659180.js"),["./ProseTable.e8659180.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseTable.e86987a4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.6ec5dce9.js"),["./ProseTbody.6ec5dce9.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.7fbba072.js"),["./ProseTd.7fbba072.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseTd.8bba0d9d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.e3829f5f.js"),["./ProseTh.e3829f5f.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseTh.c149ea7b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.7f8b54c7.js"),["./ProseThead.7f8b54c7.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseThead.78551253.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.a21a3d3b.js"),["./ProseTr.a21a3d3b.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseTr.71b8301d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.2db5d547.js"),["./ProseUl.2db5d547.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseUl.d436cdd9.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeCopyButton.437f868b.js"),["./ProseCodeCopyButton.437f868b.js","./entry.4dab792c.js","./entry.1cdbd560.css","./index.4fe56c70.js","./ProseCode.6f021032.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Alert.77e9f012.js"),["./Alert.77e9f012.js","./ContentSlot.59933c3c.js","./entry.4dab792c.js","./entry.1cdbd560.css","./Alert.d45fae81.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Badge.cbda2096.js"),["./Badge.cbda2096.js","./ContentSlot.59933c3c.js","./entry.4dab792c.js","./entry.1cdbd560.css","./Badge.9e503c9a.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ButtonLink.e508df12.js"),["./ButtonLink.e508df12.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ContentSlot.59933c3c.js","./ButtonLink.e8938e49.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Callout.13958723.js"),["./Callout.13958723.js","./ContentSlot.59933c3c.js","./entry.4dab792c.js","./entry.1cdbd560.css","./Callout.fba5dc95.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeBlock.9a359c02.js"),["./CodeBlock.9a359c02.js","./entry.4dab792c.js","./entry.1cdbd560.css","./CodeBlock.e4cadaca.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CodeGroup.8fc68e88.js"),["./CodeGroup.8fc68e88.js","./CodeGroup.vue_vue_type_style_index_0_scoped_5b9c3794_transformed_true_lang.cc6d8185.js","./TabsHeader.2d4e7291.js","./entry.4dab792c.js","./entry.1cdbd560.css","./TabsHeader.dfc736bf.css","./CodeGroup.733e1569.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aQ),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CopyButton.9e916456.js"),["./CopyButton.9e916456.js","./entry.4dab792c.js","./entry.1cdbd560.css","./index.4fe56c70.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Ellipsis.0184e7d6.js"),["./Ellipsis.0184e7d6.js","./entry.4dab792c.js","./entry.1cdbd560.css","./Ellipsis.7dd2380f.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./List.10d2aad6.js"),["./List.10d2aad6.js","./List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.b2ea4158.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ContentSlot.59933c3c.js","./List.7ec09818.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./NuxtImg.ae28a488.js"),["./NuxtImg.ae28a488.js","./NuxtImg.vue_vue_type_script_lang.0074603e.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Props.c5cab125.js"),["./Props.c5cab125.js","./ProseTh.e3829f5f.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseTh.c149ea7b.css","./ProseTr.a21a3d3b.js","./ProseTr.71b8301d.css","./ProseThead.7f8b54c7.js","./ProseThead.78551253.css","./ProseCodeInline.f50fdc75.js","./ProseCodeInline.8dac291c.css","./ProseTd.7fbba072.js","./ProseTd.8bba0d9d.css","./ProseTbody.6ec5dce9.js","./ProseTable.e8659180.js","./ProseTable.e86987a4.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Sandbox.133e0878.js"),["./Sandbox.133e0878.js","./TabsHeader.2d4e7291.js","./entry.4dab792c.js","./entry.1cdbd560.css","./TabsHeader.dfc736bf.css","./Sandbox.35c47b76.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./SourceLink.8568b962.js"),["./SourceLink.8568b962.js","./ProseP.3ba9fd14.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ProseP.593226fa.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./TabsHeader.2d4e7291.js"),["./TabsHeader.2d4e7291.js","./entry.4dab792c.js","./entry.1cdbd560.css","./TabsHeader.dfc736bf.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Terminal.6a35d68a.js"),["./Terminal.6a35d68a.js","./index.4fe56c70.js","./entry.4dab792c.js","./entry.1cdbd560.css","./Terminal.e516d05e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VideoPlayer.b43d4d34.js"),["./VideoPlayer.b43d4d34.js","./NuxtImg.vue_vue_type_script_lang.0074603e.js","./entry.4dab792c.js","./entry.1cdbd560.css","./VideoPlayer.e2296f21.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconCodeSandBox.413492d7.js"),["./IconCodeSandBox.413492d7.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconDocus.c5bfadba.js"),["./IconDocus.c5bfadba.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxt.02c81fb5.js"),["./IconNuxt.02c81fb5.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtContent.80493b9e.js"),["./IconNuxtContent.80493b9e.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtLabs.87b53e78.js"),["./IconNuxtLabs.87b53e78.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconNuxtStudio.f5202f0a.js"),["./IconNuxtStudio.f5202f0a.js","./entry.4dab792c.js","./entry.1cdbd560.css","./IconNuxtStudio.34390cd8.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconStackBlitz.331662e9.js"),["./IconStackBlitz.331662e9.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IconVueTelescope.caa0d3b0.js"),["./IconVueTelescope.caa0d3b0.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./BlockHero.327e4648.js"),["./BlockHero.327e4648.js","./ContentSlot.59933c3c.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ButtonLink.e508df12.js","./ButtonLink.e8938e49.css","./Terminal.6a35d68a.js","./index.4fe56c70.js","./Terminal.e516d05e.css","./BlockHero.b08e53fb.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Card.d6dd84c9.js"),["./Card.d6dd84c9.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ContentSlot.59933c3c.js","./Card.ff22cf2b.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./CardGrid.84ce0e70.js"),["./CardGrid.84ce0e70.js","./ContentSlot.59933c3c.js","./entry.4dab792c.js","./entry.1cdbd560.css","./CardGrid.097da1d2.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./VoltaBoard.cf17ff03.js"),["./VoltaBoard.cf17ff03.js","./entry.4dab792c.js","./entry.1cdbd560.css","./VoltaBoard.0f1b43d3.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aC),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.fb533656.js"),["./ContentDoc.fb533656.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ContentRenderer.88ce88a2.js","./ContentRendererMarkdown.1debb5d0.js","./_commonjsHelpers.726de751.js","./ContentQuery.1a43c399.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.f79aadef.js"),["./ContentList.f79aadef.js","./ContentQuery.1a43c399.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.1a43c399.js"),["./ContentQuery.1a43c399.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.88ce88a2.js"),["./ContentRenderer.88ce88a2.js","./ContentRendererMarkdown.1debb5d0.js","./entry.4dab792c.js","./entry.1cdbd560.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.1debb5d0.js"),["./ContentRendererMarkdown.1debb5d0.js","./entry.4dab792c.js","./entry.1cdbd560.css","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.59933c3c.js"),["./ContentSlot.59933c3c.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.c11887c9.js"),["./DocumentDrivenEmpty.c11887c9.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.390d71fe.js"),["./Markdown.390d71fe.js","./ContentSlot.59933c3c.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.b22ba246.js"),["./welcome.b22ba246.js","./entry.4dab792c.js","./entry.1cdbd560.css","./ContentSlot.59933c3c.js","./EditOnLink.vue_vue_type_script_lang.75ccd2cd.js","./ProseCodeInline.f50fdc75.js","./ProseCodeInline.8dac291c.css","./ProseTable.e8659180.js","./ProseTable.e86987a4.css","./ProseTd.7fbba072.js","./ProseTd.8bba0d9d.css","./ProseTh.e3829f5f.js","./ProseTh.c149ea7b.css","./ProseThead.7f8b54c7.js","./ProseThead.78551253.css","./ProseTr.a21a3d3b.js","./ProseTr.71b8301d.css","./CodeGroup.vue_vue_type_style_index_0_scoped_5b9c3794_transformed_true_lang.cc6d8185.js","./TabsHeader.2d4e7291.js","./TabsHeader.dfc736bf.css","./CodeGroup.733e1569.css","./List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.b2ea4158.js","./List.7ec09818.css","./NuxtImg.vue_vue_type_script_lang.0074603e.js","./Props.c5cab125.js","./ProseTbody.6ec5dce9.js","./ContentDoc.fb533656.js","./ContentRenderer.88ce88a2.js","./ContentRendererMarkdown.1debb5d0.js","./_commonjsHelpers.726de751.js","./ContentQuery.1a43c399.js","./ContentList.f79aadef.js","./DocumentDrivenEmpty.c11887c9.js","./Markdown.390d71fe.js","./layout.fc0429a4.js","./ButtonLink.e8938e49.css","./DocumentDrivenNotFound.2dc65275.css","./DocsAside.6b3b1439.css","./DocsPageBottom.a5fe455d.css","./Alert.d45fae81.css","./DocsPrevNext.b9a7b8b1.css","./DocsTocLinks.fe29d1a5.css","./DocsToc.1acfa7f1.css","./DocsPageContent.5c3c6d93.css","./ProseA.64ec70fd.css","./ProseBlockquote.29c52c64.css","./ProseCode.6f021032.css","./ProseEm.08155f3c.css","./ProseH1.0d18c3ea.css","./ProseH2.952dc7f8.css","./ProseH3.46398f99.css","./ProseH4.d17f59ab.css","./ProseH5.64397514.css","./ProseH6.f7eb2e7a.css","./ProseHr.7f3ea8bf.css","./ProseImg.1b12ee83.css","./ProseLi.56d7d461.css","./ProseOl.478963df.css","./ProseP.593226fa.css","./ProseStrong.c5091eab.css","./ProseUl.d436cdd9.css","./Badge.9e503c9a.css","./Callout.fba5dc95.css","./CodeBlock.e4cadaca.css","./Ellipsis.7dd2380f.css","./Sandbox.35c47b76.css","./Terminal.e516d05e.css","./VideoPlayer.e2296f21.css","./IconNuxtStudio.34390cd8.css","./BlockHero.b08e53fb.css","./Card.ff22cf2b.css","./CardGrid.097da1d2.css","./VoltaBoard.0f1b43d3.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./layout.fc0429a4.js"),["./layout.fc0429a4.js","./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aI),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>k),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aB),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aJ),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aF),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4dab792c.js").then(t=>t.aD),["./entry.4dab792c.js","./entry.1cdbd560.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>l),void 0,import.meta.url).then(t=>t.Body));const tt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=V(t),o=O(()=>{var n;return typeof((n=i.value)==null?void 0:n.params)=="function"?i.value.params():i.value});if(!o.value&&S("dd-navigation").value){const{navigation:n}=y();return{navigation:n}}const{data:_}=await b(`content-navigation-${c(o.value)}`,()=>x(o.value));return{navigation:_}},render(t){const i=B(),{navigation:o}=t,_=a=>s(N,{to:a._path},()=>a.title),n=(a,h)=>s("ul",h?{"data-level":h}:null,a.map(p=>p.children?s("li",null,[_(p),n(p.children,h+1)]):s("li",null,_(p)))),u=a=>n(a,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):u(o)}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{tt as default};