import{u as U,f as te,g as se,h as G,i as ae,P as le,t as re,j as ue,k as L,l as H,m as ie,w as Y,n as s,p as oe,R as $,q as ne,s as ce,v as Ee,C as ve,x as pe,y as he,z as ye,A as Be,B as de,D as R,E as ge,F as Ae,G as me,H as j,I,J as Ce}from"./app-Bi1oXnYL.js";const fe=["/intro.html","/","/posts/2025%E9%AB%98%E8%80%83.html","/posts/GPT%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86%E7%AB%99.html","/posts/WZLN%E4%BA%91%E7%9B%98.html","/posts/%E5%9C%A8%E7%BA%BFChatGPT.html","/posts/%E6%89%8B%E6%9C%BA%E8%86%9C.html","/posts/%E6%91%98%E6%8A%84.html","/posts/%E6%9B%B4%E5%A4%9A%E7%BD%91%E7%AB%99.html","/posts/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.html","/posts/%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC.html","/posts/%E7%BD%91%E7%BB%9C%E6%B5%8B%E9%80%9F.html","/posts/%E8%AE%A2%E9%98%85%E8%BD%AC%E6%8D%A2.html","/posts/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91.html","/404.html","/posts/","/category/","/category/%E9%AB%98%E8%80%83/","/category/chatgpt/","/category/%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86/","/category/%E7%BD%91%E7%AB%99/","/category/%E6%96%87%E7%AB%A0/","/category/wzln/","/category/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/","/category/%E8%84%9A%E6%9C%AC/","/category/%E5%AE%89%E5%8D%93app/","/category/%E8%AE%A2%E9%98%85/","/category/%E5%AE%89%E5%85%A8/","/tag/","/tag/%E9%AB%98%E8%80%83/","/tag/%E6%97%A5%E5%8E%86/","/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/","/tag/%E7%BD%91%E7%AB%99%E6%94%B6%E9%9B%86/","/tag/%E4%BA%91%E7%9B%98/","/tag/%E6%89%8B%E6%9C%BA%E8%86%9C/","/tag/%E6%91%98%E6%8A%84/","/tag/%E7%BD%91%E7%BB%9C/","/tag/%E8%BD%AF%E4%BB%B6/","/tag/%E7%BD%91%E7%AB%99/","/tag/tampermonkey/","/tag/%E8%84%9A%E6%9C%AC/","/tag/vpn/","/tag/%E7%BF%BB%E5%A2%99/","/tag/%E9%82%AE%E4%BB%B6%E8%BD%AC%E5%8F%91/","/tag/%E9%9A%90%E7%A7%81/","/article/","/star/","/timeline/"],De="SEARCH_PRO_QUERY_HISTORY",d=U(De,[]),He=()=>{const{queryHistoryCount:a}=R,l=a>0;return{enabled:l,queryHistory:d,addQueryHistory:r=>{l&&(d.value=Array.from(new Set([r,...d.value.slice(0,a-1)])))},removeQueryHistory:r=>{d.value=[...d.value.slice(0,r),...d.value.slice(r+1)]}}},P=a=>fe[a.id]+("anchor"in a?`#${a.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=R,g=U(Re,[]),ke=()=>{const a=_>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,_-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},we=a=>{const l=ve(),r=G(),k=pe(),i=L(0),C=H(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:w}=Be(),A=de(c=>{const m=c.join(" "),{searchFilter:Q=p=>p,splitWord:q,suggestionsFilter:b,...B}=l.value;m?(i.value+=1,y(c.join(" "),r.value,B).then(p=>Q(p,m,r.value,k.value)).then(p=>{i.value-=1,h.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(h.value=[])})):h.value=[]},R.searchDelay-R.suggestDelay);Y([a,r],([c])=>A(c),{immediate:!0}),ge(()=>{w()})}),{isSearching:C,results:h}};var qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),k=G(),i=ae(le),{enabled:C,addQueryHistory:h,queryHistory:y,removeQueryHistory:w}=He(),{enabled:A,resultHistory:c,addResultHistory:m,removeResultHistory:Q}=ke(),q=C||A,b=re(a,"queries"),{results:B,isSearching:p}=we(b),u=ue({isQuery:!0,index:0}),E=L(0),v=L(0),T=H(()=>q&&(y.value.length>0||c.value.length>0)),x=H(()=>B.value.length>0),F=H(()=>B.value[E.value]||null),z=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=t-1},M=()=>{const{isQuery:e,index:t}=u;t===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{E.value=E.value>0?E.value-1:B.value.length-1,v.value=F.value.contents.length-1},N=()=>{E.value=E.value<B.value.length-1?E.value+1:0,v.value=0},V=()=>{v.value<F.value.contents.length-1?v.value+=1:N()},W=()=>{v.value>0?v.value-=1:J()},S=e=>e.map(t=>Ce(t)?t:s(t[0],t[1])),Z=e=>{if(e.type==="customField"){const t=Ae[e.index]||"$content",[o,D=""]=me(t)?t[k.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",S([o,...n,D])))}return e.display.map(t=>s("div",S(t)))},f=()=>{E.value=0,v.value=0,l("updateQuery",""),l("close")},K=()=>C?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),w(t)}})]))])):null,X=()=>A?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{f()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>S(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(t)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(x.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=F.value.contents[v.value];h(a.queries.join(" ")),m(t),r.push(P(t)),f()}}else if(A){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")M();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",y.value[t]),e.preventDefault()):(r.push(c.value[t].link),f())}}}}),Y([E,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!x.value:!T.value}],id:"search-pro-results"},a.queries.length?p.value?s(oe,{hint:i.value.searching}):x.value?s("ul",{class:"search-pro-result-list"},B.value.map(({title:e,contents:t},o)=>{const D=E.value===o;return s("li",{class:["search-pro-result-list-item",{active:D}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const O=D&&v.value===ee;return s($,{to:P(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),m(n),f()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:Ee,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",Z(n))])])})])})):i.value.emptyResult:q?T.value?[K(),X()]:i.value.emptyHistory:i.value.emptyResult)}});export{qe as default};