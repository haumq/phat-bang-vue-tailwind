import{c as n,C as p,D as _,r as g,E as k,o as t,b as y,d as x,w as B,g as c,h as i,G as C,f as r,H as u,j as o,I as w,i as S,n as $,J as b}from"./index.2f0e4f3c.js";const v={class:"flex flex-col md:flex-row items-center"},N={class:"text-center md:text-left"},D={__name:"NotificationBar",props:{icon:{type:String,default:null},outline:Boolean,color:{type:String,required:!0}},setup(e){const s=e,d=n(()=>s.outline?p[s.color]:_[s.color]),a=g(!1),m=()=>{a.value=!0},f=k(),h=n(()=>f.right);return(l,V)=>a.value?r("",!0):(t(),y("div",{key:0,class:b([o(d),"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded transition-colors duration-150"])},[x($,null,{default:B(()=>[c("div",v,[e.icon?(t(),i(C,{key:0,path:e.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"])):r("",!0),c("span",N,[u(l.$slots,"default")])]),o(h)?u(l.$slots,"right",{key:0}):(t(),i(S,{key:1,icon:o(w),outline:e.outline,small:"",onClick:m},null,8,["icon","outline"]))]),_:3})],2))}};export{D as _};
