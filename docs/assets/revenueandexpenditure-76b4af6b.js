/* empty css                *//* empty css              *//* empty css              *//* empty css              */import{_ as pe,a as me,b as de}from"./repeatpositioner-20125418.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{r as f,k,D as _e,U as p,a0 as x,a3 as w,f as e,W as t,u as a,V as y,a6 as z,F as P,a1 as L,E as u,a2 as W,a7 as q}from"./vue-4ec1f53c.js";import{aP as ce,aT as fe,aU as ye,aV as ge,aW as ve}from"./api-0902c31c.js";/* empty css              */import{B as be,F as ke,z as xe,m as we,N as B,q as Se,s as ze,n as Pe,o as Ce,J as Ue,I as he,p as De,y as Ie,t as Fe,P as qe}from"./antDesignVue-408c3980.js";import"./index-c01679f5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./axios-4a70c6fc.js";const Be="/vue-vite-py-data/assets/账单-bf89c9df.png",Oe={style:{"margin-bottom":"10px"}},Ve={style:{"margin-top":"10px"}},Ye={style:{"text-align":"right","margin-top":"10px"},id:"bottomDom"},lt={__name:"revenueandexpenditure",setup(Ke){let C=f([]),A=f([{title:"ICO",dataIndex:"ico",key:"ico"},{title:"类型(收入/支出)",dataIndex:"type",key:"type"},{title:"账单时间",dataIndex:"time",key:"time"},{title:"储蓄卡",dataIndex:"position",key:"position"},{title:"金额(￥)",dataIndex:"money",key:"money"},{title:"消费名目",dataIndex:"title",key:"title"},{title:"备注",dataIndex:"notes",key:"notes"},{title:"操作",width:220,key:"debitcard"}]),m=f({state:!1,title:""}),U=k(!0),O=f([]),h=f([]);_e(()=>{d(),J()});let s=f({type:"",time:"",position:"",title:"",currentPage:1,pageSizes:50}),g=k(0),D=k(!0);const J=async()=>{D.value=!1;let l=await ce();O=l.data,h=l.data,h.unshift({name:"全部"}),D.value=!0},d=async()=>{U.value=!1;let l=await fe(s);g.value=l.data.total,C=l.data.data.map(n=>({...n,ico:Be})),U.value=!0},j=l=>{i.type=l.type,i.time=l.time,i.position=l.position,i.money=l.money,i.title=l.title,i.notes=l.notes,i._id=l._id,m.title="编辑账单",m.state=!0},G=async l=>{let n=await ye({_id:l});B.success(n.msg),d()},H=()=>{i.type="支出",i.time="",i.position="工商银行",i.money="",i.title="",i.notes="",i._id="",m.title="创建账单",m.state=!0},Q=()=>{},i=f({type:"支出",time:"",position:"工商银行",money:"",title:"",notes:"",_id:""}),X=async l=>{if(l.money=l.money*1,m.title==="创建账单"){let n=await ge(l);B.success(n.msg)}else if(m.title==="编辑账单"){let n=await ve({_id:i._id,parameter:l});B.success(n.msg)}K(),m.state=!1,m.title="",d()},V=k(),Y=k(),K=()=>{V.value.resetFields()},Z=()=>{Y.value.resetFields(),d()},I=()=>{g.value=0,C=[]},M=({page:l,pageSize:n})=>{I(),s.currentPage=l,s.pageSizes=n,d()},R=({current:l,size:n})=>{I(),s.currentPage=l,s.pageSizes=n},ee=l=>{I(),s.currentPage=l,d()},te=l=>{switch(l){case 1:document.querySelector("#bottomDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break;case 2:document.querySelector("#submitDom").scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});break}};return(l,n)=>{const c=Se,S=ze,r=Pe,v=Ce,N=Ue,F=he,_=be,ae=De,T=ke,$=pe,ne=Ie,E=Fe,oe=xe,le=me,ie=de,se=qe,ue=we;return p(),x("div",null,[w("div",null,[e(T,{id:"submitDom",model:a(s),ref_key:"formRefinit",ref:Y,name:"basicinit","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:d},{default:t(()=>[e(ae,null,{default:t(()=>[e(v,{span:24},{default:t(()=>[e(r,{label:"储蓄卡",name:"position","label-col":{span:1},"wrapper-col":{span:23}},{default:t(()=>[a(D)?(p(),y(S,{key:0,value:a(s).position,"onUpdate:value":n[0]||(n[0]=o=>a(s).position=o),"button-style":"solid"},{default:t(()=>[(p(!0),x(P,null,L(a(h),o=>(p(),y(c,{style:{margin:"0 10px 10px 0"},key:o.name,value:o.name==="全部"?"":o.name},{default:t(()=>[u(W(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])):z("",!0)]),_:1})]),_:1}),e(v,{span:6},{default:t(()=>[e(r,{label:"时 间",name:"time"},{default:t(()=>[e(N,{value:a(s).time,"onUpdate:value":n[1]||(n[1]=o=>a(s).time=o),"value-format":"YYYY-MM-DD",onKeydown:q(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),e(v,{span:6},{default:t(()=>[e(r,{label:"类 型",name:"type"},{default:t(()=>[e(S,{value:a(s).type,"onUpdate:value":n[2]||(n[2]=o=>a(s).type=o),"button-style":"solid",onKeydown:q(d,["enter","native"])},{default:t(()=>[e(c,{value:""},{default:t(()=>[u("全部")]),_:1}),e(c,{value:"收入"},{default:t(()=>[u("收入")]),_:1}),e(c,{value:"支出"},{default:t(()=>[u("支出")]),_:1})]),_:1},8,["value","onKeydown"])]),_:1})]),_:1}),e(v,{span:6},{default:t(()=>[e(r,{label:"名 目",name:"title"},{default:t(()=>[e(F,{value:a(s).title,"onUpdate:value":n[3]||(n[3]=o=>a(s).title=o),placeholder:"请输入名目",onKeydown:q(d,["enter","native"])},null,8,["value","onKeydown"])]),_:1})]),_:1}),e(v,{span:6},{default:t(()=>[e(r,{"wrapper-col":{offset:4,span:20}},{default:t(()=>[e(_,{type:"primary","html-type":"submit"},{default:t(()=>[u("提交")]),_:1}),e(_,{style:{"margin-left":"10px"},onClick:Z},{default:t(()=>[u("重置")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),w("div",Oe,[e(_,{type:"primary",onClick:H},{default:t(()=>[u("创建账单")]),_:1}),e(_,{type:"primary",style:{"margin-left":"10px"}},{default:t(()=>[u("工资收入汇总")]),_:1}),e(_,{type:"primary",style:{"margin-left":"10px"}},{default:t(()=>[u("月支出汇总")]),_:1}),e(_,{type:"primary",style:{"margin-left":"10px"}},{default:t(()=>[u("卡余额汇总")]),_:1})]),e($,{total:a(g),currentPage:a(s).currentPage,pageSizes:a(s).pageSizes,onOnpagechange:M,onOnsizechange:R},null,8,["total","currentPage","pageSizes"]),w("div",Ve,[a(U)?(p(),y(oe,{key:0,dataSource:a(C),columns:a(A),pagination:!1},{bodyCell:t(({column:o,record:b,index:Me})=>[o.key==="ico"?(p(),y(ne,{key:0,width:100,preview:!1,src:b.ico},null,8,["src"])):o.key==="type"?(p(),x(P,{key:1},[b.type==="收入"?(p(),y(E,{key:0,color:"green"},{default:t(()=>[u("收入")]),_:1})):b.type==="支出"?(p(),y(E,{key:1,color:"red"},{default:t(()=>[u("支出")]),_:1})):z("",!0)],64)):o.key==="debitcard"?(p(),x(P,{key:2},[e(_,{type:"dashed",onClick:re=>j(b)},{default:t(()=>[u("修改")]),_:2},1032,["onClick"]),e(_,{type:"dashed",danger:"",onClick:re=>G(b._id),style:{"margin-left":"10px"}},{default:t(()=>[u("删除")]),_:2},1032,["onClick"])],64)):z("",!0)]),_:1},8,["dataSource","columns"])):z("",!0)]),w("div",Ye,[e($,{total:a(g),currentPage:a(s).currentPage,pageSizes:a(s).pageSizes,onOnpagechange:M,onOnsizechange:R},null,8,["total","currentPage","pageSizes"])]),e(le,{total:a(g),currentPage:a(s).currentPage,pageSizes:a(s).pageSizes,onOnpageturning:ee},null,8,["total","currentPage","pageSizes"]),e(ie,{onOnTo:te}),e(ue,{visible:a(m).state,"onUpdate:visible":n[10]||(n[10]=o=>a(m).state=o),footer:null,width:"30%",maskClosable:!1,destroyOnClose:!0,onCancel:Q,title:a(m).title},{default:t(()=>[w("div",null,[e(T,{ref_key:"formRef",ref:V,model:a(i),name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:X},{default:t(()=>[e(r,{label:"类型",name:"type"},{default:t(()=>[e(S,{value:a(i).type,"onUpdate:value":n[4]||(n[4]=o=>a(i).type=o),"button-style":"solid"},{default:t(()=>[e(c,{value:"收入"},{default:t(()=>[u("收入")]),_:1}),e(c,{value:"支出"},{default:t(()=>[u("支出")]),_:1})]),_:1},8,["value"])]),_:1}),e(r,{label:"时间",name:"time",rules:[{required:!0,message:"请选择时间!"}]},{default:t(()=>[e(N,{value:a(i).time,"onUpdate:value":n[5]||(n[5]=o=>a(i).time=o),"value-format":"YYYY-MM-DD"},null,8,["value"])]),_:1}),e(r,{label:"储蓄卡",name:"position",rules:[{required:!0,message:"请选择储蓄卡!"}]},{default:t(()=>[e(S,{value:a(i).position,"onUpdate:value":n[6]||(n[6]=o=>a(i).position=o),"button-style":"solid"},{default:t(()=>[(p(!0),x(P,null,L(a(O),o=>(p(),y(c,{key:o.name,style:{"margin-left":"5px","margin-bottom":"5px"},value:o.name},{default:t(()=>[u(W(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),e(r,{label:"金额",name:"money",rules:[{required:!0,message:"请输入金额!"}]},{default:t(()=>[e(F,{value:a(i).money,"onUpdate:value":n[7]||(n[7]=o=>a(i).money=o),placeholder:"请输入金额","allow-clear":"",suffix:"￥"},null,8,["value"])]),_:1}),e(r,{label:"名目",name:"title",rules:[{required:!0,message:"请输入名目!"}]},{default:t(()=>[e(F,{value:a(i).title,"onUpdate:value":n[8]||(n[8]=o=>a(i).title=o),placeholder:"请输入名目","allow-clear":""},null,8,["value"])]),_:1}),e(r,{label:"备注",name:"notes"},{default:t(()=>[e(se,{value:a(i).notes,"onUpdate:value":n[9]||(n[9]=o=>a(i).notes=o),placeholder:"请输入备注","allow-clear":"","auto-size":{minRows:3,maxRows:5},"show-count":"",maxlength:100},null,8,["value"])]),_:1}),e(r,{"wrapper-col":{offset:15,span:9}},{default:t(()=>[e(_,{onClick:K},{default:t(()=>[u("重置")]),_:1}),e(_,{style:{"margin-left":"10px"},type:"primary","html-type":"submit"},{default:t(()=>[u("提交")]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1},8,["visible","title"])])}}};export{lt as default};
