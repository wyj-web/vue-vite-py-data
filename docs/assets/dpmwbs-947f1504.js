import"./default-e5d332e7.js";import{F as U,_ as q}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as E}from"./index-8134270f.js";import{I as G}from"./index-da5f4ce2.js";import{r as v,a as p,y as L,x as M,B as z,G as P,L as k,c as a,D as n,E as o,$ as j,K as A,a0 as x,I as O}from"./index-71a5391b.js";import{_ as B,a as H,b as J,c as Q,d as W}from"./repeatpositioner-3854e0ff.js";import{_ as X}from"./loading-c4a3f1f3.js";import{_ as Y}from"./repeattable-4a7fe53a.js";import{a5 as Z}from"./api-47b35210.js";import{x as ee}from"./xiaoshuo-18c1a3cf.js";import"./DialogWrap-9db0e3d6.js";import"./omit-e3ca0eeb.js";import"./LeftOutlined-fcc01204.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-98bb1baa.js";import"./eagerComputed-c651f318.js";import"./index-1729d7ee.js";import"./createForOfIteratorHelper-f2236921.js";import"./index-7f28f9f3.js";import"./index-8ca851ae.js";import"./index-bd4b2240.js";import"./shallowequal-0f2097ab.js";import"./index-67c02b9a.js";import"./index-116a0eec.js";import"./scrollTo-4a3c9ce6.js";import"./index-ee3da9b4.js";import"./index-79080fe8.js";import"./index.esm-e815afff.js";const te={key:0},ae={style:{"text-align":"right"},id:"bottomDom"},Ne={__name:"dpmwbs",setup(oe){const f=v(),e=p({name:"",title:"",currentPage:1,pageSizes:50}),r=p({data:[],total:0});let u=v("1");const l=()=>{u.value="1",r.total=0,r.data=[]},F=()=>{l(),f.value.resetFields(),e.currentPage=1,e.pageSizes=50,i()},c=t=>{l(),e.name=e.name.replace(/\s*/g,""),e.title=e.title.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,i()};L(()=>{e.title=m.dpmwbs_parameter,i()});let b=p([]),I=p([{title:"小说",dataIndex:"title",key:"title"},{title:"分类",dataIndex:"name",key:"name"},{title:"操作",width:220,key:"sisexiaoshuos"}]);const i=()=>{Z(e).then(t=>{r.data=t.data.data,r.total=t.data.total,u.value="0",b=r.data})},D=t=>{C(t)},K=M(),m=ee(),V=t=>{m.title=t.title,m.frompath="/dpmwbs",m.content=t.content,m.dpmwbs_parameter=e.title.replace(/\s*/g,""),K.push("/yuedu")},h=({page:t,pageSize:s})=>{l(),e.currentPage=t,e.pageSizes=s,i()},w=({current:t,size:s})=>{l(),e.currentPage=t,e.pageSizes=s},N=t=>{l(),e.currentPage=t,i()},$=t=>{switch(t){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},C=t=>{window.open(t,"_blank")};return(t,s)=>{const y=G,_=q,d=Q,S=E,R=W,T=U;return z(),P(A,null,[k("div",null,[a(T,{id:"submitDom",model:o(e),ref_key:"formRef",ref:f,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:c},{default:n(()=>[a(R,null,{default:n(()=>[a(d,{span:6},{default:n(()=>[a(_,{label:"分 类",name:"name"},{default:n(()=>[a(y,{value:o(e).name,"onUpdate:value":s[0]||(s[0]=g=>o(e).name=g),onKeydown:x(c,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),a(d,{span:6},{default:n(()=>[a(_,{label:"标 题",name:"title"},{default:n(()=>[a(y,{value:o(e).title,"onUpdate:value":s[1]||(s[1]=g=>o(e).title=g),onKeydown:x(c,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),a(d,{span:6},{default:n(()=>[a(_,{"wrapper-col":{offset:4,span:20}},{default:n(()=>[a(S,{type:"primary","html-type":"submit"},{default:n(()=>[O("提交")]),_:1}),a(S,{style:{"margin-left":"10px"},onClick:F},{default:n(()=>[O("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),a(B,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:h,onOnsizechange:w},null,8,["total","currentPage","pageSizes"]),o(r).data.length!==0?(z(),P("div",te,[a(Y,{dataSource:o(b),columns:o(I),onOntablecolumn:D,onOntableyuedu:V},null,8,["dataSource","columns"])])):j("",!0),a(X,{state:o(u)},null,8,["state"]),k("div",ae,[a(B,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpagechange:h,onOnsizechange:w},null,8,["total","currentPage","pageSizes"])]),a(H,{total:o(r).total,currentPage:o(e).currentPage,pageSizes:o(e).pageSizes,onOnpageturning:N},null,8,["total","currentPage","pageSizes"]),a(J,{onOnTo:$})],64)}}};export{Ne as default};
