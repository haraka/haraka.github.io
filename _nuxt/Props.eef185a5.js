import $ from"./ProseTh.55ae213c.js";import B from"./ProseTr.408ef80a.js";import C from"./ProseThead.675eaa7c.js";import g from"./ProseCodeInline.6a9b9372.js";import b from"./ProseTd.1cbc7c58.js";import N from"./ProseTbody.8a213408.js";import R from"./ProseTable.42243022.js";import{u as S}from"./asyncData.cf303417.js";import{b as p,f as F,a5 as A,v as c,o as a,c as l,w as e,k as r,y as d,s,e as E,N as I,V as J,t as m}from"./entry.40f52ef6.js";/* empty css                    *//* empty css                    *//* empty css                       *//* empty css                            *//* empty css                    *//* empty css                       */const L=F({props:{of:{type:String,default:void 0},required:{type:Boolean,default:void 0},values:{type:Boolean,default:void 0},description:{type:Boolean,default:void 0},default:{type:Boolean,default:void 0}},async setup(t){const k=`/api/component-meta/${A(t.of)}`,{data:h}=await S(t.of,()=>$fetch(k),"$oSoCJtWFoC"),i=c(()=>h.value.props.filter(o=>{var n;return!((n=o.tags)!=null&&n.ignore.includes(o))})),w=c(()=>{var o;return t.required!==void 0?t.required:(o=i.value)==null?void 0:o.find(n=>n.required!==void 0)}),v=c(()=>{var o;return t.values!==void 0?t.values:(o=i.value)==null?void 0:o.find(n=>n.values)}),f=c(()=>{var o;return t.description!==void 0?t.description:(o=i.value)==null?void 0:o.find(n=>n.description)}),y=c(()=>{var o;return t.default!==void 0?t.default:(o=i.value)==null?void 0:o.find(n=>n.default)});return{meta:h,properties:i,showRequired:w,showValues:v,showDescription:f,showDefault:y}}});function W(t,k,h,i,w,v){var q,D,P;const f=$,y=B,o=C,n=g,_=b,T=N,V=R;return t.meta&&((q=t.meta)!=null&&q.props)&&((P=(D=t.meta)==null?void 0:D.props)!=null&&P.length)?(a(),l(V,{key:0},{default:e(()=>[r(o,null,{default:e(()=>[r(y,null,{default:e(()=>[r(f,null,{default:e(()=>[d("Prop")]),_:1}),r(f,null,{default:e(()=>[d("Type")]),_:1}),t.showRequired?(a(),l(f,{key:0},{default:e(()=>[d(" Required ")]),_:1})):s("",!0),t.showDefault?(a(),l(f,{key:1},{default:e(()=>[d(" Default ")]),_:1})):s("",!0),t.showValues?(a(),l(f,{key:2},{default:e(()=>[d(" Values ")]),_:1})):s("",!0),t.showDescription?(a(),l(f,{key:3},{default:e(()=>[d(" Description ")]),_:1})):s("",!0)]),_:1})]),_:1}),r(T,null,{default:e(()=>[(a(!0),E(I,null,J(t.properties,u=>(a(),l(y,{key:u.name},{default:e(()=>[r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.name)||"?"),1)]),_:2},1024)]),_:2},1024),r(_,null,{default:e(()=>[r(n,null,{default:e(()=>[d(m((u==null?void 0:u.type)||"?"),1)]),_:2},1024)]),_:2},1024),t.showRequired?(a(),l(_,{key:0},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.required==="?"?"?":u.required?"Yes":"No"),1)]),_:2},1024)]),_:2},1024)):s("",!0),t.showDefault?(a(),l(_,{key:1},{default:e(()=>[u.default?(a(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.default)||"?"),1)]),_:2},1024)):s("",!0)]),_:2},1024)):s("",!0),t.showValues?(a(),l(_,{key:2},{default:e(()=>[u.values?(a(),l(n,{key:0},{default:e(()=>[d(m((u==null?void 0:u.values)||"?"),1)]),_:2},1024)):(a(),l(n,{key:1},{default:e(()=>[d(" - ")]),_:1}))]),_:2},1024)):s("",!0),t.showDescription?(a(),l(_,{key:3},{default:e(()=>[r(n,null,{default:e(()=>[d(m(u.description),1)]),_:2},1024)]),_:2},1024)):s("",!0)]),_:2},1024))),128))]),_:1})]),_:1})):s("",!0)}const ne=p(L,[["render",W]]);export{ne as default};
