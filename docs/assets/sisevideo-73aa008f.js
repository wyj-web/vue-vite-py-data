/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k,r as P,D as U,U as p,a0 as v,a3 as b,f as t,W as a,u as n,F as w,a1 as $,a6 as T,a7 as x,E as u,V as q,a2 as E}from"./vue-4ec1f53c.js";import{_ as B,a as R,b as j}from"./repeatpositioner-20125418.js";import{_ as L}from"./repeatcard-3b4e9dad.js";import{_ as M}from"./loading-641ff660.js";import{s as W}from"./api-0902c31c.js";import{F as A,u as G,I as H,n as J,o as Q,B as X,p as Y,t as Z}from"./antDesignVue-408c3980.js";import"./index-c01679f5.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const ee={key:0,style:{"column-count":"5","column-gap":"15px"}},te={style:{margin:"10px 0 10px 10px"}},ne={style:{"text-align":"right"},id:"bottomDom"},Se={__name:"sisevideo",setup(ae){const h=k(),e=P({title:"",fenlei:"",currentPage:1,pageSizes:50}),s=P({data:[],total:0});let _=k("1");const i=()=>{_.value="1",s.total=0,s.data=[]},F=()=>{i(),h.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},m=o=>{i(),e.title=e.title.replace(/\s*/g,""),e.fenlei=e.fenlei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};U(()=>{c()});const c=()=>{W(e).then(o=>{s.data=o.data.data,s.total=o.data.total,_.value="0"})},y=({page:o,pageSize:l})=>{i(),e.currentPage=o,e.pageSizes=l,c()},S=({current:o,size:l})=>{i(),e.currentPage=o,e.pageSizes=l},D=o=>{i(),e.currentPage=o,c()},O=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},V=o=>{window.open(o,"_blank")};return(o,l)=>{const z=H,g=J,d=Q,f=X,C=Y,K=A,I=Z;return p(),v(w,null,[b("div",null,[t(K,{id:"submitDom",model:n(e),ref_key:"formRef",ref:h,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:m},{default:a(()=>[t(C,null,{default:a(()=>[t(d,{span:6},{default:a(()=>[t(g,{label:"标 题",name:"title"},{default:a(()=>[t(z,{value:n(e).title,"onUpdate:value":l[0]||(l[0]=r=>n(e).title=r),onKeydown:x(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:a(()=>[t(g,{label:"分 类",name:"fenlei"},{default:a(()=>[t(z,{value:n(e).fenlei,"onUpdate:value":l[1]||(l[1]=r=>n(e).fenlei=r),onKeydown:x(m,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(d,{span:6},{default:a(()=>[t(g,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(f,{type:"primary","html-type":"submit"},{default:a(()=>[u("提交")]),_:1}),t(f,{style:{"margin-left":"10px"},onClick:F},{default:a(()=>[u("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(B,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:y,onOnsizechange:S},null,8,["total","currentPage","pageSizes"]),n(s).data.length!==0?(p(),v("div",ee,[(p(!0),v(w,null,$(n(s).data,(r,N)=>(p(),q(L,{key:N,item:{...r,bj:r.fengmian}},{dalei:a(()=>[b("p",te,[t(I,{color:"green"},{icon:a(()=>[t(n(G))]),default:a(()=>[u(" "+E(r.fenlei),1)]),_:2},1024)])]),button:a(()=>[t(f,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:oe=>V(r.url)},{default:a(()=>[u("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):T("",!0),t(M,{state:n(_)},null,8,["state"]),b("div",ne,[t(B,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:y,onOnsizechange:S},null,8,["total","currentPage","pageSizes"])]),t(R,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:D},null,8,["total","currentPage","pageSizes"]),t(j,{onOnTo:O})],64)}}};export{Se as default};
