import{u as U,f as X,g as ee,h as G,i as te,j as ae,t as se,k as le,l as L,m as F,n as re,w as j,p as a,q as O,s as _,R as I,v as ue,x as oe,y as ie,z as ne,A as ce,B as ve,C as Ee,D as pe,O as ye,E as he,F as P,G as Be,H as de,P as Ae,I as me}from"./app-BZ-_d4dX.js";const ge=["/intro.html","/","/posts/2025%E9%AB%98%E8%80%83.html","/posts/GPT%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86%E7%AB%99.html","/posts/WZLN%E4%BA%91%E7%9B%98.html","/posts/%E5%9C%A8%E7%BA%BFChatGPT.html","/posts/%E6%89%8B%E6%9C%BA%E8%86%9C.html","/posts/%E6%91%98%E6%8A%84.html","/posts/%E6%9B%B4%E5%A4%9A%E7%BD%91%E7%AB%99.html","/posts/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.html","/posts/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC.html","/posts/%E7%BD%91%E7%BB%9C%E6%B5%8B%E9%80%9F.html","/posts/%E8%AE%A2%E9%98%85%E8%BD%AC%E6%8D%A2.html","/posts/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91.html","/404.html","/posts/","/category/","/category/%E9%AB%98%E8%80%83/","/category/chatgpt/","/category/%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86/","/category/%E7%BD%91%E7%AB%99/","/category/%E6%96%87%E7%AB%A0/","/category/wzln/","/category/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/","/category/%E8%84%9A%E6%9C%AC/","/category/%E5%AE%89%E5%8D%93app/","/category/%E8%AE%A2%E9%98%85/","/category/%E5%AE%89%E5%85%A8/","/tag/","/tag/%E9%AB%98%E8%80%83/","/tag/%E6%97%A5%E5%8E%86/","/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/","/tag/%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86/","/tag/%E4%BA%91%E7%9B%98/","/tag/%E6%89%8B%E6%9C%BA%E8%86%9C/","/tag/%E6%91%98%E6%8A%84/","/tag/%E7%BD%91%E7%BB%9C/","/tag/%E8%BD%AF%E4%BB%B6/","/tag/%E7%BD%91%E7%AB%99/","/tag/tampermonkey/","/tag/%E8%84%9A%E6%9C%AC/","/tag/vpn/","/tag/%E7%BF%BB%E5%A2%99/","/tag/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91/","/tag/%E9%9A%90%E7%A7%81/","/article/","/star/","/timeline/"],Ce="SEARCH_PRO_QUERY_HISTORY",y=U(Ce,[]),fe=()=>{const{queryHistoryCount:s}=P,l=s>0;return{enabled:l,queryHistory:y,addQueryHistory:r=>{l&&(y.value.length<s?y.value=Array.from(new Set([r,...y.value])):y.value=Array.from(new Set([r,...y.value.slice(0,s-1)])))},removeQueryHistory:r=>{y.value=[...y.value.slice(0,r),...y.value.slice(r+1)]}}},b=s=>ge[s.id]+("anchor"in s?`#${s.anchor}`:""),De="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:q}=P,h=U(De,[]),He=()=>{const s=q>0;return{enabled:s,resultHistory:h,addResultHistory:l=>{if(s){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),h.value.length<q?h.value=[r,...h.value]:h.value=[r,...h.value.slice(0,q-1)]}},removeResultHistory:l=>{h.value=[...h.value.slice(0,l),...h.value.slice(l+1)]}}},Re=s=>{const l=ce(),r=G(),k=ve(),o=L(!1),d=Ee([]);return pe(()=>{const{search:C,terminate:B}=ye(),f=()=>{d.value=[],o.value=!1},A=he(E=>{o.value=!0,E?C(E,r.value,l.value).then(p=>{var D,m;return((m=(D=l.value).searchFilter)==null?void 0:m.call(D,p,E,r.value,k.value))??p}).then(p=>{d.value=p,o.value=!1}).catch(p=>{console.error(p),f()}):f()},P.searchDelay);j([s,r],()=>A(s.value),{immediate:!0}),Be(()=>{B()})}),{searching:o,results:d}};var Qe=X({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const r=ee(),k=G(),o=te(ae),{enabled:d,addQueryHistory:C,queryHistory:B,removeQueryHistory:f}=fe(),{enabled:A,resultHistory:E,addResultHistory:p,removeResultHistory:D}=He(),m=d||A,Q=se(s,"query"),{results:g,searching:z}=Re(Q),u=le({isQuery:!0,index:0}),c=L(0),v=L(0),T=F(()=>m&&(B.value.length>0||E.value.length>0)),w=F(()=>g.value.length>0),x=F(()=>g.value[c.value]||null),M=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?E.value.length-1:B.value.length-1):u.index=t-1},Y=()=>{const{isQuery:e,index:t}=u;t===(e?B.value.length-1:E.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},N=()=>{c.value=c.value>0?c.value-1:g.value.length-1,v.value=x.value.contents.length-1},V=()=>{c.value=c.value<g.value.length-1?c.value+1:0,v.value=0},W=()=>{v.value<x.value.contents.length-1?v.value+=1:V()},J=()=>{v.value>0?v.value-=1:N()},S=e=>e.map(t=>de(t)?t:a(t[0],t[1])),K=e=>{if(e.type==="customField"){const t=Ae[e.index]||"$content",[i,R=""]=me(t)?t[k.value].split("$content"):t.split("$content");return e.display.map(n=>a("div",S([i,...n,R])))}return e.display.map(t=>a("div",S(t)))},H=()=>{c.value=0,v.value=0,l("updateQuery",""),l("close")};return re("keydown",e=>{if(s.isFocusing){if(w.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")W();else if(e.key==="Enter"){const t=x.value.contents[v.value];C(s.query),p(t),r.push(b(t)),H()}}else if(A){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",B.value[t]),e.preventDefault()):(r.push(E.value[t].link),H())}}}}),j([c,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:Q.value?!w.value:!T.value}],id:"search-pro-results"},Q.value===""?m?T.value?[d?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},o.value.queryHistory),B.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[a(O,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:i=>{i.preventDefault(),i.stopPropagation(),f(t)}})]))])):null,A?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},o.value.resultHistory),E.value.map((e,t)=>a(I,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{H()}},()=>[a(O,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(i=>S(i)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:i=>{i.preventDefault(),i.stopPropagation(),D(t)}})]))])):null]:o.value.emptyHistory:o.value.emptyResult:z.value?a(ue,{hint:o.value.searching}):w.value?a("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:t},i)=>{const R=c.value===i;return a("li",{class:["search-pro-result-list-item",{active:R}]},[a("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),t.map((n,Z)=>{const $=R&&v.value===Z;return a(I,{to:b(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{C(s.query),p(n),H()}},()=>[n.type==="text"?null:a(n.type==="title"?oe:n.type==="heading"?ie:ne,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",K(n))])])})])})):o.value.emptyResult)}});export{Qe as default};