/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k,r as P,D as N,U as _,a0 as h,a3 as u,f as t,W as a,u as n,F,a1 as U,a6 as $,a7 as O,E as i,V as q,a2 as y}from"./vue-4ec1f53c.js";import{_ as B,a as R,b as j}from"./repeatpositioner-20125418.js";import{_ as L}from"./repeatcard-3b4e9dad.js";import{_ as M}from"./loading-641ff660.js";import{l as W}from"./api-0902c31c.js";import{F as A,E as G,I as H,n as J,o as Q,B as X,p as Y,t as Z}from"./antDesignVue-408c3980.js";import{F as ee}from"./FieldTimeOutlined-27141a0b.js";import{T as te}from"./TagOutlined-848d9731.js";import"./index-c01679f5.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const ae={key:0,style:{"column-count":"5","column-gap":"15px"}},ne={style:{margin:"10px 0 10px 10px"}},oe={style:{margin:"10px 0 10px 10px"}},se={style:{margin:"10px 0 10px 10px"}},le={style:{"text-align":"right"},id:"bottomDom"},Fe={__name:"beiwotvvideo",setup(re){const x=k(),e=P({title:"",tag:"",currentPage:1,pageSizes:50}),l=P({data:[],total:0});let m=k("1");const p=()=>{m.value="1",l.total=0,l.data=[]},D=()=>{p(),x.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},g=o=>{p(),e.title=e.title.replace(/\s*/g,""),e.tag=e.tag.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};N(()=>{c()});const c=()=>{W(e).then(o=>{l.data=o.data.data,l.total=o.data.total,m.value="0"})},w=({page:o,pageSize:r})=>{p(),e.currentPage=o,e.pageSizes=r,c()},S=({current:o,size:r})=>{p(),e.currentPage=o,e.pageSizes=r},V=o=>{p(),e.currentPage=o,c()},T=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},C=o=>{window.open(o,"_blank")};return(o,r)=>{const z=H,d=J,f=Q,b=X,K=Y,E=A,v=Z;return _(),h(F,null,[u("div",null,[t(E,{id:"submitDom",model:n(e),ref_key:"formRef",ref:x,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:g},{default:a(()=>[t(K,null,{default:a(()=>[t(f,{span:6},{default:a(()=>[t(d,{label:"标 题",name:"title"},{default:a(()=>[t(z,{value:n(e).title,"onUpdate:value":r[0]||(r[0]=s=>n(e).title=s),onKeydown:O(g,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(f,{span:6},{default:a(()=>[t(d,{label:"标 签",name:"tag"},{default:a(()=>[t(z,{value:n(e).tag,"onUpdate:value":r[1]||(r[1]=s=>n(e).tag=s),onKeydown:O(g,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(f,{span:6},{default:a(()=>[t(d,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(b,{type:"primary","html-type":"submit"},{default:a(()=>[i("提交")]),_:1}),t(b,{style:{"margin-left":"10px"},onClick:D},{default:a(()=>[i("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(B,{total:n(l).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:w,onOnsizechange:S},null,8,["total","currentPage","pageSizes"]),n(l).data.length!==0?(_(),h("div",ae,[(_(!0),h(F,null,U(n(l).data,(s,I)=>(_(),q(L,{key:I,item:{...s,bj:s.fengmian}},{time:a(()=>[u("p",ne,[t(v,{color:"green"},{icon:a(()=>[t(n(ee))]),default:a(()=>[i(" "+y(s.time),1)]),_:2},1024)])]),watch:a(()=>[u("p",oe,[t(v,{color:"orange"},{icon:a(()=>[t(n(G))]),default:a(()=>[i(" "+y(s.bofang),1)]),_:2},1024)])]),tag:a(()=>[u("p",se,[t(v,{color:"blue"},{icon:a(()=>[t(n(te))]),default:a(()=>[i(" "+y(s.tag),1)]),_:2},1024)])]),button:a(()=>[t(b,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:ie=>C(s.url)},{default:a(()=>[i("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):$("",!0),t(M,{state:n(m)},null,8,["state"]),u("div",le,[t(B,{total:n(l).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:w,onOnsizechange:S},null,8,["total","currentPage","pageSizes"])]),t(R,{total:n(l).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:V},null,8,["total","currentPage","pageSizes"]),t(j,{onOnTo:T})],64)}}};export{Fe as default};
