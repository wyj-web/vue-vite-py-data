/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k,r as P,D as N,U as m,a0 as f,a3 as u,f as t,W as a,u as o,F as w,a1 as T,a6 as $,a7 as K,E as l,V as U,a2 as h}from"./vue-4ec1f53c.js";import{_ as F,a as q,b as R}from"./repeatpositioner-20125418.js";import{_ as L}from"./repeatcard-3b4e9dad.js";import{_ as M}from"./loading-641ff660.js";import{j as W}from"./api-0902c31c.js";import{F as A,E as G,I as H,n as J,o as Q,B as X,p as Y,t as Z}from"./antDesignVue-408c3980.js";import{V as ee}from"./VideoCameraOutlined-12ec9a9d.js";import{F as te}from"./FieldTimeOutlined-27141a0b.js";import"./index-c01679f5.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const ae={key:0,style:{"column-count":"5","column-gap":"15px"}},oe={style:{margin:"10px 0 10px 10px"}},ne={style:{margin:"10px 0 10px 10px"}},re={style:{margin:"10px 0 10px 10px"}},se={style:{"text-align":"right"},id:"bottomDom"},Fe={__name:"jiujiurevideo",setup(ie){const y=k(),e=P({title:"",currentPage:1,pageSizes:50}),r=P({data:[],total:0});let _=k("1");const c=()=>{_.value="1",r.total=0,r.data=[]},O=()=>{c(),y.value.resetFields(),e.currentPage=1,e.pageSizes=50,p()},b=n=>{c(),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,p()};N(()=>{p()});const p=()=>{W(e).then(n=>{r.data=n.data.data,r.total=n.data.total,_.value="0"})},v=({page:n,pageSize:i})=>{c(),e.currentPage=n,e.pageSizes=i,p()},x=({current:n,size:i})=>{c(),e.currentPage=n,e.pageSizes=i},V=n=>{c(),e.currentPage=n,p()},j=n=>{switch(n){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},B=n=>{window.open(n,"_blank")};return(n,i)=>{const D=H,S=J,z=Q,g=X,C=Y,E=A,d=Z;return m(),f(w,null,[u("div",null,[t(E,{id:"submitDom",model:o(e),ref_key:"formRef",ref:y,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:b},{default:a(()=>[t(C,null,{default:a(()=>[t(z,{span:6},{default:a(()=>[t(S,{label:"标 题",name:"title"},{default:a(()=>[t(D,{value:o(e).title,"onUpdate:value":i[0]||(i[0]=s=>o(e).title=s),onKeydown:K(b,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(z,{span:6},{default:a(()=>[t(S,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(g,{type:"primary","html-type":"submit"},{default:a(()=>[l("提交")]),_:1}),t(g,{style:{"margin-left":"10px"},onClick:O},{default:a(()=>[l("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(F,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:v,onOnsizechange:x},null,8,["total","currentPage","pageSizes"]),o(r).data.length!==0?(m(),f("div",ae,[(m(!0),f(w,null,T(o(r).data,(s,I)=>(m(),U(L,{key:I,item:s},{time:a(()=>[u("p",oe,[t(d,{color:"green"},{icon:a(()=>[t(o(te))]),default:a(()=>[l(" "+h(s.time),1)]),_:2},1024)])]),watch:a(()=>[u("p",ne,[t(d,{color:"orange"},{icon:a(()=>[t(o(G))]),default:a(()=>[l(" "+h(s.watch),1)]),_:2},1024)])]),videotime:a(()=>[u("p",re,[t(d,{color:"blue"},{icon:a(()=>[t(o(ee))]),default:a(()=>[l(" "+h(s.videotime),1)]),_:2},1024)])]),button:a(()=>[t(g,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:le=>B(s.url)},{default:a(()=>[l("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):$("",!0),t(M,{state:o(_)},null,8,["state"]),u("div",se,[t(F,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:v,onOnsizechange:x},null,8,["total","currentPage","pageSizes"])]),t(q,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:V},null,8,["total","currentPage","pageSizes"]),t(R,{onOnTo:j})],64)}}};export{Fe as default};
