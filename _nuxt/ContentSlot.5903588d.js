import{f as g,B as h,v as c,C as p,D as y,E as w}from"./entry.40f52ef6.js";const m=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:u}=w(),{between:o,default:l}=h(),i=c(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:o,parent:u}},render({use:e,unwrap:u,fallbackSlot:o,between:l,tags:i,parent:n}){var f;try{let r=e;if(typeof e=="string"&&(r=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!r)return o?o():p("div");if(!u)return[r()];const{flatUnwrap:d}=y(),a=d(r(),i);return l?a.flatMap((t,s)=>s===0?[t]:[l(),t]):a.reduce((t,s)=>(typeof s.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=s.children:t.push(s.children):t.push(s),t),[])}catch{return p("div")}}});export{m as default};
