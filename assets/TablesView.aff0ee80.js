import{u as W,a as q,c as m,r as h,o as n,b as i,d as t,w as o,F as b,e as w,t as r,f as $,g as e,h as T,_ as z,i as f,j as s,m as O,k as R,l as A,n as I,p,q as J,s as C,v as x,S as K,x as S,y as Q,z as X,A as Y,B as E}from"./index.acec98b0.js";import{_ as V}from"./NotificationBar.38a01b99.js";import{_ as L}from"./CardBoxModal.aadd27d0.js";import{_ as Z}from"./TableCheckboxCell.3509290f.js";const ee=e("p",null,[p("Lorem ipsum dolor sit amet "),e("b",null,"adipiscing elit")],-1),le=e("p",null,"This is sample modal",-1),te=e("p",null,[p("Lorem ipsum dolor sit amet "),e("b",null,"adipiscing elit")],-1),ae=e("p",null,"This is sample modal",-1),se={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},oe={key:0},ne=e("th",null,null,-1),ie=e("th",null,"Name",-1),re=e("th",null,"Company",-1),ce=e("th",null,"City",-1),ue=e("th",null,"Progress",-1),de=e("th",null,"Created",-1),_e=e("th",null,null,-1),me={class:"border-b-0 lg:w-6 before:hidden"},he={"data-label":"Name"},pe={"data-label":"Company"},be={"data-label":"City"},fe={"data-label":"Progress",class:"lg:w-32"},ge=["value"],ve={"data-label":"Created",class:"lg:w-1 whitespace-nowrap"},ye=["title"],ke={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},j={__name:"TableSampleClients",props:{checkable:Boolean},setup(g){const P=W(),M=q(),B=m(()=>M.clients),v=h(!1),y=h(!1),k=h(10),d=h(0),_=h([]),D=m(()=>B.value.slice(k.value*d.value,k.value*(d.value+1))),N=m(()=>Math.ceil(B.value.length/k.value)),F=m(()=>d.value+1),G=m(()=>{const c=[];for(let a=0;a<N.value;a++)c.push(a);return c}),H=(c,a)=>{const l=[];return c.forEach(u=>{a(u)||l.push(u)}),l},U=(c,a)=>{c?_.value.push(a):_.value=H(_.value,l=>l.id===a.id)};return(c,a)=>(n(),i(b,null,[t(L,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=l=>v.value=l),title:"Sample modal"},{default:o(()=>[ee,le]),_:1},8,["modelValue"]),t(L,{modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=l=>y.value=l),"large-title":"Please confirm",button:"danger","has-cancel":""},{default:o(()=>[te,ae]),_:1},8,["modelValue"]),_.value.length?(n(),i("div",se,[(n(!0),i(b,null,w(_.value,l=>(n(),i("span",{key:l.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},r(l.name),1))),128))])):$("",!0),e("table",null,[e("thead",null,[e("tr",null,[g.checkable?(n(),i("th",oe)):$("",!0),ne,ie,re,ce,ue,de,_e])]),e("tbody",null,[(n(!0),i(b,null,w(s(D),l=>(n(),i("tr",{key:l.id},[g.checkable?(n(),T(Z,{key:0,onChecked:u=>U(u,l)},null,8,["onChecked"])):$("",!0),e("td",me,[t(z,{username:l.name,class:"w-24 h-24 mx-auto lg:w-6 lg:h-6"},null,8,["username"])]),e("td",he,r(l.name),1),e("td",pe,r(l.company),1),e("td",be,r(l.city),1),e("td",fe,[e("progress",{class:"flex w-2/5 self-center lg:w-full",max:"100",value:l.progress},r(l.progress),9,ge)]),e("td",ve,[e("small",{class:"text-gray-500 dark:text-slate-400",title:l.created},r(l.created),9,ye)]),e("td",ke,[t(A,{type:"justify-start lg:justify-end","no-wrap":""},{default:o(()=>[t(f,{color:"info",icon:s(O),small:"",onClick:a[2]||(a[2]=u=>v.value=!0)},null,8,["icon"]),t(f,{color:"danger",icon:s(R),small:"",onClick:a[3]||(a[3]=u=>y.value=!0)},null,8,["icon"])]),_:1})])]))),128))])]),e("div",we,[t(I,null,{default:o(()=>[t(A,null,{default:o(()=>[(n(!0),i(b,null,w(s(G),l=>(n(),T(f,{key:l,active:l===d.value,label:l+1,small:"",outline:s(P).darkMode,onClick:u=>d.value=l},null,8,["active","label","outline","onClick"]))),128))]),_:1}),e("small",null,"Page "+r(s(F))+" of "+r(s(N)),1)]),_:1})])],64))}},$e=e("b",null,"Responsive table.",-1),Ce=p(" Collapses on mobile "),xe=e("b",null,"Tightly wrapped",-1),Se=p(" \u2014 table header becomes card header "),Ve=e("b",null,"Empty table.",-1),Te=p(" When there's nothing to show "),Ae={__name:"TablesView",setup(g){return(P,M)=>(n(),T(J,null,{default:o(()=>[t(K,null,{default:o(()=>[t(C,{icon:s(S),title:"Tables",main:""},{default:o(()=>[t(f,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:s(Q),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),t(V,{color:"info",icon:s(X)},{default:o(()=>[$e,Ce]),_:1},8,["icon"]),t(x,{class:"mb-6",title:"Clients",icon:s(Y),"has-table":""},{default:o(()=>[t(j,{checkable:""})]),_:1},8,["icon"]),t(C,{icon:s(S),title:"Wrapped variation"},null,8,["icon"]),t(V,{color:"success",icon:s(S)},{default:o(()=>[xe,Se]),_:1},8,["icon"]),t(x,{class:"mb-6","has-table":""},{default:o(()=>[t(j,{checkable:""})]),_:1}),t(C,{icon:s(E),title:"Empty variation"},null,8,["icon"]),t(V,{color:"danger",icon:s(E)},{default:o(()=>[Ve,Te]),_:1},8,["icon"]),t(x,{empty:""})]),_:1})]),_:1}))}};export{Ae as default};