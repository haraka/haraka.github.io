/* empty css                         */import{i as d,R as h,S as v,M as f,f as _,U as g,o as a,e as p,N as y,V as k,l as m,j as b,t as S,u as x,W as B,c as C,s as H,b as A}from"./entry.40f52ef6.js";const q=()=>{const n=d(),o=d([]),c=d([]),r=e=>e.forEach(t=>{const l=t.target.id;t.isIntersecting?o.value.push(l):o.value=o.value.filter(i=>i!==l)}),u=e=>e.forEach(t=>{n.value.observe(t)});return h(o,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),v(()=>n.value=new IntersectionObserver(r)),f(()=>{var e;return(e=n.value)==null?void 0:e.disconnect()}),{visibleHeadings:o,activeHeadings:c,updateHeadings:u}},T={class:"docs-toc-links"},$=["href","onClick"],w=_({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(n,{emit:o}){const c=g(),{activeHeadings:r,updateHeadings:u}=q();setTimeout(()=>{u([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function e(t){c.push(`#${t}`),o("move",t)}return(t,l)=>{const i=D;return a(),p("ul",T,[(a(!0),p(y,null,k(n.links,s=>(a(),p("li",{key:s.text,class:m([`depth-${s.depth}`])},[b("a",{href:`#${s.id}`,class:m([x(r).includes(s.id)&&"active"]),onClick:B(E=>e(s.id),["prevent"])},S(s.text),11,$),s.children?(a(),C(i,{key:0,links:s.children},null,8,["links"])):H("",!0)],2))),128))])}}}),D=A(w,[["__scopeId","data-v-8d68a659"]]);export{D as default};
