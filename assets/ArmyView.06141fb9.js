import{u as ee,a as U,a2 as te,c as h,r as b,a3 as ae,a4 as le,o as r,b as m,d as u,w as y,j as e,g as t,t as n,i as v,a9 as j,l as D,W as se,k as q,f as c,h as _,v as V,F as T,e as $,Z as ne,$ as oe,n as ie,p as H,q as re,S as de}from"./index.bcf28be0.js";import{_ as ce}from"./image-2.36edbb92.js";import{_ as F}from"./CardBoxModal.b15a8914.js";import{_ as ue}from"./SkeletonTable.1dcd570a.js";import{S as he}from"./SkeletonHero.d6afc698.js";import{_ as ge}from"./TableCheckboxCell.eb814e6f.js";const me=t("p",null,[H("Lorem ipsum dolor sit amet "),t("b",null,"adipiscing elit")],-1),_e=t("p",null,"This is sample modal",-1),ve=t("p",null,[H("Lorem ipsum dolor sit amet "),t("b",null,"adipiscing elit")],-1),ye=t("p",null,"This is sample modal",-1),xe={key:0,class:"flex flex-col lg:flex-row p-2 mb-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"},pe={class:"px-2 lg:w-2/3"},be={class:"mb-5 text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-center drop-shadow-lg"},fe={class:"mb-5 text-xl md:text-3xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200 text-center drop-shadow-lg"},ke={class:"flex flex-col md:flex-row mt-5 mb-5"},Se={class:"md:w-1/2"},we={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ne={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},De={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Te={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Le={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Pe={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ce={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ge={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},$e={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ve={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},He={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Me={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Qe={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Re={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ae=t("div",{class:"justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"},null,-1),Be={class:"lg:w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},Ie={class:"relative"},Ee=t("img",{class:"rounded-t-lg w-full",src:ce,alt:""},null,-1),Ke={class:"sticker absolute text-9xl text-white font-bold left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 drop-shadow-lg"},je={class:"p-5"},qe=t("h5",{class:"mb-5 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white"}," Nh\u1EADn ch\u1EE9ng ch\u1EC9 GDQP ",-1),Fe={key:3,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},Ue={key:0},Xe=t("th",null,"STT",-1),Ye=t("th",null,"MSSV",-1),Oe=t("th",null,[H("T\xCAN "),t("span",{class:"hidden lg:inline"}," - NG\xC0Y SINH - NG\xC0NH")],-1),We=t("th",{class:"lg:hidden"},"NG\xC0Y SINH",-1),Ze=t("th",{class:"lg:hidden"},"NG\xC0NH",-1),ze=t("th",{class:"whitespace-nowrap"},"S\u1ED0 V\xC0O S\u1ED4",-1),Je=t("th",null,"GDQP",-1),et=t("th",null,"Th\u1EDDi gian nh\u1EADn CC GDQP",-1),tt=t("th",null,"TR\u1EA0NG TH\xC1I",-1),at={"data-label":"STT"},lt={"data-label":"MSSV"},st={"data-label":"T\xEAn",class:"lg:whitespace-nowrap"},nt={class:"font-bold"},ot={class:"hidden lg:block"},it={class:"hidden lg:block"},rt={"data-label":"Ng\xE0y Sinh",class:"lg:hidden"},dt={"data-label":"Ng\xE0nh",class:"lg:hidden"},ct={"data-label":"S\u1ED1 V\xE0o S\u1ED5"},ut={"data-label":"GDQP"},ht={"data-label":"Th\u1EDDi gian nh\u1EADn"},gt={"data-label":"Thi\u1EBFu HS, HP",class:"lg:hidden"},mt={"data-label":"Kh\u1EA3o s\xE1t",class:"lg:hidden"},_t={"data-label":"L\u1EC5 Ph\u1EE5c",class:"lg:hidden"},vt={class:"before:hidden lg:w-1 whitespace-nowrap"},yt={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800 select-none"},xt={key:2},pt={key:3},bt={key:0},ft={__name:"TableStudentArmy",props:{checkable:Boolean},setup(L){const f=ee(),g=U();te(),h(()=>g.userEmail);const P=o=>g.transferToArmyFinish(o),C=o=>g.transferToArmyNotReceived(o),M=h(()=>g.students.filter(a=>a.ThoiGianNhanGDQP).length),Q=h(()=>{let o=g.students;return o=o.filter(a=>a.NgayTao&&a.GDQP.trim()!=""&&!a.ThoiGianNhanGDQP),o.sort((a,l)=>new Date(a.NgayTao)-new Date(l.NgayTao))}),s=h(()=>Q.value.shift()),R=h(()=>Q.value.filter(a=>a!=s.value)),A=b(!1),B=b(!1),w=h(()=>g.apiLoading),N=b(10),i=b(1),x=b(0),p=b(0),k=b([]),X=h(()=>R.value.slice(N.value*(i.value-1),N.value*i.value)),Y=h(()=>i.value<d.value?i.value+1:d.value),O=h(()=>i.value>1?i.value-1:1),d=h(()=>Math.ceil(R.value.length/N.value)),W=h(()=>i.value),Z=h(()=>{const o=[];if(d.value<=7)for(let a=1;a<=d.value;a++)o.push(a);else{i.value>3?x.value=2:x.value=i.value-1,i.value<d.value-2?p.value=2:p.value=d.value-i.value,p.value=x.value<2?p.value+(2-x.value):p.value,x.value=p.value<2?x.value+(2-p.value):x.value;for(let a=x.value;a>0;a--)o.push(i.value-a);o.push(i.value);for(let a=0;a<p.value;a++)o.push(i.value+a+1)}return o}),z=(o,a)=>{const l=[];return o.forEach(S=>{a(S)||l.push(S)}),l},J=(o,a)=>{o?k.value.push(a):k.value=z(k.value,l=>l.id===a.id)},I=h(()=>g.Area>0?`\u0111\u1EBFn qu\u1EA7y s\u1ED1 ${g.Area}, \u0111\u1EC3 nh\u1EADn ch\u1EE9ng ch\u1EC9 Gi\xE1o d\u1EE5c Qu\u1ED1c Ph\xF2ng`:"\u0111\u1EBFn qu\u1EA7y h\u1ED3 s\u01A1!"),E=o=>{const a=new SpeechSynthesisUtterance(o);a.pitch=1.2,a.rate=.5,a.volume=.8,speechSynthesis.speak(a)},K=o=>{if(o.keyCode===120){if(o.preventDefault(),s.value){const a=`M\u1EDDi b\u1EA1n ${s.value.HoTen}, ${I.value}`;E(a)}}else o.ctrlKey&&o.key==="Enter"?(o.preventDefault(),s.value&&P(s.value.Row)):o.shiftKey&&o.keyCode===46&&(o.preventDefault(),s.value&&C(s.value.Row))};return ae(()=>{g.isKeyQueueViewRegistered||(window.addEventListener("keydown",K),g.isKeyQueueViewRegistered=!0)}),le(()=>{window.removeEventListener("keydown",K),g.isKeyQueueViewRegistered=!1}),(o,a)=>(r(),m(T,null,[u(F,{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=l=>A.value=l),title:"Sample modal"},{default:y(()=>[me,_e]),_:1},8,["modelValue"]),u(F,{modelValue:B.value,"onUpdate:modelValue":a[1]||(a[1]=l=>B.value=l),"large-title":"Please confirm",button:"danger","has-cancel":""},{default:y(()=>[ve,ye]),_:1},8,["modelValue"]),e(s)?(r(),m("section",xe,[t("div",pe,[t("h4",be,n(e(s).HoTen),1),t("h5",fe,n(e(s).GDQP),1),t("div",ke,[t("div",Se,[t("p",we," MSSV: "+n(e(s).MSSV),1),t("p",Ne," Ng\xE0y sinh: "+n(new Date(e(s).NgaySinh).toLocaleDateString()=="Invalid Date"?e(s).NgaySinh:new Date(e(s).NgaySinh).toLocaleDateString("vi",{day:"numeric",month:"numeric",year:"numeric"})),1),t("p",De," Ng\xE0nh: "+n(e(s).Nganh),1),t("p",Te," X\u1EBFp Lo\u1EA1i: "+n(e(s).XepLoai),1),t("p",Le," \u0110i\u1EC7n tho\u1EA1i: "+n(e(s).DienThoai.toLocaleString("vi",{minimumIntegerDigits:10,useGrouping:!1})),1),t("p",Pe," Email: "+n(e(s).Email),1),t("p",Ce," Ng\u01B0\u1EDDi x\u1EED l\xFD: "+n(e(s).NguoiXuLy),1)]),t("div",null,[t("p",Ge," S\u1ED1 hi\u1EC7u b\u1EB1ng: "+n(e(s).SoHieuBang),1),t("p",$e," S\u1ED1 v\xE0o s\u1ED5: "+n(e(s).SoVaoSo),1),t("p",Ve," Thi\u1EBFu HS, HP: "+n(e(s).ThieuHSHP),1),t("p",He," Kh\u1EA3o s\xE1t: "+n(e(s).KhaoSat),1),t("p",Me," L\u1EC5 ph\u1EE5c: "+n(e(s).LePhuc),1),t("p",Qe," Th\u1EDDi gian ch\u1EDD: "+n(new Date(e(s).NgayTao).toLocaleString()=="Invalid Date"?e(s).NgayTao:new Date(e(s).NgayTao).toLocaleString("vi")),1),t("p",Re," Nh\u1EADn b\u1EB1ng: "+n(new Date(e(s).ThoiGianNhanBang).toLocaleString()=="Invalid Date"?e(s).ThoiGianNhanBang:new Date(e(s).ThoiGianNhanBang).toLocaleString("vi")),1)])]),Ae]),t("div",Be,[t("div",Ie,[Ee,t("span",Ke,n(e(M)+1),1)]),t("div",je,[u(D,{type:"justify-center lg:justify-around mb-5","no-wrap":""},{default:y(()=>[u(v,{color:"success",icon:e(j),label:"Nh\u1EADn CC GDQP",onClick:a[2]||(a[2]=l=>P(e(s).Row))},null,8,["icon"])]),_:1}),qe,u(D,{type:"justify-center mb-5","no-wrap":""},{default:y(()=>[u(v,{color:"success",icon:e(se),small:"",onClick:a[3]||(a[3]=l=>E(`M\u1EDDi b\u1EA1n ${e(s).HoTen}, ${e(I)}`))},null,8,["icon"]),u(v,{color:"danger",icon:e(q),small:"",onClick:a[4]||(a[4]=l=>C(e(s).Row))},null,8,["icon"])]),_:1})])])])):c("",!0),e(w)&&!e(s)?(r(),_(he,{key:1})):c("",!0),!e(w)&&!e(s)?(r(),_(V,{key:2,empty:""})):c("",!0),k.value.length?(r(),m("div",Fe,[(r(!0),m(T,null,$(k.value,l=>(r(),m("span",{key:l.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},n(l.name),1))),128))])):c("",!0),t("table",null,[t("thead",null,[t("tr",null,[L.checkable?(r(),m("th",Ue)):c("",!0),Xe,Ye,Oe,We,Ze,ze,Je,et,tt])]),t("tbody",null,[(r(!0),m(T,null,$(e(X),(l,S)=>(r(),m("tr",{key:l},[L.checkable?(r(),_(ge,{key:0,onChecked:G=>J(G,l)},null,8,["onChecked"])):c("",!0),t("td",at,n(S+2+e(M)+(i.value-1)*N.value),1),t("td",lt,n(l.MSSV),1),t("td",st,[t("p",nt,n(l.HoTen),1),t("small",ot,n(new Date(l.NgaySinh).toLocaleDateString()=="Invalid Date"?l.NgaySinh:new Date(l.NgaySinh).toLocaleDateString("vi",{day:"numeric",month:"numeric",year:"numeric"})),1),t("small",it,n(l.Nganh),1)]),t("td",rt,n(new Date(l.NgaySinh).toLocaleDateString()=="Invalid Date"?l.NgaySinh:new Date(l.NgaySinh).toLocaleDateString("vi",{day:"numeric",month:"numeric",year:"numeric"})),1),t("td",dt,n(l.Nganh),1),t("td",ct,n(l.SoVaoSo),1),t("td",ut,n(l.GDQP),1),t("td",ht,n(new Date(l.ThoiGianNhanGDQP).toLocaleString("vi")=="Invalid Date"?l.ThoiGianNhanGDQP:new Date(l.ThoiGianNhanGDQP).toLocaleString("vi")),1),t("td",gt,n(l.ThieuHSHP),1),t("td",mt,n(l.KhaoSat),1),t("td",_t,n(l.LePhuc),1),t("td",vt,[u(D,{type:"justify-end","no-wrap":""},{default:y(()=>[u(v,{color:"success",icon:e(j),label:"Nh\u1EADn CC",onClick:G=>P(l.Row)},null,8,["icon","onClick"]),u(v,{color:"danger",icon:e(q),small:"",onClick:G=>C(l.Row)},null,8,["icon","onClick"])]),_:2},1024)])]))),128))]),e(w)&&e(d)<=0?(r(),_(ue,{key:0,buttonSkeleton:"queue"})):c("",!0)]),!e(w)&&e(d)<=0?(r(),_(V,{key:4,empty:""})):c("",!0),t("div",yt,[u(ie,null,{default:y(()=>[u(D,null,{default:y(()=>[e(d)>0?(r(),_(v,{key:0,disabled:i.value===1,icon:e(ne),small:"",outline:e(f).darkMode,onClick:a[5]||(a[5]=l=>i.value=e(O))},null,8,["disabled","icon","outline"])):c("",!0),i.value>3?(r(),_(v,{key:1,active:i.value==1,label:1,small:"",outline:e(f).darkMode,onClick:a[6]||(a[6]=l=>i.value=1)},null,8,["active","outline"])):c("",!0),i.value>4?(r(),m("span",xt,"...")):c("",!0),(r(!0),m(T,null,$(e(Z),l=>(r(),_(v,{key:l,active:l===i.value,label:l,small:"",outline:e(f).darkMode,onClick:S=>i.value=l},null,8,["active","label","outline","onClick"]))),128)),i.value<e(d)-3?(r(),m("span",pt,"...")):c("",!0),i.value<e(d)-2?(r(),_(v,{key:4,active:i.value==e(d),label:e(d),small:"",outline:e(f).darkMode,onClick:a[7]||(a[7]=l=>i.value=e(d))},null,8,["active","label","outline"])):c("",!0),e(d)>0?(r(),_(v,{key:5,disabled:i.value===e(d),icon:e(oe),small:"",outline:e(f).darkMode,onClick:a[8]||(a[8]=l=>i.value=e(Y))},null,8,["disabled","icon","outline"])):c("",!0)]),_:1}),e(d)>0?(r(),m("small",bt,"Page "+n(e(W))+" of "+n(e(d)),1)):c("",!0)]),_:1})])],64))}},Lt={__name:"ArmyView",setup(L){return U(),b(!1),(f,g)=>(r(),_(re,null,{default:y(()=>[u(de,null,{default:y(()=>[u(V,{class:"mb-6","has-table":""},{default:y(()=>[u(ft)]),_:1})]),_:1})]),_:1}))}};export{Lt as default};
