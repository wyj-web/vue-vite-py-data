import"./default-e5d332e7.js";import{_ as U}from"./index-ee3da9b4.js";import{F as q,_ as L}from"./index-0fb4fca2.js";import"./index-3ade0bc5.js";import{B as M}from"./index-8134270f.js";import{I as G}from"./index-da5f4ce2.js";import{r as P,a as F,y as H,x as J,B as g,G as x,L as p,c as t,D as n,E as a,K as O,H as A,$ as Q,a0 as B,I as i,C as W,J as d}from"./index-71a5391b.js";import{_ as C,a as X,b as Y,c as Z,d as ee}from"./repeatpositioner-3854e0ff.js";import{_ as te}from"./repeatcard-74591095.js";import{_ as ne}from"./loading-c4a3f1f3.js";import{ar as ae}from"./api-47b35210.js";import{m as oe}from"./manhua-98ca1d27.js";import{F as re}from"./FieldTimeOutlined-51f3237f.js";import{E as se}from"./DialogWrap-9db0e3d6.js";import{T as le}from"./TagOutlined-740274e7.js";import"./LeftOutlined-fcc01204.js";import"./omit-e3ca0eeb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ArrowLeftOutlined-83eed4e5.js";import"./index-79080fe8.js";const ie={key:0,style:{"column-count":"5","column-gap":"15px"}},pe={style:{margin:"10px 0 10px 10px"}},ce={style:{margin:"10px 0 10px 10px"}},ue={style:{margin:"10px 0 10px 10px"}},me={style:{width:"100%","margin-bottom":"10px","margin-left":"10px","padding-right":"10px","line-height":"25px"}},_e={style:{"text-align":"right"},id:"bottomDom"},$e={__name:"beiwotvmanhua",setup(ge){const w=P(),e=F({title:"",content:"",currentPage:1,pageSizes:50}),l=F({data:[],total:0});let f=P("1");const c=()=>{f.value="1",l.total=0,l.data=[]},D=()=>{c(),w.value.resetFields(),e.currentPage=1,e.pageSizes=50,u()},h=o=>{c(),e.title=e.title.replace(/\s*/g,""),e.content=e.content.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,u()};H(()=>{e.title=m.beiwotvmanhua_parameter,u()});const u=()=>{ae(e).then(o=>{l.data=o.data.data,l.total=o.data.total,f.value="0"})},k=({page:o,pageSize:r})=>{c(),e.currentPage=o,e.pageSizes=r,u()},S=({current:o,size:r})=>{c(),e.currentPage=o,e.pageSizes=r},T=o=>{c(),e.currentPage=o,u()},K=o=>{switch(o){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},V=J(),m=oe(),$=o=>{m.title=o.title,m.frompath="/beiwotvmanhua",m.content=o.mulu.map(r=>({...r,title:r.url,imagelist:r.imgs})),m.beiwotvmanhua_parameter=e.title,V.push("/manhua")},I=o=>{window.open(o,"_blank")};return(o,r)=>{const z=G,b=L,v=Z,_=M,E=ee,N=q,y=U;return g(),x(O,null,[p("div",null,[t(N,{id:"submitDom",model:a(e),ref_key:"formRef",ref:w,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:h},{default:n(()=>[t(E,null,{default:n(()=>[t(v,{span:6},{default:n(()=>[t(b,{label:"标 题",name:"title"},{default:n(()=>[t(z,{value:a(e).title,"onUpdate:value":r[0]||(r[0]=s=>a(e).title=s),onKeydown:B(h,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(v,{span:6},{default:n(()=>[t(b,{label:"简 介",name:"content"},{default:n(()=>[t(z,{value:a(e).content,"onUpdate:value":r[1]||(r[1]=s=>a(e).content=s),onKeydown:B(h,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(v,{span:6},{default:n(()=>[t(b,{"wrapper-col":{offset:4,span:20}},{default:n(()=>[t(_,{type:"primary","html-type":"submit"},{default:n(()=>[i("提交")]),_:1}),t(_,{style:{"margin-left":"10px"},onClick:D},{default:n(()=>[i("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(C,{total:a(l).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:k,onOnsizechange:S},null,8,["total","currentPage","pageSizes"]),a(l).data.length!==0?(g(),x("div",ie,[(g(!0),x(O,null,A(a(l).data,(s,j)=>(g(),W(te,{key:j,item:{...s,bj:s.fengmian}},{time:n(()=>[p("p",pe,[t(y,{color:"green"},{icon:n(()=>[t(a(re))]),default:n(()=>[i(" "+d(s.time),1)]),_:2},1024)])]),watch:n(()=>[p("p",ce,[t(y,{color:"pink"},{icon:n(()=>[t(a(se))]),default:n(()=>[i(" "+d(s.guankan),1)]),_:2},1024)])]),tag:n(()=>[p("p",ue,[t(y,{color:"purple"},{icon:n(()=>[t(a(le))]),default:n(()=>[i(" "+d(s.tag),1)]),_:2},1024)])]),jianjie:n(()=>[p("div",me," 【简介】"+d(s.content),1)]),button:n(()=>[t(_,{type:"dashed",style:{margin:"0 0 10px 10px"},onClick:R=>$(s)},{default:n(()=>[i("点击阅读 ")]),_:2},1032,["onClick"]),t(_,{type:"dashed",style:{margin:"0 0 10px 10px"},onClick:R=>I(s.url)},{default:n(()=>[i("跳转详情")]),_:2},1032,["onClick"])]),_:2},1032,["item"]))),128))])):Q("",!0),t(ne,{state:a(f)},null,8,["state"]),p("div",_e,[t(C,{total:a(l).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpagechange:k,onOnsizechange:S},null,8,["total","currentPage","pageSizes"])]),t(X,{total:a(l).total,currentPage:a(e).currentPage,pageSizes:a(e).pageSizes,onOnpageturning:T},null,8,["total","currentPage","pageSizes"]),t(Y,{onOnTo:K})],64)}}};export{$e as default};
