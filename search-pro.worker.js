const V=Object.entries,et=Object.fromEntries,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":42,\"nextId\":42,\"documentIds\":{\"0\":\"0\",\"1\":\"2\",\"2\":\"2@0\",\"3\":\"2@1\",\"4\":\"3\",\"5\":\"3@0\",\"6\":\"3@1\",\"7\":\"4\",\"8\":\"4@0\",\"9\":\"4@1\",\"10\":\"5\",\"11\":\"5@0\",\"12\":\"5@1\",\"13\":\"6\",\"14\":\"6@1\",\"15\":\"7\",\"16\":\"7#我想过死都没想过退学\",\"17\":\"7#生命可以轮回-高考只有一次-某学校标语\",\"18\":\"7@0\",\"19\":\"7@1\",\"20\":\"8\",\"21\":\"8@0\",\"22\":\"8@1\",\"23\":\"9\",\"24\":\"9#更新日志\",\"25\":\"9@0\",\"26\":\"9@1\",\"27\":\"10\",\"28\":\"10#可以恢复网页浏览进度的脚本\",\"29\":\"10@0\",\"30\":\"10@1\",\"31\":\"11\",\"32\":\"11@0\",\"33\":\"11@1\",\"34\":\"12\",\"35\":\"12@0\",\"36\":\"12@1\",\"37\":\"13\",\"38\":\"13@0\",\"39\":\"13@1\",\"40\":\"14\",\"41\":\"15\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,68],\"1\":[1,3],\"2\":[null,null,1],\"3\":[null,null,2],\"4\":[1,3],\"5\":[null,null,2],\"6\":[null,null,2],\"7\":[1,5],\"8\":[null,null,1],\"9\":[null,null,1],\"10\":[1,6],\"11\":[null,null,1],\"12\":[null,null,1],\"13\":[1,49],\"14\":[null,null,1],\"15\":[1],\"16\":[2],\"17\":[4],\"18\":[null,null,1],\"19\":[null,null,1],\"20\":[1,24],\"21\":[null,null,1],\"22\":[null,null,2],\"23\":[1],\"24\":[1,45],\"25\":[null,null,1],\"26\":[null,null,1],\"27\":[1],\"28\":[1,3],\"29\":[null,null,1],\"30\":[null,null,2],\"31\":[1,8],\"32\":[null,null,1],\"33\":[null,null,2],\"34\":[1,5],\"35\":[null,null,1],\"36\":[null,null,2],\"37\":[1,37],\"38\":[null,null,1],\"39\":[null,null,2],\"40\":[1,3],\"41\":[1]},\"averageFieldLength\":[1.1581988045412617,24.464597998168447,1.1769944307936222],\"storedFields\":{\"0\":{\"h\":\"关于我\",\"t\":[\"当创建这个网页后，不免愣然。原来，我自己也不知道该如何介绍自己。\",\"简述 在沧州长大的二次元技术宅一枚，今年17岁，高中生，二次元，喜欢研究电子产品（Android/HyperOS/Windows/iOS/Ubuntu/软路由/网络/信息安全/网络安全/vmess/vless/Openwrt/PandoraBox/刷机/重装/酷安/智能手环/智能手表/WinPE/装机和写一些简单的代码），乐于助人 有事找我，爱交朋友，爱cos，Love is Love. ㅤㅤ\",\"开发个人网站的初衷是想在迭代迅速的互联网中拥有属于自己的一隅之地，于当今浮躁的社会中创造一处能让自己慢下来的环境，和开发一些有意义的玩意，以及寻找共鸣，于千万人之中，于时间无涯的荒野里，遇见我所遇见的人。\",\"九型人格：「第六型侧翼五」 MBTI：「INTP-A」 (纯正i人 ㅤㅤ\",\"我玩的Games 原神：189406957\",\"崩坏：星穹铁道：102508169\",\"Phigros rks：12.89（很菜）\",\"光遇\",\"蔚蓝档案 战双帕弥什 明日方舟 崩坏3 主播女孩重度依赖 等\"]},\"1\":{\"h\":\"2025高考倒计时日历表\",\"t\":[\"下载地址\\n访问密码:bx50\"]},\"2\":{\"c\":[\"高考\"]},\"3\":{\"c\":[\"高考\",\"日历\"]},\"4\":{\"h\":\"在线GPT网站收集站\",\"t\":[\"一个收集在线GPT网站的收集站，没有GPT用的时候可以在这里面找在线网站应急\\n网站链接\"]},\"5\":{\"c\":[\"ChatGPT\",\"网站收集\"]},\"6\":{\"c\":[\"人工智能\",\"网站收集\"]},\"7\":{\"h\":\"WZLN云盘\",\"t\":[\"使用Cloudreve和Microsoft 365E5搭建的一家云盘\",\"由于没有服务器，故已关停\",\"链接\"]},\"8\":{\"c\":[\"网站\"]},\"9\":{\"c\":[\"云盘\"]},\"10\":{\"h\":\"在线CHATGPT\",\"t\":[\"我做的一个在线使用CHATGPT的网页 目前Apikey已阵亡，无法直接使用，你可以在其中填入自己的apikey来使用 支持国内环境访问\",\"链接\"]},\"11\":{\"c\":[\"ChatGPT\"]},\"12\":{\"c\":[\"人工智能\"]},\"13\":{\"h\":\"手机膜推荐\",\"t\":[\"我发现我身边的无论是亲戚还是朋友都用着塑料的手机膜对眼非常不好我觉得有必要科普一下： 先上买膜首选排序：品牌钢化膜-钢化膜-塑料膜-水凝膜（防爆膜）-新机膜（自带已经贴上的塑料膜）\",\"首先塑料容易造成划痕，划痕多人眼容易造成散光对眼不好，其次从物理角度来讲塑料的硬度不如玻璃，并且容易让光分散。千万不要贪图小钱贴新机膜，新机膜存在的意义就像买的其他电子产品包装也有塑料膜一样！只是为了防止屏幕刮花，这种膜非常容易刮 还影响屏幕观感！并且伤眼！\",\"另外买钢化膜一定不要选绿光膜、护眼膜、防窥膜、抗蓝光膜 这几种膜都有镀层，影响透光度危害双眼。普通钢化膜要选透光度90%以上的不知道透光度询问卖家，正规卖家都知道。\",\"少数机型存在贴钢化膜手机壳边缘凸起的情况，询问卖家买半包式膜即可，如你的机型无凸起情况就买全包式膜，因为全包式膜抗边缘碎裂比半包式强\",\"##手机膜透光度越高越还原屏幕原始观感并且可以防止眼睛疲劳和近视\",\"买钢化膜首选品牌：蓝猩 闪魔 绿联 品胜 这几个品牌的膜都达到优质标准 蓝猩的贵，但是品质好一点 闪魔的有疏油层可以防止屏幕很油但是透光度没有品胜的好 除了品胜达到了95%其他品牌都是92%！（蓝猩苹果设备有95%的膜）\",\"综合考虑：还是在闪魔的比较综合，价格也不贵\"]},\"14\":{\"c\":[\"手机膜\"]},\"15\":{\"h\":\"摘抄\"},\"16\":{\"h\":\"“我想过死都没想过退学\\\"\"},\"17\":{\"h\":\"“生命可以轮回，高考只有一次” --某学校标语\"},\"18\":{\"c\":[\"文章\"]},\"19\":{\"c\":[\"摘抄\"]},\"20\":{\"h\":\"我的更多网站\",\"t\":[\"www.wzln.link WZLN的个人博客 直达\",\"old.wzln.link 之前的个人主页 直达\",\"gpt.wzln.link GPT收集站 直达\",\"ogpt.wzln.link 在线ChatGPT 直达\",\"pan.wzln.link WZLN云盘 直达\",\"qun.wzln.link 一个二次元交流群进群二维码 直达\",\"aww126.wzln.link 原神启动（ 直达\",\"@wzln.link 邮件 直达\",\"wzwz.mysxl.cn 简易网站导航 直达\",\"wzln.mysxl.cn WZLN-网站临时中转站 直达\"]},\"21\":{\"c\":[\"WZLN\"]},\"22\":{\"c\":[\"网络\",\"软件\"]},\"23\":{\"h\":\"本网站更新日志\"},\"24\":{\"h\":\"更新日志\",\"t\":[\"2024/5/6 给网站上了CDN加速，以后访问没有之前那么慢了\",\"2024/3/23 给网站增加了搜索功能\",\"2024/3/22 给网站增加了评论功能，美化网站，给部分博客加上了图片\",\"2024/3/10 整体重新制作重构，改用Mr.Hope的VuePress Theme Hope模板，原网站我还开着：old.wzln.link\",\"2023/11/4 修改网站内容\",\"2023/n/n 将域名更换为wzln.link\",\"2023/1/26 美化网站\",\"2023/1/26 更换Netlify驱动\",\"2023/1/26 将域名更换为wzln.tk\",\"2022/11/23 敲定内容，正式启动由Gatsby驱动的新网站\",\"2022/11/16 开启新网站，选定模板\",\"2022/11/15 购买新的域名\",\"2022/11/2 修复博客展示问题\",\"2022/11/2 Hello,World!\"]},\"25\":{\"c\":[\"更新日志\"]},\"26\":{\"c\":[\"网站\"]},\"27\":{\"h\":\"油猴脚本\"},\"28\":{\"h\":\"可以恢复网页浏览进度的脚本\",\"t\":[\"让浏览器在打开网站链接后可以自动恢复之前的浏览进度，可适用于电子课本或多媒体教学等应用场景\",\"greasyfork链接\"]},\"29\":{\"c\":[\"脚本\"]},\"30\":{\"c\":[\"Tampermonkey\",\"脚本\"]},\"31\":{\"h\":\"网络测速app\",\"t\":[\"我做的一款适用于安卓系统的网络测速APP，内置SPEEDTEST、测速网、TEST、Cloudflare四家平台的网络测速接口，使用方便接口数量多，可减小不同测速服务器之间对测速结果造成的误差\",\"下载地址\"]},\"32\":{\"c\":[\"安卓APP\"]},\"33\":{\"c\":[\"网络\",\"软件\"]},\"34\":{\"h\":\"在线订阅转换\",\"t\":[\"我使用Cloudflare Workers做的一个国内环境可访问的在线订阅转换网站,支持高达15种不同的客户端之间的订阅链接的转换，支持base64通用格式转换\",\"链接\"]},\"35\":{\"c\":[\"订阅\"]},\"36\":{\"c\":[\"VPN\",\"翻墙\"]},\"37\":{\"h\":\"免费的电子邮件转发服务\",\"t\":[\"免费的电子邮件转发服务，可将别人给你发的电子邮件转发到你的收件箱，也可用于注册账号等，保护原邮箱地址，和 iCloud 的“隐藏电子邮件地址”功能和 mozlla 的“马甲邮箱”功能一样\",\"转发流程：别人发了电子邮件给你申请的用户名（例:test@wzln.link）----wzln.link 服务器收到邮件----转发邮件到你预留的邮箱（例:zxcvbnm4729487028@qq.com）\",\"zxcvbnm4729487028@qq.com 会收到所有给test@wzln.link 发的邮件 我看不到邮件内容\",\"申请方式：给我发邮件 wzln@wzln.link\\n用户名可以申请：任意@wzln.link\\n字符数不限 仅支持中英文和符号\\n如：1.wzln.link、a@wzln.link、kfcvme50@wzln.link、哈哈哈@wzln.link\"]},\"38\":{\"c\":[\"安全\"]},\"39\":{\"c\":[\"邮件转发\",\"隐私\"]},\"40\":{\"h\":\"\",\"t\":[\"404 Not Found\"]},\"41\":{\"h\":\"Posts\"}},\"dirtCount\":0,\"index\":[[\"found\",{\"1\":{\"40\":1}}],[\"隐私\",{\"2\":{\"39\":1}}],[\"隐藏电子邮件地址\",{\"1\":{\"37\":1}}],[\"安全\",{\"2\":{\"38\":1}}],[\"安卓app\",{\"2\":{\"32\":1}}],[\"哈哈哈\",{\"1\":{\"37\":1}}],[\"kfcvme50\",{\"1\":{\"37\":1}}],[\"如\",{\"1\":{\"37\":1}}],[\"如你的机型无凸起情况就买全包式膜\",{\"1\":{\"13\":1}}],[\"仅支持中英文和符号\",{\"1\":{\"37\":1}}],[\"字符数不限\",{\"1\":{\"37\":1}}],[\"任意\",{\"1\":{\"37\":1}}],[\"用户名可以申请\",{\"1\":{\"37\":1}}],[\"申请方式\",{\"1\":{\"37\":1}}],[\"发的邮件\",{\"1\":{\"37\":1}}],[\"会收到所有给test\",{\"1\":{\"37\":1}}],[\"qq\",{\"1\":{\"37\":2}}],[\"qun\",{\"1\":{\"20\":1}}],[\"zxcvbnm4729487028\",{\"1\":{\"37\":2}}],[\"转发邮件到你预留的邮箱\",{\"1\":{\"37\":1}}],[\"转发流程\",{\"1\":{\"37\":1}}],[\"服务器收到邮件\",{\"1\":{\"37\":1}}],[\"例\",{\"1\":{\"37\":2}}],[\"别人发了电子邮件给你申请的用户名\",{\"1\":{\"37\":1}}],[\"功能一样\",{\"1\":{\"37\":1}}],[\"功能和\",{\"1\":{\"37\":1}}],[\"马甲邮箱\",{\"1\":{\"37\":1}}],[\"的\",{\"1\":{\"37\":2}}],[\"的膜\",{\"1\":{\"13\":1}}],[\"和\",{\"1\":{\"37\":1}}],[\"和开发一些有意义的玩意\",{\"1\":{\"0\":1}}],[\"保护原邮箱地址\",{\"1\":{\"37\":1}}],[\"也可用于注册账号等\",{\"1\":{\"37\":1}}],[\"免费的电子邮件转发服务\",{\"0\":{\"37\":1},\"1\":{\"37\":1}}],[\"翻墙\",{\"2\":{\"36\":1}}],[\"订阅\",{\"2\":{\"35\":1}}],[\"支持base64通用格式转换\",{\"1\":{\"34\":1}}],[\"支持高达15种不同的客户端之间的订阅链接的转换\",{\"1\":{\"34\":1}}],[\"支持国内环境访问\",{\"1\":{\"10\":1}}],[\"使用方便接口数量多\",{\"1\":{\"31\":1}}],[\"使用cloudreve和microsoft\",{\"1\":{\"7\":1}}],[\"测速网\",{\"1\":{\"31\":1}}],[\"内置speedtest\",{\"1\":{\"31\":1}}],[\"脚本\",{\"2\":{\"29\":1,\"30\":1}}],[\"greasyfork链接\",{\"1\":{\"28\":1}}],[\"gpt收集站\",{\"1\":{\"20\":1}}],[\"gpt\",{\"1\":{\"20\":1}}],[\"可将别人给你发的电子邮件转发到你的收件箱\",{\"1\":{\"37\":1}}],[\"可减小不同测速服务器之间对测速结果造成的误差\",{\"1\":{\"31\":1}}],[\"可适用于电子课本或多媒体教学等应用场景\",{\"1\":{\"28\":1}}],[\"可以恢复网页浏览进度的脚本\",{\"0\":{\"28\":1}}],[\"让浏览器在打开网站链接后可以自动恢复之前的浏览进度\",{\"1\":{\"28\":1}}],[\"油猴脚本\",{\"0\":{\"27\":1}}],[\"修复博客展示问题\",{\"1\":{\"24\":1}}],[\"修改网站内容\",{\"1\":{\"24\":1}}],[\"购买新的域名\",{\"1\":{\"24\":1}}],[\"选定模板\",{\"1\":{\"24\":1}}],[\"开启新网站\",{\"1\":{\"24\":1}}],[\"开发个人网站的初衷是想在迭代迅速的互联网中拥有属于自己的一隅之地\",{\"1\":{\"0\":1}}],[\"正式启动由gatsby驱动的新网站\",{\"1\":{\"24\":1}}],[\"正规卖家都知道\",{\"1\":{\"13\":1}}],[\"敲定内容\",{\"1\":{\"24\":1}}],[\"test\",{\"1\":{\"31\":1,\"37\":1}}],[\"tampermonkey\",{\"2\":{\"30\":1}}],[\"tk\",{\"1\":{\"24\":1}}],[\"theme\",{\"1\":{\"24\":1}}],[\"更换netlify驱动\",{\"1\":{\"24\":1}}],[\"更新日志\",{\"0\":{\"24\":1},\"2\":{\"25\":1}}],[\"将域名更换为wzln\",{\"1\":{\"24\":2}}],[\"not\",{\"1\":{\"40\":1}}],[\"n\",{\"1\":{\"24\":2}}],[\"404\",{\"1\":{\"40\":1}}],[\"4\",{\"1\":{\"24\":1}}],[\"hello\",{\"1\":{\"24\":1}}],[\"hope模板\",{\"1\":{\"24\":1}}],[\"hope的vuepress\",{\"1\":{\"24\":1}}],[\"hyperos\",{\"1\":{\"0\":1}}],[\"改用mr\",{\"1\":{\"24\":1}}],[\"整体重新制作重构\",{\"1\":{\"24\":1}}],[\"给我发邮件\",{\"1\":{\"37\":1}}],[\"给部分博客加上了图片\",{\"1\":{\"24\":1}}],[\"给网站增加了评论功能\",{\"1\":{\"24\":1}}],[\"给网站增加了搜索功能\",{\"1\":{\"24\":1}}],[\"给网站上了cdn加速\",{\"1\":{\"24\":1}}],[\"美化网站\",{\"1\":{\"24\":2}}],[\"2\",{\"1\":{\"24\":2}}],[\"26\",{\"1\":{\"24\":3}}],[\"22\",{\"1\":{\"24\":1}}],[\"23\",{\"1\":{\"24\":2}}],[\"2022\",{\"1\":{\"24\":5}}],[\"2023\",{\"1\":{\"24\":5}}],[\"2024\",{\"1\":{\"24\":4}}],[\"2025高考倒计时日历表\",{\"0\":{\"1\":1}}],[\"3\",{\"1\":{\"24\":3}}],[\"365e5搭建的一家云盘\",{\"1\":{\"7\":1}}],[\"6\",{\"1\":{\"24\":1}}],[\"5\",{\"1\":{\"24\":1}}],[\"本网站更新日志\",{\"0\":{\"23\":1}}],[\"软件\",{\"2\":{\"22\":1,\"33\":1}}],[\"软路由\",{\"1\":{\"0\":1}}],[\"简易网站导航\",{\"1\":{\"20\":1}}],[\"简述\",{\"1\":{\"0\":1}}],[\"com\",{\"1\":{\"37\":2}}],[\"cloudflare四家平台的网络测速接口\",{\"1\":{\"31\":1}}],[\"cn\",{\"1\":{\"20\":2}}],[\"chatgpt\",{\"2\":{\"5\":1,\"11\":1}}],[\"mozlla\",{\"1\":{\"37\":1}}],[\"mysxl\",{\"1\":{\"20\":2}}],[\"mbti\",{\"1\":{\"0\":1}}],[\"邮件转发\",{\"2\":{\"39\":1}}],[\"邮件\",{\"1\":{\"20\":1}}],[\"一个二次元交流群进群二维码\",{\"1\":{\"20\":1}}],[\"一个收集在线gpt网站的收集站\",{\"1\":{\"4\":1}}],[\"之前的个人主页\",{\"1\":{\"20\":1}}],[\"ogpt\",{\"1\":{\"20\":1}}],[\"old\",{\"1\":{\"20\":1,\"24\":1}}],[\"openwrt\",{\"1\":{\"0\":1}}],[\"直达\",{\"1\":{\"20\":10}}],[\"link\",{\"1\":{\"20\":8,\"24\":2,\"37\":9}}],[\"love\",{\"1\":{\"0\":2}}],[\"文章\",{\"2\":{\"18\":1}}],[\"某学校标语\",{\"0\":{\"17\":1}}],[\"生命可以轮回\",{\"0\":{\"17\":1}}],[\"摘抄\",{\"0\":{\"15\":1},\"2\":{\"19\":1}}],[\"价格也不贵\",{\"1\":{\"13\":1}}],[\"还是在闪魔的比较综合\",{\"1\":{\"13\":1}}],[\"还影响屏幕观感\",{\"1\":{\"13\":1}}],[\"综合考虑\",{\"1\":{\"13\":1}}],[\"其他品牌都是92\",{\"1\":{\"13\":1}}],[\"其次从物理角度来讲塑料的硬度不如玻璃\",{\"1\":{\"13\":1}}],[\"除了品胜达到了95\",{\"1\":{\"13\":1}}],[\"但是品质好一点\",{\"1\":{\"13\":1}}],[\"品胜\",{\"1\":{\"13\":1}}],[\"品牌钢化膜\",{\"1\":{\"13\":1}}],[\"绿联\",{\"1\":{\"13\":1}}],[\"闪魔的有疏油层可以防止屏幕很油但是透光度没有品胜的好\",{\"1\":{\"13\":1}}],[\"闪魔\",{\"1\":{\"13\":1}}],[\"蓝猩苹果设备有95\",{\"1\":{\"13\":1}}],[\"蓝猩的贵\",{\"1\":{\"13\":1}}],[\"蓝猩\",{\"1\":{\"13\":1}}],[\"买钢化膜首选品牌\",{\"1\":{\"13\":1}}],[\"手机膜\",{\"2\":{\"14\":1}}],[\"手机膜透光度越高越还原屏幕原始观感并且可以防止眼睛疲劳和近视\",{\"1\":{\"13\":1}}],[\"手机膜推荐\",{\"0\":{\"13\":1}}],[\"因为全包式膜抗边缘碎裂比半包式强\",{\"1\":{\"13\":1}}],[\"询问卖家买半包式膜即可\",{\"1\":{\"13\":1}}],[\"少数机型存在贴钢化膜手机壳边缘凸起的情况\",{\"1\":{\"13\":1}}],[\"以后访问没有之前那么慢了\",{\"1\":{\"24\":1}}],[\"以上的不知道透光度询问卖家\",{\"1\":{\"13\":1}}],[\"以及寻找共鸣\",{\"1\":{\"0\":1}}],[\"普通钢化膜要选透光度90\",{\"1\":{\"13\":1}}],[\"影响透光度危害双眼\",{\"1\":{\"13\":1}}],[\"这几个品牌的膜都达到优质标准\",{\"1\":{\"13\":1}}],[\"这几种膜都有镀层\",{\"1\":{\"13\":1}}],[\"这种膜非常容易刮\",{\"1\":{\"13\":1}}],[\"抗蓝光膜\",{\"1\":{\"13\":1}}],[\"防窥膜\",{\"1\":{\"13\":1}}],[\"防爆膜\",{\"1\":{\"13\":1}}],[\"护眼膜\",{\"1\":{\"13\":1}}],[\"另外买钢化膜一定不要选绿光膜\",{\"1\":{\"13\":1}}],[\"并且伤眼\",{\"1\":{\"13\":1}}],[\"并且容易让光分散\",{\"1\":{\"13\":1}}],[\"只是为了防止屏幕刮花\",{\"1\":{\"13\":1}}],[\"千万不要贪图小钱贴新机膜\",{\"1\":{\"13\":1}}],[\"划痕多人眼容易造成散光对眼不好\",{\"1\":{\"13\":1}}],[\"首先塑料容易造成划痕\",{\"1\":{\"13\":1}}],[\"自带已经贴上的塑料膜\",{\"1\":{\"13\":1}}],[\"新机膜存在的意义就像买的其他电子产品包装也有塑料膜一样\",{\"1\":{\"13\":1}}],[\"新机膜\",{\"1\":{\"13\":1}}],[\"水凝膜\",{\"1\":{\"13\":1}}],[\"塑料膜\",{\"1\":{\"13\":1}}],[\"钢化膜\",{\"1\":{\"13\":1}}],[\"先上买膜首选排序\",{\"1\":{\"13\":1}}],[\"你可以在其中填入自己的apikey来使用\",{\"1\":{\"10\":1}}],[\"无法直接使用\",{\"1\":{\"10\":1}}],[\"目前apikey已阵亡\",{\"1\":{\"10\":1}}],[\"云盘\",{\"2\":{\"9\":1}}],[\"链接\",{\"1\":{\"7\":1,\"10\":1,\"34\":1}}],[\"故已关停\",{\"1\":{\"7\":1}}],[\"由于没有服务器\",{\"1\":{\"7\":1}}],[\"workers做的一个国内环境可访问的在线订阅转换网站\",{\"1\":{\"34\":1}}],[\"world\",{\"1\":{\"24\":1}}],[\"wzwz\",{\"1\":{\"20\":1}}],[\"wzln的个人博客\",{\"1\":{\"20\":1}}],[\"wzln\",{\"1\":{\"20\":10,\"24\":1,\"37\":10},\"2\":{\"21\":1}}],[\"wzln云盘\",{\"0\":{\"7\":1},\"1\":{\"20\":1}}],[\"www\",{\"1\":{\"20\":1}}],[\"winpe\",{\"1\":{\"0\":1}}],[\"windows\",{\"1\":{\"0\":1}}],[\"人工智能\",{\"2\":{\"6\":1,\"12\":1}}],[\"网站临时中转站\",{\"1\":{\"20\":1}}],[\"网站\",{\"2\":{\"8\":1,\"26\":1}}],[\"网站收集\",{\"2\":{\"5\":1,\"6\":1}}],[\"网站链接\",{\"1\":{\"4\":1}}],[\"网络测速app\",{\"0\":{\"31\":1}}],[\"网络安全\",{\"1\":{\"0\":1}}],[\"网络\",{\"1\":{\"0\":1},\"2\":{\"22\":1,\"33\":1}}],[\"没有gpt用的时候可以在这里面找在线网站应急\",{\"1\":{\"4\":1}}],[\"在线订阅转换\",{\"0\":{\"34\":1}}],[\"在线chatgpt\",{\"0\":{\"10\":1},\"1\":{\"20\":1}}],[\"在线gpt网站收集站\",{\"0\":{\"4\":1}}],[\"在沧州长大的二次元技术宅一枚\",{\"1\":{\"0\":1}}],[\"日历\",{\"2\":{\"3\":1}}],[\"高考只有一次\",{\"0\":{\"17\":1}}],[\"高考\",{\"2\":{\"2\":1,\"3\":1}}],[\"高中生\",{\"1\":{\"0\":1}}],[\"bx50\",{\"1\":{\"1\":1}}],[\"访问密码\",{\"1\":{\"1\":1}}],[\"下载地址\",{\"1\":{\"1\":1,\"31\":1}}],[\"等\",{\"1\":{\"0\":1}}],[\"主播女孩重度依赖\",{\"1\":{\"0\":1}}],[\"明日方舟\",{\"1\":{\"0\":1}}],[\"战双帕弥什\",{\"1\":{\"0\":1}}],[\"蔚蓝档案\",{\"1\":{\"0\":1}}],[\"光遇\",{\"1\":{\"0\":1}}],[\"很菜\",{\"1\":{\"0\":1}}],[\"89\",{\"1\":{\"0\":1}}],[\"rks\",{\"1\":{\"0\":1}}],[\"posts\",{\"0\":{\"41\":1}}],[\"pan\",{\"1\":{\"20\":1}}],[\"pandorabox\",{\"1\":{\"0\":1}}],[\"phigros\",{\"1\":{\"0\":1}}],[\"15\",{\"1\":{\"24\":1}}],[\"16\",{\"1\":{\"24\":1}}],[\"1\",{\"1\":{\"24\":3,\"37\":1}}],[\"11\",{\"1\":{\"24\":6}}],[\"10\",{\"1\":{\"24\":1}}],[\"102508169\",{\"1\":{\"0\":1}}],[\"12\",{\"1\":{\"0\":1}}],[\"189406957\",{\"1\":{\"0\":1}}],[\"星穹铁道\",{\"1\":{\"0\":1}}],[\"崩坏3\",{\"1\":{\"0\":1}}],[\"崩坏\",{\"1\":{\"0\":1}}],[\"原网站我还开着\",{\"1\":{\"24\":1}}],[\"原神启动\",{\"1\":{\"20\":1}}],[\"原神\",{\"1\":{\"0\":1}}],[\"原来\",{\"1\":{\"0\":1}}],[\"我看不到邮件内容\",{\"1\":{\"37\":1}}],[\"我使用cloudflare\",{\"1\":{\"34\":1}}],[\"我做的一款适用于安卓系统的网络测速app\",{\"1\":{\"31\":1}}],[\"我做的一个在线使用chatgpt的网页\",{\"1\":{\"10\":1}}],[\"我的更多网站\",{\"0\":{\"20\":1}}],[\"我想过死都没想过退学\",{\"0\":{\"16\":1}}],[\"我发现我身边的无论是亲戚还是朋友都用着塑料的手机膜对眼非常不好我觉得有必要科普一下\",{\"1\":{\"13\":1}}],[\"我玩的games\",{\"1\":{\"0\":1}}],[\"我自己也不知道该如何介绍自己\",{\"1\":{\"0\":1}}],[\"纯正i人\",{\"1\":{\"0\":1}}],[\"aww126\",{\"1\":{\"20\":1}}],[\"a\",{\"1\":{\"0\":1,\"37\":1}}],[\"android\",{\"1\":{\"0\":1}}],[\"第六型侧翼五\",{\"1\":{\"0\":1}}],[\"九型人格\",{\"1\":{\"0\":1}}],[\"遇见我所遇见的人\",{\"1\":{\"0\":1}}],[\"于时间无涯的荒野里\",{\"1\":{\"0\":1}}],[\"于千万人之中\",{\"1\":{\"0\":1}}],[\"于当今浮躁的社会中创造一处能让自己慢下来的环境\",{\"1\":{\"0\":1}}],[\"ㅤㅤ\",{\"1\":{\"0\":2}}],[\"icloud\",{\"1\":{\"37\":1}}],[\"intp\",{\"1\":{\"0\":1}}],[\"is\",{\"1\":{\"0\":1}}],[\"ios\",{\"1\":{\"0\":1}}],[\"爱cos\",{\"1\":{\"0\":1}}],[\"爱交朋友\",{\"1\":{\"0\":1}}],[\"有事找我\",{\"1\":{\"0\":1}}],[\"乐于助人\",{\"1\":{\"0\":1}}],[\"装机和写一些简单的代码\",{\"1\":{\"0\":1}}],[\"智能手表\",{\"1\":{\"0\":1}}],[\"智能手环\",{\"1\":{\"0\":1}}],[\"酷安\",{\"1\":{\"0\":1}}],[\"重装\",{\"1\":{\"0\":1}}],[\"刷机\",{\"1\":{\"0\":1}}],[\"vpn\",{\"2\":{\"36\":1}}],[\"vless\",{\"1\":{\"0\":1}}],[\"vmess\",{\"1\":{\"0\":1}}],[\"信息安全\",{\"1\":{\"0\":1}}],[\"ubuntu\",{\"1\":{\"0\":1}}],[\"喜欢研究电子产品\",{\"1\":{\"0\":1}}],[\"二次元\",{\"1\":{\"0\":1}}],[\"今年17岁\",{\"1\":{\"0\":1}}],[\"不免愣然\",{\"1\":{\"0\":1}}],[\"当创建这个网页后\",{\"1\":{\"0\":1}}],[\"关于我\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
