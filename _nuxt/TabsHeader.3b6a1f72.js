import{f as m,i as l,R as b,o as a,e as s,N as v,V as g,j as u,s as x,r as y,l as k,t as I,p as T,q as $,$ as C,b as S}from"./entry.40f52ef6.js";/* empty css                       */const N=t=>(T("data-v-fa060d5c"),t=t(),$(),t),q={class:"tabs-header"},w=["onClick"],B=N(()=>u("span",{class:"tab"},null,-1)),R=[B],U=m({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,n=l(),r=l(),i=e=>{e&&(r.value.style.left=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{p("update:activeTabIndex",c),C(()=>i(e.target))};return b(n,e=>{e&&setTimeout(()=>{i(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",q,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:k([t.activeTabIndex===o?"active":"not-active"]),onClick:_=>f(_,o)},I(d),11,w))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},R,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}}),L=S(U,[["__scopeId","data-v-fa060d5c"]]);export{L as default};
