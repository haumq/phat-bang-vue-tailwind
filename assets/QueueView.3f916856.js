import{u as se,a as Y,a2 as ne,c as _,r as b,a3 as ie,a4 as re,o as r,b as m,d as h,w as y,j as e,g as a,t as n,i as v,T as de,l as N,W as ue,h as g,X as O,f as c,Y as U,k as X,v as V,F as D,e as $,Z as ce,$ as he,n as me,p as R,q as ge,S as _e}from"./index.362ae991.js";import{_ as ve}from"./image-2.36edbb92.js";import{_ as q}from"./CardBoxModal.760ea6b0.js";import{_ as ye}from"./SkeletonTable.6a2d5c08.js";import{S as pe}from"./SkeletonHero.5e7cf04a.js";import{_ as fe}from"./TableCheckboxCell.3006ba4e.js";import{B as be}from"./ButtonPropressing.c7ed6d31.js";const ke=a("p",null,[R("Lorem ipsum dolor sit amet "),a("b",null,"adipiscing elit")],-1),xe=a("p",null,"This is sample modal",-1),Se=a("p",null,[R("Lorem ipsum dolor sit amet "),a("b",null,"adipiscing elit")],-1),we=a("p",null,"This is sample modal",-1),Te={key:0,class:"flex flex-col lg:flex-row p-2 mb-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"},Ne={class:"px-2 lg:w-2/3"},De={class:"mb-5 text-3xl md:text-5xl font-bold text-gray-900 dark:text-white text-center drop-shadow-lg"},Le={class:"mb-5 text-xl md:text-3xl lg:text-5xl font-bold text-gray-700 dark:text-gray-200 text-center drop-shadow-lg"},Pe={class:"flex flex-col md:flex-row mt-5 mb-5"},Ce={class:"md:w-1/2"},He={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},$e={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ve={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Re={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Me={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Qe={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ge={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ke={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ee={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Fe={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Ie={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},Be={class:"md:mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400"},je=a("div",{class:"justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"},null,-1),Ae={class:"lg:w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},Oe={class:"relative"},Ue=a("img",{class:"rounded-t-lg w-full",src:ve,alt:""},null,-1),Xe={class:"sticker absolute text-9xl text-white font-bold left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 drop-shadow-lg"},qe={class:"p-5"},Ye=a("h5",{class:"mb-5 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white"}," Noteworthy technology ",-1),We={key:3,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},Ze={key:0},ze=a("th",null,"STT",-1),Je=a("th",null,"MSSV",-1),et=a("th",null,[R("T\xCAN "),a("span",{class:"hidden lg:inline"}," - NG\xC0Y SINH - NG\xC0NH")],-1),tt=a("th",{class:"lg:hidden"},"NG\xC0Y SINH",-1),at=a("th",{class:"lg:hidden"},"NG\xC0NH",-1),lt=a("th",{class:"whitespace-nowrap"},"S\u1ED0 V\xC0O S\u1ED4",-1),ot=a("th",null,"GDQP",-1),st=a("th",{class:"whitespace-nowrap"},"THI\u1EBEU HS, HP",-1),nt=a("th",null,"KH\u1EA2O S\xC1T",-1),it=a("th",null,"L\u1EC4 PH\u1EE4C",-1),rt=a("th",null,"TR\u1EA0NG TH\xC1I",-1),dt={"data-label":"STT"},ut={"data-label":"MSSV"},ct={"data-label":"T\xEAn",class:"lg:whitespace-nowrap"},ht={class:"font-bold"},mt={class:"hidden lg:block"},gt={class:"hidden lg:block"},_t={"data-label":"Ng\xE0y Sinh",class:"lg:hidden"},vt={"data-label":"Ng\xE0nh",class:"lg:hidden"},yt={"data-label":"S\u1ED1 V\xE0o S\u1ED5"},pt={"data-label":"GDQP"},ft={"data-label":"Thi\u1EBFu HS, HP"},bt={"data-label":"Kh\u1EA3o s\xE1t"},kt={"data-label":"L\u1EC5 Ph\u1EE5c"},xt={class:"before:hidden lg:w-1 whitespace-nowrap"},St={key:0},wt={key:2},Tt={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800 select-none"},Nt={key:2},Dt={key:3},Lt={key:0},Pt={__name:"TableStudentQueue",props:{checkable:Boolean},setup(L){const k=se(),d=Y();ne();const W=_(()=>d.userEmail),M=l=>d.transferToProcess(l),Z=l=>d.transferToFisnish(l),P=l=>d.transferToLastQueue(l),Q=l=>d.transferToOldPositionQueue(l),C=l=>d.removeFromQueue(l),G=_(()=>{let l=d.students;return d.dataTo>0&&d.dataFrom>0?l.filter((t,o)=>t.Row<=d.dataTo&&t.Row>=d.dataFrom&&t.TrangThai==3).length:l.filter(t=>t.TrangThai==3).length}),K=_(()=>{let l;return d.dataTo>0&&d.dataFrom>0?l=d.students.filter(t=>t.Row<=d.dataTo&&t.Row>=d.dataFrom):l=d.students,l=l.filter(t=>t.TrangThai==1),l.sort((t,o)=>new Date(t.NgayTao)-new Date(o.NgayTao))}),s=_(()=>K.value.filter(t=>t.TrangThai==1||t.NguoiXuLy==""||t.NguoiXuLy==W.value).shift()),E=_(()=>K.value.filter(t=>t!=s.value)),F=b(!1),I=b(!1),w=_(()=>d.apiLoading),T=b(10),i=b(1),p=b(0),f=b(0),x=b([]),z=_(()=>E.value.slice(T.value*(i.value-1),T.value*i.value)),J=_(()=>i.value<u.value?i.value+1:u.value),ee=_(()=>i.value>1?i.value-1:1),u=_(()=>Math.ceil(E.value.length/T.value)),te=_(()=>i.value),ae=_(()=>{const l=[];if(u.value<=7)for(let t=1;t<=u.value;t++)l.push(t);else{i.value>3?p.value=2:p.value=i.value-1,i.value<u.value-2?f.value=2:f.value=u.value-i.value,f.value=p.value<2?f.value+(2-p.value):f.value,p.value=f.value<2?p.value+(2-f.value):p.value;for(let t=p.value;t>0;t--)l.push(i.value-t);l.push(i.value);for(let t=0;t<f.value;t++)l.push(i.value+t+1)}return l}),le=(l,t)=>{const o=[];return l.forEach(S=>{t(S)||o.push(S)}),o},oe=(l,t)=>{l?x.value.push(t):x.value=le(x.value,o=>o.id===t.id)},B=_(()=>d.Area>0?`\u0111\u1EBFn qu\u1EA7y s\u1ED1 ${d.Area}, \u0111\u1EC3 nh\u1EADn b\u1EB1ng`:"\u0111\u1EBFn qu\u1EA7y h\u1ED3 s\u01A1!"),j=l=>{if(l.key==="Enter")s.value.TrangThai===1&&M(s.value.Row);else if(l.key===" "||l.key==="Spacebar"||l.ctrlKey&&l.key==="s")l.preventDefault(),s.value.TrangThai===2&&Z(s.value.Row);else if(l.keyCode===120){if(l.preventDefault(),s.value){const t=`M\u1EDDi b\u1EA1n ${s.value.HoTen}, ${B}`;A(t)}}else l.keyCode===8?(l.preventDefault(),s.value&&Q(s.value.Row)):l.keyCode===39?(l.preventDefault(),s.value&&P(s.value.Row)):l.shiftKey&&l.keyCode===46&&(l.preventDefault(),s.value&&C(s.value.Row))},A=l=>{const t=new SpeechSynthesisUtterance(l);t.pitch=1.2,t.rate=.5,t.volume=.8,speechSynthesis.speak(t)};return ie(()=>{d.isKeyQueueViewRegistered||(window.addEventListener("keydown",j),d.isKeyQueueViewRegistered=!0)}),re(()=>{window.removeEventListener("keydown",j),d.isKeyQueueViewRegistered=!1}),(l,t)=>(r(),m(D,null,[h(q,{modelValue:F.value,"onUpdate:modelValue":t[0]||(t[0]=o=>F.value=o),title:"Sample modal"},{default:y(()=>[ke,xe]),_:1},8,["modelValue"]),h(q,{modelValue:I.value,"onUpdate:modelValue":t[1]||(t[1]=o=>I.value=o),"large-title":"Please confirm",button:"danger","has-cancel":""},{default:y(()=>[Se,we]),_:1},8,["modelValue"]),e(s)?(r(),m("section",Te,[a("div",Ne,[a("h4",De,n(e(s).HoTen),1),a("h5",Le,n(e(s).SoVaoSo),1),a("div",Pe,[a("div",Ce,[a("p",He," MSSV: "+n(e(s).MSSV),1),a("p",$e," Ng\xE0y sinh: "+n(new Date(e(s).NgaySinh).toLocaleDateString()=="Invalid Date"?e(s).NgaySinh:new Date(e(s).NgaySinh).toLocaleDateString("vi",{day:"numeric",month:"numeric",year:"numeric"})),1),a("p",Ve," Ng\xE0nh: "+n(e(s).Nganh),1),a("p",Re," X\u1EBFp Lo\u1EA1i: "+n(e(s).XepLoai),1),a("p",Me," \u0110i\u1EC7n tho\u1EA1i: "+n(e(s).DienThoai.toLocaleString("vi",{minimumIntegerDigits:10,useGrouping:!1})),1),a("p",Qe," Email: "+n(e(s).Email),1)]),a("div",null,[a("p",Ge," S\u1ED1 hi\u1EC7u b\u1EB1ng: "+n(e(s).SoHieuBang),1),a("p",Ke," GDQP: "+n(e(s).GDQP),1),a("p",Ee," Thi\u1EBFu HS, HP: "+n(e(s).ThieuHSHP),1),a("p",Fe," Kh\u1EA3o s\xE1t: "+n(e(s).KhaoSat),1),a("p",Ie," L\u1EC5 ph\u1EE5c: "+n(e(s).LePhuc),1),a("p",Be," Th\u1EDDi gian: "+n(new Date(e(s).NgayTao).toLocaleString()=="Invalid Date"?e(s).NgayTao:new Date(e(s).NgayTao).toLocaleString("vi")),1)])]),je]),a("div",Ae,[a("div",Oe,[Ue,a("span",Xe,n(e(G)+1),1)]),a("div",qe,[h(N,{type:"justify-center lg:justify-around mb-5","no-wrap":""},{default:y(()=>[h(v,{color:"success",icon:e(de),onClick:t[2]||(t[2]=o=>M(e(s).Row)),label:"L\u1EA5y b\u1EB1ng"},null,8,["icon"])]),_:1}),Ye,h(N,{type:"justify-center mb-5","no-wrap":""},{default:y(()=>[h(v,{color:"success",icon:e(ue),small:"",onClick:t[3]||(t[3]=o=>A(`M\u1EDDi b\u1EA1n ${e(s).value.HoTen}, ${e(B)}`))},null,8,["icon"]),e(s).TrangThai===2?(r(),g(v,{key:0,color:"warning",icon:e(O),small:"",onClick:t[4]||(t[4]=o=>Q(e(s).Row))},null,8,["icon"])):c("",!0),e(s).TrangThai!=2?(r(),g(v,{key:1,color:"warning",icon:e(O),small:"",disabled:""},null,8,["icon"])):c("",!0),h(v,{color:"info",icon:e(U),small:"",onClick:t[5]||(t[5]=o=>P(e(s).Row))},null,8,["icon"]),h(v,{color:"danger",icon:e(X),small:"",onClick:t[6]||(t[6]=o=>C(e(s).Row))},null,8,["icon"])]),_:1})])])])):c("",!0),e(w)&&!e(s)?(r(),g(pe,{key:1})):c("",!0),!e(w)&&!e(s)?(r(),g(V,{key:2,empty:""})):c("",!0),x.value.length?(r(),m("div",We,[(r(!0),m(D,null,$(x.value,o=>(r(),m("span",{key:o.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},n(o.name),1))),128))])):c("",!0),a("table",null,[a("thead",null,[a("tr",null,[L.checkable?(r(),m("th",Ze)):c("",!0),ze,Je,et,tt,at,lt,ot,st,nt,it,rt])]),a("tbody",null,[(r(!0),m(D,null,$(e(z),(o,S)=>(r(),m("tr",{key:o},[L.checkable?(r(),g(fe,{key:0,onChecked:H=>oe(H,o)},null,8,["onChecked"])):c("",!0),a("td",dt,n(S+2+e(G)+(i.value-1)*T.value),1),a("td",ut,n(o.MSSV),1),a("td",ct,[a("p",ht,n(o.HoTen),1),a("small",mt,n(new Date(o.NgaySinh).toLocaleDateString()=="Invalid Date"?o.NgaySinh:new Date(o.NgaySinh).toLocaleDateString("vi",{day:"numeric",month:"numeric",year:"numeric"})),1),a("small",gt,n(o.Nganh),1)]),a("td",_t,n(new Date(o.NgaySinh).toLocaleDateString()=="Invalid Date"?o.NgaySinh:new Date(o.NgaySinh).toLocaleDateString("vi",{day:"numeric",month:"numeric",year:"numeric"})),1),a("td",vt,n(o.Nganh),1),a("td",yt,n(o.SoVaoSo),1),a("td",pt,n(o.GDQP),1),a("td",ft,n(o.ThieuHSHP),1),a("td",bt,n(o.KhaoSat),1),a("td",kt,n(o.LePhuc),1),a("td",xt,[h(N,{type:"justify-end","no-wrap":""},{default:y(()=>[o.TrangThai==1?(r(),m("span",St,[h(v,{color:"info",icon:e(U),small:"",onClick:t[7]||(t[7]=H=>P(e(s).Row))},null,8,["icon"]),h(v,{color:"danger",icon:e(X),small:"",onClick:H=>C(o.Row)},null,8,["icon","onClick"])])):o.TrangThai==2?(r(),g(be,{key:1})):(r(),m("span",wt,"Kh\xE1c"))]),_:2},1024)])]))),128))]),e(w)&&e(u)<=0?(r(),g(ye,{key:0,buttonSkeleton:"queue"})):c("",!0)]),!e(w)&&e(u)<=0?(r(),g(V,{key:4,empty:""})):c("",!0),a("div",Tt,[h(me,null,{default:y(()=>[h(N,null,{default:y(()=>[e(u)>0?(r(),g(v,{key:0,disabled:i.value===1,icon:e(ce),small:"",outline:e(k).darkMode,onClick:t[8]||(t[8]=o=>i.value=e(ee))},null,8,["disabled","icon","outline"])):c("",!0),i.value>3?(r(),g(v,{key:1,active:i.value==1,label:1,small:"",outline:e(k).darkMode,onClick:t[9]||(t[9]=o=>i.value=1)},null,8,["active","outline"])):c("",!0),i.value>4?(r(),m("span",Nt,"...")):c("",!0),(r(!0),m(D,null,$(e(ae),o=>(r(),g(v,{key:o,active:o===i.value,label:o,small:"",outline:e(k).darkMode,onClick:S=>i.value=o},null,8,["active","label","outline","onClick"]))),128)),i.value<e(u)-3?(r(),m("span",Dt,"...")):c("",!0),i.value<e(u)-2?(r(),g(v,{key:4,active:i.value==e(u),label:e(u),small:"",outline:e(k).darkMode,onClick:t[10]||(t[10]=o=>i.value=e(u))},null,8,["active","label","outline"])):c("",!0),e(u)>0?(r(),g(v,{key:5,disabled:i.value===e(u),icon:e(he),small:"",outline:e(k).darkMode,onClick:t[11]||(t[11]=o=>i.value=e(J))},null,8,["disabled","icon","outline"])):c("",!0)]),_:1}),e(u)>0?(r(),m("small",Lt,"Page "+n(e(te))+" of "+n(e(u)),1)):c("",!0)]),_:1})])],64))}},Gt={__name:"QueueView",setup(L){return Y(),b(!1),(k,d)=>(r(),g(ge,null,{default:y(()=>[h(_e,null,{default:y(()=>[h(V,{class:"mb-6","has-table":""},{default:y(()=>[h(Pt)]),_:1})]),_:1})]),_:1}))}};export{Gt as default};