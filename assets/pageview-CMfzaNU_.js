function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a5 as r}from"./app-DUZmGDiU.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-comment.vuejs.press"};const n=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-DUZmGDiU.js").then(t=>t.a6),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{n as updatePageview};
