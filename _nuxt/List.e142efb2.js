import{a as r,A as l,b as u,B as n,s as p,C as m,k as f}from"./entry.035f7c53.js";import d from"./ContentSlot.abeaa8c5.js";/* empty css                 */const _={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const a=l(),{flatUnwrap:s,unwrap:t}=m(),i=u(()=>e.icon||_[e.type]);return()=>{const c=s((a.default&&a.default())??[],["ul"]).map(o=>t(o,["li"]));return n("ul",c.map(o=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:i.value,class:"icon"})),n("span",n(d,{use:()=>o}))])))}}}),x=f(y,[["__scopeId","data-v-f46a86d3"]]);export{x as default};