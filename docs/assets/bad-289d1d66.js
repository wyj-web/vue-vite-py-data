/* empty css                *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{k as F,r as h,D as E,U as u,a0 as m,a3 as _,f as t,W as a,u as n,F as S,a1 as O,a6 as H,a7 as R,V,E as r,a2 as d,a8 as L}from"./vue-4ec1f53c.js";import{_ as D,a as M,b as W}from"./repeatpositioner-20125418.js";import{_ as j}from"./repeatcard-3b4e9dad.js";import{_ as G}from"./loading-641ff660.js";import{d as J}from"./api-0902c31c.js";import{F as Q,I as X,n as Y,o as Z,q as ee,s as te,p as ae,B as ne,t as oe}from"./antDesignVue-408c3980.js";import{F as le}from"./FieldTimeOutlined-27141a0b.js";import{S as se}from"./SendOutlined-77b50b9d.js";import{P as ie}from"./PartitionOutlined-bb8ee4ec.js";import"./index-c01679f5.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./axios-4a70c6fc.js";const re={key:0,style:{"column-count":"5","column-gap":"15px"}},ue={style:{margin:"10px 0 10px 10px"}},pe={style:{margin:"10px 0 10px 10px"}},ce={style:{margin:"10px 0 10px 10px"}},_e={style:{"text-align":"right"},id:"bottomDom"},Ne={__name:"bad",setup(me){const k=F(),e=h({title:"",dalei:"",currentPage:1,pageSizes:50}),B=h([{value:"",title:"全部"},{value:"电影",title:"电影"},{value:"电视剧",title:"电视剧"},{value:"动漫",title:"动漫"},{value:"综艺",title:"综艺"},{value:"三级",title:"三级"},{value:"漫画",title:"漫画"},{value:"H动漫",title:"H动漫"},{value:"AV",title:"AV"},{value:"短视频",title:"短视频"},{value:"大陆新闻",title:"大陆新闻"}]),s=h({data:[],total:0});let g=F("1");const p=()=>{g.value="1",s.total=0,s.data=[]},q=()=>{p(),k.value.resetFields(),e.currentPage=1,e.pageSizes=50,c()},x=l=>{p(),e.title=e.title.replace(/\s*/g,""),e.dalei=e.dalei.replace(/\s*/g,""),e.currentPage=1,e.pageSizes=50,c()};E(()=>{c()});const c=()=>{J(e).then(l=>{s.data=l.data.data,s.total=l.data.total,g.value="0"})},z=({page:l,pageSize:i})=>{p(),e.currentPage=l,e.pageSizes=i,c()},P=({current:l,size:i})=>{p(),e.currentPage=l,e.pageSizes=i},C=l=>{p(),e.currentPage=l,c()},I=l=>{switch(l){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}},N=l=>{window.open(l,"_blank")};return(l,i)=>{const T=X,f=Y,v=Z,U=ee,$=te,w=ae,b=ne,K=Q,y=oe;return u(),m(S,null,[_("div",null,[t(K,{id:"submitDom",model:n(e),ref_key:"formRef",ref:k,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:x},{default:a(()=>[t(w,null,{default:a(()=>[t(v,{span:6},{default:a(()=>[t(f,{label:"标 题",name:"title"},{default:a(()=>[t(T,{value:n(e).title,"onUpdate:value":i[0]||(i[0]=o=>n(e).title=o),onKeydown:R(x,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),t(v,{span:18},{default:a(()=>[t(f,{label:"分 类",name:"dalei"},{default:a(()=>[t($,{value:n(e).dalei,"onUpdate:value":i[1]||(i[1]=o=>n(e).dalei=o),"button-style":"solid"},{default:a(()=>[(u(!0),m(S,null,O(n(B),o=>(u(),V(U,{key:o.title,value:o.value},{default:a(()=>[r(d(o.title),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(w,null,{default:a(()=>[t(v,{span:6},{default:a(()=>[t(f,{"wrapper-col":{offset:4,span:20}},{default:a(()=>[t(b,{type:"primary","html-type":"submit"},{default:a(()=>[r("提交")]),_:1}),t(b,{style:{"margin-left":"10px"},onClick:q},{default:a(()=>[r("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),t(D,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:z,onOnsizechange:P},null,8,["total","currentPage","pageSizes"]),n(s).data.length!==0?(u(),m("div",re,[(u(!0),m(S,null,O(n(s).data,(o,A)=>(u(),V(j,{key:A,item:o},L({dalei:a(()=>[_("p",pe,[t(y,{color:"orange"},{icon:a(()=>[t(n(ie))]),default:a(()=>[r(" "+d(o.dalei),1)]),_:2},1024)])]),button:a(()=>[t(b,{type:"dashed",style:{margin:"10px 0 10px 10px"},onClick:de=>N(o.url)},{default:a(()=>[r("跳转详情")]),_:2},1032,["onClick"])]),_:2},[o.time!=="无"?{name:"time",fn:a(()=>[_("p",ue,[t(y,{color:"green"},{icon:a(()=>[t(n(le))]),default:a(()=>[r(" "+d(o.time),1)]),_:2},1024)])]),key:"0"}:void 0,o.diqu!=="无"?{name:"diqu",fn:a(()=>[_("p",ce,[t(y,{color:"blue"},{icon:a(()=>[t(n(se))]),default:a(()=>[r(" "+d(o.diqu),1)]),_:2},1024)])]),key:"1"}:void 0]),1032,["item"]))),128))])):H("",!0),t(G,{state:n(g)},null,8,["state"]),_("div",_e,[t(D,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpagechange:z,onOnsizechange:P},null,8,["total","currentPage","pageSizes"])]),t(M,{total:n(s).total,currentPage:n(e).currentPage,pageSizes:n(e).pageSizes,onOnpageturning:C},null,8,["total","currentPage","pageSizes"]),t(W,{onOnTo:I})],64)}}};export{Ne as default};
