/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as z,r as m,D as T,U as P,a0 as y,a3 as k,f as a,W as s,u as t,a6 as U,F as q,a7 as E,E as w}from"./vue-4ec1f53c.js";import{_ as F,a as M,b as R}from"./repeatpositioner-20125418.js";import{_ as W}from"./loading-641ff660.js";import{_ as j}from"./repeattable-05d35867.js";import{_ as A}from"./previewvideo-8440aa41.js";import{v as G}from"./api-0902c31c.js";import{F as H,m as J,I as L,n as Q,o as X,B as Y,p as Z}from"./antDesignVue-408c3980.js";import"./index-c01679f5.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./xijs-4f5d1037.js";import"./axios-4a70c6fc.js";const ee={key:0},te={style:{"text-align":"right"},id:"bottomDom"},we={__name:"videosapi",setup(ae){const _=z(),e=m({name:"",currentPage:1,pageSizes:50}),n=m({data:[],total:0});let u=z("1");const i=()=>{u.value="1",n.total=0,n.data=[]},x=()=>{i(),_.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},g=o=>{i(),e.name=e.name.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};T(()=>{c()});let d=m([]),O=m([{title:"标题",dataIndex:"name",key:"name"},{title:"操作",width:100,key:"action"}]);const c=()=>{G(e).then(o=>{n.data=o.data.data,n.total=o.data.total,u.value="0",d=n.data})},B=o=>{r.state=!0,r.url=o,r.title="播放视频"},r=m({state:!1,title:"",url:""}),D=()=>{r.url=""},f=({page:o,pageSize:l})=>{i(),e.currentPage=o,e.pageSizes=l,c()},b=({current:o,size:l})=>{i(),e.currentPage=o,e.pageSizes=l},V=o=>{i(),e.currentPage=o,c()},I=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}};return(o,l)=>{const C=L,v=Q,h=X,S=Y,N=Z,$=H,K=J;return P(),y(q,null,[k("div",null,[a($,{id:"submitDom",model:t(e),ref_key:"formRef",ref:_,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:g},{default:s(()=>[a(N,null,{default:s(()=>[a(h,{span:6},{default:s(()=>[a(v,{label:"标 题",name:"name"},{default:s(()=>[a(C,{value:t(e).name,"onUpdate:value":l[0]||(l[0]=p=>t(e).name=p),onKeydown:E(g,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),a(h,{span:6},{default:s(()=>[a(v,{"wrapper-col":{offset:4,span:20}},{default:s(()=>[a(S,{type:"primary","html-type":"submit"},{default:s(()=>[w("提交")]),_:1}),a(S,{style:{"margin-left":"10px"},onClick:x},{default:s(()=>[w("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),a(F,{total:t(n).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpagechange:f,onOnsizechange:b},null,8,["total","currentPage","pageSizes"]),t(n).data.length!==0?(P(),y("div",ee,[a(j,{dataSource:t(d),columns:t(O),onOntablecolumn:B},null,8,["dataSource","columns"])])):U("",!0),a(W,{state:t(u)},null,8,["state"]),k("div",te,[a(F,{total:t(n).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpagechange:f,onOnsizechange:b},null,8,["total","currentPage","pageSizes"])]),a(M,{total:t(n).total,currentPage:t(e).currentPage,pageSizes:t(e).pageSizes,onOnpageturning:V},null,8,["total","currentPage","pageSizes"]),a(R,{onOnTo:I}),a(K,{visible:t(r).state,"onUpdate:visible":l[1]||(l[1]=p=>t(r).state=p),footer:null,width:"60%",onCancel:D,title:t(r).title},{default:s(()=>[a(A,{url:t(r).url},null,8,["url"])]),_:1},8,["visible","title"])],64)}}};export{we as default};
