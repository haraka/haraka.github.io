import{d as a,G as i,al as n,l as c,c as o,e as d,M as h,H as u,k as l}from"./MgqEaMNN.js";const f=["src","alt","width","height"],m=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,r=i(()=>{var s;return(s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")?n(e.src,c().app.baseURL):e.src});return(s,g)=>(o(),d("img",h(s.$attrs,{src:u(r),alt:t.alt,width:t.width,height:t.height}),null,16,f))}}),w=l(m,[["__scopeId","data-v-2ef15301"]]);export{w as default};