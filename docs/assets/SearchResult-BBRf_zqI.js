import{u as U,f as se,g as te,h as Y,i as le,P as oe,j as ae,k as re,l as b,m as A,n as ue,w as K,p as t,q as ie,R as _,s as ne,v as ce,x as pe,C as ve,y as he,z as de,A as ye,B as me,D as ge,E as fe,F as He,G as $,H as j,I as we,J as Q,K as Re}from"./app-BzNE-3SA.js";const Ee=["/","/posts/about.html","/posts/flows/flows1/F2024001_%E8%AE%A4%E7%9F%A5%E5%9F%BA%E7%A1%80.html","/posts/news/news1/N202405.html","/posts/tools/tools1/artAndCulture.html","/posts/tools/tools1/englishLearning.html","/posts/tools/tools1/entertainmentLeisure.html","/posts/tools/tools1/graphicDesign.html","/posts/tools/tools1/lifeChannel.html","/posts/tools/tools1/literaryKnowledge.html","/posts/tools/tools1/musicVideo.html","/posts/tools/tools1/naturalScience.html","/posts/tools/tools1/news.html","/posts/tools/tools1/onlineOffice.html","/posts/tools/tools1/onlineTools.html","/posts/tools/tools1/philosophicalPsychology.html","/posts/tools/tools1/productOperation.html","/posts/tools/tools1/resourceSearch.html","/posts/tools/tools1/socialSciences.html","/posts/tools/tools1/softwareDevelopment.html","/posts/tools/tools1/technDogital.html","/posts/tools/tools2/TBa_%E5%9B%BE%E4%B9%A6%E8%B5%84%E6%BA%90.html","/posts/tools/tools2/TBb_%E6%9C%AA%E6%95%B4%E7%90%86.html","/posts/tools/tools3/TAa.html","/404.html"],ke="SEARCH_PRO_QUERY_HISTORY",g=U(ke,[]),Ae=()=>{const{queryHistoryCount:l}=Q,o=l>0;return{enabled:o,queryHistory:g,addQueryHistory:a=>{o&&(g.value=Array.from(new Set([a,...g.value.slice(0,l-1)])))},removeQueryHistory:a=>{g.value=[...g.value.slice(0,a),...g.value.slice(a+1)]}}},F=l=>Ee[l.id]+("anchor"in l?`#${l.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=Q,f=U(Qe,[]),Se=()=>{const l=I>0;return{enabled:l,resultHistory:f,addResultHistory:o=>{if(l){const a={link:F(o),display:o.display};"header"in o&&(a.header=o.header),f.value=[a,...f.value.slice(0,I-1)]}},removeResultHistory:o=>{f.value=[...f.value.slice(0,o),...f.value.slice(o+1)]}}},qe=l=>{const o=ve(),a=Y(),S=he(),u=b(0),R=A(()=>u.value>0),d=de([]);return ye(()=>{const{search:y,terminate:q}=me(),H=we(c=>{const w=c.join(" "),{searchFilter:x=h=>h,splitWord:C,suggestionsFilter:T,...m}=o.value;w?(u.value+=1,y(c.join(" "),a.value,m).then(h=>x(h,w,a.value,S.value)).then(h=>{u.value-=1,d.value=h}).catch(h=>{console.warn(h),u.value-=1,u.value||(d.value=[])})):d.value=[]},Q.searchDelay-Q.suggestDelay);K([l,a],([c])=>H(c),{immediate:!0}),ge(()=>{q()})}),{isSearching:R,results:d}};var Ce=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:o}){const a=te(),S=Y(),u=le(oe),{enabled:R,addQueryHistory:d,queryHistory:y,removeQueryHistory:q}=Ae(),{enabled:H,resultHistory:c,addResultHistory:w,removeResultHistory:x}=Se(),C=R||H,T=ae(l,"queries"),{results:m,isSearching:h}=qe(T),r=re({isQuery:!0,index:0}),p=b(0),v=b(0),O=A(()=>C&&(y.value.length>0||c.value.length>0)),D=A(()=>m.value.length>0),L=A(()=>m.value[p.value]||null),M=()=>{const{isQuery:e,index:s}=r;s===0?(r.isQuery=!e,r.index=e?c.value.length-1:y.value.length-1):r.index=s-1},V=()=>{const{isQuery:e,index:s}=r;s===(e?y.value.length-1:c.value.length-1)?(r.isQuery=!e,r.index=0):r.index=s+1},z=()=>{p.value=p.value>0?p.value-1:m.value.length-1,v.value=L.value.contents.length-1},G=()=>{p.value=p.value<m.value.length-1?p.value+1:0,v.value=0},J=()=>{v.value<L.value.contents.length-1?v.value+=1:G()},N=()=>{v.value>0?v.value-=1:z()},B=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[i,k=""]=He(s)?s[S.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",B([i,...n,k])))}return e.display.map(s=>t("div",B(s)))},E=()=>{p.value=0,v.value=0,o("updateQuery",""),o("close")},X=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===s}],onClick:()=>{o("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:i=>{i.preventDefault(),i.stopPropagation(),q(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,s)=>t(_,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===s}],onClick:()=>{E()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(i=>B(i)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:i=>{i.preventDefault(),i.stopPropagation(),x(s)}})]))])):null;return ue("keydown",e=>{if(l.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const s=L.value.contents[v.value];d(l.queries.join(" ")),w(s),a.push(F(s)),E()}}else if(H){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const{index:s}=r;r.isQuery?(o("updateQuery",y.value[s]),e.preventDefault()):(a.push(c.value[s].link),E())}}}}),K([p,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!D.value:!O.value}],id:"search-pro-results"},l.queries.length?h.value?t(ie,{hint:u.value.searching}):D.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},i)=>{const k=p.value===i;return t("li",{class:["search-pro-result-list-item",{active:k}]},[t("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),s.map((n,ee)=>{const P=k&&v.value===ee;return t(_,{to:F(n),class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{d(l.queries.join(" ")),w(n),E()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:pe,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):u.value.emptyResult:C?O.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Ce as default};