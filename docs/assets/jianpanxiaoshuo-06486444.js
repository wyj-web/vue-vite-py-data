import"./default-e5d332e7.js";import{F as U,_ as $}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as C}from"./index-8134270f.js";import{I as T}from"./index-da5f4ce2.js";import{r as w,a as _,y as q,B as z,G as k,L as P,c as t,D as n,E as a,$ as E,K as R,a0 as f,I as x}from"./index-71a5391b.js";import{_ as I,a as G,b as L,c as M,d as A}from"./repeatpositioner-3854e0ff.js";import{_ as H}from"./loading-c4a3f1f3.js";import{_ as J}from"./repeattable-4a7fe53a.js";import{a4 as Q}from"./api-47b35210.js";import"./DialogWrap-9db0e3d6.js";import"./omit-e3ca0eeb.js";import"./LeftOutlined-fcc01204.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-98bb1baa.js";import"./eagerComputed-c651f318.js";import"./index-1729d7ee.js";import"./createForOfIteratorHelper-f2236921.js";import"./index-7f28f9f3.js";import"./index-8ca851ae.js";import"./index-bd4b2240.js";import"./shallowequal-0f2097ab.js";import"./index-67c02b9a.js";import"./index-116a0eec.js";import"./scrollTo-4a3c9ce6.js";import"./index-ee3da9b4.js";import"./index-79080fe8.js";import"./index.esm-e815afff.js";const W={key:0},X={style:{"text-align":"right"},id:"bottomDom"},Ke={__name:"jianpanxiaoshuo",setup(Y){const h=w(),e=_({dalei:"",name:"",author:"",currentPage:1,pageSizes:50}),l=_({data:[],total:0});let d=w("1");const s=()=>{d.value="1",l.total=0,l.data=[]},K=()=>{s(),h.value.resetFields(),e.currentPage=1,e.pageSizes=50,i()},m=o=>{s(),e.dalei=e.dalei.replace(/\s*/g,""),e.name=e.name.replace(/\s*/g,""),e.author=e.author.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,i()};q(()=>{i()});let b=_([]),B=_([{title:"小说",dataIndex:"name",key:"name"},{title:"分类",dataIndex:"dalei",key:"dalei"},{title:"作者",dataIndex:"author",key:"author"},{title:"操作",width:320,key:"jianpanxiaoshuo"}]);const i=()=>{Q(e).then(o=>{l.data=o.data.data,l.total=o.data.total,d.value="0",b=l.data})},F=o=>{V(o)},v=({page:o,pageSize:r})=>{s(),e.currentPage=o,e.pageSizes=r,i()},y=({current:o,size:r})=>{s(),e.currentPage=o,e.pageSizes=r},O=o=>{s(),e.currentPage=o,i()},D=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},V=o=>{window.open(o,"_blank")};return(o,r)=>{const g=T,p=$,c=M,S=C,j=A,N=U;return z(),k(R,null,[P("div",null,[t(N,{id:"submitDom",model:a(e),ref_key:"formRef",ref:h,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:m},{default:n(()=>[t(j,null,{default:n(()=>[t(c,{span:6},{default:n(()=>[t(p,{label:"分 类",name:"dalei"},{default:n(()=>[t(g,{value:a(e).dalei,"onUpdate:value":r[0]||(r[0]=u=>a(e).dalei=u),onKeydown:f(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(c,{span:6},{default:n(()=>[t(p,{label:"标 题",name:"name"},{default:n(()=>[t(g,{value:a(e).name,"onUpdate:value":r[1]||(r[1]=u=>a(e).name=u),onKeydown:f(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(c,{span:6},{default:n(()=>[t(p,{label:"作 者",name:"author"},{default:n(()=>[t(g,{value:a(e).author,"onUpdate:value":r[2]||(r[2]=u=>a(e).author=u),onKeydown:f(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(c,{span:6},{default:n(()=>[t(p,{"wrapper-col":{offset:4,span:20}},{default:n(()=>[t(S,{type:"primary","html-type":"submit"},{default:n(()=>[x("提交")]),_:1}),t(S,{style:{"margin-left":"10px"},onClick:K},{default:n(()=>[x("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(I,{total:a(l).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:v,onOnsizechange:y},null,8,["total","currentPage","pageSizes"]),a(l).data.length!==0?(z(),k("div",W,[t(J,{dataSource:a(b),columns:a(B),onOntablecolumnurl:F},null,8,["dataSource","columns"])])):E("",!0),t(H,{state:a(d)},null,8,["state"]),P("div",X,[t(I,{total:a(l).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:v,onOnsizechange:y},null,8,["total","currentPage","pageSizes"])]),t(G,{total:a(l).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:O},null,8,["total","currentPage","pageSizes"]),t(L,{onOnTo:D})],64)}}};export{Ke as default};
