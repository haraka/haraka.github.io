import f from"./ContentSlot.abeaa8c5.js";import y from"./ButtonLink.9f37fd29.js";import h from"./Terminal.8dc5c312.js";import k from"./VideoPlayer.930ee48c.js";import{a as v,o as s,f as a,j as o,q as c,v as r,w as l,y as u,c as i,M as $,t as d,r as w,k as B}from"./entry.035f7c53.js";/* empty css                      *//* empty css                       */import"./index.3e733fb5.js";/* empty css                     */import"./NuxtImg.vue.b19e30d6.js";/* empty css                        */const q={class:"block-hero"},S={class:"layout"},V={class:"content"},g={key:0,class:"announce"},C={class:"title"},H={class:"description"},N={key:1,class:"extra"},b={class:"actions"},A=["href"],T={class:"support"},x=v({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,j)=>{const n=f,p=y,m=h,_=k;return s(),a("section",q,[o("div",S,[o("div",V,[t.$slots.announce?(s(),a("p",g,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",C,[c(n,{use:t.$slots.title,unwrap:"p"},{default:l(()=>[u(" Hero Title ")]),_:1},8,["use"])]),o("p",H,[c(n,{use:t.$slots.description,unwrap:"p"},{default:l(()=>[u(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",N,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",b,[t.$slots.actions?(s(),i(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a($,{key:1},[e.cta?(s(),i(p,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:l(()=>[u(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,A)):r("",!0)],64))])]),o("div",T,[w(t.$slots,"support",{},()=>[e.snippet?(s(),i(m,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),i(_,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),O=B(x,[["__scopeId","data-v-b95c8d5e"]]);export{O as default};