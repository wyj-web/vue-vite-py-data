/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as S,r as c,D as q,U as z,a0 as k,a3 as y,f as o,W as r,u as a,a6 as K,F as T,a7 as U,E as P}from"./vue-4ec1f53c.js";import{_ as v,a as $,b as E}from"./repeatpositioner-18542dbb.js";import{_ as R}from"./loading-641ff660.js";import{_ as M}from"./repeattable-54d0341a.js";import{aC as W}from"./api-0902c31c.js";import{F as j,I as A,o as G,p as H,B as J,q as L}from"./antDesignVue-3dfa8e86.js";import"./index-c48ddee0.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-07e0f670.js";import"./axios-4a70c6fc.js";const Q={key:0},X={style:{"text-align":"right"},id:"bottomDom"},Se={__name:"secret",setup(Y){const m=S(),e=c({title:"",currentPage:1,pageSizes:50}),n=c({data:[],total:0});let u=S("1");const l=()=>{u.value="1",n.total=0,n.data=[]},w=()=>{l(),m.value.resetFields(),e.currentPage=1,e.pageSizes=50,i()},p=t=>{l(),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,i()};q(()=>{i()});let _=c([]),x=c([{title:"标题",dataIndex:"title",key:"title"},{title:"时间",dataIndex:"time",key:"times"},{title:"操作",width:200,key:"xianmanwang"}]);const i=()=>{W(e).then(t=>{n.data=t.data.data,n.total=t.data.total,u.value="0",_=n.data})},F=t=>{D(t)},g=({page:t,pageSize:s})=>{l(),e.currentPage=t,e.pageSizes=s,i()},d=({current:t,size:s})=>{l(),e.currentPage=t,e.pageSizes=s},O=t=>{l(),e.currentPage=t,i()},B=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},D=t=>{window.open(t,"_blank")};return(t,s)=>{const I=A,f=G,h=H,b=J,V=L,C=j;return z(),k(T,null,[y("div",null,[o(C,{id:"submitDom",model:a(e),ref_key:"formRef",ref:m,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:p},{default:r(()=>[o(V,null,{default:r(()=>[o(h,{span:6},{default:r(()=>[o(f,{label:"标 题",name:"title"},{default:r(()=>[o(I,{value:a(e).title,"onUpdate:value":s[0]||(s[0]=N=>a(e).title=N),onKeydown:U(p,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),o(h,{span:6},{default:r(()=>[o(f,{"wrapper-col":{offset:4,span:20}},{default:r(()=>[o(b,{type:"primary","html-type":"submit"},{default:r(()=>[P("提交")]),_:1}),o(b,{style:{"margin-left":"10px"},onClick:w},{default:r(()=>[P("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),o(v,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:g,onOnsizechange:d},null,8,["total","currentPage","pageSizes"]),a(n).data.length!==0?(z(),k("div",Q,[o(M,{dataSource:a(_),columns:a(x),onOntablecolumnurl:F},null,8,["dataSource","columns"])])):K("",!0),o(R,{state:a(u)},null,8,["state"]),y("div",X,[o(v,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:g,onOnsizechange:d},null,8,["total","currentPage","pageSizes"])]),o($,{total:a(n).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:O},null,8,["total","currentPage","pageSizes"]),o(E,{onOnTo:B})],64)}}};export{Se as default};
