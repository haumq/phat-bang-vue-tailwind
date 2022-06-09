"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[535],{2618:function(e,l,a){a.d(l,{Z:function(){return c}});var t=a(6252),n=a(3577),o=a(2262),r=a(9963);const u=["type","name","value"],s=(0,t._)("span",{class:"check"},null,-1),d={class:"control-label"};var m={__name:"CheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,m=(0,t.Fl)({get:()=>a.modelValue,set:e=>{l("update:modelValue",e)}}),i=(0,t.Fl)((()=>"radio"===a.type?"radio":"checkbox"));return(l,a)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,n.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.options,((l,c)=>((0,t.wg)(),(0,t.iD)("label",{key:c,class:(0,n.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>(0,o.dq)(m)?m.value=e:null),type:(0,o.SU)(i),name:e.name,value:c},null,8,u),[[r.YZ,(0,o.SU)(m)]]),s,(0,t._)("span",d,(0,n.zw)(l),1)],2)))),128))],2))}};const i=m;var c=i},5690:function(e,l,a){a.d(l,{Z:function(){return i}});var t=a(6252),n=a(3577),o=a(2262);const r={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},s={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};var d={__name:"Field",props:{label:{type:String,default:null},help:{type:String,default:null}},setup(e){const l=(0,t.Rr)(),a=(0,t.Fl)((()=>{const e=[],a=l.default().length;return a>1&&e.push("grid grid-cols-1 gap-3"),2===a&&e.push("md:grid-cols-2"),e}));return(l,d)=>((0,t.wg)(),(0,t.iD)("div",r,[e.label?((0,t.wg)(),(0,t.iD)("label",u,(0,n.zw)(e.label),1)):(0,t.kq)("",!0),(0,t._)("div",{class:(0,n.C_)((0,o.SU)(a))},[(0,t.WI)(l.$slots,"default")],2),e.help?((0,t.wg)(),(0,t.iD)("div",s,(0,n.zw)(e.help),1)):(0,t.kq)("",!0)]))}};const m=d;var i=m},6615:function(e,l,a){a.r(l),a.d(l,{default:function(){return y}});var t=a(6252),n=a(3577),o=a(9963),r=a(2262),u=a(2119),s=a(5317),d=a(9995),m=a(9890),i=a(2618),c=a(5690),p=a(2213),b=a(5693),g=a(1388),f=a(6373),w={__name:"Login",setup(e){const l=(0,r.qj)({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:["remember"]}),a=(0,u.tv)(),w=()=>{a.push("/dashboard")};return(e,a)=>((0,t.wg)(),(0,t.j4)(d.Z,{bg:"login"},{default:(0,t.w5)((({cardClass:e,cardRounded:u})=>[(0,t.Wm)(m.Z,{class:(0,n.C_)(e),rounded:u,form:"",onSubmit:(0,o.iM)(w,["prevent"])},{default:(0,t.w5)((()=>[(0,t.Wm)(c.Z,{label:"Login",help:"Please enter your login"},{default:(0,t.w5)((()=>[(0,t.Wm)(p.Z,{modelValue:l.login,"onUpdate:modelValue":a[0]||(a[0]=e=>l.login=e),icon:(0,r.SU)(s.rI3),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])])),_:1}),(0,t.Wm)(c.Z,{label:"Password",help:"Please enter your password"},{default:(0,t.w5)((()=>[(0,t.Wm)(p.Z,{modelValue:l.pass,"onUpdate:modelValue":a[1]||(a[1]=e=>l.pass=e),icon:(0,r.SU)(s.AD$),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])])),_:1}),(0,t.Wm)(i.Z,{modelValue:l.remember,"onUpdate:modelValue":a[2]||(a[2]=e=>l.remember=e),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"]),(0,t.Wm)(b.Z),(0,t.Wm)(f.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g.Z,{type:"submit",color:"info",label:"Login"}),(0,t.Wm)(g.Z,{to:"/dashboard",color:"info",outline:"",label:"Back"})])),_:1})])),_:2},1032,["class","rounded","onSubmit"])])),_:1}))}};const _=w;var y=_}}]);
//# sourceMappingURL=login.aff31c2f.js.map