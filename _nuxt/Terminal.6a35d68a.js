import{u as _}from"./index.4fe56c70.js";import{k as u,r as m,o as c,e as n,u as a,s as i,f as o,I as h,p as v,j as f,b as y}from"./entry.4dab792c.js";/* empty css                                                                                  */const e=s=>(v("data-v-629e8a95"),s=s(),f(),s),C={key:0,class:"copied"},k=e(()=>o("div",{class:"scrim"},null,-1)),I=e(()=>o("div",{class:"content"}," Copied! ",-1)),S=[k,I],b=e(()=>o("div",{class:"header"},[o("div",{class:"controls"},[o("div"),o("div"),o("div")]),o("div",{class:"title"}," Bash ")],-1)),w={class:"window"},x=e(()=>o("span",{class:"sign"},"$",-1)),B={class:"content"},g={key:1,class:"prompt"},T=u({__name:"Terminal",props:{content:{type:String,required:!0}},setup(s){const d=s,{copy:p}=_(),t=m("init"),r=l=>{p(d.content).then(()=>{t.value="copied",setTimeout(()=>{t.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(l,N)=>(c(),n("div",{class:"terminal",onClick:r},[a(t)==="copied"?(c(),n("div",C,S)):i("",!0),b,o("div",w,[x,o("span",B,h(s.content),1)]),a(t)!=="copied"?(c(),n("div",g," Click to copy ")):i("",!0)]))}}),D=y(T,[["__scopeId","data-v-629e8a95"]]);export{D as default};