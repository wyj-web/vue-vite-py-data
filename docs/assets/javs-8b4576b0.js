import"./default-e5d332e7.js";import{F as $,_ as j}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as C}from"./index-8134270f.js";import{I as T}from"./index-da5f4ce2.js";import{r as S,a as i,y as q,B as v,G as z,L as y,c as o,D as r,E as a,$ as E,K as R,a0 as U,I as P}from"./index-71a5391b.js";import{_ as k,a as G,b as H,c as L,d as M}from"./repeatpositioner-3854e0ff.js";import{_ as A}from"./loading-c4a3f1f3.js";import{_ as J}from"./repeattable-4a7fe53a.js";import{aH as Q}from"./api-47b35210.js";import"./DialogWrap-9db0e3d6.js";import"./omit-e3ca0eeb.js";import"./LeftOutlined-fcc01204.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-98bb1baa.js";import"./eagerComputed-c651f318.js";import"./index-1729d7ee.js";import"./createForOfIteratorHelper-f2236921.js";import"./index-7f28f9f3.js";import"./index-8ca851ae.js";import"./index-bd4b2240.js";import"./shallowequal-0f2097ab.js";import"./index-67c02b9a.js";import"./index-116a0eec.js";import"./scrollTo-4a3c9ce6.js";import"./index-ee3da9b4.js";import"./index-79080fe8.js";import"./index.esm-e815afff.js";const W={key:0},X={style:{"text-align":"right"},id:"bottomDom"},Fe={__name:"javs",setup(Y){const p=S(),e=i({name:"",currentPage:1,pageSizes:50}),n=i({data:[],total:0});let c=S("1");const l=()=>{c.value="1",n.total=0,n.data=[]},w=()=>{l(),p.value.resetFields(),e.currentPage=1,e.pageSizes=50,m()},u=t=>{l(),e.name=e.name.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,m()};q(()=>{m()});let _=i([]),x=i([{title:"封面",dataIndex:"cover",key:"cover"},{title:"姓名",dataIndex:"name",key:"name"},{title:"操作",width:200,key:"xianmanwang"}]);const m=()=>{Q(e).then(t=>{n.data=t.data.data,n.total=t.data.total,c.value="0",_=n.data})},B=t=>{O(t)},g=({page:t,pageSize:s})=>{l(),e.currentPage=t,e.pageSizes=s,m()},d=({current:t,size:s})=>{l(),e.currentPage=t,e.pageSizes=s},F=t=>{l(),e.currentPage=t,m()},I=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},O=t=>{window.open(t,"_blank")};return(t,s)=>{const D=T,f=j,h=L,b=C,V=M,K=$;return v(),z(R,null,[y("div",null,[o(K,{id:"submitDom",model:a(e),ref_key:"formRef",ref:p,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:u},{default:r(()=>[o(V,null,{default:r(()=>[o(h,{span:6},{default:r(()=>[o(f,{label:"姓 名",name:"name"},{default:r(()=>[o(D,{value:a(e).name,"onUpdate:value":s[0]||(s[0]=N=>a(e).name=N),onKeydown:U(u,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),o(h,{span:6},{default:r(()=>[o(f,{"wrapper-col":{offset:4,span:20}},{default:r(()=>[o(b,{type:"primary","html-type":"submit"},{default:r(()=>[P("提交")]),_:1}),o(b,{style:{"margin-left":"10px"},onClick:w},{default:r(()=>[P("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),o(k,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:g,onOnsizechange:d},null,8,["total","currentPage","pageSizes"]),a(n).data.length!==0?(v(),z("div",W,[o(J,{dataSource:a(_),columns:a(x),onOntablecolumnurl:B},null,8,["dataSource","columns"])])):E("",!0),o(A,{state:a(c)},null,8,["state"]),y("div",X,[o(k,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:g,onOnsizechange:d},null,8,["total","currentPage","pageSizes"])]),o(G,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:F},null,8,["total","currentPage","pageSizes"]),o(H,{onOnTo:I})],64)}}};export{Fe as default};
