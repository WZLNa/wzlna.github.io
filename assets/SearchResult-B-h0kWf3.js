import{u as U,f as te,g as se,h as G,i as ae,P as le,t as re,j as ue,k as L,l as D,m as oe,n as Y,p as s,q as ie,R as $,s as ne,v as ce,x as Ee,C as ve,y as pe,z as he,A as ye,B as Be,D as de,E as Ae,F as me,G as j,H as I,I as ge,J as k,K as Ce}from"./app-CqRVytGI.js";const fe=["/intro.html","/","/posts/2025%E9%AB%98%E8%80%83.html","/posts/Byewhatk.html","/posts/friendlink.html","/posts/GPT%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86%E7%AB%99.html","/posts/whatsblog%E4%BA%91%E7%9B%98.html","/posts/WZLN%E4%BA%91%E7%9B%98.html","/posts/%E5%9C%A8%E7%BA%BFChatGPT.html","/posts/%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E4%BF%AE%E6%94%B9%E7%89%88.html","/posts/%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C%E6%9C%8D%E5%8A%A1%E5%99%A8.html","/posts/%E6%89%8B%E6%9C%BA%E8%86%9C.html","/posts/%E6%91%98%E6%8A%84.html","/posts/%E6%9B%B4%E5%A4%9A%E7%BD%91%E7%AB%99.html","/posts/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.html","/posts/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC.html","/posts/%E7%BD%91%E7%BB%9C%E6%B5%8B%E9%80%9F.html","/posts/%E8%AE%A2%E9%98%85%E8%BD%AC%E6%8D%A2.html","/posts/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91.html","/404.html","/posts/","/category/","/category/%E9%AB%98%E8%80%83/","/category/wzln/","/category/%E5%AE%89%E5%88%A9/","/category/chatgpt/","/category/%E6%96%87%E7%AB%A0/","/category/%E8%84%9A%E6%9C%AC/","/category/%E8%AE%A2%E9%98%85/","/category/%E5%AE%89%E5%85%A8/","/tag/","/tag/%E9%AB%98%E8%80%83/","/tag/%E6%97%A5%E5%8E%86/","/tag/chatgpt/","/tag/%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86/","/tag/%E5%AE%89%E5%88%A9/","/tag/%E4%BA%91%E7%9B%98/","/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/","/tag/%E8%BD%AF%E4%BB%B6/","/tag/%E6%B8%B8%E6%88%8F/","/tag/%E6%9C%8D%E5%8A%A1%E5%99%A8/","/tag/%E6%89%8B%E6%9C%BA%E8%86%9C/","/tag/%E6%91%98%E6%8A%84/","/tag/%E7%BD%91%E7%BB%9C/","/tag/tampermonkey/","/tag/%E8%84%9A%E6%9C%AC/","/tag/%E6%B5%8B%E9%80%9F/","/tag/vpn/","/tag/%E7%BF%BB%E5%A2%99/","/tag/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91/","/tag/%E9%9A%90%E7%A7%81/","/article/","/star/","/timeline/"],He="SEARCH_PRO_QUERY_HISTORY",d=U(He,[]),De=()=>{const{queryHistoryCount:a}=k,l=a>0;return{enabled:l,queryHistory:d,addQueryHistory:r=>{l&&(d.value=Array.from(new Set([r,...d.value.slice(0,a-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},b=a=>fe[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=k,A=U(ke,[]),Re=()=>{const a=_>0;return{enabled:a,resultHistory:A,addResultHistory:l=>{if(a){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),A.value=[r,...A.value.slice(0,_-1)]}},removeResultHistory:l=>{A.value=[...A.value.slice(0,l),...A.value.slice(l+1)]}}},we=a=>{const l=ve(),r=G(),R=pe(),o=L(0),C=D(()=>o.value>0),h=he([]);return ye(()=>{const{search:y,terminate:w}=Be(),m=ge(c=>{const g=c.join(" "),{searchFilter:F=p=>p,splitWord:Q,suggestionsFilter:P,...B}=l.value;g?(o.value+=1,y(c.join(" "),r.value,B).then(p=>F(p,g,r.value,R.value)).then(p=>{o.value-=1,h.value=p}).catch(p=>{console.warn(p),o.value-=1,o.value||(h.value=[])})):h.value=[]},k.searchDelay-k.suggestDelay);Y([a,r],([c])=>m(c),{immediate:!0}),de(()=>{w()})}),{isSearching:C,results:h}};var Qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),R=G(),o=ae(le),{enabled:C,addQueryHistory:h,queryHistory:y,removeQueryHistory:w}=De(),{enabled:m,resultHistory:c,addResultHistory:g,removeResultHistory:F}=Re(),Q=C||m,P=re(a,"queries"),{results:B,isSearching:p}=we(P),u=ue({isQuery:!0,index:0}),E=L(0),v=L(0),T=D(()=>Q&&(y.value.length>0||c.value.length>0)),q=D(()=>B.value.length>0),x=D(()=>B.value[E.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},M=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{E.value=E.value>0?E.value-1:B.value.length-1,v.value=x.value.contents.length-1},K=()=>{E.value=E.value<B.value.length-1?E.value+1:0,v.value=0},N=()=>{v.value<x.value.contents.length-1?v.value+=1:K()},V=()=>{v.value>0?v.value-=1:J()},S=e=>e.map(t=>Ce(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Ae[e.index]||"$content",[i,H=""]=me(t)?t[R.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",S([i,...n,H])))}return e.display.map(t=>s("div",S(t)))},f=()=>{E.value=0,v.value=0,l("updateQuery",""),l("close")},Z=()=>C?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(t)}})]))])):null,X=()=>m?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{f()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(i=>S(i)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),F(t)}})]))])):null;return oe("keydown",e=>{if(a.isFocusing){if(q.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=x.value.contents[v.value];h(a.queries.join(" ")),g(t),r.push(b(t)),f()}}else if(m){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")M();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),f())}}}}),Y([E,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!q.value:!T.value}],id:"search-pro-results"},a.queries.length?p.value?s(ie,{hint:o.value.searching}):q.value?s("ul",{class:"search-pro-result-list"},B.value.map(({title:e,contents:t},i)=>{const H=E.value===i;return s("li",{class:["search-pro-result-list-item",{active:H}]},[s("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),t.map((n,ee)=>{const O=H&&v.value===ee;return s($,{to:b(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),g(n),f()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:Ee,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):o.value.emptyResult:Q?T.value?[Z(),X()]:o.value.emptyHistory:o.value.emptyResult)}});export{Qe as default};
