import{u as U,f as te,g as se,h as G,i as ae,P as le,t as re,j as ue,k as L,l as R,m as ie,n as Y,p as s,q as oe,R as $,s as ne,v as ce,x as Ee,C as ve,y as pe,z as he,A as ye,B as de,D as Be,E as ge,F as me,G as j,H as I,I as Ae,J as k,K as Ce}from"./app-CPvHWpDe.js";const fe=["/intro.html","/","/posts/2025%E9%AB%98%E8%80%83.html","/posts/friendlink.html","/posts/GPT%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86%E7%AB%99.html","/posts/whatsblog%E4%BA%91%E7%9B%98.html","/posts/WZLN%E4%BA%91%E7%9B%98.html","/posts/%E5%9C%A8%E7%BA%BFChatGPT.html","/posts/%E6%89%8B%E6%9C%BA%E8%86%9C.html","/posts/%E6%91%98%E6%8A%84.html","/posts/%E6%9B%B4%E5%A4%9A%E7%BD%91%E7%AB%99.html","/posts/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.html","/posts/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC.html","/posts/%E7%BD%91%E7%BB%9C%E6%B5%8B%E9%80%9F.html","/posts/%E8%AE%A2%E9%98%85%E8%BD%AC%E6%8D%A2.html","/posts/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91.html","/404.html","/posts/","/category/","/category/%E9%AB%98%E8%80%83/","/category/wzln/","/category/%E5%AE%89%E5%88%A9/","/category/chatgpt/","/category/%E6%96%87%E7%AB%A0/","/category/%E8%84%9A%E6%9C%AC/","/category/%E8%AE%A2%E9%98%85/","/category/%E5%AE%89%E5%85%A8/","/tag/","/tag/%E9%AB%98%E8%80%83/","/tag/%E6%97%A5%E5%8E%86/","/tag/chatgpt/","/tag/%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86/","/tag/%E5%AE%89%E5%88%A9/","/tag/%E4%BA%91%E7%9B%98/","/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/","/tag/%E6%89%8B%E6%9C%BA%E8%86%9C/","/tag/%E6%91%98%E6%8A%84/","/tag/%E7%BD%91%E7%BB%9C/","/tag/%E8%BD%AF%E4%BB%B6/","/tag/tampermonkey/","/tag/%E8%84%9A%E6%9C%AC/","/tag/%E6%B5%8B%E9%80%9F/","/tag/vpn/","/tag/%E7%BF%BB%E5%A2%99/","/tag/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91/","/tag/%E9%9A%90%E7%A7%81/","/article/","/star/","/timeline/"],He="SEARCH_PRO_QUERY_HISTORY",B=U(He,[]),Re=()=>{const{queryHistoryCount:a}=k,l=a>0;return{enabled:l,queryHistory:B,addQueryHistory:r=>{l&&(B.value=Array.from(new Set([r,...B.value.slice(0,a-1)])))},removeQueryHistory:r=>{B.value=[...B.value.slice(0,r),...B.value.slice(r+1)]}}},b=a=>fe[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=k,g=U(ke,[]),De=()=>{const a=_>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,_-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},we=a=>{const l=ve(),r=G(),D=pe(),i=L(0),C=R(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:w}=de(),m=Ae(c=>{const A=c.join(" "),{searchFilter:Q=p=>p,splitWord:q,suggestionsFilter:P,...d}=l.value;A?(i.value+=1,y(c.join(" "),r.value,d).then(p=>Q(p,A,r.value,D.value)).then(p=>{i.value-=1,h.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(h.value=[])})):h.value=[]},k.searchDelay-k.suggestDelay);Y([a,r],([c])=>m(c),{immediate:!0}),Be(()=>{w()})}),{isSearching:C,results:h}};var qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),D=G(),i=ae(le),{enabled:C,addQueryHistory:h,queryHistory:y,removeQueryHistory:w}=Re(),{enabled:m,resultHistory:c,addResultHistory:A,removeResultHistory:Q}=De(),q=C||m,P=re(a,"queries"),{results:d,isSearching:p}=we(P),u=ue({isQuery:!0,index:0}),E=L(0),v=L(0),T=R(()=>q&&(y.value.length>0||c.value.length>0)),x=R(()=>d.value.length>0),F=R(()=>d.value[E.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},M=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{E.value=E.value>0?E.value-1:d.value.length-1,v.value=F.value.contents.length-1},K=()=>{E.value=E.value<d.value.length-1?E.value+1:0,v.value=0},N=()=>{v.value<F.value.contents.length-1?v.value+=1:K()},V=()=>{v.value>0?v.value-=1:J()},S=e=>e.map(t=>Ce(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ge[e.index]||"$content",[o,H=""]=me(t)?t[D.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",S([o,...n,H])))}return e.display.map(t=>s("div",S(t)))},f=()=>{E.value=0,v.value=0,l("updateQuery",""),l("close")},Z=()=>C?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),w(t)}})]))])):null,X=()=>m?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{f()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>S(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(t)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(x.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=F.value.contents[v.value];h(a.queries.join(" ")),A(t),r.push(b(t)),f()}}else if(m){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")M();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),f())}}}}),Y([E,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!x.value:!T.value}],id:"search-pro-results"},a.queries.length?p.value?s(oe,{hint:i.value.searching}):x.value?s("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:t},o)=>{const H=E.value===o;return s("li",{class:["search-pro-result-list-item",{active:H}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const O=H&&v.value===ee;return s($,{to:b(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),A(n),f()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:Ee,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",W(n))])])})])})):i.value.emptyResult:q?T.value?[Z(),X()]:i.value.emptyHistory:i.value.emptyResult)}});export{qe as default};
